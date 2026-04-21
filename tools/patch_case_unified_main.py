#!/usr/bin/env python3
"""Inject unified case study <main> + lightbox + cache-bust."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CACHE = "20260414-case-content-visibility"

CASE_CARDS = [
    (
        "/case-octoclick",
        "Octoclick — открыть кейс",
        """<img src="assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/Octoclick/%D0%9E%D0%91%D0%9B%D0%9E%D0%96%D0%9A%D0%90.jpg" srcset="assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/Octoclick/%D0%9E%D0%91%D0%9B%D0%9E%D0%96%D0%9A%D0%90-640.jpg 640w, assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/Octoclick/%D0%9E%D0%91%D0%9B%D0%9E%D0%96%D0%9A%D0%90-960.jpg 960w, assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/Octoclick/%D0%9E%D0%91%D0%9B%D0%9E%D0%96%D0%9A%D0%90.jpg 1200w" sizes="(max-width: 640px) 92vw, 44vw" alt="" loading="lazy" decoding="async" width="1200" height="630" />""",
        "Octoclick",
        "AdTech — аналитика и управление кампаниями",
    ),
    (
        "/case-visiflow",
        "VISI FLOW — открыть кейс",
        """<img src="assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/visiflow/HERO.jpg" srcset="assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/visiflow/HERO-640.jpg 640w, assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/visiflow/HERO-960.jpg 960w, assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/visiflow/HERO.jpg 1200w" sizes="(max-width: 640px) 92vw, 44vw" alt="" loading="lazy" decoding="async" width="1200" height="630" />""",
        "VISI FLOW",
        "AI‑конвертация строительных проектных документов",
    ),
    (
        "/case-mirox",
        "MIROX — открыть кейс",
        """<img src="assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/MIROX%201/%D0%9E%D0%91%D0%9B%D0%9E%D0%96%D0%9A%D0%90.jpg" srcset="assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/MIROX%201/%D0%9E%D0%91%D0%9B%D0%9E%D0%96%D0%9A%D0%90-640.jpg 640w, assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/MIROX%201/%D0%9E%D0%91%D0%9B%D0%9E%D0%96%D0%9A%D0%90-960.jpg 960w, assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/MIROX%201/%D0%9E%D0%91%D0%9B%D0%9E%D0%96%D0%9A%D0%90.jpg 1200w" sizes="(max-width: 640px) 92vw, 44vw" alt="" loading="lazy" decoding="async" width="1200" height="630" />""",
        "MIROX",
        "SaaS для брендов и креаторов",
    ),
    (
        "/case-ai",
        "AI — открыть кейс",
        """<img src="assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/AI/HERO.png" srcset="assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/AI/HERO-640.png 640w, assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/AI/HERO-960.png 960w, assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/AI/HERO.png 1200w" sizes="(max-width: 640px) 92vw, 44vw" alt="" loading="lazy" decoding="async" width="1200" height="630" />""",
        "AI",
        "Консоль AI‑ассистента для запросов",
    ),
    (
        "/case-mirox-app",
        "MIROX APP — открыть кейс",
        """<img src="assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/MIROX%20APP/HERO_.jpg" srcset="assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/MIROX%20APP/HERO_-640.jpg 640w, assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/MIROX%20APP/HERO_-960.jpg 960w, assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/MIROX%20APP/HERO_.jpg 1200w" sizes="(max-width: 640px) 92vw, 44vw" alt="" loading="lazy" decoding="async" width="1200" height="630" />""",
        "MIROX APP",
        "Мобильный сервис для заданий",
    ),
    (
        "/case-nok",
        "NOK — открыть кейс",
        """<img src="assets/images/HERO/NOK-20260212.jpg" alt="" loading="lazy" decoding="async" width="1200" height="630" />""",
        "NOK",
        "Образовательная платформа и CRM",
    ),
]


def more_cases_section(current_href: str) -> str:
    pool = [c for c in CASE_CARDS if c[0] != current_href]
    picked = pool[:4]
    rows = []
    for href, aria, img_html, title, desc in picked:
        rows.append(
            f"""            <a class="project-card reveal case-more-case-card" href="{href}" aria-label="{aria}">
              {img_html}
              <div class="content">
                <span class="tag">UX/UI</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </a>"""
        )
    inner = "\n".join(rows)
    return f"""      <section class="section case-more-cases" aria-labelledby="case-more-cases-title">
        <div class="container reveal">
          <p class="section-subtitle">Портфолио</p>
          <h2 class="section-title" id="case-more-cases-title">Другие кейсы</h2>
          <div class="projects-grid case-more-cases-grid">
{inner}
          </div>
        </div>
      </section>"""


def build_main(title_placeholder: str, current_href: str) -> str:
    more = more_cases_section(current_href)
    story = """
      <section class="section case-section-deep" id="caseDeepSection">
        <div class="container reveal">
          <p class="section-subtitle">Детали</p>
          <h2 class="section-title">Подробнее о проекте</h2>
          <div id="caseStoryEmbed" class="case-story-embed"></div>
        </div>
      </section>
