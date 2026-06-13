#!/usr/bin/env python3
"""Generate localized legal pages (privacy/terms) for the Asset Trainer
support site from the app's authoritative translated markdown.

Source:  ../multi-asset-simulator-mobile-ios/docs/legal/*.md  (overridable)
Output:  privacy.html, privacy.<locale>.html, terms.html, terms.<locale>.html

Run:     python3 build_legal.py
The legal text is used verbatim; only the contact section is rewritten to
point at the support email, and localized site chrome is added.
"""
import os, re, html, sys

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.environ.get(
    "LEGAL_SRC",
    os.path.join(HERE, "..", "multi-asset-simulator-mobile-ios", "docs", "legal"),
)
# Fallback to the absolute Desktop path if the relative one is missing.
if not os.path.isdir(SRC):
    SRC = os.path.expanduser(
        "~/Desktop/multi-asset-simulator-mobile-ios/docs/legal"
    )

EMAIL = "goatintegral@gmail.com"

# locale -> file suffix ("" = English at root) and html lang attribute
LOCALES = ["en", "es", "zh-Hans", "zh-Hant", "zh-Hant-HK", "zh-Hant-MO"]
SUFFIX = {l: ("" if l == "en" else "." + l) for l in LOCALES}

NATIVE = {
    "en": "English", "es": "Español", "zh-Hans": "简体中文",
    "zh-Hant": "繁體中文（台灣）", "zh-Hant-HK": "繁體中文（香港）",
    "zh-Hant-MO": "繁體中文（澳門）",
}

# Per-locale site chrome and rewritten contact text.
L = {
    "en": dict(
        back="Back to support", faq="FAQ", contact="Contact", support="Support",
        privacy="Privacy", terms="Terms",
        privacy_note="<strong>The short version:</strong> your portfolio data stays on your device, and the developer collects nothing.",
        terms_note="<strong>Asset Trainer is a training tool only.</strong> It is not a brokerage, provides no financial advice, and cannot place real orders.",
        privacy_contact='Questions about this policy can be sent to the developer at <a href="mailto:{e}?subject=Asset%20Trainer%20Privacy">{e}</a>.',
        terms_contact='Questions? Email <a href="mailto:{e}?subject=Asset%20Trainer%20Terms">{e}</a>.',
        copyright="© <span id=\"year\">2026</span> Asset Trainer. All data stays on your device.",
    ),
    "es": dict(
        back="Volver al soporte", faq="Preguntas", contact="Contacto", support="Soporte",
        privacy="Privacidad", terms="Términos",
        privacy_note="<strong>En resumen:</strong> los datos de su cartera permanecen en su dispositivo y el desarrollador no recopila nada.",
        terms_note="<strong>Asset Trainer es solo una herramienta de entrenamiento.</strong> No es una correduría, no ofrece asesoramiento financiero y no puede ejecutar órdenes reales.",
        privacy_contact='Las preguntas sobre esta política pueden enviarse al desarrollador a <a href="mailto:{e}?subject=Asset%20Trainer%20Privacy">{e}</a>.',
        terms_contact='¿Preguntas? Escriba a <a href="mailto:{e}?subject=Asset%20Trainer%20Terms">{e}</a>.',
        copyright="© <span id=\"year\">2026</span> Asset Trainer. Todos los datos permanecen en su dispositivo.",
    ),
    "zh-Hans": dict(
        back="返回支持", faq="常见问题", contact="联系", support="支持",
        privacy="隐私政策", terms="使用条款",
        privacy_note="<strong>简而言之：</strong>您的组合数据保存在您的设备上，开发者不收集任何数据。",
        terms_note="<strong>Asset Trainer 仅是一款训练工具。</strong>它不是券商，不提供任何投资建议，也无法下达真实订单。",
        privacy_contact='有关本政策的问题，可发送至开发者邮箱 <a href="mailto:{e}?subject=Asset%20Trainer%20Privacy">{e}</a>。',
        terms_contact='有疑问？请发送电邮至 <a href="mailto:{e}?subject=Asset%20Trainer%20Terms">{e}</a>。',
        copyright="© <span id=\"year\">2026</span> Asset Trainer. 所有数据都保存在您的设备上。",
    ),
    "zh-Hant": dict(
        back="返回支援", faq="常見問題", contact="聯絡", support="支援",
        privacy="隱私政策", terms="使用條款",
        privacy_note="<strong>簡而言之：</strong>您的組合數據儲存在您的設備上，開發者不收集任何數據。",
        terms_note="<strong>Asset Trainer 僅是一款訓練工具。</strong>它不是券商，不提供任何投資建議，也無法下達真實訂單。",
        privacy_contact='有關本政策的問題，可發送至開發者電郵 <a href="mailto:{e}?subject=Asset%20Trainer%20Privacy">{e}</a>。',
        terms_contact='有疑問？請發送電郵至 <a href="mailto:{e}?subject=Asset%20Trainer%20Terms">{e}</a>。',
        copyright="© <span id=\"year\">2026</span> Asset Trainer. 所有數據都儲存在您的設備上。",
    ),
}
# Hong Kong / Macau: same as TW Traditional but "私隱" for privacy.
def _hk(base):
    d = dict(base)
    d["privacy"] = "私隱政策"
    return d
