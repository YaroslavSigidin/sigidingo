import fs from "fs";
import path from "path";
import vm from "vm";

const ROOT = process.cwd();
const BASE_URL = "https://sigidingo.online";
const DATA_FILE = path.join(ROOT, "assets/js/data.js");
const BLOG_DIR = path.join(ROOT, "blog");
const SITEMAP_FILE = path.join(ROOT, "sitemap.xml");

const raw = fs.readFileSync(DATA_FILE, "utf8") + "\nmodule.exports = { articles };\n";
const context = { module: { exports: {} }, exports: {}, console, encodeURI };
vm.createContext(context);
vm.runInContext(raw, context, { filename: "data.js" });

const { articles } = context.module.exports;
if (!Array.isArray(articles) || !articles.length) {
  throw new Error("articles not found in assets/js/data.js");
}

const QUESTION_START_RE =
  /^(как|что|почему|зачем|когда|где|кто|в чем|чем|сколько|какие|какой|какая|какое|нужно ли|стоит ли|можно ли|чем отличается)/i;
const HOWTO_HINT_RE =
  /(как|чек-?лист|пошаг|guide|tutorial|ошибк|best practice|практик|с нуля|на практике|правила|шаблон|workflow|dev mode)/i;
const FAQ_HINT_RE =
  /(как|что|почему|зачем|когда|в чем|чек-?лист|вопрос|faq|ошибк|метрик|правил|гайд|guide|tutorial|vs)/i;

const escapeHtml = value =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

const toIsoDate = ruDate => {
  const m = String(ruDate || "").match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!m) return "2026-02-11";
  return `${m[3]}-${m[2]}-${m[1]}`;
};

const normalizeText = value => String(value || "").replace(/\s+/g, " ").trim();

const normalizeTag = tag =>
  normalizeText(tag)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");