"""
    return f"""    <main id="case-main">
      <section class="section case-section-lead">
        <div class="container case-grid">
          <div class="reveal case-hero-inner case-hero-embedded">
            <h1 id="caseTitle">{title_placeholder}</h1>
            <p class="case-hero-subtitle" id="caseSubtitle"></p>
            <div class="tag-list" id="caseTags"></div>
            <div class="case-links-row" id="caseLinks"></div>
          </div>
          <div class="reveal">
            <p class="section-subtitle">Задача</p>
            <h2 class="section-title">Цель</h2>
            <p id="caseTask"></p>
          </div>
          <div class="reveal">
            <p class="section-subtitle">Что сделано</p>
            <h2 class="section-title">Решение</h2>
            <ul class="case-list" id="caseWhatDone"></ul>
            <div class="case-results-embed">
              <p class="section-subtitle case-results-eyebrow">Метрики</p>
              <h2 class="section-title case-results-title">Результаты</h2>
              <div class="case-results-grid" id="caseResultsCards"></div>
              <div class="case-gantt-embed" id="caseGanttSection">
                <p class="section-subtitle case-gantt-eyebrow">Сроки</p>
                <div class="case-gantt-embed-header">
                  <h2 class="section-title case-gantt-embed-title">Таймлайн</h2>
                  <div class="case-gantt-general-dates" id="caseGanttGeneralDates"></div>
                </div>
                <div class="case-gantt" id="caseGantt"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
{story}
      <section class="section case-section-gallery" id="caseGallerySection">
        <div class="container reveal">
          <p class="section-subtitle">Галерея</p>
          <h2 class="section-title">Экраны</h2>
          <div class="gallery" id="caseGallery"></div>
        </div>
      </section>

{more}
    </main>"""


LIGHTBOX = f"""    <div class="lightbox" id="lightbox">
      <button class="prev" data-lightbox-prev>‹</button>
      <img height="675" width="1200" decoding="async" loading="lazy" src="" alt="" />
      <button class="next" data-lightbox-next>›</button>
    </div>
<script src="assets/js/main.js?v={CACHE}" defer></script>"""


def patch_case_page(rel: str, current_href: str, title_placeholder: str) -> None:
    path = ROOT / rel
    text = path.read_text(encoding="utf-8")

    if not re.search(r"<body[^>]*\bcase-study-unified\b", text):
        text = re.sub(r"<body([^>]+)>", lambda m: f'<body{m.group(1)} class="case-study-unified">', text, count=1)

    text = re.sub(r"styles\.css\?v=[^\"']+", f"styles.css?v={CACHE}", text)

    main_html = build_main(title_placeholder, current_href)
    text = re.sub(
        r'(<nav class="container breadcrumbs"[^>]*>[\s\S]*?</nav>)\s*[\s\S]*?(<footer class="footer">[\s\S]*?</footer>)',
        r"\1\n\n" + main_html + r"\n\n\2",
        text,
        count=1,
    )

    text = re.sub(r"<script src=\"assets/js/main\.js\?v=[^\"]+\"[^>]*></script>\s*", "", text)
    if '<div class="lightbox" id="lightbox">' not in text:
        text = re.sub(r"(</footer>)", r"\1\n\n" + LIGHTBOX, text, count=1)
    else:
        text = re.sub(r"<script src=\"assets/js/main\.js\?v=[^\"]+\"[^>]*></script>", f'<script src="assets/js/main.js?v={CACHE}" defer></script>', text, count=1)

    if f"main.js?v={CACHE}" not in text:
        text = re.sub(r"</body>", f'<script src="assets/js/main.js?v={CACHE}" defer></script>\n  </body>', text, count=1)

    path.write_text(text, encoding="utf-8")


def patch_octoclick() -> None:
    path = ROOT / "case-octoclick/index.html"
    text = path.read_text(encoding="utf-8")
    if 'class="case-study-unified"' not in text:
        text = text.replace(
            '<body data-case="octoclick" data-theme="dark">',
            '<body data-case="octoclick" data-theme="dark" class="case-study-unified">',
        )
    text = re.sub(r"styles\.css\?v=[^\"']+", f"styles.css?v={CACHE}", text)
    text = re.sub(r"main\.js\?v=[^\"']+", f"main.js?v={CACHE}", text)
    path.write_text(text, encoding="utf-8")


def main() -> None:
    cases = [
        ("case-visiflow/index.html", "/case-visiflow", "VISI FLOW"),
        ("case-ai/index.html", "/case-ai", "AI"),
        ("case-nok/index.html", "/case-nok", "NOK"),
        ("case-winglish/index.html", "/case-winglish", "WINGLISH"),
        ("case-mirox/index.html", "/case-mirox", "MIROX"),
        ("case-mirox-app/index.html", "/case-mirox-app", "MIROX APP"),
        ("case-pazl-kod-platform/index.html", "/case-pazl-kod-platform", "PAZL&KOD Platform"),
        ("case-in-it/index.html", "/case-in-it", "IN IT"),
        ("case-weintek-panel/index.html", "/case-weintek-panel", "WEINTEK PANEL"),
    ]
    for rel, href, title in cases:
        patch_case_page(rel, href, title)
        print("patched", rel)
    patch_octoclick()
    print("patched case-octoclick/index.html")


if __name__ == "__main__":
    main()