L["zh-Hant-HK"] = _hk(L["zh-Hant"])
L["zh-Hant-MO"] = _hk(L["zh-Hant"])


def parse(md):
    title = updated = None
    sections = []
    cur = None
    for raw in md.split("\n"):
        s = raw.rstrip()
        if s.startswith("# "):
            title = s[2:].strip()
        elif s.startswith("## "):
            if cur:
                sections.append(cur)
            cur = {"head": s[3:].strip(), "paras": []}
        elif s.startswith("_") and s.endswith("_") and len(s) > 2:
            updated = s.strip("_").strip()
        elif s.strip() == "":
            continue
        elif cur is not None:
            cur["paras"].append(s.strip())
    if cur:
        sections.append(cur)
    return title, updated, sections


def doc_name(title):
    # "Asset Trainer — Privacy Policy" -> "Privacy Policy"
    return re.split(r"\s[—–-]\s", title, maxsplit=1)[-1].strip()


def is_caps(text):
    letters = [c for c in text if c.isalpha() and ord(c) < 128]
    if len(letters) < 30:
        return False
    upper = sum(1 for c in letters if c.isupper())
    return upper / len(letters) > 0.6


def render_section(sec, locale, doc, total):
    m = re.match(r"^(\d+)\.\s*(.*)$", sec["head"])
    if m:
        num, head = m.group(1), m.group(2)
        head_html = f'<span class="num">{html.escape(num)}.</span> {html.escape(head)}'
        n = int(num)
    else:
        head_html = html.escape(sec["head"])
        n = -1

    paras = sec["paras"]
    # Rewrite the privacy "Contact" section (last numbered section) to use email.
    if doc == "privacy" and n == total:
        body = L[locale]["privacy_contact"].format(e=EMAIL)
        return f"      <h2>{head_html}</h2>\n      <p>{body}</p>"

    out = [f"      <h2>{head_html}</h2>"]
    for p in paras:
        cls = ' class="caps"' if is_caps(p) else ""
        out.append(f"      <p{cls}>{html.escape(p)}</p>")
    return "\n".join(out)


def lang_options(doc, current):
    opts = []
    for loc in LOCALES:
        href = f"{doc}{SUFFIX[loc]}.html"
        sel = " selected" if loc == current else ""
        opts.append(f'<option value="{href}" data-loc="{loc}"{sel}>{NATIVE[loc]}</option>')
    return "\n        ".join(opts)


BRAND_SVG = ('<img class="brand-mark" src="icon-256.png" width="34" height="34" '
             'alt="Asset Trainer icon" />')

MOON = ('<svg class="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" '
        'stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>')
SUN = ('<svg class="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" '
       'stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.2"/>'
       '<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>')

