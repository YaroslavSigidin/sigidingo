#!/usr/bin/env python3
"""One-off: replace first <header>...</header> with unified Russian nav. Run from repo root."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

HEADER_NEW = """    <header>
      <div class="container nav">
        <a class="logo" href="/">SIGIDINGO</a>
        <nav class="nav-links" id="navLinks">
          <a href="/portfolio" class="nav-link">Портфолио</a>
          <a href="/about" class="nav-link">Обо мне / CV</a>
          <a href="/blog" class="nav-link">Блог</a>
          <a href="/tests" class="nav-link">Тесты</a>
          <a href="/" class="nav-link">Главная</a>
        </nav>
        <div class="nav-tools">
          <a class="nav-telegram" href="https://t.me/sigidingo" target="_blank" rel="noreferrer">
            <span class="icon-circle">
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M21.8 4.6 2.9 11.9c-1.3.5-1.3 1.3-.2 1.7l4.7 1.5 1.8 5.4c.2.6.1.9.9.9.6 0 .9-.3 1.3-.7l2.3-2.2 4.8 3.5c.9.5 1.5.2 1.7-.8l3.1-14.7c.3-1.2-.5-1.7-1.5-1.3zM9.3 14.9l9-5.7c.4-.3.8-.1.5.2l-7.3 6.6-.3 3.2-1.9-4.3z"/>
              </svg>
            </span>
            Telegram
          </a>
          <button class="theme-switch" data-theme-toggle type="button" aria-label="Переключить тему">
            <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M12.3 2.2c-3.6.3-6.5 3.4-6.5 7.1 0 3.9 3.2 7.1 7.1 7.1 2.4 0 4.5-1.1 5.8-2.9-4.3.7-7.9-2.8-6.4-6.9z"/>
            </svg>
            <span class="track"><span class="thumb"></span></span>
          </button>
        </div>
        <button class="mobile-toggle" id="mobileToggle" type="button" aria-label="Открыть меню" aria-controls="navLinks" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
    </header>"""

PAT = re.compile(r"<header\b[^>]*>[\s\S]*?</header>", re.IGNORECASE)


def main():
    n_files = 0
    for p in sorted(ROOT.rglob("*.html")):
        if "node_modules" in p.parts or "auth-figma-sync" in p.parts:
            continue
        text = p.read_text(encoding="utf-8")
        if "<header" not in text.lower():
            continue
        new_text, count = PAT.subn(HEADER_NEW, text, count=1)
        if count != 1:
            print("SKIP (no single header):", p.relative_to(ROOT))
            continue
        if new_text == text:
            continue
        p.write_text(new_text, encoding="utf-8")
        n_files += 1
    print("Updated", n_files, "files")


if __name__ == "__main__":
    main()
