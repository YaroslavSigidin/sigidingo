import fs from "fs";
import path from "path";
import vm from "vm";
import { execSync } from "child_process";

const ROOT = process.cwd();
const HTML_FILES = [
  ...fs.readdirSync(ROOT).filter(name => name.endsWith(".html")),
  ...fs.readdirSync(path.join(ROOT, "blog")).filter(name => name.endsWith(".html")).map(name => path.join("blog", name))
];

const DATA_FILE = path.join(ROOT, "assets/js/data.js");
const dataRaw = `${fs.readFileSync(DATA_FILE, "utf8")}\nmodule.exports = { projects, articles };\n`;
const context = { module: { exports: {} }, exports: {}, console, encodeURI };
vm.createContext(context);
vm.runInContext(dataRaw, context, { filename: "data.js" });
const { projects, articles } = context.module.exports;

const escapeHtml = value =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

const normalizeSpace = value => String(value || "").replace(/\s+/g, " ").trim();

const parseRuDate = value => {
  const m = String(value || "").match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (!m) return new Date(0);
  return new Date(`${m[3]}-${m[2]}-${m[1]}T00:00:00Z`);
};

const ellipsize = (text, max = 60) => {
  const value = normalizeSpace(text);
  if (value.length <= max) return value;
  const slice = value.slice(0, max - 1);
  const cut = slice.lastIndexOf(" ");
  return `${(cut > 20 ? slice.slice(0, cut) : slice).trim()}…`;
};

const withYaroslavBrand = title => {
  const t = normalizeSpace(title);
  if (/yaroslav\s+sigidin/i.test(t)) return t;
  return `${t} | Yaroslav Sigidin`;
};

const clampTitle = (title, file) => {
  if (file === "blog.html") return "Блог UX/UI и продукта | Yaroslav Sigidin";
  if (file === "tests.html") return "UX/UI тесты и квизы | Yaroslav Sigidin";
  if (file === "cv.html") return "CV и опыт работы | Yaroslav Sigidin";
  if (file === "post-template.html") return "Шаблон статьи блога | Yaroslav Sigidin";

  let t = normalizeSpace(title);

  if (file.startsWith("blog/")) {
    t = t.replace(/\s*[—-]\s*Блог\s*Yaroslav\s*Sigidin\s*$/i, "");
  }

  if (t.length < 30 && file !== "post-template.html") {
    t = withYaroslavBrand(t);
  }

  if (t.length > 65) {
    t = ellipsize(t, 62);
  }

  return t;
};

const firstH1 = html => {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!m) return "";
  return normalizeSpace(m[1].replace(/<[^>]+>/g, ""));
};

const descByFile = (file, h1) => {
  if (file === "index.html") return "Портфолио UX/UI дизайнера Ярослава Сигидина: кейсы, услуги, статьи и контакты для запуска и роста цифровых продуктов.";
  if (file === "portfolio.html") return "Портфолио UX/UI дизайнера Ярослава Сигидина: продуктовые и web-кейсы с задачами, процессом проектирования и результатами.";
  if (file === "blog.html") return "Блог Ярослава Сигидина про UX/UI, продукт и дизайн-системы: практические статьи, чек-листы, разборы и рабочие методики.";
  if (file === "services.html") return "UX/UI услуги для бизнеса: аудит интерфейсов, проектирование, дизайн-системы и улучшение пользовательских сценариев с фокусом на метрики.";
  if (file === "about.html") return "Обо мне и CV Ярослава Сигидина: опыт в UX/UI, ключевые компетенции, подход к продуктовой работе и примеры реализованных проектов.";
  if (file === "tests.html") return "UX/UI тест: проверьте уровень знаний по интерфейсам, UX-практикам и продуктовым решениям. Результат сразу после прохождения.";
  if (file.startsWith("case-")) return `${h1 || "Кейс"}: задачи проекта, UX/UI процесс, принятые решения и результаты внедрения в продукте.`;
  if (file.startsWith("blog/")) return `Статья: ${h1 || "материал про UX/UI"}. Практические подходы, примеры, ошибки и рабочие рекомендации для продуктовых команд.`;
  if (file === "cv.html") return "Страница CV перенесена в раздел About / CV. Используйте актуальную версию с обновлённой информацией об опыте и навыках.";
  return `${h1 || "Страница"} — материалы по UX/UI, продукту и цифровым интерфейсам от Ярослава Сигидина.`;
};

const clampDesc = (desc, file, h1) => {
  let d = normalizeSpace(desc);
  if (d.length < 100) d = descByFile(file, h1);
  if (d.length > 165) d = ellipsize(d, 160);
  return d;
};

const ensureMeta = (html, attrs, content) => {
  const key = Object.entries(attrs)
    .map(([k, v]) => `(?=[^>]*\\b${k}=(?:\"|')${v}(?:\"|'))`)
    .join("");
  const re = new RegExp(`<meta${key}[^>]*>`, "i");
  const tag = `<meta ${Object.entries(attrs)
    .map(([k, v]) => `${k}=\"${v}\"`)
    .join(" ")} content=\"${escapeHtml(content)}\" />`;

  if (re.test(html)) {
    return html.replace(re, tag);
  }

  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
};

