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

  const bodyHtml = (Array.isArray(article.body) ? article.body : []).map(renderBodyBlock).join("\n");
  const tagsHtml = (Array.isArray(article.tags) ? article.tags : [])
    .map(tag => `<span class="tag-pill">${escapeHtml(tag)}</span>`)
    .join("");

  const related = articles.filter(item => item.id !== id).slice(0, 6);
  const relatedHtml = related
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
    <script type="application/ld+json">{"@context":"https://schema.org","@type":"BlogPosting","headline":"${escapeHtml(title)}","description":"${escapeHtml(excerpt).slice(0, 190)}","datePublished":"${dateIso}","dateModified":"${dateIso}","author":{"@type":"Person","name":"Yaroslav Sigidin"},"mainEntityOfPage":{"@type":"WebPage","@id":"${canonical}"},"image":"${BASE_URL}/${coverPath}","inLanguage":"ru-RU"}</script>
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
  ["/case-mirox-1.html", "monthly", "0.7"],
  ["/case-mirox-app.html", "monthly", "0.7"],
  ["/case-nok.html", "monthly", "0.7"],
  ["/case-octoclick.html", "monthly", "0.7"],
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