const makeSnippet = (value, max = 220) => {
  const text = normalizeText(value);
  if (!text) return "";
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1).trim()}…`;
};

const parseReadTimeMinutes = readTime => {
  const m = normalizeText(readTime).match(/(\d+)/);
  if (!m) return null;
  const min = Number(m[1]);
  if (!Number.isFinite(min) || min <= 0) return null;
  return min;
};

const getBlockText = block => {
  if (!block || typeof block !== "object") return "";
  if (typeof block.text === "string" && block.text.trim()) return normalizeText(block.text);
  if (Array.isArray(block.items) && block.items.length) return normalizeText(block.items.join(". "));
  return "";
};

const getHeadingBlocks = body =>
  (Array.isArray(body) ? body : [])
    .map((block, index) => ({ block, index }))
    .filter(({ block }) => block && (block.type === "h2" || block.type === "h3"))
    .map(({ block, index }) => ({
      index,
      level: block.type,
      text: normalizeText(block.text)
    }))
    .filter(item => item.text);

const getSectionPreview = (body, startIndex, fallback) => {
  const blocks = Array.isArray(body) ? body : [];
  const parts = [];
  for (let i = startIndex + 1; i < blocks.length; i += 1) {
    const block = blocks[i];
    if (!block || typeof block !== "object") continue;
    if (block.type === "h2" || block.type === "h3") break;
    const text = getBlockText(block);
    if (text) parts.push(text);
    if (normalizeText(parts.join(" ")).length > 260) break;
  }
  const preview = makeSnippet(parts.join(" "), 240);
  if (preview) return preview;
  return makeSnippet(fallback, 180);
};

const toQuestionText = heading => {
  const text = normalizeText(String(heading || "").replace(/[.!:;]+$/g, ""));
  if (!text) return "";
  if (text.endsWith("?")) return text;
  if (QUESTION_START_RE.test(text)) return `${text}?`;
  return `Как применить ${text.toLowerCase()}?`;
};

const toHowToRelevanceText = article => {
  const title = normalizeText(article.title || "");
  const excerpt = normalizeText(article.excerpt || "");
  return normalizeText(`${title} ${excerpt} ${(article.tags || []).join(" ")}`);
};

const isHowToArticle = article => HOWTO_HINT_RE.test(toHowToRelevanceText(article));
const isFaqArticle = article => FAQ_HINT_RE.test(toHowToRelevanceText(article));

const buildFaqEntities = (article, canonical) => {
  if (!isFaqArticle(article)) return [];
  const body = Array.isArray(article.body) ? article.body : [];
  const headings = getHeadingBlocks(body);
  const entities = [];
  const seen = new Set();

  const pushEntity = (name, text) => {
    const question = normalizeText(name);
    const answer = makeSnippet(text, 260);
    if (!question || !answer) return;
    if (seen.has(question.toLowerCase())) return;
    seen.add(question.toLowerCase());
    entities.push({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    });
  };

  pushEntity(
    `О чем статья «${normalizeText(article.title || "Статья")}»?`,
    article.excerpt || "Практическое руководство по теме UX/UI и продуктового дизайна."
  );

  for (const heading of headings) {
    if (entities.length >= 6) break;
    if (!heading.text) continue;
    const question = toQuestionText(heading.text);
    const answer = getSectionPreview(body, heading.index, article.excerpt);
    pushEntity(question, answer);
  }

  if (entities.length < 2) return [];
  return [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: entities,
      mainEntityOfPage: canonical,
      inLanguage: "ru-RU"
    }
  ];
};

const buildHowToSchema = (article, canonical) => {
  if (!isHowToArticle(article)) return null;
  const body = Array.isArray(article.body) ? article.body : [];
  const headings = getHeadingBlocks(body);
  const steps = [];

  for (const heading of headings) {
    if (steps.length >= 10) break;
    const text = getSectionPreview(body, heading.index, article.excerpt);
    if (!text) continue;
    steps.push({
      "@type": "HowToStep",
      name: heading.text,
      text
    });
  }

  if (steps.length < 3) return null;

  const totalMinutes = parseReadTimeMinutes(article.readTime);
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: normalizeText(article.title || "How-to"),
    description: makeSnippet(article.excerpt, 190),
    inLanguage: "ru-RU",
    mainEntityOfPage: canonical,
    step: steps
  };
  if (totalMinutes) schema.totalTime = `PT${totalMinutes}M`;
  return schema;
};

const renderJsonLdScripts = payload =>
  payload
    .filter(Boolean)
    .map(item => JSON.stringify(item).replace(/</g, "\\u003c"))
    .map(json => `<script type="application/ld+json">${json}</script>`)
    .join("\n    ");

const renderBodyBlock = block => {
  if (!block || typeof block !== "object") return "";
  if (block.type === "h2") return `<h2 class="article-reveal">${escapeHtml(block.text)}</h2>`;
  if (block.type === "h3") return `<h3 class="article-reveal">${escapeHtml(block.text)}</h3>`;
  if (block.type === "p") return `<p class="article-paragraph article-reveal">${escapeHtml(block.text)}</p>`;
  if (block.type === "blockquote") return `<blockquote class="article-quote article-reveal"><span class="quote-mark">“</span>${escapeHtml(block.text)}</blockquote>`;
  if (block.type === "ul") {
    const items = Array.isArray(block.items) ? block.items.map(item => `<li>${escapeHtml(item)}</li>`).join("") : "";
    return `<ul class="article-list article-reveal">${items}</ul>`;
  }
  if (block.type === "divider") {
    const label = block.label ? `<span>${escapeHtml(block.label)}</span>` : "";
    return `<div class="article-divider article-reveal">${label}</div>`;
  }
  if (block.type === "callout") {
    const title = block.title ? `<h4>${escapeHtml(block.title)}</h4>` : "";
    return `<div class="article-callout article-reveal"><div class="callout-head">${title}</div><p>${escapeHtml(block.text)}</p></div>`;
  }
  if (block.type === "footnotes") {
    const items = Array.isArray(block.items) ? block.items.map(item => `<li>${escapeHtml(item)}</li>`).join("") : "";
    return `<ol class="article-footnotes article-reveal">${items}</ol>`;
  }
  return "";
};

const articleUrl = id => `${BASE_URL}/blog/${id}.html`;

const themeLabelByKey = new Map();
const themeMap = new Map();

for (const article of articles) {
  const tags = Array.isArray(article.tags) ? article.tags : [];
  for (const rawTag of tags) {
    const label = normalizeText(rawTag);
    const key = normalizeTag(label);
    if (!key) continue;
    if (!themeLabelByKey.has(key)) themeLabelByKey.set(key, label);
    if (!themeMap.has(key)) themeMap.set(key, []);
    themeMap.get(key).push(article);
  }
}

const hubScore = article => {
  const title = normalizeText(article.title || "").toLowerCase();
  const excerpt = normalizeText(article.excerpt || "").toLowerCase();
  const tagsCount = Array.isArray(article.tags) ? article.tags.length : 0;
  let score = tagsCount;
  if (/(что такое|простыми словами|с нуля|гайд|guide|чек-?лист|как )/.test(title)) score += 4;
  if (/(практик|пошаг|workflow|ошиб)/.test(title)) score += 2;
  if (/(объясн|инструк|шаблон)/.test(excerpt)) score += 1;
  return score;
};

const themeHubByKey = new Map();
for (const [themeKey, list] of themeMap.entries()) {
  const sorted = [...list].sort((a, b) => hubScore(b) - hubScore(a));
  if (sorted.length) themeHubByKey.set(themeKey, sorted[0]);
}

const articleTagsNormalized = article =>
  (Array.isArray(article.tags) ? article.tags : [])
    .map(tag => normalizeTag(tag))
    .filter(Boolean);

const getPrimaryTheme = article => {
  const tags = articleTagsNormalized(article);
  if (!tags.length) return "general";
  return tags[0];
};

const articleKeywordSet = article =>
  new Set(
    normalizeText(`${article.id || ""} ${article.title || ""}`.toLowerCase())
      .split(/[^a-zа-я0-9]+/i)
      .map(item => item.trim())
      .filter(item => item.length >= 3)
  );

const relationScore = (current, candidate) => {
  const currentTags = new Set(articleTagsNormalized(current));
  const candidateTags = new Set(articleTagsNormalized(candidate));
  let sharedTags = 0;
  for (const tag of currentTags) if (candidateTags.has(tag)) sharedTags += 1;

  const currentWords = articleKeywordSet(current);
  const candidateWords = articleKeywordSet(candidate);
  let sharedWords = 0;
  for (const word of currentWords) if (candidateWords.has(word)) sharedWords += 1;

  const samePrimaryTheme = getPrimaryTheme(current) === getPrimaryTheme(candidate);
  return sharedTags * 10 + sharedWords * 2 + (samePrimaryTheme ? 5 : 0);
};

const renderArticleCards = list =>
  list
    .map(
      item => `
        <a class="article-link" href="./${escapeHtml(item.id)}.html">
          <article class="article-card">
            <div class="article-cover">
              <img src="../${encodeURI(item.cover)}" alt="${escapeHtml(item.title)}" loading="lazy" />
            </div>
            <div class="article-body">
              <div class="article-meta">
                <span>${escapeHtml(item.date)}</span>
                <span>${escapeHtml(item.readTime)}</span>
              </div>
              <h4>${escapeHtml(item.title)}</h4>
              <p>${escapeHtml(item.excerpt)}</p>
            </div>
          </article>
        </a>
      `
    )
    .join("");

const getClusterRelated = (article, limit = 6) => {
  const scored = articles
    .filter(item => item.id !== article.id)
    .map(item => ({ item, score: relationScore(article, item) }))
    .sort((a, b) => b.score - a.score);
  const strong = scored.filter(entry => entry.score > 0).slice(0, limit).map(entry => entry.item);
  if (strong.length >= limit) return strong;
  const fallback = scored
    .filter(entry => !strong.some(item => item.id === entry.item.id))
    .slice(0, limit - strong.length)
    .map(entry => entry.item);
  return [...strong, ...fallback];
};

fs.rmSync(BLOG_DIR, { recursive: true, force: true });
fs.mkdirSync(BLOG_DIR, { recursive: true });

for (const article of articles) {
  const id = String(article.id || "").trim();
  if (!id) continue;

  const title = String(article.title || "Статья");
  const excerpt = String(article.excerpt || "");
  const coverPath = encodeURI(String(article.cover || "assets/images/blog-covers/portfolio-story.svg"));
  const canonical = articleUrl(id);
  const dateIso = toIsoDate(article.date);
  const primaryTheme = getPrimaryTheme(article);
  const primaryThemeLabel = themeLabelByKey.get(primaryTheme) || "UX";
  const clusterHub = themeHubByKey.get(primaryTheme) || article;
  const clusterRelated = getClusterRelated(article, 6);
  const sameThemeCluster = clusterRelated.filter(item => getPrimaryTheme(item) === primaryTheme).slice(0, 4);
  const secondaryCluster = clusterRelated.filter(item => getPrimaryTheme(item) !== primaryTheme).slice(0, 2);
  const clusterList = [...sameThemeCluster, ...secondaryCluster];

  const bodyHtml = (Array.isArray(article.body) ? article.body : []).map(renderBodyBlock).join("\n");
  const tagsHtml = (Array.isArray(article.tags) ? article.tags : [])
    .map(tag => `<span class="tag-pill">${escapeHtml(tag)}</span>`)
    .join("");

  const relatedHtml = renderArticleCards(clusterRelated);
  const clusterHtml = renderArticleCards(clusterList);
  const hubHint =
    clusterHub.id === article.id
      ? `Вы читаете хаб-материал по теме «${escapeHtml(primaryThemeLabel)}».`
      : `Главный материал кластера: <a class="article-link-inline" href="./${escapeHtml(clusterHub.id)}.html">${escapeHtml(
          clusterHub.title
        )}</a>.`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: makeSnippet(excerpt, 190),
    datePublished: dateIso,
    dateModified: dateIso,
    author: { "@type": "Person", name: "Yaroslav Sigidin" },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    image: `${BASE_URL}/${coverPath}`,
    inLanguage: "ru-RU"
  };
  const faqSchemas = buildFaqEntities(article, canonical);
  const howToSchema = buildHowToSchema(article, canonical);
  const jsonLdScripts = renderJsonLdScripts([blogPostingSchema, ...faqSchemas, howToSchema]);

  const html = `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#070707" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="author" content="Yaroslav Sigidin" />
    <title>${escapeHtml(title)} — Блог Yaroslav Sigidin</title>
    <meta name="description" content="${escapeHtml(excerpt).slice(0, 190)}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="ru-RU" href="${canonical}" />
    <link rel="alternate" hreflang="x-default" href="${canonical}" />
    <meta property="og:locale" content="ru_RU" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeHtml(title)} — Блог Yaroslav Sigidin" />
    <meta property="og:description" content="${escapeHtml(excerpt).slice(0, 190)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="Yaroslav Sigidin" />
    <meta property="og:image" content="${BASE_URL}/${coverPath}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)} — Блог Yaroslav Sigidin" />
    <meta name="twitter:description" content="${escapeHtml(excerpt).slice(0, 190)}" />
    <meta name="twitter:image" content="${BASE_URL}/${coverPath}" />
    ${jsonLdScripts}
    <link rel="stylesheet" href="../assets/css/styles.css" />
    <link rel="manifest" href="../site.webmanifest" />
    <link rel="icon" type="image/svg+xml" href="../assets/images/favicon.svg" />
    <link rel="shortcut icon" href="../assets/images/favicon.svg" />

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript">
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a);
      })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js?id=106779298", "ym");

      ym(106779298, "init", {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        referrer: document.referrer,
        url: location.href,
        accurateTrackBounce: true,
        trackLinks: true
      });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/106779298" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
  </head>
  <body data-theme="dark">
    <header>
      <div class="container nav">
        <a class="logo" href="../index.html">SIGIDINGO</a>
        <nav class="nav-links" id="navLinks">
          <a href="../portfolio.html" class="nav-link">Portfolio</a>
          <a href="../services.html" class="nav-link">Services</a>
          <a href="../about.html" class="nav-link">About / CV</a>
          <a href="../index.html#contact" class="nav-link">Contact</a>
          <a href="../blog.html" class="nav-link">Blog</a>
          <a href="../tests.html" class="nav-link">Tests</a>
        </nav>
        <div class="nav-tools">
          <a class="nav-telegram" href="https://t.me/sigidingo" target="_blank" rel="noreferrer">
            <span class="icon-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.8 4.6 2.9 11.9c-1.3.5-1.3 1.3-.2 1.7l4.7 1.5 1.8 5.4c.2.6.1.9.9.9.6 0 .9-.3 1.3-.7l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.7c.3-1.2-.5-1.7-1.5-1.3zM9.3 14.9l9-5.7c.4-.3.8-.1.5.2l-7.3 6.6-.3 3.2-1.9-4.3z"/></svg>
            </span>
            Telegram
          </a>
          <button class="theme-switch" data-theme-toggle type="button" aria-label="Toggle theme">
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12.1 2.2c-3.4.4-6.1 3.3-6.1 6.9 0 3.9 3.2 7.1 7.1 7.1 2.3 0 4.4-1.1 5.7-2.9-4 .8-7.5-2.6-6.7-6.7z"/></svg>
            <span class="track"><span class="thumb"></span></span>
          </button>
        </div>
        <button class="mobile-toggle" id="mobileToggle" type="button" aria-label="Open menu" aria-controls="navLinks" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </header>

    <nav class="container breadcrumbs" aria-label="Breadcrumb">
      <a href="../index.html">Главная</a>
      <span class="breadcrumbs-sep">/</span>
      <a href="../blog.html">Блог</a>
      <span class="breadcrumbs-sep">/</span>
      <span>${escapeHtml(title)}</span>
    </nav>

    <main>
      <section class="section article-hero">
        <div class="container article-hero-layout">
          <div class="article-hero-text">
            <p class="section-subtitle">Блог</p>
            <h1 class="section-title">${escapeHtml(title)}</h1>
            <p class="lead">${escapeHtml(excerpt)}</p>
            <div class="article-meta"><span>${escapeHtml(article.date)}</span><span>${escapeHtml(article.readTime)}</span></div>
            <div class="tag-list">${tagsHtml}</div>
          </div>
          <div class="article-hero-media">
            <div class="article-hero-frame">
              <img src="../${coverPath}" alt="${escapeHtml(title)}" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container article-content" id="articleContent">${bodyHtml}</div>
      </section>

      <section class="section">
        <div class="container">
          <p class="section-subtitle">Topic Cluster</p>
          <h2 class="section-title">Хаб по теме: ${escapeHtml(primaryThemeLabel)}</h2>
          <p class="lead">${hubHint}</p>
          <div class="articles-grid blog-feed-grid">${clusterHtml}</div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <p class="section-subtitle">Related</p>
          <h2 class="section-title">Похожие статьи</h2>
          <div class="articles-grid blog-feed-grid">${relatedHtml}</div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container footer-grid">
        <div><p class="section-subtitle">Mail</p><a href="mailto:sigidingo@gmail.com">sigidingo@gmail.com</a></div>
        <div><p class="section-subtitle">Telegram</p><a href="https://t.me/sigidingo" target="_blank" rel="noreferrer">@sigidingo</a></div>
        <div><p class="section-subtitle">Number</p><a href="tel:+79619710515">+7 961 971-05-15</a></div>
        <div><p class="section-subtitle">Location</p><p>Краснодар</p></div>
      </div>
    </footer>

    <script src="../assets/js/main.js?v=20260211-4"></script>
  </body>
