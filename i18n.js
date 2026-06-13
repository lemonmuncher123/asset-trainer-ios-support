/* Asset Trainer support site — index page localization.
   Six locales, matching the iOS app: en · es · zh-Hans · zh-Hant ·
   zh-Hant-HK · zh-Hant-MO. English also lives in the HTML as a no-JS
   fallback. Legal pages are separate per-locale files. */
(function () {
  "use strict";

  var I18N = {
    "en": {
      "nav.features": "Features", "nav.privacy": "Privacy", "nav.faq": "FAQ", "nav.contact": "Contact",
      "hero.eyebrow": "iOS · iPhone & iPad · Support",
      "hero.h1": "Practice portfolio thinking. <em>Keep your data yours.</em>",
      "hero.lede": "Asset Trainer is a local-only multi-asset training simulator — stocks, ETFs, crypto, real estate, cash, and debt. This is the help & support hub: answers, privacy details, and a direct line to the developer.",
      "hero.contact": "Contact support", "hero.faq": "Browse the FAQ",
      "hero.note": "No account, no cloud, no analytics — your portfolio never leaves the device.",
      "device.net": "Net worth · simulated", "device.chg": "▲ 2.4%  ·  +$3,480 this month",
      "device.equities": "Equities", "device.property": "Property", "device.crypto": "Crypto", "device.cash": "Cash",
      "device.obs": "This portfolio is concentrated in equities. Observation only — not advice.",
      "ticker.1": "A training simulator — not a trading platform", "ticker.2": "Not a price predictor",
      "ticker.3": "Not a recommendation engine", "ticker.4": "Not a real-money trading bot", "ticker.5": "Not financial advice",
      "feat.kicker": "What the app does", "feat.h2": "A full portfolio, derived from one honest ledger.",
      "feat.p": "Every position, balance, and report is computed from the transactions you record — nothing is guessed for you.",
      "feat.1.t": "Transactions as truth", "feat.1.p": "Thirteen transaction types feed positions, cost basis, cash, net worth, allocation, and risk — all derived, never hand-set.",
      "feat.2.t": "Real estate & debt", "feat.2.p": "Model properties, rent, expenses, and mortgages with amortization schedules, payoff planning, and equity tracking.",
      "feat.3.t": "Risk as observation", "feat.3.p": "Concentration, leverage, liquidity, and low-cash warnings are phrased as observations about your data — never as advice.",
      "feat.4.t": "Reports & journal", "feat.4.p": "Monthly, quarterly, semi-annual, and annual reports generated on device — exportable as TXT or XLSX — plus a decision journal.",
      "feat.5.t": "Resilient market data", "feat.5.p": "Read-only prices with automatic failover — Yahoo, Tencent, Eastmoney, Sina, Coinbase, OKX, optional Alpaca — working even on mainland-China networks.",
      "feat.6.t": "Six languages", "feat.6.p": "English, Español, 简体中文, and 繁體中文 for 台灣 · 香港 · 澳門 — switchable in the app.",
      "priv.kicker": "Private by design", "priv.h2": "The developer collects nothing.",
      "priv.p": "There is no account system, no server, and no analytics. Everything you enter lives in a local database on your device.",
      "priv.c1.t": "Bytes of portfolio data sent", "priv.c1.p": "Your transactions, balances, and notes never leave the device.",
      "priv.c2.t": "Only ticker symbols travel", "priv.c2.p": "To fetch prices, the app sends just symbols like “AAPL” or “BTC” to market-data providers.",
      "priv.c3.t": "No ads or trackers", "priv.c3.p": "No advertising identifier, no third-party analytics SDKs, no fingerprinting.",
      "priv.c4.t": "You hold the off switch", "priv.c4.p": "Clear all data or delete the app to remove everything — there is no copy to ask anyone to delete.",
      "faq.kicker": "Help & answers", "faq.h2": "Frequently asked questions",
      "faq.q1": "Where is my data stored, and is it backed up to a cloud?",
      "faq.a1": "Everything you enter is stored in a local SQLite database inside the app on your device. There is no cloud sync and no developer server. Backups exist only if you create them yourself — through your own device backups or by using the in-app export to a zip/CSV file. You are in full control of those copies.",
      "faq.q2": "Can Asset Trainer place real trades or connect to my brokerage?",
      "faq.a2": "No. The app can reach third-party endpoints only to retrieve read-only market prices. It cannot place, route, or execute real orders, and it never connects to trade. It is a training simulator, not a brokerage.",
      "faq.q3": "Is anything in the app financial advice?",
      "faq.a3": "No. Risk warnings, reports, scores, charts, trade previews, and journal prompts are all descriptive observations about the data you entered — never recommendations to buy, sell, or hold. Always do your own research and consider a licensed professional before any real-world decision.",
      "faq.q4": "Which market-data sources does it use, and what gets sent?",
      "faq.a4": "Prices come from public sources with an ordered failover chain — Yahoo Finance, Tencent, Eastmoney, and Sina for stocks; Coinbase, OKX, and Sina for crypto — plus an optional Alpaca key for real-time US quotes. Only the ticker symbols of the assets you track are ever transmitted. The chain is designed to keep working even where some sources are unreachable, including mainland-China networks.",
      "faq.q5": "How do I export or back up my data?",
      "faq.a5": "Open <strong>More ▸ Import/Export</strong>. You can create a full-data zip backup, export CSV, and export reports as TXT or XLSX. The database is also visible to the Files app. Keep these backups somewhere safe — since the developer holds no copy, they are your only recovery path.",
      "faq.q6": "How do I delete my data?",
      "faq.a6": "You can delete individual assets and their history under <strong>Settings ▸ Data Management</strong>, erase everything with “Clear All Data…”, or simply delete the app, which removes the local database entirely. Because nothing is stored off-device, there is nothing left elsewhere to remove.",
      "faq.q7": "What asset and transaction types are supported?",
      "faq.a7": "Asset types: stocks, ETFs, crypto, real estate, cash, debt, and custom. Transactions include deposits and withdrawals, buys and sells, property events (add, revalue, rent, expense, mortgage, sale), debt events (add, pay), and manual adjustments — thirteen types in total.",
      "faq.q8": "What languages does the app support?",
      "faq.a8": "English, Español, 简体中文 (Simplified Chinese), and 繁體中文 (Traditional Chinese) for Taiwan, Hong Kong, and Macau. Report documents stay in English by design; the live interface is fully localized.",
      "faq.q9": "I found a bug or have a feature request. What should I do?",
      "faq.a9": "Email <a href=\"mailto:goatintegral@gmail.com?subject=Asset%20Trainer%20bug%20report\">goatintegral@gmail.com</a> with your device model, iOS version, the app version, and clear steps to reproduce. Screenshots help. Please don’t include any sensitive personal information.",
      "contact.kicker": "Get in touch", "contact.h2": "Still need a hand?",
      "contact.p1": "Support is handled directly by the developer. Email is the fastest way to reach a human — most messages get a reply within a few days.",
      "contact.p2": "To help us help you quickly, please include:",
      "contact.t1": "Your device (e.g. iPhone 15 Pro) and iOS version", "contact.t2": "The Asset Trainer version number",
      "contact.t3": "What you expected, and what happened instead", "contact.t4": "Steps to reproduce, and a screenshot if relevant",
      "contact.maillabel": "Support email", "contact.btn": "Write to support",
      "footer.tagline": "A local-only multi-asset portfolio training simulator for iPhone and iPad. Not a brokerage, not financial advice, and it cannot place real orders.",
      "footer.support": "Support", "footer.faq": "FAQ", "footer.features": "Features", "footer.email": "Email support",
      "footer.legal": "Legal", "footer.privacy": "Privacy Policy", "footer.terms": "Terms of Use",
      "footer.copyright": "© {year} Asset Trainer. All data stays on your device."
    },

    "es": {
      "nav.features": "Funciones", "nav.privacy": "Privacidad", "nav.faq": "Preguntas", "nav.contact": "Contacto",
      "hero.eyebrow": "iOS · iPhone y iPad · Soporte",
      "hero.h1": "Practique su visión de carteras. <em>Sus datos son suyos.</em>",
      "hero.lede": "Asset Trainer es un simulador de entrenamiento multiactivo que funciona solo localmente — acciones, ETF, cripto, inmuebles, efectivo y deuda. Este es el centro de ayuda y soporte: respuestas, detalles de privacidad y una línea directa con el desarrollador.",
      "hero.contact": "Contactar soporte", "hero.faq": "Ver preguntas frecuentes",
      "hero.note": "Sin cuenta, sin nube, sin analítica — su cartera nunca sale del dispositivo.",
      "device.net": "Patrimonio · simulado", "device.chg": "▲ 2,4 %  ·  +3.480 $ este mes",
      "device.equities": "Acciones", "device.property": "Inmuebles", "device.crypto": "Cripto", "device.cash": "Efectivo",
      "device.obs": "Esta cartera está concentrada en acciones. Solo una observación — no es un consejo.",
      "ticker.1": "Un simulador de entrenamiento — no una plataforma de trading", "ticker.2": "No predice precios",
      "ticker.3": "No es un motor de recomendaciones", "ticker.4": "No es un bot de trading con dinero real", "ticker.5": "No es asesoramiento financiero",
      "feat.kicker": "Qué hace la app", "feat.h2": "Una cartera completa, derivada de un único libro mayor honesto.",
      "feat.p": "Cada posición, saldo e informe se calcula a partir de las transacciones que registra — nada se supone por usted.",
      "feat.1.t": "Las transacciones son la verdad", "feat.1.p": "Trece tipos de transacción alimentan posiciones, coste base, efectivo, patrimonio, asignación y riesgo — todo derivado, nunca fijado a mano.",
      "feat.2.t": "Inmuebles y deuda", "feat.2.p": "Modele propiedades, alquileres, gastos e hipotecas con cuadros de amortización, planificación de pagos y seguimiento del patrimonio neto.",
      "feat.3.t": "El riesgo como observación", "feat.3.p": "Las advertencias de concentración, apalancamiento, liquidez y bajo efectivo se expresan como observaciones sobre sus datos — nunca como consejos.",
      "feat.4.t": "Informes y diario", "feat.4.p": "Informes mensuales, trimestrales, semestrales y anuales generados en el dispositivo — exportables como TXT o XLSX — más un diario de decisiones.",
      "feat.5.t": "Datos de mercado resilientes", "feat.5.p": "Precios de solo lectura con conmutación automática — Yahoo, Tencent, Eastmoney, Sina, Coinbase, OKX, Alpaca opcional — que funcionan incluso en redes de China continental.",
      "feat.6.t": "Seis idiomas", "feat.6.p": "Inglés, Español, 简体中文 y 繁體中文 para 台灣 · 香港 · 澳門 — conmutables en la app.",
      "priv.kicker": "Privacidad por diseño", "priv.h2": "El desarrollador no recopila nada.",
      "priv.p": "No hay sistema de cuentas, ni servidor, ni analítica. Todo lo que introduce vive en una base de datos local en su dispositivo.",
      "priv.c1.t": "Bytes de datos de cartera enviados", "priv.c1.p": "Sus transacciones, saldos y notas nunca salen del dispositivo.",
      "priv.c2.t": "Solo viajan los símbolos", "priv.c2.p": "Para obtener precios, la app envía solo símbolos como «AAPL» o «BTC» a los proveedores de datos.",
      "priv.c3.t": "Sin anuncios ni rastreadores", "priv.c3.p": "Sin identificador de publicidad, sin analítica de terceros, sin huellas digitales.",
      "priv.c4.t": "Usted tiene el interruptor", "priv.c4.p": "Borre todos los datos o elimine la app para quitarlo todo — no hay copia que nadie pueda conservar.",
      "faq.kicker": "Ayuda y respuestas", "faq.h2": "Preguntas frecuentes",
      "faq.q1": "¿Dónde se guardan mis datos? ¿Se respaldan en la nube?",
      "faq.a1": "Todo lo que introduce se guarda en una base de datos SQLite local dentro de la app en su dispositivo. No hay sincronización en la nube ni servidor del desarrollador. Las copias de seguridad existen solo si usted las crea — mediante las copias de su dispositivo o la exportación a un archivo zip/CSV. Usted controla por completo esas copias.",
      "faq.q2": "¿Puede Asset Trainer ejecutar operaciones reales o conectarse a mi correduría?",
      "faq.a2": "No. La app solo puede acceder a fuentes de terceros para obtener precios de solo lectura. No puede colocar, enrutar ni ejecutar órdenes reales, y nunca se conecta para operar. Es un simulador de entrenamiento, no una correduría.",
      "faq.q3": "¿Algo en la app es asesoramiento financiero?",
      "faq.a3": "No. Las advertencias de riesgo, los informes, las puntuaciones, los gráficos, las vistas previas y los avisos del diario son observaciones descriptivas sobre los datos que introdujo — nunca recomendaciones de comprar, vender o mantener. Investigue siempre por su cuenta y considere a un profesional con licencia antes de cualquier decisión real.",
      "faq.q4": "¿Qué fuentes de datos de mercado usa y qué se envía?",
      "faq.a4": "Los precios proceden de fuentes públicas con una cadena de conmutación ordenada — Yahoo Finance, Tencent, Eastmoney y Sina para acciones; Coinbase, OKX y Sina para cripto — más una clave Alpaca opcional para cotizaciones de EE. UU. en tiempo real. Solo se transmiten los símbolos de los activos que sigue. La cadena está diseñada para seguir funcionando donde algunas fuentes no son accesibles, incluidas las redes de China continental.",
      "faq.q5": "¿Cómo exporto o respaldo mis datos?",
      "faq.a5": "Abra <strong>Más ▸ Importar/Exportar</strong>. Puede crear una copia de seguridad zip completa, exportar CSV y exportar informes como TXT o XLSX. La base de datos también es visible para la app Archivos. Guarde estas copias en lugar seguro — como el desarrollador no tiene ninguna copia, son su única vía de recuperación.",
      "faq.q6": "¿Cómo elimino mis datos?",
      "faq.a6": "Puede eliminar activos individuales y su historial en <strong>Ajustes ▸ Gestión de datos</strong>, borrarlo todo con «Borrar todos los datos…», o simplemente eliminar la app, lo que quita por completo la base de datos local. Como nada se guarda fuera del dispositivo, no queda nada en otro lugar.",
      "faq.q7": "¿Qué tipos de activos y transacciones admite?",
      "faq.a7": "Tipos de activo: acciones, ETF, cripto, inmuebles, efectivo, deuda y personalizado. Las transacciones incluyen depósitos y retiros, compras y ventas, eventos inmobiliarios (alta, revaluación, alquiler, gasto, hipoteca, venta), eventos de deuda (alta, pago) y ajustes manuales — trece tipos en total.",
      "faq.q8": "¿Qué idiomas admite la app?",
      "faq.a8": "Inglés, Español, 简体中文 (chino simplificado) y 繁體中文 (chino tradicional) para Taiwán, Hong Kong y Macao. Los documentos de informe permanecen en inglés por diseño; la interfaz en vivo está totalmente localizada.",
      "faq.q9": "Encontré un error o tengo una sugerencia. ¿Qué hago?",
      "faq.a9": "Escriba a <a href=\"mailto:goatintegral@gmail.com?subject=Asset%20Trainer%20bug%20report\">goatintegral@gmail.com</a> con el modelo de su dispositivo, la versión de iOS, la versión de la app y pasos claros para reproducirlo. Las capturas ayudan. No incluya información personal sensible.",
      "contact.kicker": "Póngase en contacto", "contact.h2": "¿Aún necesita ayuda?",
      "contact.p1": "El soporte lo atiende directamente el desarrollador. El correo es la forma más rápida de llegar a una persona — la mayoría de los mensajes reciben respuesta en pocos días.",
      "contact.p2": "Para ayudarle más rápido, incluya:",
      "contact.t1": "Su dispositivo (p. ej. iPhone 15 Pro) y la versión de iOS", "contact.t2": "El número de versión de Asset Trainer",
      "contact.t3": "Qué esperaba y qué ocurrió en su lugar", "contact.t4": "Pasos para reproducirlo y una captura si procede",
      "contact.maillabel": "Correo de soporte", "contact.btn": "Escribir a soporte",
      "footer.tagline": "Un simulador de entrenamiento de carteras multiactivo que funciona solo localmente, para iPhone y iPad. No es una correduría, no es asesoramiento financiero y no puede ejecutar órdenes reales.",
      "footer.support": "Soporte", "footer.faq": "Preguntas frecuentes", "footer.features": "Funciones", "footer.email": "Correo de soporte",
      "footer.legal": "Legal", "footer.privacy": "Política de privacidad", "footer.terms": "Términos de uso",
      "footer.copyright": "© {year} Asset Trainer. Todos los datos permanecen en su dispositivo."
    },

    "zh-Hans": {
      "nav.features": "功能", "nav.privacy": "隐私", "nav.faq": "常见问题", "nav.contact": "联系",
      "hero.eyebrow": "iOS · iPhone 与 iPad · 支持",
      "hero.h1": "练习投资组合思维。<em>数据始终属于你。</em>",
      "hero.lede": "Asset Trainer 是一款仅在本地运行的多资产训练模拟器 — 股票、ETF、加密货币、房地产、现金与债务。这里是帮助与支持中心：解答、隐私说明，以及与开发者的直接联系方式。",
      "hero.contact": "联系支持", "hero.faq": "浏览常见问题",
      "hero.note": "无账户、无云端、无分析 — 你的组合数据绝不离开设备。",
      "device.net": "净资产 · 模拟", "device.chg": "▲ 2.4%  ·  本月 +$3,480",
      "device.equities": "股票", "device.property": "房产", "device.crypto": "加密", "device.cash": "现金",
      "device.obs": "该组合集中于股票。仅为观察 — 并非建议。",
      "ticker.1": "训练模拟器 — 并非交易平台", "ticker.2": "不预测价格",
      "ticker.3": "不是推荐引擎", "ticker.4": "不是真实交易机器人", "ticker.5": "不构成投资建议",
      "feat.kicker": "应用的功能", "feat.h2": "一份完整的组合，源自一本诚实的账本。",
      "feat.p": "每一笔持仓、余额与报告都由你记录的交易计算得出 — 没有任何内容替你臆测。",
      "feat.1.t": "交易即真相", "feat.1.p": "十三种交易类型驱动持仓、成本基础、现金、净资产、配置与风险 — 全部由交易推导，绝不手工设定。",
      "feat.2.t": "房地产与债务", "feat.2.p": "为房产、租金、支出与按揭建模，提供摊还计划、还款规划与净值跟踪。",
      "feat.3.t": "风险即观察", "feat.3.p": "集中度、杠杆、流动性与低现金提示均以对你数据的观察形式呈现 — 绝非建议。",
      "feat.4.t": "报告与决策日志", "feat.4.p": "在设备上生成月度、季度、半年与年度报告 — 可导出为 TXT 或 XLSX — 并附决策日志。",
      "feat.5.t": "稳健的行情数据", "feat.5.p": "只读价格，自动故障切换 — Yahoo、腾讯、东方财富、新浪、Coinbase、OKX，以及可选的 Alpaca — 即使在中国大陆网络下也能运行。",
      "feat.6.t": "六种语言", "feat.6.p": "英语、西班牙语、简体中文，以及繁體中文（台灣 · 香港 · 澳門）— 可在应用内切换。",
      "priv.kicker": "隐私即设计", "priv.h2": "开发者不收集任何数据。",
      "priv.p": "没有账户系统、没有服务器、没有分析。你输入的一切都存放在设备本地的数据库中。",
      "priv.c1.t": "发送出的组合数据字节", "priv.c1.p": "你的交易、余额与备注绝不离开设备。",
      "priv.c2.t": "只有代号会传输", "priv.c2.p": "为获取价格，应用只把「AAPL」或「BTC」这样的代号发送给行情提供方。",
      "priv.c3.t": "无广告、无追踪", "priv.c3.p": "没有广告标识符、没有第三方分析、不做设备指纹识别。",
      "priv.c4.t": "开关握在你手中", "priv.c4.p": "清除所有数据或删除应用即可移除一切 — 没有任何副本需要请别人删除。",
      "faq.kicker": "帮助与解答", "faq.h2": "常见问题",
      "faq.q1": "我的数据存放在哪里？会备份到云端吗？",
      "faq.a1": "你输入的一切都保存在设备上应用内的本地 SQLite 数据库中。没有云同步，也没有开发者服务器。备份只有在你自行创建时才存在 — 通过你自己的设备备份，或使用应用内导出为 zip/CSV 文件。这些副本完全由你掌控。",
      "faq.q2": "Asset Trainer 能进行真实交易或连接我的券商吗？",
      "faq.a2": "不能。应用只会访问第三方端点以获取只读价格。它无法下达、路由或执行真实订单，也绝不连接进行交易。它是训练模拟器，不是券商。",
      "faq.q3": "应用中的内容算投资建议吗？",
      "faq.a3": "不算。风险提示、报告、评分、图表、交易预览与日志提示都是对你所输入数据的描述性观察 — 绝非买入、卖出或持有的建议。任何真实决策前请自行研究，并考虑咨询持牌专业人士。",
      "faq.q4": "它使用哪些行情数据源？会发送什么？",
      "faq.a4": "价格来自公开数据源，并按有序故障切换链获取 — 股票为 Yahoo Finance、腾讯、东方财富与新浪；加密货币为 Coinbase、OKX 与新浪 — 另有可选的 Alpaca 密钥用于美国实时报价。仅传输你所跟踪资产的代号。该链路设计为在部分数据源无法访问时仍可运行，包括中国大陆网络。",
      "faq.q5": "如何导出或备份我的数据？",
      "faq.a5": "打开 <strong>更多 ▸ 导入/导出</strong>。你可以创建完整的 zip 备份、导出 CSV，并将报告导出为 TXT 或 XLSX。数据库在「文件」应用中也可见。请将这些备份妥善保存 — 由于开发者不持有任何副本，它们是你唯一的恢复途径。",
      "faq.q6": "如何删除我的数据？",
      "faq.a6": "你可以在 <strong>设置 ▸ 数据管理</strong> 中删除单个资产及其历史，使用「清除所有数据…」抹除一切，或直接删除应用以彻底移除本地数据库。由于没有任何内容存放在设备之外，别处不会留下任何残余。",
      "faq.q7": "支持哪些资产与交易类型？",
      "faq.a7": "资产类型：股票、ETF、加密货币、房地产、现金、债务与自定义。交易包括存入与取出、买入与卖出、房产事件（添加、重估、收租、支出、按揭、出售）、债务事件（添加、偿还）以及手动调整 — 共十三种。",
      "faq.q8": "应用支持哪些语言？",
      "faq.a8": "英语、西班牙语、简体中文，以及面向台湾、香港与澳门的繁体中文。报告文档按设计保持英文；实时界面则完全本地化。",
      "faq.q9": "我发现了错误或有功能建议，该怎么办？",
      "faq.a9": "请发送电邮至 <a href=\"mailto:goatintegral@gmail.com?subject=Asset%20Trainer%20bug%20report\">goatintegral@gmail.com</a>，附上你的设备型号、iOS 版本、应用版本号以及清晰的复现步骤。截图会很有帮助。请勿包含任何敏感个人信息。",
      "contact.kicker": "取得联系", "contact.h2": "仍需帮助？",
      "contact.p1": "支持由开发者直接处理。电邮是联系到真人的最快方式 — 多数邮件会在几天内得到回复。",
      "contact.p2": "为了更快地帮到你，请附上：",
      "contact.t1": "你的设备（例如 iPhone 15 Pro）与 iOS 版本", "contact.t2": "Asset Trainer 的版本号",
      "contact.t3": "你期望的结果，以及实际发生的情况", "contact.t4": "复现步骤，以及相关截图（如有）",
      "contact.maillabel": "支持邮箱", "contact.btn": "写信给支持",
      "footer.tagline": "一款仅在本地运行的多资产投资组合训练模拟器，适用于 iPhone 与 iPad。它不是券商，不构成投资建议，也无法下达真实订单。",
      "footer.support": "支持", "footer.faq": "常见问题", "footer.features": "功能", "footer.email": "电邮支持",
      "footer.legal": "法律", "footer.privacy": "隐私政策", "footer.terms": "使用条款",
      "footer.copyright": "© {year} Asset Trainer. 所有数据都保存在你的设备上。"
    },

    "zh-Hant": {
      "nav.features": "功能", "nav.privacy": "隱私", "nav.faq": "常見問題", "nav.contact": "聯絡",
      "hero.eyebrow": "iOS · iPhone 與 iPad · 支援",
      "hero.h1": "練習投資組合思維。<em>數據始終屬於你。</em>",
      "hero.lede": "Asset Trainer 是一款僅在本地運行的多資產訓練模擬器 — 股票、ETF、加密貨幣、房地產、現金與債務。這裡是說明與支援中心：解答、隱私說明，以及與開發者的直接聯絡方式。",
      "hero.contact": "聯絡支援", "hero.faq": "瀏覽常見問題",
      "hero.note": "無帳戶、無雲端、無分析 — 你的組合數據絕不離開裝置。",
      "device.net": "淨資產 · 模擬", "device.chg": "▲ 2.4%  ·  本月 +$3,480",
      "device.equities": "股票", "device.property": "房產", "device.crypto": "加密", "device.cash": "現金",
      "device.obs": "該組合集中於股票。僅為觀察 — 並非建議。",
      "ticker.1": "訓練模擬器 — 並非交易平台", "ticker.2": "不預測價格",
      "ticker.3": "不是推薦引擎", "ticker.4": "不是真實交易機器人", "ticker.5": "不構成投資建議",
      "feat.kicker": "應用的功能", "feat.h2": "一份完整的組合，源自一本誠實的帳本。",
      "feat.p": "每一筆持倉、餘額與報告都由你記錄的交易計算得出 — 沒有任何內容替你臆測。",
      "feat.1.t": "交易即真相", "feat.1.p": "十三種交易類型驅動持倉、成本基礎、現金、淨資產、配置與風險 — 全部由交易推導，絕不手動設定。",
      "feat.2.t": "房地產與債務", "feat.2.p": "為房產、租金、支出與房貸建模，提供攤還計畫、還款規劃與淨值追蹤。",
      "feat.3.t": "風險即觀察", "feat.3.p": "集中度、槓桿、流動性與低現金提示均以對你數據的觀察形式呈現 — 絕非建議。",
      "feat.4.t": "報告與決策日誌", "feat.4.p": "在裝置上生成月度、季度、半年與年度報告 — 可匯出為 TXT 或 XLSX — 並附決策日誌。",
      "feat.5.t": "穩健的行情數據", "feat.5.p": "唯讀價格，自動故障切換 — Yahoo、騰訊、東方財富、新浪、Coinbase、OKX，以及可選的 Alpaca — 即使在中國大陸網路下也能運行。",
      "feat.6.t": "六種語言", "feat.6.p": "英語、西班牙語、簡體中文，以及繁體中文（台灣 · 香港 · 澳門）— 可在應用內切換。",
      "priv.kicker": "隱私即設計", "priv.h2": "開發者不收集任何數據。",
      "priv.p": "沒有帳戶系統、沒有伺服器、沒有分析。你輸入的一切都存放在裝置本地的資料庫中。",
      "priv.c1.t": "發送出的組合數據位元組", "priv.c1.p": "你的交易、餘額與備註絕不離開裝置。",
      "priv.c2.t": "只有代號會傳輸", "priv.c2.p": "為獲取價格，應用只把「AAPL」或「BTC」這樣的代號發送給行情提供方。",
      "priv.c3.t": "無廣告、無追蹤", "priv.c3.p": "沒有廣告識別碼、沒有第三方分析、不做裝置指紋識別。",
      "priv.c4.t": "開關握在你手中", "priv.c4.p": "清除所有數據或刪除應用即可移除一切 — 沒有任何副本需要請別人刪除。",
      "faq.kicker": "說明與解答", "faq.h2": "常見問題",
      "faq.q1": "我的數據存放在哪裡？會備份到雲端嗎？",
      "faq.a1": "你輸入的一切都儲存在裝置上應用內的本地 SQLite 資料庫中。沒有雲端同步，也沒有開發者伺服器。備份只有在你自行建立時才存在 — 透過你自己的裝置備份，或使用應用內匯出為 zip/CSV 檔案。這些副本完全由你掌控。",
      "faq.q2": "Asset Trainer 能進行真實交易或連接我的券商嗎？",
      "faq.a2": "不能。應用只會存取第三方端點以獲取唯讀價格。它無法下達、路由或執行真實訂單，也絕不連接進行交易。它是訓練模擬器，不是券商。",
      "faq.q3": "應用中的內容算投資建議嗎？",
      "faq.a3": "不算。風險提示、報告、評分、圖表、交易預覽與日誌提示都是對你所輸入數據的描述性觀察 — 絕非買入、賣出或持有的建議。任何真實決策前請自行研究，並考慮諮詢持牌專業人士。",
      "faq.q4": "它使用哪些行情數據源？會發送什麼？",
      "faq.a4": "價格來自公開數據源，並按有序故障切換鏈獲取 — 股票為 Yahoo Finance、騰訊、東方財富與新浪；加密貨幣為 Coinbase、OKX 與新浪 — 另有可選的 Alpaca 密鑰用於美國即時報價。僅傳輸你所追蹤資產的代號。該鏈路設計為在部分數據源無法存取時仍可運行，包括中國大陸網路。",
      "faq.q5": "如何匯出或備份我的數據？",
      "faq.a5": "開啟 <strong>更多 ▸ 匯入/匯出</strong>。你可以建立完整的 zip 備份、匯出 CSV，並將報告匯出為 TXT 或 XLSX。資料庫在「檔案」應用中也可見。請將這些備份妥善保存 — 由於開發者不持有任何副本，它們是你唯一的復原途徑。",
      "faq.q6": "如何刪除我的數據？",
      "faq.a6": "你可以在 <strong>設定 ▸ 數據管理</strong> 中刪除單個資產及其歷史，使用「清除所有數據…」抹除一切，或直接刪除應用以徹底移除本地資料庫。由於沒有任何內容存放在裝置之外，別處不會留下任何殘餘。",
      "faq.q7": "支援哪些資產與交易類型？",
      "faq.a7": "資產類型：股票、ETF、加密貨幣、房地產、現金、債務與自訂。交易包括存入與提取、買入與賣出、房產事件（新增、重估、收租、支出、房貸、出售）、債務事件（新增、償還）以及手動調整 — 共十三種。",
      "faq.q8": "應用支援哪些語言？",
      "faq.a8": "英語、西班牙語、簡體中文，以及面向台灣、香港與澳門的繁體中文。報告文件按設計保持英文；即時介面則完全在地化。",
      "faq.q9": "我發現了錯誤或有功能建議，該怎麼辦？",
      "faq.a9": "請發送電郵至 <a href=\"mailto:goatintegral@gmail.com?subject=Asset%20Trainer%20bug%20report\">goatintegral@gmail.com</a>，附上你的裝置型號、iOS 版本、應用版本號以及清晰的重現步驟。截圖會很有幫助。請勿包含任何敏感個人資訊。",
      "contact.kicker": "取得聯絡", "contact.h2": "仍需協助？",
      "contact.p1": "支援由開發者直接處理。電郵是聯絡到真人的最快方式 — 多數郵件會在幾天內得到回覆。",
      "contact.p2": "為了更快地幫到你，請附上：",
      "contact.t1": "你的裝置（例如 iPhone 15 Pro）與 iOS 版本", "contact.t2": "Asset Trainer 的版本號",
      "contact.t3": "你期望的結果，以及實際發生的情況", "contact.t4": "重現步驟，以及相關截圖（如有）",
      "contact.maillabel": "支援信箱", "contact.btn": "寫信給支援",
      "footer.tagline": "一款僅在本地運行的多資產投資組合訓練模擬器，適用於 iPhone 與 iPad。它不是券商，不構成投資建議，也無法下達真實訂單。",
      "footer.support": "支援", "footer.faq": "常見問題", "footer.features": "功能", "footer.email": "電郵支援",
      "footer.legal": "法律", "footer.privacy": "隱私政策", "footer.terms": "使用條款",
      "footer.copyright": "© {year} Asset Trainer. 所有數據都儲存在你的裝置上。"
    }
  };

  // Hong Kong & Macau: Traditional Chinese with the "私隱" term for privacy.
  function deriveHK(base) {
    var d = {};
    for (var k in base) d[k] = base[k];
    d["nav.privacy"] = "私隱";
    d["priv.kicker"] = "私隱即設計";
    d["footer.privacy"] = "私隱政策";
    d["hero.lede"] = base["hero.lede"].replace("隱私說明", "私隱說明");
    return d;
  }
  I18N["zh-Hant-HK"] = deriveHK(I18N["zh-Hant"]);
  I18N["zh-Hant-MO"] = deriveHK(I18N["zh-Hant"]);

  var LOCALES = ["en", "es", "zh-Hans", "zh-Hant", "zh-Hant-HK", "zh-Hant-MO"];
  var SUFFIX = { "en": "", "es": ".es", "zh-Hans": ".zh-Hans", "zh-Hant": ".zh-Hant", "zh-Hant-HK": ".zh-Hant-HK", "zh-Hant-MO": ".zh-Hant-MO" };

  function detect() {
    // Default to English; only honor a language the visitor explicitly chose.
    var stored;
    try { stored = localStorage.getItem("at-lang"); } catch (e) {}
    if (stored && I18N[stored]) return stored;
    return "en";
  }

  var year = new Date().getFullYear();

  function applyLang(lang) {
    if (!I18N[lang]) lang = "en";
    var dict = I18N[lang];
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.textContent = v.replace("{year}", year);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n-html")];
      if (v != null) el.innerHTML = v.replace("{year}", year);
    });

    // Point footer legal links at the matching localized page.
    var s = SUFFIX[lang];
    var pl = document.querySelector(".js-legal-privacy");
    var tl = document.querySelector(".js-legal-terms");
    if (pl) pl.setAttribute("href", "privacy" + s + ".html");
    if (tl) tl.setAttribute("href", "terms" + s + ".html");

    var sel = document.getElementById("langSelect");
    if (sel) sel.value = lang;

    // Recompute any open FAQ panel heights (text length changed).
    document.querySelectorAll(".faq-item[open] .faq-a").forEach(function (a) {
      a.style.maxHeight = a.scrollHeight + "px";
    });

    try { localStorage.setItem("at-lang", lang); } catch (e) {}
  }

  var initial = detect();
  applyLang(initial);

  var sel = document.getElementById("langSelect");
  if (sel) {
    sel.value = initial;
    sel.addEventListener("change", function () { applyLang(this.value); });
  }

  // expose for debugging / other scripts
  window.AssetTrainerI18N = { apply: applyLang, locales: LOCALES };
})();
