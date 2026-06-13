# Asset Trainer — Support Website

A static support site for **Asset Trainer**, the local-only multi-asset
portfolio training simulator for iPhone and iPad. It provides a help hub,
an FAQ, privacy details, and a direct support contact, plus hosted copies
of the Privacy Policy and Terms of Use.

**Support contact:** [goatintegral@gmail.com](mailto:goatintegral@gmail.com)

## What's inside

| File | Purpose |
|---|---|
| `index.html` | Main support page — hero, features, privacy, FAQ, contact |
| `i18n.js` | Index-page translations + language switcher (no dependencies) |
| `privacy.html` · `privacy.<locale>.html` | Privacy Policy, one file per language |
| `terms.html` · `terms.<locale>.html` | Terms of Use, one file per language |
| `styles.css` | All styling (light + dark theme, language switcher) |
| `script.js` | Theme toggle, FAQ accordion, scroll reveals (no dependencies) |
| `build_legal.py` | Regenerates the localized legal pages from the app's docs |
| `app-icon.png` · `icon-256.png` · `apple-touch-icon.png` | The app's real icon (favicon, logo, home-screen) |
| `404.html` | Friendly not-found page |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

No build step is required to deploy, no frameworks, no tracking. Fonts load
from Google Fonts; everything else is self-contained.

## Languages

The site ships in the same six locales as the iOS app:

`en` · `es` · `zh-Hans` · `zh-Hant` (台灣) · `zh-Hant-HK` (香港) · `zh-Hant-MO` (澳門)

- **Index page** — a globe switcher in the header swaps all copy in place
  (`i18n.js`); the choice is remembered in `localStorage`. On first visit it
  follows the browser's language. English is also baked into the HTML, so the
  page is fully readable even if JavaScript is off.
- **Legal pages** — each language is its own static file (e.g.
  `privacy.zh-Hant-HK.html`), so the legal text is present without JavaScript.
  The switcher on those pages navigates between the localized files.

The legal text is taken **verbatim** from the app's own generated legal
documents; only the contact section is rewritten to point at the support
email.

## Deploy to GitHub Pages

1. **Create a repository** and push these files to the default branch:
   ```sh
   git init
   git add .
   git commit -m "Asset Trainer support site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   choose branch **`main`** and folder **`/ (root)`**, then **Save**.
4. After a minute your site is live at
   `https://<you>.github.io/<repo>/`.

> Tip: name the repo `<you>.github.io` to serve the site at the root domain
> `https://<you>.github.io/` instead of a subpath.

### Custom domain (optional)

Add a file named `CNAME` containing your domain (e.g. `support.assettrainer.app`),
then set the domain under **Settings → Pages → Custom domain** and point a
`CNAME` DNS record at `<you>.github.io`.

## Use as the App Store Support URL

Once live, paste the page URL into **App Store Connect → your app →
App Information → Support URL** (and optionally the Privacy Policy URL,
using `…/privacy.html`).

## Local preview

Just open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing

- **Contact email** — search for `goatintegral@gmail.com` (it lives in
  `index.html`, `i18n.js`, and the legal pages).
- **Index copy** — edit the English in `index.html` (the no-JS fallback) and
  the matching keys in `i18n.js` for the other languages.
- **Legal text** mirrors the app's own generated documents. When those
  change, drop the updated markdown into the app repo's `docs/legal/` and
  re-run the generator rather than hand-editing the HTML:

  ```sh
  python3 build_legal.py
  ```

  It reads `../multi-asset-simulator-mobile-ios/docs/legal/*.md` (override the
  path with the `LEGAL_SRC` environment variable) and regenerates all twelve
  `privacy.*.html` / `terms.*.html` files. `build_legal.py` is a maintenance
  tool only — it is not needed to deploy or serve the site.