</html>`;

  fs.writeFileSync(path.join(BLOG_DIR, `${id}.html`), html, "utf8");
}

const lastmod = new Date().toISOString().slice(0, 10);
const staticPages = [
  ["/", "weekly", "1.0"],
  ["/portfolio.html", "weekly", "0.9"],
  ["/services.html", "weekly", "0.9"],
  ["/about.html", "monthly", "0.8"],
  ["/blog.html", "weekly", "0.8"],
  ["/tests.html", "monthly", "0.6"],
  ["/case-ai.html", "monthly", "0.7"],
  ["/case-it-platform.html", "monthly", "0.7"],
  ["/case-mirox.html", "monthly", "0.7"],
  ["/case-mirox-app.html", "monthly", "0.7"],
  ["/case-nok.html", "monthly", "0.7"],
  ["/case-octoclick.html", "monthly", "0.7"],
  ["/case-pazl-kod-platform.html", "monthly", "0.7"],
  ["/case-tochka-rosta.html", "monthly", "0.7"],
  ["/case-visiflow.html", "monthly", "0.7"],
  ["/case-weintek-panel.html", "monthly", "0.7"],
  ["/case-winglish.html", "monthly", "0.7"]
];

const articlePages = articles
  .filter(item => item && item.id)
  .map(item => [`/blog/${item.id}.html`, "monthly", "0.65"]);

const all = [...staticPages, ...articlePages];
const urls = all
  .map(
    ([u, freq, pr]) => `  <url>\n    <loc>${BASE_URL}${u}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${pr}</priority>\n  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
fs.writeFileSync(SITEMAP_FILE, sitemap, "utf8");

console.log(`Generated ${articles.length} static blog pages and sitemap.xml`);