PAGE = """<!DOCTYPE html>
<html lang="{lang}" dir="ltr" data-theme="light">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>{doc_name} — Asset Trainer</title>
<meta name="description" content="{doc_name} — Asset Trainer, a local-only iOS portfolio training simulator." />
<meta name="color-scheme" content="light dark" />
<link rel="icon" type="image/png" href="icon-256.png" />
<link rel="apple-touch-icon" href="apple-touch-icon.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..600;1,9..144,400..560&family=Hanken+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="styles.css" />
</head>
<body>

<header class="site-header">
  <div class="wrap">
    <a class="brand" href="index.html{anchor_home}" aria-label="Asset Trainer">
      {brand}
      <span class="name"><b>Asset</b> Trainer</span>
    </a>
    <nav class="nav" aria-label="Primary">
      <a class="navlink" href="index.html#faq">{faq}</a>
      <a class="navlink" href="{other_href}">{other_label}</a>
      <a class="navlink" href="index.html#contact">{contact}</a>
      <span class="lang">
        <select class="lang-select" aria-label="Language" onchange="if(this.value){{try{{localStorage.setItem('at-lang',this.options[this.selectedIndex].dataset.loc||'')}}catch(e){{}};location.href=this.value}}">
        {options}
        </select>
      </span>
      <button class="theme-toggle" id="themeToggle" type="button" aria-label="Toggle dark mode">
        {moon}
        {sun}
      </button>
    </nav>
  </div>
</header>

<main class="legal">
  <div class="wrap">
    <a class="legal-back" href="index.html">← {back}</a>
    <h1>{doc_name}</h1>
    <div class="updated">{updated}</div>

    <div class="legal-note">{note}</div>

    <div class="doc">
{sections}
{extra}
    </div>
  </div>
</main>

<footer class="site-footer">
  <div class="wrap">
    <div class="footer-bottom" style="border:0;margin:0;padding:0;">
      <span>{copyright}</span>
      <span class="footer-langs"><a href="{other_href}" style="color:inherit">{other_label}</a> · <a href="index.html#contact" style="color:inherit">{support}</a></span>
    </div>
  </div>
</footer>

<script src="script.js"></script>
</body>
</html>
"""


def build(doc, src_prefix):
    for loc in LOCALES:
        path = os.path.join(SRC, f"{src_prefix}-{loc}.md")
        with open(path, encoding="utf-8") as f:
            md = f.read()
        title, updated, sections = parse(md)
        total = sum(1 for s in sections if re.match(r"^\d+\.", s["head"]))
        body = "\n\n".join(
            render_section(s, loc, doc, total) for s in sections
        )
        extra = ""
        if doc == "terms":
            extra = ('\n      <p class="legal-langs">'
                     + L[loc]["terms_contact"].format(e=EMAIL) + "</p>")

        other = "terms" if doc == "privacy" else "privacy"
        other_href = f"{other}{SUFFIX[loc]}.html"
        other_label = L[loc][other]
        note = L[loc]["privacy_note" if doc == "privacy" else "terms_note"]

        opts = lang_options(doc, loc)

        page = PAGE.format(
            lang=loc, anchor_home="", brand=BRAND_SVG, moon=MOON, sun=SUN,
            faq=L[loc]["faq"], contact=L[loc]["contact"], support=L[loc]["support"],
            back=L[loc]["back"], doc_name=doc_name(title), updated=html.escape(updated or ""),
            note=note, sections=body, extra=extra,
            other_href=other_href, other_label=other_label,
            options=opts, copyright=L[loc]["copyright"],
        )
        out = os.path.join(HERE, f"{doc}{SUFFIX[loc]}.html")
        with open(out, "w", encoding="utf-8") as f:
            f.write(page)
        print("wrote", os.path.basename(out))


if __name__ == "__main__":
    if not os.path.isdir(SRC):
        sys.exit(f"legal source not found: {SRC}")
    build("privacy", "privacy-policy")
    build("terms", "terms-of-use")
    print("done")
