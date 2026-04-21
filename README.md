# Yaroslav Sigidin — портфолио

Статический сайт‑портфолио (HTML + CSS + ванильный JS). Кейсы, блог, резюме и мини‑игры на главной.
Продакшн: [sigidingo.online](https://sigidingo.online).

## Структура

```
.
├── index.html / blog.html / portfolio.html / about.html / cv.html …  — основные страницы
├── case-*/ и case-*.html           — кейсы (каждая папка + «плоский» файл)
├── blog/ и blog/*.html             — статьи и их SEO‑дубли
├── assets/
│   ├── css/styles.css              — основные стили
│   ├── js/
│   │   ├── data.js                 — контент сайта (проекты, статьи, кейсы)
│   │   ├── main.js                 — рендер / интеракции
│   │   └── *.js                    — мини‑фичи (Pac‑Man, DVD, и т.д.)
│   └── images/                     — картинки кейсов, обложки блога и т.п.
├── FOLDER/                         — иконки папок macOS, используются на главной
├── sitemap.xml / robots.txt        — SEO
└── .github/workflows/deploy.yml    — деплой на VPS
```

## Локальный запуск

Двойной клик в Finder по `open-local.command` или в терминале:

```bash
python3 -m http.server 8765 --bind 127.0.0.1
open http://127.0.0.1:8765/
```

При занятом порте можно указать другой:

```bash
python3 -m http.server 8766 --bind 127.0.0.1
```

## Как попадает на прод

На push в `main` GitHub Action (`.github/workflows/deploy.yml`):

1. Подключается по SSH к VPS (секреты `SERVER_HOST`, `SERVER_USER`, `SSH_PRIVATE_KEY`).
2. Клонирует репозиторий во временную папку.
3. Раскладывает содержимое в `/var/www/html/`.
4. Пингует IndexNow (Yandex / Bing) по всем URL из `sitemap.xml`.

Никаких билд‑шагов нет — всё, что закоммичено, сразу попадает на сайт.

## Как добавить кейс

1. Положи обложку и материалы в папку кейса (например, `case-логотип-xxx/HERO.jpg`).
2. В `assets/js/data.js` добавь:
   - набор картинок в `projectImageSets["slug"]`;
   - проект в `projects` (появится в портфолио);
   - кейс в `caseStudies["slug"]` (появится на странице кейса).
3. Создай `case-slug.html` и `case-slug/index.html` по образцу существующих.
4. Добавь URL в `sitemap.xml`.
5. Обнови `DATA_BUNDLE` в `assets/js/main.js` (меняй версию, чтобы браузер сбросил кэш).

## Как добавить статью в блог

1. Положи обложку в `assets/images/blog-covers/<slug>.svg`.
2. В `assets/js/data.js` добавь объект в массив `articles`.
3. Создай `blog/<slug>.html` и `blog/<slug>/index.html` по шаблону.
4. Добавь URL в `sitemap.xml` и обнови `DATA_BUNDLE` в `main.js`.

## Секреты / токены

В репозитории **не хранятся** PAT, API‑ключи или пароли. Если случайно попадёт токен в
`.git/config` (`origin`‑URL `https://ghp_…@github.com/...`) — отзови его в GitHub →
Settings → Developer settings → Personal access tokens.