const ensureOgImageMeta = html => {
  let next = html;
  if (!/property=["']og:image:width["']/i.test(next)) {
    next = next.replace(/<meta\s+property=["']og:image["'][^>]*>\s*/i, match => `${match}    <meta property=\"og:image:width\" content=\"1200\" />\n    <meta property=\"og:image:height\" content=\"630\" />\n`);
  }
  if (!/property=["']og:image:alt["']/i.test(next)) {
    const t = (next.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || "Yaroslav Sigidin").replace(/<[^>]+>/g, "");
    next = next.replace(/<meta\s+property=["']og:image["'][^>]*>\s*/i, match => `${match}    <meta property=\"og:image:alt\" content=\"${escapeHtml(normalizeSpace(t))}\" />\n`);
  }
  return next;
};

const ensureTwitterSite = html => {
  if (/name=["']twitter:site["']/i.test(html)) return html;
  return html.replace(/<meta\s+name=["']twitter:card["'][^>]*>\s*/i, match => `${match}    <meta name=\"twitter:site\" content=\"@sigidingo\" />\n`);
};

const caseFileExists = id => fs.existsSync(path.join(ROOT, `case-${id}.html`));

const buildPortfolioCards = () => {
  const cards = (Array.isArray(projects) ? projects : []).map(project => {
    const category = project.category === "uxui" ? "UX/UI" : "WEB";
    const title = escapeHtml(project.title || "Project");
    const subtitle = escapeHtml(project.subtitle || "");
    const image = escapeHtml(project.image || "assets/images/it-platform/cover.png");
    const caseHref = caseFileExists(project.id) ? `case-${project.id}.html` : "";
    const action = caseHref
      ? `<a class=\"proof-link\" href=\"${caseHref}\">Смотреть кейс</a>`
      : "";

    return `            <article class=\"project-card reveal\" data-category=\"${escapeHtml(project.category || "web")}\">\n              <img src=\"${image}\" alt=\"${title}\" loading=\"lazy\" decoding=\"async\" width=\"1200\" height=\"630\" />\n              <div class=\"content\">\n                <span class=\"tag\">${category}</span>\n                <h3>${title}</h3>\n                <p>${subtitle}</p>\n                ${action}\n              </div>\n            </article>`;
  });

  return cards.join("\n");
};

const buildBlogCards = () => {
  const sorted = [...(Array.isArray(articles) ? articles : [])].sort((a, b) => parseRuDate(b.date) - parseRuDate(a.date));
  return sorted
    .map(item => {
      const tags = Array.isArray(item.tags) ? item.tags : [];
      const tagHtml = tags.map(tag => `<span class=\"tag-pill\">${escapeHtml(tag)}</span>`).join("");
      const title = escapeHtml(item.title || "Статья");
      const excerpt = escapeHtml(item.excerpt || "");
      const date = escapeHtml(item.date || "");
      const readTime = escapeHtml(item.readTime || "");
      const cover = escapeHtml(item.cover || "assets/images/blog-covers/ux-audit.svg");
      return `            <a class=\"article-link\" href=\"blog/${escapeHtml(item.id)}.html\">\n              <article class=\"article-card reveal\">\n                <div class=\"article-cover\">\n                  <img src=\"${cover}\" alt=\"${title}\" loading=\"lazy\" decoding=\"async\" width=\"1200\" height=\"630\" />\n                </div>\n                <div class=\"article-body\">\n                  <div class=\"article-meta\">\n                    <span>${date}</span>\n                    <span>${readTime}</span>\n                  </div>\n                  <h4>${title}</h4>\n                  <p>${excerpt}</p>\n                  <div class=\"tag-list\">${tagHtml}</div>\n                </div>\n              </article>\n            </a>`;
    })
    .join("\n");
};

const DIMENSION_CACHE = new Map();

const resolveImagePath = (file, src) => {
  if (!src || /^https?:\/\//i.test(src) || src.startsWith("data:")) return null;
  const clean = src.split("?")[0].split("#")[0];
  const decoded = decodeURI(clean);
  if (decoded.startsWith("/")) return path.join(ROOT, decoded.slice(1));
  return path.resolve(path.dirname(path.join(ROOT, file)), decoded);
};

const readSvgDimensions = filePath => {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const w = content.match(/\bwidth=["']([\d.]+)(?:px)?["']/i)?.[1];
    const h = content.match(/\bheight=["']([\d.]+)(?:px)?["']/i)?.[1];
    if (w && h) return { width: Math.round(Number(w)), height: Math.round(Number(h)) };
    const vb = content.match(/\bviewBox=["']([\d.\s-]+)["']/i)?.[1];
    if (vb) {
      const parts = vb.trim().split(/\s+/).map(Number);
      if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
        return { width: Math.round(parts[2]), height: Math.round(parts[3]) };
      }
    }
  } catch {}
  return null;
};

const readRasterDimensions = filePath => {
  try {
    const out = execSync(`sips -g pixelWidth -g pixelHeight ${JSON.stringify(filePath)}`, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
    const w = Number(out.match(/pixelWidth:\s*(\d+)/)?.[1]);
    const h = Number(out.match(/pixelHeight:\s*(\d+)/)?.[1]);
    if (w > 0 && h > 0) return { width: w, height: h };
  } catch {}
  return null;
};

const getDimensions = filePath => {
  if (!filePath) return null;
  if (DIMENSION_CACHE.has(filePath)) return DIMENSION_CACHE.get(filePath);
  let dims = null;
  if (filePath.toLowerCase().endsWith(".svg")) {
    dims = readSvgDimensions(filePath);
  } else {
    dims = readRasterDimensions(filePath);
  }
  DIMENSION_CACHE.set(filePath, dims);
  return dims;
};

const ensureImgAttrs = (imgTag, file, index) => {
  let out = imgTag;
  const src = out.match(/\bsrc=["']([^"']+)["']/i)?.[1] || "";
  if (/https?:\/\/mc\.yandex\.ru\//i.test(src)) {
    if (!/\bwidth=["']\d+["']/i.test(out)) out = out.replace(/<img\b/i, '<img width="1"');
    if (!/\bheight=["']\d+["']/i.test(out)) out = out.replace(/<img\b/i, '<img height="1"');
    if (!/\bloading=["']/i.test(out)) out = out.replace(/<img\b/i, '<img loading="eager"');
    if (!/\bdecoding=["']/i.test(out)) out = out.replace(/<img\b/i, '<img decoding="async"');
    return out;
  }

  const filePath = resolveImagePath(file, src);
  const dims =
    getDimensions(filePath) ||
    (src.includes("blog-covers") ? { width: 1200, height: 630 } : null) ||
    (!src ? { width: 1200, height: 675 } : null);

  const hasLoading = /\bloading=["']/i.test(out);
  if (!hasLoading) {
    const mode = index === 0 ? "eager" : "lazy";
    out = out.replace(/<img\b/i, `<img loading=\"${mode}\"`);
  }

  if (!/\bdecoding=["']/i.test(out)) {
    out = out.replace(/<img\b/i, '<img decoding=\"async\"');
  }

  if (dims && !/\bwidth=["']/i.test(out)) {
    out = out.replace(/<img\b/i, `<img width=\"${dims.width}\"`);
  }
  if (dims && !/\bheight=["']/i.test(out)) {
    out = out.replace(/<img\b/i, `<img height=\"${dims.height}\"`);
  }

  return out;
};

const replaceBetween = (html, startMarker, endMarker, replacement) => {
  const start = html.indexOf(startMarker);
  if (start === -1) return html;
  const end = html.indexOf(endMarker, start);
  if (end === -1) return html;
  return `${html.slice(0, start)}${replacement}${html.slice(end)}`;
};

for (const file of HTML_FILES) {
  const abs = path.join(ROOT, file);
  let html = fs.readFileSync(abs, "utf8");

  if (file === "blog.html") {
    const staticCards = buildBlogCards();
    html = replaceBetween(
      html,
      '<div class="articles-grid blog-feed-grid" id="blogGrid">',
      "        </div>\n      </section>",
      `<div class=\"articles-grid blog-feed-grid\" id=\"blogGrid\">\n${staticCards}\n          </div>\n`
    );
  }

  if (file === "portfolio.html") {
    const staticCards = buildPortfolioCards();
    html = replaceBetween(
      html,
      '<div class="projects-grid" id="projects-grid">',
      "          </div>\n        </div>\n      </section>",
      `<div class=\"projects-grid\" id=\"projects-grid\">\n${staticCards}\n          </div>\n`
    );
  }

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']\s*\/?\s*>/i);
  const h1 = firstH1(html);

  if (titleMatch) {
    const updatedTitle = clampTitle(titleMatch[1], file);
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(updatedTitle)}</title>`);
  }

  if (descMatch) {
    const updatedDesc = clampDesc(descMatch[1], file, h1);
    html = html.replace(descMatch[0], `<meta name=\"description\" content=\"${escapeHtml(updatedDesc)}\" />`);
  }

  html = ensureTwitterSite(html);
  html = ensureOgImageMeta(html);

  if (file === "cv.html") {
    html = html.replace(
      /<link rel="canonical" href="https:\/\/sigidingo\.online\/about\.html" \/>/,
      '<link rel="canonical" href="https://sigidingo.online/cv.html" />'
    );
  }

  let imgIndex = 0;
  html = html.replace(/<img\b[^>]*>/gi, tag => {
    const next = ensureImgAttrs(tag, file, imgIndex);
    imgIndex += 1;
    return next;
  });

  fs.writeFileSync(abs, html);
}

console.log(`SEO bulk optimization complete. Files processed: ${HTML_FILES.length}`);
