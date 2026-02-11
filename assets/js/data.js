const local = path => encodeURI(path);
const locals = (...paths) => paths.map(local);

const projectImageSets = {
  "octoclick": locals(
    "assets/images/платформы/Octoclick/ОБЛОЖКА.jpg",
    "assets/images/платформы/Octoclick/Slide 16_9 - 26.png",
    "assets/images/платформы/Octoclick/Slide 16_9 - 22.png",
    "assets/images/платформы/Octoclick/Slide 16_9 - 24.png",
    "assets/images/платформы/Octoclick/Slide 16_9 - 27.png",
    "assets/images/платформы/Octoclick/Slide 16_9 - 15.png",
    "assets/images/платформы/Octoclick/Slide 16_9 - 18.png",
    "assets/images/платформы/Octoclick/Slide 16_9 - 25.png",
    "assets/images/платформы/Octoclick/Slide 16_9 - 21.png",
    "assets/images/платформы/Octoclick/Slide 16_9 - 17.png",
    "assets/images/платформы/Octoclick/Slide 16_9 - 20.png",
    "assets/images/платформы/Octoclick/Slide 16_9 - 19.png",
    "assets/images/платформы/Octoclick/Slide 16_9 - 23.png"
  ),
  ai: locals(
    "assets/images/платформы/AI/ОБЛОЖКА.jpg",
    "assets/images/платформы/AI/1.jpg",
    "assets/images/платформы/AI/2.jpg",
    "assets/images/платформы/AI/3.jpg",
    "assets/images/платформы/AI/4.jpg"
  ),
  amazon: locals(
    "assets/images/сайты/AMAZON/Frame 2147223643.png",
    "assets/images/сайты/AMAZON/Frame 2147223643.png",
    "assets/images/сайты/AMAZON/Frame 2147223644.png"
  ),
  "castle-music": locals(
    "assets/images/HERO/CASTLE MUSIC.jpg",
    "assets/images/сайты/CASTLE MUSIC/Frame 2147223639.png",
    "assets/images/сайты/CASTLE MUSIC/Frame 2147223640.png",
    "assets/images/сайты/CASTLE MUSIC/Frame 2147223642.png"
  ),
  ruspab: locals(
    "assets/images/сайты/RUSPAB/р.png",
    "assets/images/сайты/RUSPAB/1000017605.png"
  ),
  solomadom: locals(
    "assets/images/сайты/SOLOMADOM/Frame 2147223645.png",
    "assets/images/сайты/SOLOMADOM/Frame 2147223645.png",
    "assets/images/сайты/SOLOMADOM/Frame 2147223648.png",
    "assets/images/сайты/SOLOMADOM/Frame 2147223649.png",
    "assets/images/сайты/SOLOMADOM/Frame 2147223650.png"
  ),
  plitka: locals(
    "assets/images/HERO/ОБЛОЖКА-3.jpg",
    "assets/images/сайты/PLITKA/ПЛ1 1.png",
    "assets/images/сайты/PLITKA/ПЛ2 1.jpg"
  ),
  ariva: locals(
    "assets/images/HERO/ОБЛОЖКА-2.jpg",
    "assets/images/сайты/ARIVA/АРИВА111 1.jpg"
  ),
  air: locals(
    "assets/images/сайты/AIR/Frame 2147223670.png"
  ),
  "trip-air": locals(
    "assets/images/сайты/AIR/Frame 2147223670.png"
  ),
  "plitka-service": locals(
    "assets/images/HERO/ОБЛОЖКА-1.jpg",
    "assets/images/сайты/PLITKA SERVICE/ЛА1.png",
    "assets/images/сайты/PLITKA SERVICE/ЛА2.jpg"
  ),
  profi: locals(
    "assets/images/сайты/PROFI/Frame 2147223665.png",
    "assets/images/сайты/PROFI/Frame 2147223665.png",
    "assets/images/сайты/PROFI/Frame 2147223668.png",
    "assets/images/сайты/PROFI/Frame 2147223669.png"
  ),
  iss: locals(
    "assets/images/HERO/ISS.jpg",
    "assets/images/сайты/ISS/1000017605.png",
    "assets/images/сайты/ISS/1000017608.png",
    "assets/images/сайты/ISS/1000017609.png",
    "assets/images/сайты/ISS/М1 1.png",
    "assets/images/сайты/ISS/М2 1.png",
    "assets/images/сайты/ISS/М3 1.png",
    "assets/images/сайты/ISS/М4 1.png"
  ),
  kvatro: locals(
    "assets/images/HERO/KVATRO.jpg",
    "assets/images/сайты/KVATRO/1000017604.png",
    "assets/images/сайты/KVATRO/1000017605.png",
    "assets/images/сайты/KVATRO/1000017609.png",
    "assets/images/сайты/KVATRO/К1 1.png",
    "assets/images/сайты/KVATRO/К2 1.png",
    "assets/images/сайты/KVATRO/К3 1.png",
    "assets/images/сайты/KVATRO/К4 1.png"
  ),
  "leki-travel": locals(
    "assets/images/сайты/LEKI TRAVEL/обл.jpg",
    "assets/images/сайты/LEKI TRAVEL/обл.jpg",
    "assets/images/сайты/LEKI TRAVEL/1000017605.png",
    "assets/images/сайты/LEKI TRAVEL/1000017606.png",
    "assets/images/сайты/LEKI TRAVEL/1000017610.png",
    "assets/images/сайты/LEKI TRAVEL/1000017611.png",
    "assets/images/сайты/LEKI TRAVEL/1000017612.png",
    "assets/images/сайты/LEKI TRAVEL/Л1 1.png",
    "assets/images/сайты/LEKI TRAVEL/Л2 1.png",
    "assets/images/сайты/LEKI TRAVEL/Л3 1.png",
    "assets/images/сайты/LEKI TRAVEL/Л4 1.png",
    "assets/images/сайты/LEKI TRAVEL/Л5 1.png",
    "assets/images/сайты/LEKI TRAVEL/Л6 1.png"
  ),
  nok: locals(
    "assets/images/сайты/NOK/Frame 1321316814.jpg",
    "assets/images/сайты/NOK/1000017604.png",
    "assets/images/сайты/NOK/1000017606.png",
    "assets/images/сайты/NOK/1000017610.png",
    "assets/images/сайты/NOK/1000017613.png",
    "assets/images/сайты/NOK/1000017614.png",
    "assets/images/сайты/NOK/1000017616.png",
    "assets/images/сайты/NOK/Frame 1321316814.jpg",
    "assets/images/сайты/NOK/Frame 1321316816.png",
    "assets/images/сайты/NOK/Frame 1321316817.png",
    "assets/images/сайты/NOK/Frame 1321316859.png",
    "assets/images/сайты/NOK/Frame 1321316861.png"
  ),
  "mirox-app": locals(
    "assets/images/платформы/MIROX APP/Frame 2147223980.jpg",
    "assets/images/платформы/MIROX APP/Frame 2147223980.jpg",
    "assets/images/платформы/MIROX APP/Frame 2147224058.jpg",
    "assets/images/платформы/MIROX APP/Frame 2147224059.jpg"
  ),
  "tochka-rosta": locals(
    "assets/images/HERO/ТОЧКА.jpg",
    "assets/images/платформы/TOCHKA ROSTA/Frame 2147223724.png"
  ),
  "media-kit": locals(
    "assets/images/платформы/Media Kit/Frame 2147223656.jpg",
    "assets/images/платформы/Media Kit/Frame 2147223657.png"
  ),
  "space-camp": locals(
    "assets/images/сайты/SPACE CAMP/Frame 2147223663.png",
    "assets/images/сайты/SPACE CAMP/Frame 2147223663.png",
    "assets/images/сайты/SPACE CAMP/Frame 2147223664.png"
  ),
  "vihlop-expert": locals(
    "assets/images/HERO/VIHLOP EXPERT.jpg",
    "assets/images/сайты/VIHLOP EXPERT/1000017605.png",
    "assets/images/сайты/VIHLOP EXPERT/1000017610.png",
    "assets/images/сайты/VIHLOP EXPERT/В1 1.png",
    "assets/images/сайты/VIHLOP EXPERT/В2 1.png",
    "assets/images/сайты/VIHLOP EXPERT/В3 1.png"
  ),
  "it-platform": locals(
    "assets/images/платформы/в IT Platform/ОБЛОЖКА.jpg",
    "assets/images/it-platform/02.png",
    "assets/images/it-platform/03.png",
    "assets/images/it-platform/04.png",
    "assets/images/it-platform/05.png",
    "assets/images/it-platform/06.png",
    "assets/images/it-platform/07.png"
  ),
  "weintek-panel": locals(
    "assets/images/HERO/ОБЛОЖКА-4.jpg",
    "assets/images/платформы/WEINTEK PANEL/Frame 2147223729.png",
    "assets/images/платформы/WEINTEK PANEL/Frame 2147223730.png"
  ),
  "mirox-1": locals(
    "assets/images/платформы/MIROX 1/ОБЛОЖКА.jpg",
    "assets/images/платформы/MIROX 1/75.jpg",
    "assets/images/платформы/MIROX 1/76.jpg",
    "assets/images/платформы/MIROX 1/77.jpg",
    "assets/images/платформы/MIROX 1/78.jpg",
    "assets/images/платформы/MIROX 1/79.jpg",
    "assets/images/платформы/MIROX 1/80.jpg",
    "assets/images/платформы/MIROX 1/81.jpg",
    "assets/images/платформы/MIROX 1/82.jpg"
  ),
  "winglish": locals(
    "assets/images/платформы/WINGLISH/Frame 2087325780.png",
    "assets/images/платформы/WINGLISH/Frame 2087325780.png",
    "assets/images/платформы/WINGLISH/Frame 2087325781.png",
    "assets/images/платформы/WINGLISH/Frame 2087325784.png",
    "assets/images/платформы/WINGLISH/Frame 2087325785.png"
  ),
  "visiflow": locals(
    "assets/images/платформы/в IT Platform/VISIFLOW/ОБЛОЖКА.jpg",
    "assets/images/платформы/visiflow/frame-2147223711.jpg",
    "assets/images/платформы/visiflow/cover.jpg",
    "assets/images/платформы/visiflow/slide-7.jpg",
    "assets/images/платформы/visiflow/slide-8.jpg",
    "assets/images/платформы/visiflow/slide-2.jpg",
    "assets/images/платформы/visiflow/slide-3.jpg",
    "assets/images/платформы/visiflow/slide-9.jpg"
  )
};

const featuredProjects = [
  {
    id: "octoclick",
    title: "Octoclick",
    subtitle: "",
    image: projectImageSets["octoclick"][0]
  },
  {
    id: "visiflow",
    title: "VISI FLOW",
    subtitle: "",
    description:
      "Тёмная B2B‑платформа для работы с документацией: строгая навигация, плотные таблицы, панель задач и фокус на контроле процессов.",
    image: projectImageSets["visiflow"][0]
  },
  {
    id: "it-platform",
    title: "В IT Platform",
    subtitle: "",
    image: projectImageSets["it-platform"][0]
  },
  {
    id: "mirox-1",
    title: "MIROX 1",
    subtitle: "",
    image: projectImageSets["mirox-1"][0]
  }
];

const projects = [
  {
    id: "visiflow",
    title: "VISI FLOW",
    subtitle: "",
    category: "uxui",
    description:
      "B2B‑платформа для конвертации строительной документации в структурированные данные с помощью AI. Проектировал плотные таблицы, проверку результатов и сценарии пакетной обработки, сохранив строгую иерархию и читаемость. Фокус на контроле статусов, корректности и быстром переходе между задачами.",
    timeline: [
      { title: "Анализ процессов и ролей", period: "1 неделя" },
      { title: "Информационная архитектура", period: "1 неделя" },
      { title: "UI‑концепция и прототип", period: "2 недели" },
      { title: "Детализация и передача", period: "1 неделя" }
    ],
    technologies: ["AI‑конвертация", "Workflow‑статусы", "Data tables", "Версионирование"],
    tools: ["Figma", "FigJam", "Notion", "ProtoPie"],
    metrics: [
      "Сокращение времени проверки документов",
      "Снижение количества ошибок в разметке",
      "Рост прозрачности статусов и контроля"
    ],
    image: projectImageSets["visiflow"][0],
    gallery: projectImageSets["visiflow"].slice(1),
    caseKey: "visiflow"
  },
  {
    id: "octoclick",
    title: "Octoclick",
    subtitle: "",
    description:
      "Редизайн рекламной платформы с фокусом на аналитике и управлении кампаниями. Собрал понятную структуру разделов, сильную иерархию данных и удобные фильтры для быстрого доступа к метрикам. Интерфейс рассчитан на работу с большими объёмами отчётности и частыми сценариями оптимизации.",
    timeline: [
      { title: "Аудит текущего UX", period: "1 неделя" },
      { title: "Новая структура и сценарии", period: "2 недели" },
      { title: "Дизайн‑система и UI", period: "3 недели" },
      { title: "Адаптив и хэнд‑офф", period: "2 недели" }
    ],
    technologies: ["Design System", "Data Visualization", "Role‑based UI", "Responsive grid"],
    tools: ["Figma", "FigJam", "Notion", "Jira"],
    metrics: [
      "Сокращение времени анализа метрик",
      "Уменьшение количества обращений в поддержку",
      "Рост повторных запусков кампаний"
    ],
    category: "uxui",
    image: projectImageSets["octoclick"][0],
    gallery: projectImageSets["octoclick"].slice(1),
    caseKey: "octoclick"
  },
  {
    id: "mirox-1",
    title: "MIROX 1",
    subtitle: "",
    description:
      "Продуктовый кабинет с тёмной темой и плотной аналитикой. В интерфейсе собраны KPI‑виджеты, тренды и быстрые действия для контроля процессов в одном окне. Решение сделано под ежедневную работу менеджеров и оперативный мониторинг.",
    timeline: [
      { title: "Сбор требований", period: "1 неделя" },
      { title: "Каркас и метрики", period: "1 неделя" },
      { title: "UI и визуализация", period: "2 недели" },
      { title: "Прототип и уточнения", period: "1 неделя" }
    ],
    technologies: ["KPI‑дашборды", "Темная тема", "Alerts", "Data visualization"],
    tools: ["Figma", "FigJam", "Notion"],
    metrics: [
      "Быстрее доступ к ключевым KPI",
      "Упрощение ежедневного мониторинга",
      "Снижение времени на поиск данных"
    ],
    caseKey: "mirox-1",
    category: "uxui",
    image: projectImageSets["mirox-1"][0],
    gallery: projectImageSets["mirox-1"].slice(1)
  },
  {
    id: "ai",
    title: "AI",
    subtitle: "",
    description:
      "Консоль с AI‑ассистентом для быстрых запросов и работы с результатами. Сделал акцент на чистой подаче, контекстных подсказках и истории запросов, чтобы сократить время до полезного ответа. Интерфейс минималистичный, но с чёткой системой приоритетов.",
    timeline: [
      { title: "Сценарии запросов", period: "3 дня" },
      { title: "UX‑потоки и каркас", period: "4 дня" },
      { title: "UI‑концепция", period: "1 неделя" }
    ],
    technologies: ["Prompt‑workspace", "History view", "Context blocks", "Quick actions"],
    tools: ["Figma", "FigJam", "Notion"],
    metrics: [
      "Сокращение времени до ответа",
      "Рост повторных запросов",
      "Повышение читаемости результатов"
    ],
    caseKey: "ai",
    category: "uxui",
    image: projectImageSets.ai[0],
    gallery: projectImageSets.ai.slice(1)
  },
  {
    id: "it-platform",
    title: "В IT Platform",
    subtitle: "",
    description:
      "Клиентская платформа для управления задачами и операциями в светлой теме. Карточный интерфейс и статусы помогают быстро понимать состояние процессов, а интерфейс построен вокруг сценариев «создать → согласовать → выполнить».",
    timeline: [
      { title: "Маппинг процессов", period: "1 неделя" },
      { title: "IA и прототип", period: "1 неделя" },
      { title: "UI и гайдлайн", period: "2 недели" }
    ],
    technologies: ["Status system", "Card UI", "Task routing", "Role‑based flows"],
    tools: ["Figma", "FigJam", "Notion"],
    metrics: [
      "Сокращение времени согласования",
      "Рост прозрачности статусов",
      "Снижение ошибок при передаче задач"
    ],
    caseKey: "it-platform",
    category: "uxui",
    image: projectImageSets["it-platform"][0],
    gallery: projectImageSets["it-platform"].slice(1)
  },
  {
    id: "mirox-app",
    title: "MIROX APP",
    subtitle: "",
    description:
      "Мобильный сервис для выполнения заданий с пошаговым сценарием и чёткими CTA. Интерфейс монохромный, чтобы держать фокус на ключевых действиях и статусе задачи. Подходит для быстрых проверок и работы «в поле».",
    timeline: [
      { title: "Сценарии мобильного использования", period: "4 дня" },
      { title: "Каркас и навигация", period: "5 дней" },
      { title: "UI и прототип", period: "1 неделя" }
    ],
    technologies: ["Mobile‑first", "Quick actions", "Status tracking", "Offline‑ready"],
    tools: ["Figma", "FigJam", "ProtoPie"],
    metrics: [
      "Сокращение времени на выполнение задачи",
      "Рост завершённых сценариев",
      "Снижение количества ошибок ввода"
    ],
    caseKey: "mirox-app",
    category: "uxui",
    image: projectImageSets["mirox-app"][0],
    gallery: projectImageSets["mirox-app"].slice(1)
  },
  {
    id: "winglish",
    title: "WINGLISH",
    subtitle: "",
    description:
      "EdTech‑приложение для обучения английскому с короткими уроками и системой прогресса. Упор на мотивацию: визуальные уровни, карточки заданий и быстрые проверочные сценарии. Интерфейс адаптирован для ежедневных коротких сессий.",
    timeline: [
      { title: "Исследование целевой аудитории", period: "1 неделя" },
      { title: "Структура уроков", period: "1 неделя" },
      { title: "UI‑концепция и прототип", period: "2 недели" }
    ],
    technologies: ["Gamification", "Progress tracking", "Lesson builder", "Micro‑learning"],
    tools: ["Figma", "FigJam", "Notion"],
    metrics: [
      "Рост завершённых уроков",
      "Увеличение ежедневных сессий",
      "Снижение оттока на первом уроке"
    ],
    category: "uxui",
    image: projectImageSets["winglish"][0],
    gallery: projectImageSets["winglish"].slice(1),
    caseKey: "winglish"
  },
  {
    id: "nok",
    title: "NOK",
    subtitle: "",
    description:
      "Платформа для образовательной и сертификационной деятельности с табличными блоками и фильтрами. Сценарии рассчитаны на операционные задачи: поиск, согласование, контроль статусов. Визуально — чистая сетка и минимальный шум.",
    timeline: [
      { title: "Сбор требований", period: "4 дня" },
      { title: "Прототип и структура", period: "1 неделя" },
      { title: "UI и спецификация", period: "1 неделя" }
    ],
    technologies: ["Data tables", "Advanced filters", "Approval flow", "Role‑based access"],
    tools: ["Figma", "FigJam", "Notion"],
    metrics: [
      "Сокращение времени на поиск данных",
      "Уменьшение количества ошибок в заявках",
      "Рост скорости согласования"
    ],
    caseKey: "nok",
    category: "web",
    image: projectImageSets.nok[0],
    gallery: projectImageSets.nok.slice(1)
  },
  {
    id: "space-camp",
    title: "SPACE CAMP",
    subtitle: "",
    description:
      "Промо‑лендинг ретрита с футуристичным героем и атмосферным визуальным нарративом. Структура ведёт пользователя от идеи до бронирования, усиливая эмоцию через крупную типографику и визуальные акценты.",
    timeline: [
      { title: "Концепция и moodboard", period: "3 дня" },
      { title: "UX‑структура", period: "3 дня" },
      { title: "UI и анимации", period: "1 неделя" }
    ],
    technologies: ["Storytelling", "Hero‑visuals", "CTA‑flow", "Responsive grid"],
    tools: ["Figma", "FigJam", "Notion"],
    metrics: [
      "Рост вовлечения в первый экран",
      "Повышение конверсии в заявку",
      "Увеличение времени на странице"
    ],
    category: "web",
    image: projectImageSets["space-camp"][0],
    gallery: projectImageSets["space-camp"].slice(1)
  },
  {
    id: "iss",
    title: "ISS",
    subtitle: "",
    description:
      "Интерфейс мониторинга с акцентом на показатели и динамику. Плотные графики, статистические блоки и ясная иерархия дают возможность быстро принимать решения на основе данных.",
    timeline: [
      { title: "Сбор показателей", period: "4 дня" },
      { title: "Прототип дашборда", period: "1 неделя" },
      { title: "UI и детализация", period: "1 неделя" }
    ],
    technologies: ["Monitoring dashboards", "Charts", "Alerts", "Data density"],
    tools: ["Figma", "FigJam", "Notion"],
    metrics: [
      "Сокращение времени до инсайта",
      "Повышение точности мониторинга",
      "Снижение ручных проверок"
    ],
    category: "web",
    image: projectImageSets.iss[0],
    gallery: projectImageSets.iss.slice(1)
  },
  {
    id: "profi",
    title: "PROFI",
    subtitle: "",
    description:
      "Портал для бизнес‑ивентов и статей с акцентом на структуру контента. Строгая сетка, крупные заголовки и понятные CTA упрощают навигацию и повышают конверсию в заявку.",
    timeline: [
      { title: "Контентная карта", period: "3 дня" },
      { title: "Структура и UX", period: "1 неделя" },
      { title: "UI и оформление", period: "1 неделя" }
    ],
    technologies: ["Content grid", "Event cards", "CTA‑blocks", "SEO‑структура"],
    tools: ["Figma", "FigJam", "Notion"],
    metrics: [
      "Рост конверсии в заявку",
      "Увеличение глубины просмотра",
      "Уменьшение отказов"
    ],
    category: "web",
    image: projectImageSets.profi[0],
    gallery: projectImageSets.profi.slice(1)
  },
  {
    id: "solomadom",
    title: "SOLOMADOM",
    subtitle: "",
    description:
      "Сайт строительной компании с тёплой палитрой и акцентом на доверие. Модульная сетка позволяет показать услуги, этапы и реальные объекты, а сценарий заточен под быстрый запрос сметы.",
    timeline: [
      { title: "Структура услуг", period: "3 дня" },
      { title: "Прототип и тексты", period: "5 дней" },
      { title: "UI и адаптив", period: "1 неделя" }
    ],
    technologies: ["Service catalog", "Trust blocks", "Lead form", "Responsive grid"],
    tools: ["Figma", "FigJam", "Notion"],
    metrics: [
      "Рост заявок на расчёт",
      "Повышение доверия к бренду",
      "Снижение отказов"
    ],
    category: "web",
    image: projectImageSets.solomadom[0],
    gallery: projectImageSets.solomadom.slice(1)
  },
  {
    id: "amazon",
    title: "AMAZON",
    subtitle: "",
    description:
      "Маркетинговый лендинг онлайн‑курса с сильным оффером и последовательной воронкой. Контент выстроен от боли к результату, с блоками доверия и чёткими точками конверсии.",
    timeline: [
      { title: "Анализ аудитории", period: "3 дня" },
      { title: "Воронка и структура", period: "4 дня" },
      { title: "UI и конверсия", period: "1 неделя" }
    ],
    technologies: ["Marketing funnel", "Pricing blocks", "Proof sections", "CTA‑flow"],
    tools: ["Figma", "FigJam", "Notion"],
    metrics: [
      "Рост конверсии в заявку",
      "Увеличение времени на странице",
      "Повышение доверия к курсу"
    ],
    category: "web",
    image: projectImageSets.amazon[0],
    gallery: projectImageSets.amazon.slice(1)
  },
  {
    id: "castle-music",
    title: "CASTLE MUSIC",
    subtitle: "",
    description:
      "Атмосферный сайт музыкального лейбла с тёмной сценой и выразительной типографикой. Страница работает как витрина: анонсы релизов, медиа и событий собраны в единой визуальной системе.",
    timeline: [
      { title: "Арт‑направление", period: "3 дня" },
      { title: "UX‑структура", period: "4 дня" },
      { title: "UI и медиа", period: "1 неделя" }
    ],
    technologies: ["Media gallery", "Release cards", "Event blocks", "Brand visuals"],
    tools: ["Figma", "FigJam", "Notion"],
    metrics: [
      "Рост вовлечения в контент",
      "Увеличение кликов по релизам",
      "Повышение узнаваемости"
    ],
    category: "web",
    image: projectImageSets["castle-music"][0],
    gallery: projectImageSets["castle-music"].slice(1)
  },
  {
    id: "kvatro",
    title: "KVATRO",
    subtitle: "",
    description:
      "Имиджевый лендинг музыкального коллектива с акцентом на афишу и медиаконтент. Контрастная типографика и крупные визуальные блоки создают сценическую динамику.",
    timeline: [
      { title: "Сценарии и афиша", period: "3 дня" },
      { title: "UI‑концепция", period: "4 дня" },
      { title: "Визуальная система", period: "1 неделя" }
    ],
    technologies: ["Hero media", "Tour schedule", "CTA‑blocks", "Brand typography"],
    tools: ["Figma", "FigJam", "Notion"],
    metrics: [
      "Рост переходов к афише",
      "Увеличение вовлечения",
      "Повышение узнаваемости"
    ],
    category: "web",
    image: projectImageSets.kvatro[0],
    gallery: projectImageSets.kvatro.slice(1)
  },
  {
    id: "leki-travel",
    title: "LEKI TRAVEL",
    subtitle: "",
    description:
      "Туристический сервис с упором на маршруты и бронирование. Крупные фото и ясная структура помогают быстро сравнить варианты, а пользовательский путь ведёт к выбору и заявке.",
    timeline: [
      { title: "Карта маршрутов", period: "3 дня" },
      { title: "UX‑структура", period: "5 дней" },
      { title: "UI и адаптив", period: "1 неделя" }
    ],
    technologies: ["Route cards", "Booking CTA", "Filters", "Photo‑driven UI"],
    tools: ["Figma", "FigJam", "Notion"],
    metrics: [
      "Рост бронирований",
      "Снижение времени выбора",
      "Увеличение глубины просмотра"
    ],
    category: "web",
    image: projectImageSets["leki-travel"][0],
    gallery: projectImageSets["leki-travel"].slice(1)
  },
  {
    id: "vihlop-expert",
    title: "VIHLOP EXPERT",
    subtitle: "",
    description:
      "Сайт автосервиса с фокусом на доверие и запись. Крупные блоки преимуществ, понятные офферы и быстрый путь до заявки. Контент раскрывает экспертизу и реальные услуги.",
    timeline: [
      { title: "Структура услуг", period: "3 дня" },
      { title: "Прототип и тексты", period: "4 дня" },
      { title: "UI и адаптив", period: "1 неделя" }
    ],
    technologies: ["Service list", "Pricing blocks", "Lead form", "Trust badges"],
    tools: ["Figma", "FigJam", "Notion"],
    metrics: [
      "Рост записей в сервис",
      "Повышение доверия к бренду",
      "Снижение отказов"
    ],
    category: "web",
    image: projectImageSets["vihlop-expert"][0],
    gallery: projectImageSets["vihlop-expert"].slice(1)
  },
  {
    id: "ruspab",
    title: "RUS PUB",
    subtitle: "",
    description:
      "Лендинг для гастропроекта с фокусом на атмосферу, меню и быстрый контакт. Чёткая структура помогает сразу увидеть формат, кухню и способы связи.",
    timeline: [
      { title: "Сценарии и контент", period: "2 дня" },
      { title: "Прототип и структура", period: "3 дня" },
      { title: "UI и оформление", period: "4 дня" }
    ],
    technologies: ["Hero‑photo", "Menu blocks", "Contact CTA", "Content grid"],
    tools: ["Figma", "Notion"],
    metrics: [
      "Рост заявок на бронь",
      "Увеличение времени на странице",
      "Снижение отказов"
    ],
    category: "web",
    image: projectImageSets.ruspab[0],
    gallery: projectImageSets.ruspab.slice(1)
  },
  {
    id: "plitka",
    title: "PLITKA SERVICE",
    subtitle: "",
    description:
      "Сайт сервисной компании по укладке плитки. Структура выстроена вокруг примеров работ и понятного пути к заявке.",
    timeline: [
      { title: "Анализ услуг", period: "2 дня" },
      { title: "Структура и UX", period: "3 дня" },
      { title: "UI и адаптив", period: "4 дня" }
    ],
    technologies: ["Portfolio grid", "Service blocks", "Lead form", "Before/after"],
    tools: ["Figma", "Notion"],
    metrics: [
      "Рост обращений",
      "Упрощение выбора услуги",
      "Повышение доверия"
    ],
    category: "web",
    image: projectImageSets.plitka[0],
    gallery: projectImageSets.plitka.slice(1)
  },
  {
    id: "plitka-service",
    title: "AGROLAND",
    subtitle: "",
    description:
      "Лендинг с упором на скорость заявки и понятные блоки услуг. Визуальный стиль аккуратно подчеркивает надёжность сервиса.",
    timeline: [
      { title: "Сценарии и структура", period: "2 дня" },
      { title: "Прототип", period: "2 дня" },
      { title: "UI и финал", period: "3 дня" }
    ],
    technologies: ["CTA‑flow", "Service cards", "Trust blocks", "Responsive grid"],
    tools: ["Figma", "Notion"],
    metrics: [
      "Рост заявок",
      "Снижение времени принятия решения",
      "Повышение конверсии"
    ],
    category: "web",
    image: projectImageSets["plitka-service"][0],
    gallery: projectImageSets["plitka-service"].slice(1)
  },
  {
    id: "tochka-rosta",
    title: "ТОЧКА РОСТА",
    subtitle: "",
    description:
      "Платформа с фокусом на контент, навигацию и понятные сценарии для пользователей. Чистая структура и удобная подача информации.",
    timeline: [
      { title: "Структура и сценарии", period: "4 дня" },
      { title: "UX‑каркас", period: "5 дней" },
      { title: "UI и прототип", period: "1 неделя" }
    ],
    technologies: ["Content blocks", "Navigation", "Adaptive layout", "CTA‑flow"],
    tools: ["Figma", "FigJam"],
    metrics: [
      "Рост вовлечения",
      "Улучшение навигации",
      "Снижение отказов"
    ],
    category: "uxui",
    image: projectImageSets["tochka-rosta"][0],
    gallery: projectImageSets["tochka-rosta"].slice(1)
  },
  {
    id: "media-kit",
    title: "Media Kit",
    subtitle: "",
    description:
      "Медиакит для презентации бренда и продуктов: аккуратная типографика, чёткая структура и быстрый доступ к ключевым материалам.",
    timeline: [
      { title: "Структура контента", period: "2 дня" },
      { title: "UI‑направление", period: "3 дня" },
      { title: "Финальная сборка", period: "3 дня" }
    ],
    technologies: ["Presentation layout", "Brand typography", "Content hierarchy", "Visual grid"],
    tools: ["Figma", "Notion"],
    metrics: [
      "Повышение читаемости материалов",
      "Снижение времени на подготовку",
      "Удобство для партнёров"
    ],
    category: "uxui",
    image: projectImageSets["media-kit"][0],
    gallery: projectImageSets["media-kit"].slice(1)
  }
];

const caseStudies = {
  octoclick: {
    title: "Octoclick",
    subtitle: "Product redesign for an AdTech platform",
    tags: ["AdTech", "Dashboard", "Design System"],
    task: "Провести продуктовый редизайн рекламной платформы: ускорить запуск кампаний, улучшить читабельность аналитики и подготовить масштабируемую дизайн‑систему без потери плотности данных.",
    whatDone: [
      "Провёл исследование, сформировал JTBD и ключевые сценарии.",
      "Пересобрал информационную архитектуру и потоки кампаний/отчётов.",
      "Спроектировал 60+ экранов и UI‑систему компонентов.",
      "Внедрил шаблоны отчётов и быстрые действия.",
      "Согласовал UX с разработкой и подготовил спецификации."
    ],
    metrics: [
      "Time‑to‑Launch: −32% (14 → 9,5 мин).",
      "Ошибки настройки кампаний: −27%.",
      "DAU отчётов: +24% за 2 месяца.",
      "Обращения в поддержку по UI: −19%.",
      "NPS активных пользователей: +18 пунктов."
    ],
    storyChapters: [
      {
        label: "Контекст",
        title: "Почему редизайн был критичен",
        text: "Команда управляла большим объёмом кампаний, но запуск и оптимизация занимали слишком много времени: данные были разрознены, а связь между настройками и итоговой эффективностью неочевидна. Базовая цель проекта была продуктовой: ускорить time-to-launch, уменьшить цену ошибок и сделать отчётность инструментом принятия решений, а не архивом графиков."
      },
      {
        label: "Исследование",
        title: "Как проверял реальный процесс работы",
        text: "Я провёл глубинные интервью и разобрал реальные сессии работы медиабайеров: где они теряют время, когда возвращаются назад, какие фильтры используют повторно. Дополнительно сопоставил поведение с логами и тикетами поддержки, чтобы разделить субъективные жалобы и системные проблемы. Ключевой вывод: главный провал не в визуале, а в слабой предсказуемости последствий настройки."
      },
      {
        label: "Решения",
        title: "Что изменил в сценарии и структуре",
        text: "Собрал новую IA вокруг частотных задач, ввёл мастер запуска кампаний, шаблоны отчётов и блок «Что изменилось». Интерфейс перестроил под плотные данные: приоритетные поля всегда видимы, вторичные не мешают чтению, а риск‑метрики получили ясные уровни критичности. Это снизило когнитивную нагрузку и сократило число ошибочных шагов."
      },
      {
        label: "Показатели",
        title: "Как это отразилось на бизнес-метриках",
        text: "После внедрения команда быстрее запускала кампании и чаще использовала аналитику как ежедневный рабочий инструмент. Time-to-launch снизился на 32%, ошибки конфигурации упали на 27%, а DAU отчётов вырос на 24%. Параллельно снизились обращения в поддержку и вырос NPS активных пользователей, что подтвердило качество изменений не только в UX, но и в доверии к продукту."
      }
    ],
    modalFullHtml: `
      <div class="modal-case-full">
        <h4>Описание проекта</h4>
        <h5>Контекст, аудитория, рынок</h5>
        <div class="case-grid">
          <div>
            <p class="section-subtitle">Цель проекта</p>
            <p>Перезапустить интерфейс рекламной платформы Octoclick для ежедневной работы медиабайеров и аналитиков: ускорить настройку кампаний, повысить читаемость данных и подготовить фундамент для масштабируемой дизайн‑системы.</p>
          </div>
          <div>
            <p class="section-subtitle">Целевая аудитория</p>
            <p>Performance‑маркетологи, медиабайеры, владельцы агентств и аналитики, которые работают с большим количеством источников трафика, часто переключаются между отчётами и требуют быстрых действий без лишней навигации.</p>
          </div>
        </div>

        <p class="section-subtitle" style="margin-top:16px;">Конкурентный анализ</p>
        <div class="table-wrap">
          <table class="case-table">
            <thead>
              <tr>
                <th>Конкурент</th>
                <th>Сильные стороны</th>
                <th>Слабые стороны</th>
                <th>Вывод</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MyTarget</td>
                <td>Глубокая аналитика, гибкие отчёты</td>
                <td>Сложные сценарии, перегруз таблиц</td>
                <td>Нужна ясная иерархия и быстрые фильтры</td>
              </tr>
              <tr>
                <td>Voluum</td>
                <td>Сильный трекинг, быстрые интеграции</td>
                <td>Слабо выраженные CTA, хаотичные настройки</td>
                <td>Показать ключевые действия сразу на экране</td>
              </tr>
              <tr>
                <td>Keitaro</td>
                <td>Гибкость в источниках и постбеках</td>
                <td>Устаревший UI, слабая визуальная иерархия</td>
                <td>Обновить визуальный язык, упростить путь</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>Постановка задачи</h4>
        <h5>Цели, боли, гипотезы, метрики успеха</h5>
        <div class="case-grid">
          <div>
            <p class="section-subtitle">Ключевые цели</p>
            <ul class="case-list">
              <li>Сократить время настройки кампании минимум на 30%.</li>
              <li>Увеличить долю пользователей, работающих с отчётами ежедневно.</li>
              <li>Стандартизировать интерфейс и подготовить основу дизайн‑системы.</li>
            </ul>
          </div>
          <div>
            <p class="section-subtitle">Боли пользователей</p>
            <ul class="case-list">
              <li>Потеря контекста при работе с 6–8 вкладками и отчётами.</li>
              <li>Дублирование сценариев и непредсказуемые статусы.</li>
              <li>Слишком плотные таблицы без визуального приоритета.</li>
            </ul>
          </div>
        </div>
        <p class="section-subtitle" style="margin-top:16px;">Гипотезы и проверка</p>
        <ul class="case-list">
          <li>Если вынести ключевые действия в единый Command Bar, количество кликов до запуска снизится на 25–35%. Подтвердили в тестах.</li>
          <li>Если внедрить шаблоны отчётов, время до первого полезного инсайта сократится на 40%. Подтвердили частично.</li>
          <li>Если стандартизировать статусы и ошибки, нагрузка на поддержку уменьшится. Подтвердили.</li>
        </ul>
        <p class="section-subtitle" style="margin-top:16px;">Метрики успеха</p>
        <ul class="case-list">
          <li>Time‑to‑Launch: среднее время от входа до запуска кампании.</li>
          <li>Task Completion Rate в ключевых сценариях.</li>
          <li>Ежедневная активность в отчётах (DAU отчётов).</li>
        </ul>

        <h4>Команда и роли</h4>
        <h5>Scrum‑команда и ответственность</h5>
        <div class="case-grid">
          <div>
            <p class="section-subtitle">Состав команды</p>
            <ul class="case-list">
              <li>Product Manager — постановка целей и приоритизация.</li>
              <li>2 UX/UI дизайнера — я отвечал за UX, архитектуру и UI‑систему.</li>
              <li>4 Frontend, 3 Backend, QA, аналитик.</li>
            </ul>
          </div>
          <div>
            <p class="section-subtitle">Моя зона ответственности</p>
            <ul class="case-list">
              <li>UX‑исследования и формулировка гипотез.</li>
              <li>Информационная архитектура и сценарии.</li>
              <li>UI‑система, паттерны и контроль визуального языка.</li>
            </ul>
          </div>
        </div>

        <h4>Функционал</h4>
        <h5>Ключевые фичи и сценарий пользователя</h5>
        <ul class="case-list">
          <li>Мастер запуска кампании с подсказками и быстрым импортом.</li>
          <li>Отчёты с шаблонами и сохранёнными фильтрами.</li>
          <li>Центр бюджета и автоматические алерты по отклонениям.</li>
          <li>Сравнение периодов и визуальные маркеры аномалий.</li>
          <li>Система ролей и ограничений на уровне команд.</li>
        </ul>
        <p class="section-subtitle" style="margin-top:16px;">Сценарий</p>
        <p>Пользователь заходит в платформу, выбирает шаблон кампании, загружает креативы, настраивает ставки и сразу видит прогноз по бюджету. После запуска переходит в отчёт, получает быстрый инсайт через блок Что изменилось и корректирует кампанию в два клика.</p>

        <h4>Ограничения</h4>
        <h5>Временные и технические рамки</h5>
        <ul class="case-list">
          <li>Срок проекта: 12 недель, 4 спринта.</li>
          <li>Legacy‑backend и разные источники данных без единого API.</li>
          <li>Нельзя менять названия метрик и форматы выгрузки.</li>
          <li>Обязательна поддержка 2 языков и плотных таблиц.</li>
        </ul>

        <h4>Процесс</h4>
        <h5>Исследования, артефакты, итерации</h5>
        <p>Работу строил как продуктовый цикл с измеримыми контрольными точками: baseline текущих метрик, исследование поведения, формализация гипотез, прототипирование, проверка на задачах и контроль внедрения. Ключевая цель: сократить время запуска кампаний и время чтения отчётов без потери точности решений.</p>
        <div class="case-grid">
          <div>
            <p class="section-subtitle">Research</p>
            <ul class="case-list">
              <li>12 глубинных интервью: 7 медиабайеров, 3 team lead, 2 аналитика.</li>
              <li>Контекстные сессии: записал 18 реальных сценариев запуска и оптимизации кампаний.</li>
              <li>Анализ 6 месяцев логов: path analysis, drop‑off, time‑to‑task по ключевым этапам.</li>
              <li>Разбор 214 support‑тикетов: кластеризация проблем по частоте и влиянию на бюджет.</li>
            </ul>
          </div>
          <div>
            <p class="section-subtitle">UX‑артефакты</p>
            <ul class="case-list">
              <li>JTBD‑карта по ролям и stage‑map полного цикла кампании.</li>
              <li>Service blueprint: кто, когда и с какими данными принимает решение.</li>
              <li>IA v1→v3 с merge дублей, едиными фильтрами и преднастройками отчётов.</li>
              <li>Decision matrix для приоритизации фич: impact на метрику / effort разработки.</li>
            </ul>
          </div>
        </div>
        <p class="section-subtitle" style="margin-top:16px;">Прототипирование и тесты</p>
        <ul class="case-list">
          <li>3 волны прототипов (lo‑fi -> mid‑fi -> hi‑fi) для проверки логики до финального UI.</li>
          <li>2 раунда moderated usability‑тестов (12 участников), 14 критичных проблем устранено.</li>
          <li>Полевой A/B‑прогон главного отчёта: вариант с фиксированными колонками дал +19% к скорости чтения.</li>
          <li>Перед финалом собрал UX acceptance checklist: сценарии, ошибки, пустые состояния, edge‑кейсы.</li>
        </ul>
        <p class="section-subtitle" style="margin-top:16px;">Ключевые исследовательские выводы</p>
        <ul class="case-list">
          <li>Пользователи ошибались не из‑за сложности метрик, а из‑за разрыва между настройкой и последствиями.</li>
          <li>Быстрее всего принимаются решения, когда интерфейс объясняет, что изменилось и почему это важно.</li>
          <li>Стабильные шаблоны и сохранённые фильтры дают больший эффект, чем добавление новых графиков.</li>
        </ul>

        <h4>Визуализация</h4>
        <h5>UI‑решения и итоговая подача</h5>
        <ul class="case-list">
          <li>Собрал таблицы как инструмент принятия решений: приоритетные столбцы закреплены, вторичные скрываются.</li>
          <li>Добавил блок Что изменилось с объяснением динамики метрик за период.</li>
          <li>Внедрил систему severity для отклонений бюджета: цвет + иконка + текстовый контекст.</li>
          <li>Упростил визуальный шум: меньше декоративных акцентов, больше контраста по важности данных.</li>
          <li>Подготовил сценарные экраны было/стало, чтобы команда видела влияние на скорость работы.</li>
        </ul>

        <h4>В разработке</h4>
        <h5>Front‑review и взаимодействие</h5>
        <ul class="case-list">
          <li>Передал UI kit с токенами, состояниями и сценарными правилами, а не только макеты экранов.</li>
          <li>Собрал contract для аналитики: какие события трекаем, как читаем success/fail по каждой гипотезе.</li>
          <li>Проводил sprint review с чек‑листом качества: интеракции, валидации, пустые состояния, ошибки.</li>
          <li>С backend синхронизировал форматы данных и fallback‑логику для неполных источников.</li>
        </ul>

        <h4>Результаты</h4>
        <h5>Влияние на продукт и бизнес</h5>
        <ul class="case-list">
          <li>Time‑to‑Launch: −32% (с 14 до 9,5 минут) за счёт сценарного мастера и сокращения лишних полей.</li>
          <li>Время на weekly‑report: −38% благодаря шаблонам, фиксированным фильтрам и блоку Что изменилось.</li>
          <li>Ошибки конфигурации кампаний: −27% после явной валидации и подсказок по критичным шагам.</li>
          <li>DAU аналитического раздела: +24% за 2 месяца, глубина работы с отчётами выросла с 2,1 до 3,4 экрана.</li>
          <li>Тикеты в поддержку по непонятным данным: −19%, NPS активных пользователей: +18 пунктов.</li>
        </ul>

        <h4>Фидбэк</h4>
        <h5>Выводы и вызовы</h5>
        <ul class="case-list">
          <li>Главный вывод: рост метрик произошёл не от нового UI, а от прозрачной логики принятия решений.</li>
          <li>Сложнее всего было синхронизировать статусы между отделами: решено через единый словарь состояний.</li>
          <li>Подтверждённый принцип: сначала сценарий и контроль ошибок, затем визуальная полировка.</li>
          <li>Следующий этап: авто‑рекомендации по перераспределению бюджета и прогноз влияния изменений.</li>
        </ul>
      </div>
    `,
    links: [
      { label: "octoclick.com", url: "https://octoclick.com/ru" },
      { label: "octocpa.com", url: "https://octocpa.com/ru/" },
      { label: "octoblog.com", url: "https://blogocto.com/" },
      { label: "octoclick panel", url: "https://panel.octoclick.com" }
    ],
    images: projectImageSets["octoclick"]
  },
  visiflow: {
    title: "VISI FLOW",
    subtitle: "AI‑platform for construction documentation",
    tags: ["AI", "B2B", "Workflow"],
    task: "Спроектировать интерфейс AI‑платформы для обработки строительной документации: ускорить проверку, снизить ошибки и обеспечить прозрачные статусы.",
    whatDone: [
      "Собрал архитектуру потоков: загрузка → AI‑обработка → проверка → экспорт.",
      "Спроектировал 40+ экранов для инженеров и QA‑ролей.",
      "Ввёл сравнение версий и панель AI‑отклонений.",
      "Создал систему статусов и маршрутизацию задач.",
      "Подготовил UI‑гайдлайн для плотных таблиц."
    ],
    metrics: [
      "Время проверки пакета документов: −41%.",
      "Ошибки при первичной проверке: −33%.",
      "Снижение повторных проверок: −28%.",
      "CSAT пользователей: +21%."
    ],
    storyChapters: [
      {
        label: "Контекст",
        title: "Где терялись время и качество",
        text: "В процессе проверки строительной документации команда тратила значительное время на ручную сверку и передачу задач между ролями. Ошибки часто возникали не на этапе AI-поиска, а при интерпретации результатов и согласовании. Цель кейса: снизить операционные потери и сделать контроль качества прозрачным на каждом этапе."
      },
      {
        label: "Исследование",
        title: "Как собирал доказательства для решений",
        text: "Я провёл интервью с инженерами и QA, наблюдал реальные сессии ревью и разобрал архив документов с типами дефектов. Затем собрал карту handoff между ролями, чтобы увидеть, где пропадает контекст задачи. Это позволило сформулировать гипотезы на уровне процесса, а не только интерфейсных блоков."
      },
      {
        label: "Решения",
        title: "Что сделал в интерфейсе и workflow",
        text: "Собрал единый сценарий «загрузка -> AI-результат -> верификация -> утверждение», внедрил приоритеты отклонений и понятные статусы с историей действий. Добавил explain-паттерн для AI-находок, чтобы пользователь понимал причину срабатывания и мог быстро принять решение. Визуальная часть подчинена задаче: меньше декоративности, больше ясности и контроля."
      },
      {
        label: "Показатели",
        title: "Как измерял эффект внедрения",
        text: "Снижение времени проверки на 41% и падение пропусков дефектов на 33% показали, что команда быстрее доходит до точного результата. Дополнительно снизилось число повторных проверок и вырос CSAT, что подтвердило устойчивость решения в ежедневной эксплуатации. Это кейс про управляемость качества через UX и метрики, а не про «красивые таблицы»."
      }
    ],
    images: projectImageSets["visiflow"]
  },
  "mirox-app": {
    title: "MIROX APP",
    subtitle: "Mobile field tasks platform",
    tags: ["Mobile", "Workflow", "Operations"],
    task: "Создать мобильное приложение для полевых задач: быстрое закрытие работ, офлайн‑режим, минимум шагов до результата.",
    whatDone: [
      "Провёл интервью и полевое наблюдение.",
      "Спроектировал mobile‑first сценарии и быстрые действия.",
      "Сделал прототипы и 3 итерации тестов.",
      "Подготовил UI‑гайдлайн и спецификации.",
      "Согласовал офлайн‑логику с разработкой."
    ],
    metrics: [
      "Время закрытия задачи: −29%.",
      "Рост завершённых задач: +22%.",
      "Ошибки ввода: −31%.",
      "Офлайн‑сессии: 46%."
    ],
    storyChapters: [
      {
        label: "Контекст",
        title: "Почему mobile-first здесь обязателен",
        text: "Приложение использовалось в полевых условиях: нестабильная сеть, дефицит времени и высокая цена ошибки в фиксации результата. Старая логика требовала слишком много шагов и часто ломалась на синхронизации. Задача кейса — превратить сложный процесс закрытия задач в короткий и предсказуемый сценарий."
      },
      {
        label: "Исследование",
        title: "Какие сигналы собрал до проектирования",
        text: "Я провёл интервью и наблюдения на реальных объектах, разобрал узкие места сценария и сопоставил их с событийной аналитикой. Наиболее болезненным оказался этап фиксации результата: много ввода, повторные действия и страх потери данных. Именно этот участок стал главной зоной продуктовых изменений."
      },
      {
        label: "Решения",
        title: "Как сократил путь до результата",
        text: "Ввёл сценарий «принять -> выполнить -> зафиксировать -> закрыть», убрал лишние поля, добавил smart defaults и понятные статусы синхронизации. Кнопки и зоны касания переработал под one-hand использование, а офлайн-ветку сделал предсказуемой: пользователь всегда видит, что сохранено и что будет отправлено позже."
      },
      {
        label: "Показатели",
        title: "Что улучшилось после релиза",
        text: "После обновления сократилось среднее время закрытия задачи, вырос completion rate и снизились ошибки ввода. Высокая доля офлайн-сессий подтвердила корректность фокуса на полевом контексте, а рост успешной синхронизации показал, что улучшения работают не только в демо-сценариях, но и в реальной операционной нагрузке."
      }
    ],
    images: projectImageSets["mirox-app"]
  },
  "mirox-1": {
    title: "MIROX 1",
    subtitle: "Product analytics dashboard",
    tags: ["B2B", "Analytics", "KPI"],
    task: "Обновить интерфейс продуктового кабинета с плотной аналитикой: ускорить доступ к KPI, снизить шум и сделать мониторинг ежедневной работы управляемым.",
    whatDone: [
      "Собрал карту метрик и приоритетов для разных ролей.",
      "Переработал структуру дашбордов и виджетов.",
      "Сделал модульную систему карточек и alert‑сценариев.",
      "Настроил UI‑иерархию для тёмной темы и плотных данных.",
      "Подготовил спецификации для фронта и QA‑сценарии."
    ],
    metrics: [
      "Время до ключевого KPI: −38%.",
      "Частота ежедневного мониторинга: +27%.",
      "Снижение ошибок интерпретации: −22%.",
      "Сокращение времени на поиск метрики: −31%."
    ],
    storyChapters: [
      {
        label: "Контекст",
        title: "Проблема дашборда до редизайна",
        text: "Руководители и операционные команды работали в одном интерфейсе, но видели перегруженный слой метрик без ролевых приоритетов. В результате важные сигналы терялись, а принятие решений затягивалось. Проект был нацелен на ускорение доступа к ключевым KPI и снижение ошибок интерпретации."
      },
      {
        label: "Исследование",
        title: "Как определил, что действительно важно",
        text: "Я собрал карту вопросов, которые каждая роль решает ежедневно, и связал их с конкретными метриками. Затем проанализировал маршруты внутри существующего кабинета и выделил шаги без ценности. Это позволило убрать лишние переходы и построить ролевую структуру дашбордов."
      },
      {
        label: "Решения",
        title: "Что поменял в структуре и визуальной иерархии",
        text: "Собрал модульную систему виджетов, добавил приоритеты по критичности и контекст для резких отклонений. В интерфейсе усилил иерархию: ключевые KPI читаются первыми, вторичные не перегружают экран. Параллельно подготовил правила масштабирования, чтобы система не распадалась при росте продукта."
      },
      {
        label: "Показатели",
        title: "Какой эффект дала новая модель кабинета",
        text: "Ключевые KPI стали находиться быстрее, а мониторинг превратился в ежедневную практику, а не эпизодическую проверку. Падение ошибок интерпретации и рост частоты использования подтвердили, что интерфейс стал не просто чище, а управленчески полезнее. Это прямое влияние UX на скорость продуктовых решений."
      }
    ],
    images: projectImageSets["mirox-1"]
  },
  ai: {
    title: "AI",
    subtitle: "AI‑assistant console",
    tags: ["AI", "Console", "Productivity"],
    task: "Спроектировать консоль AI‑ассистента: быстрый ввод запросов, понятная выдача и контекстная история для повторного использования.",
    whatDone: [
      "Сформировал сценарии запросов и контекстов.",
      "Разработал структуру History + Context blocks.",
      "Ввёл быстрые действия и шаблоны промптов.",
      "Провёл тесты с экспертами для калибровки ответа.",
      "Собрал UI‑кит для роста функционала."
    ],
    metrics: [
      "Время до полезного ответа: −34%.",
      "Повторные запросы: +29%.",
      "Снижение ошибок ввода: −25%.",
      "CSAT по интерфейсу: +20%."
    ],
    storyChapters: [
      {
        label: "Контекст",
        title: "Почему консоль AI требовала продуктового подхода",
        text: "Пользователи быстро теряли контекст диалога и тратили лишнее время на повторные формулировки запросов. Базовая цель кейса: сократить путь до полезного ответа и сделать взаимодействие с AI управляемым. Здесь важно не только качество модели, но и UX-процесс работы с контекстом."
      },
      {
        label: "Исследование",
        title: "Как определил сценарии высокого приоритета",
        text: "Я выделил типовые классы запросов, отследил где пользователи прерывают сценарий и в каких точках допускают ошибки ввода. Затем провёл тесты с экспертами, чтобы понять, какие элементы помогают быстрее возвращаться в рабочий поток. На основе этого сформировал структуру History и Context blocks."
      },
      {
        label: "Решения",
        title: "Что изменил в UX-конструкции консоли",
        text: "Добавил быстрые действия, шаблоны промптов и явный слой контекста, чтобы пользователь не терял логику диалога. Интерфейс сделал модульным: легко масштабировать новые инструменты без хаоса в основной зоне. Это уменьшило трение на повторных задачах и сократило число неудачных попыток."
      },
      {
        label: "Показатели",
        title: "Подтверждение эффекта в метриках",
        text: "Скорость получения полезного ответа выросла, повторные запросы стали осознаннее, а ошибки ввода снизились. Рост CSAT показал, что система воспринимается как рабочий инструмент, а не демонстрация технологии. Это кейс про устойчивый цикл «контекст -> действие -> результат»."
      }
    ],
    images: projectImageSets.ai
  },
  "it-platform": {
    title: "В IT Platform",
    subtitle: "Client operations platform",
    tags: ["Operations", "Workflow", "Light UI"],
    task: "Создать клиентскую платформу для управления задачами и статусами: сократить время согласования и повысить прозрачность процессов.",
    whatDone: [
      "Собрал карту процессов и роли в единую систему.",
      "Сделал IA и user‑flows для ключевых сценариев.",
      "Внедрил карточный интерфейс и статусы.",
      "Сформировал гайдлайн для масштабирования.",
      "Сопровождал разработку и верификацию UI."
    ],
    metrics: [
      "Согласование задач: −28%.",
      "Ошибки передачи между ролями: −24%.",
      "Прозрачность статусов (опрос): +30%.",
      "Снижение ручных уточнений: −19%."
    ],
    storyChapters: [
      {
        label: "Контекст",
        title: "Что тормозило операционные процессы",
        text: "Клиентская платформа использовалась сразу несколькими ролями, но процесс передачи задач был непрозрачным и зависел от ручных уточнений. Команды тратили время на синхронизацию статусов вместо выполнения работы. Цель проекта: сделать маршрут задачи управляемым от постановки до закрытия."
      },
      {
        label: "Исследование",
        title: "Как собрал карту реальных провалов",
        text: "Я разложил путь задачи по этапам, зафиксировал точки возврата и уточнил причины задержек с каждой ролью. Анализ показал, что большинство проблем возникает в handoff-зонах, где не хватает контекста и единых правил статусов. Эти зоны стали приоритетом изменений."
      },
      {
        label: "Решения",
        title: "Какие изменения внедрил в платформе",
        text: "Внедрил структурированный карточный интерфейс со статусной моделью и понятной историей действий. IA перестроил вокруг приоритетных операционных сценариев, чтобы сокращать лишние переходы и ручные комментарии. Дополнительно подготовил гайдлайн для дальнейшего масштабирования без потери консистентности."
      },
      {
        label: "Показатели",
        title: "Эффект на скорость и качество работы",
        text: "Сократилось время согласования, снизились ошибки при передаче и уменьшился объём ручных уточнений. Рост прозрачности статусов по опросу подтвердил, что новая модель понятна не только команде продукта, но и конечным пользователям. Кейс показывает, как UX влияет на операционную эффективность."
      }
    ],
    images: projectImageSets["it-platform"]
  },
  nok: {
    title: "NOK / ИСС",
    subtitle: "Educational web platform",
    tags: ["Education", "CRM", "Landing"],
    task: "Создать информативный сайт на 4 страницы для Института современных специальностей: упростить выбор программы, ускорить подачу заявки и связать процесс с CRM‑работой кураторов.",
    whatDone: [
      "Сформировал структуру страниц и карту контента.",
      "Спроектировал витрину программ и блок доверия.",
      "Упростил форму заявки до 4–5 полей.",
      "Подготовил CRM‑шаблоны для обработки заявок.",
      "Настроил адаптив и SEO‑базу."
    ],
    metrics: [
      "Конверсия заявок: +28%.",
      "Время заполнения формы: −35%.",
      "Рост входящих обращений: +22%.",
      "Скорость обработки заявок: −30%."
    ],
    storyChapters: [
      {
        label: "Контекст",
        title: "Бизнес-задача образовательного проекта",
        text: "Сайт должен был одновременно продавать программы и поддерживать операционную работу кураторов через CRM. До переработки путь пользователя был длинным, а ключевые преимущества программ раскрывались слабо. Цель кейса: повысить конверсию в заявку и сократить путь до решения об обучении."
      },
      {
        label: "Исследование",
        title: "Что показал анализ пользовательского пути",
        text: "Я разобрал вопросы абитуриентов, точки недоверия и причины незавершённых заявок. В структуре контента выделил блоки, которые реально влияют на выбор: программа, формат, результат, социальное доказательство. Это позволило сократить шум и усилить важные аргументы."
      },
      {
        label: "Решения",
        title: "Как изменил страницы и форму",
        text: "Собрал 4-страничную архитектуру с чётким CTA-потоком, упростил форму до минимально достаточных полей и подготовил CRM-шаблоны обработки лидов. Визуально сделал систему чистой и читаемой, чтобы пользователь быстро находил ответ на вопрос «подходит ли мне эта программа»."
      },
      {
        label: "Показатели",
        title: "Результат в конверсии и операционке",
        text: "Рост заявок и падение времени заполнения формы показали, что UX-структура действительно снизила трение. Ускорение обработки лидов подтвердило, что изменения затронули не только frontend-сценарий, но и внутренний процесс команды. Это полноценный продуктовый кейс с измеримым выходом."
      }
    ],
    images: projectImageSets.nok
  },
  winglish: {
    title: "WINGLISH",
    subtitle: "EdTech mobile platform",
    tags: ["UX/UI", "EdTech"],
    task: "Спроектировать мобильную платформу изучения английского с быстрым входом, короткими уроками и понятной системой прогресса.",
    whatDone: [
      "Спроектировал пользовательский путь: онбординг, выбор цели, первый урок.",
      "Собрал структуру уроков, упражнения и проверку знаний.",
      "Продумал систему прогресса и мотивации (уровни, streak, достижения).",
      "Разработал UI‑кит и ключевые компоненты для масштабирования контента.",
      "Сделал прототипы для тестирования сценариев и темпа обучения."
    ],
    metrics: [
      "Время до первого результата (прохождение 1‑го урока).",
      "Доля пользователей, завершивших 3 урока подряд.",
      "Retention 7/30 и регулярность занятий.",
      "Конверсия из онбординга в платную подписку."
    ],
    storyChapters: [
      {
        label: "Контекст",
        title: "Что нужно было изменить в образовательном UX",
        text: "Продукт требовал быстрой активации: пользователь должен понять ценность уже в первых минутах после установки. Критичным было снизить отвал в онбординге и довести человека до первого завершённого урока. Поэтому кейс сфокусирован на связке мотивации, темпа и прозрачного прогресса."
      },
      {
        label: "Исследование",
        title: "Как определил точки потери пользователей",
        text: "Я разобрал путь от онбординга до первых заданий, выделил моменты, где пользователь теряет уверенность и прекращает обучение. Дополнительно проверил реакцию на разные форматы обратной связи и длину уроков. Это дало основу для сценариев, которые удерживают темп без перегрузки."
      },
      {
        label: "Решения",
        title: "Какие механики внедрил",
        text: "Собрал короткий путь к первому уроку, усилил прогресс-индикаторы, добавил систему мотивации и понятную структуру микро-результатов. UI-кит подготовил под масштабирование контента: новые модули добавляются без пересборки интерфейса. В итоге продукт стал последовательнее и предсказуемее для разных уровней пользователей."
      },
      {
        label: "Показатели",
        title: "На что смотрим после внедрения",
        text: "Ключевые метрики успеха: доля пользователей, прошедших первый урок, устойчивость серии из трёх уроков и retention 7/30. Дополнительно отслеживается переход в подписку, чтобы понять влияние UX не только на вовлечение, но и на монетизацию. Такой набор метрик связывает дизайн-решения с ростом продукта."
      }
    ],
    images: projectImageSets["winglish"]
  }
};

const articles = [
  {
    id: "future-of-ux",
    title: "Будущее UX: как ИИ меняет дизайн-процессы",
    excerpt:
      "ИИ стал рабочим инструментом UX: он снимает рутину, ускоряет анализ, прототипирование и тестирование, но не заменяет ответственность дизайнера.",
    date: "20.01.2026",
    readTime: "6 мин чтения",
    tags: ["UX", "AI", "Process"],
    cover: "assets/images/blog-covers/future-of-ux.svg",
    featured: true,
    body: [
      {
        type: "h2",
        text: "Введение"
      },
      {
        type: "p",
        text:
          "Еще несколько лет назад использование искусственного интеллекта (ИИ) в дизайне казалось фантастикой."
      },
      {
        type: "p",
        text:
          "Теперь, к 2025–2026 году, ИИ стал не просто модным трендом, а фундаментальным инструментом, проникшим во все этапы работы дизайнера — от исследования пользователей до тестирования решений."
      },
      {
        type: "callout",
        icon: "insight",
        title: "Сдвиг в практике",
        text:
          "ИИ не заменяет дизайн‑команду, а расширяет ее возможности — особенно там, где много рутины и повторяемости."
      },
      {
        type: "p",
        text:
          "Как когда-то калькуляторы вызвали страх, что люди разучатся считать, так и появление ИИ породило опасения за судьбу UX-дизайна."
      },
      {
        type: "p",
        text:
          "Но калькуляторы не уничтожили математику — они лишь избавили нас от долгих вычислений."
      },
      {
        type: "p",
        text:
          "То же самое делает ИИ в UX: освобождает дизайнеров от рутины, позволяя им сконцентрироваться на более важных задачах."
      },
      {
        type: "divider",
        label: "Переход к практике"
      },
      {
        type: "p",
        text:
          "Практика показывает, что ИИ не заменяет команду UX-дизайнеров, а дополняет ее, давая специалистам время на стратегическое мышление, глубокое понимание пользователей и творческое решение проблем."
      },
      {
        type: "p",
        text:
          "В 40–65% повседневной работы дизайнера скрыта повторяющаяся рутина — создание макетов, ресайз элементов, обработка данных исследований."
      },
      {
        type: "p",
        text:
          "Именно на этих участках ИИ проявляет себя лучше всего."
      },
      {
        type: "p",
        text:
          "ИИ полезен там, где задачи однотипны: анализировать интервью, кластеризовать инсайты, генерировать быстрые черновые эскизы экранов."
      },
      {
        type: "p",
        text:
          "Это не замена дизайнера, а ускоритель итераций в процессе."
      },
      {
        type: "callout",
        icon: "flow",
        title: "Фокус",
        text:
          "ИИ ускоряет путь к решению, но не определяет цель — эту часть оставляем человеку."
      },
      {
        type: "p",
        text:
          "Ниже мы собрали практические области, где ИИ уже сейчас ощутимо ускоряет анализ, прототипирование и тестирование UX-дизайна — и как при этом не потерять фокус на реальных потребностях пользователя."
      },
      {
        type: "divider",
        label: "Три сценария"
      },
      {
        type: "h3",
        text: "Где ИИ реально ускоряет UX"
      },
      {
        type: "p",
        text:
          "ИИ-инструменты сегодня берут на себя значительную часть подготовительной работы дизайнера."
      },
      {
        type: "p",
        text:
          "Они автоматизируют повторяемые операции и технические задачи, которые раньше отнимали массу времени: генерацию интерфейсов, проверку гипотез, адаптацию дизайна под разные форматы — все это теперь на плечах машины."
      },
      {
        type: "p",
        text:
          "Рассмотрим три сценария, в которых внедрение ИИ дает эффект практически сразу."
      },
      {
        type: "divider",
        label: "Сценарий 1"
      },
      {
        type: "h3",
        text: "1. Суммаризация пользовательских интервью и поддержка инсайт-карты"
      },
      {
        type: "p",
        text:
          "Сбор и анализ пользовательских исследований — трудоемкий этап, где ИИ способен существенно сэкономить время."
      },
      {
        type: "p",
        text:
          "Современные сервисы могут автоматически транскрибировать интервью, переводить речь в текст и даже делать краткие резюме ключевых мыслей участников."
      },
      {
        type: "p",
        text:
          "Например, платформы вроде Dovetail и Notably способны распознавать темы и паттерны в массивах сырого фидбэка."
      },
      {
        type: "p",
        text:
          "Они группируют схожие ответы, помечают инсайты тегами и выделяют повторяющиеся мотивы в отзывах пользователей."
      },
      {
        type: "p",
        text:
          "Благодаря этому UX-исследователь быстрее получает первичную «карту инсайтов», вместо того чтобы неделями вручную прочесывать десятки часов записей."
      },
      {
        type: "callout",
        icon: "chart",
        title: "Эффект",
        text:
          "ИИ сокращает «черновую» фазу анализа и высвобождает время на интерпретацию."
      },
      {
        type: "p",
        text:
          "Важно, что ИИ ускоряет черновой анализ, но не делает выводов за человека."
      },
      {
        type: "p",
        text:
          "Инструменты вроде Maze уже сегодня предлагают автоматическую расшифровку, авто-теги и поиск по стенограммам, что позволяет оперативно извлекать цитаты и темы из множества интервью."
      },
      {
        type: "p",
        text:
          "ИИ подсвечивает, где происходит нечто важное, и указывает направления для «раскопок», но интерпретация причин остается за UX-специалистом."
      },
      {
        type: "p",
        text:
          "Проще говоря, алгоритм найдет закономерности в ответах, однако понять глубинные мотивы пользователей, прочитать между строк, отличить симптом от настоящей проблемы может только человек."
      },
      {
        type: "p",
        text:
          "Поэтому дизайнеры используют AI-помощников для черновой обработки данных – а затем сами выстраивают из подсказок осмысленные выводы и продуктовые инсайты."
      },
      {
        type: "divider",
        label: "Сценарий 2"
      },
      {
        type: "h3",
        text: "2. Черновые UI-варианты для командного обсуждения (A/B)"
      },
      {
        type: "p",
        text:
          "Генеративные возможности ИИ совершили прорыв в стадии прототипирования."
      },
      {
        type: "p",
        text:
          "Теперь, чтобы придумать несколько вариантов дизайна экрана, не нужно вручную отрисовывать каждый – достаточно описать задачу ИИ-системе."
      },
      {
        type: "p",
        text:
          "Специальные инструменты (например, Google Stitch, Uizard, Galileo AI) способны создавать макеты интерфейсов и интерактивные прототипы на основе простого текстового описания или эскиза от руки."
      },
      {
        type: "p",
        text:
          "То, на что раньше уходили часы (или дни) работы, ИИ делает за считанные минуты, позволяя команде сразу переходить к обсуждению и тестированию идей."
      },
      {
        type: "p",
        text:
          "Еще недавно дизайнер мог потратить неделю, чтобы нарисовать десяток вариантов одной кнопки, и еще неделю – чтобы проверить их на пользователях."
      },
      {
        type: "p",
        text:
          "Теперь ИИ генерирует десятки вариантов мгновенно и даже может предсказать, на какую кнопку чаще кликнут."
      },
      {
        type: "p",
        text:
          "Нейросети умеют подбирать цвета и шрифты, перекраивать макеты под разные разрешения, предлагать альтернативные компоновки."
      },
      {
        type: "p",
        text:
          "Словом, делать все «черновые» варианты, из которых дизайнер уже выбирает лучшие и дорабатывает вручную."
      },
      {
        type: "p",
        text:
          "ИИ способен сгенерировать сотни решений по заданным параметрам, а человеку остается поставить задачу, отобрать лучшие и отшлифовать детали."
      },
      {
        type: "p",
        text:
          "Такой подход ускоряет итерации: команда может провести внутреннее A/B-сравнение нескольких концептов, созданных ИИ, и быстро отсеять неудачные."
      },
      {
        type: "callout",
        icon: "insight",
        title: "Итерации",
        text:
          "AI‑черновики позволяют быстро сравнить направления и сфокусировать усилия на лучшем."
      },
      {
        type: "p",
        text:
          "Примечательно, что появляются AI-инструменты для предиктивной оценки дизайна."
      },
      {
        type: "p",
        text:
          "Например, сервисы вроде Attention Insight генерируют тепловые карты внимания и прогнозируют, куда пользователь посмотрит первым, еще до каких-либо тестов с реальными людьми."
      },
      {
        type: "p",
        text:
          "Это помогает на этапе обсуждения макетов понять, какие из автосгенерированных вариантов потенциально лучше привлекут внимание к важным элементам."
      },
      {
        type: "p",
        text:
          "И хотя такие прогнозы не заменяют полноценного тестирования с участниками, они дают дополнительную точку данных при выборе направлений дизайна."
      },
      {
        type: "p",
        text:
          "В итоге ИИ в прототипировании — это как гиперактивный стажер: он за секунды предлагает массу решений, а дизайнер уже принимает решение, какие из них стоит развивать, исходя из опыта, контекста и знания своего пользователя."
      },
      {
        type: "divider",
        label: "Сценарий 3"
      },
      {
        type: "h3",
        text: "3. Автоматизация проверки текстов и формулировок"
      },
      {
        type: "p",
        text:
          "Текстовое наполнение интерфейсов (UX-writing, микрокопирайтинг) – еще одна область, где ИИ стал незаменимым помощником."
      },
      {
        type: "p",
        text:
          "Хорошие микротексты незаметны для пользователя, но требуют множества итераций от дизайнера: проверка ясности формулировок, длины, тона, соответствия гайдам."
      },
      {
        type: "p",
        text:
          "Теперь ряд рутинных проверок можно поручить умным алгоритмам."
      },
      {
        type: "p",
        text:
          "Например, плагины типа Magician для Figma или онлайн-сервисы вроде Copy.ai позволяют на лету генерировать черновики подсказок, инструкций, сообщений об ошибках на основе краткого описания ситуации."
      },
      {
        type: "p",
        text:
          "Достаточно набросать смысл фразы, и ИИ предложит варианты формулировок – а дизайнер выберет и отшлифует лучший. Это не заменяет полноценного UX-копирайтера, но значительно ускоряет процесс и повышает эффективность итераций при работе с текстом."
      },
      {
        type: "callout",
        icon: "note",
        title: "Микрокопирайтинг",
        text:
          "ИИ помогает быстро получить варианты и проверить тон — финальное качество все равно на дизайнере."
      },
      {
        type: "p",
        text:
          "Помимо генерации, ИИ помогает автоматически проверять качество текста."
      },
      {
        type: "p",
        text:
          "Языковые модели и ассистенты (тот же ChatGPT) могут выступать в роли «умного редактора»: найти опечатки и грамматические ошибки, упростить слишком канцелярские формулировки, подсказать более дружелюбный тон."
      },
      {
        type: "p",
        text:
          "Инструменты на базе ИИ способны проанализировать текстовые поля интерфейса на предмет понятности и доступности."
      },
      {
        type: "p",
        text:
          "Они могут указать, где фраза слишком длинна или сложна для понимания, соответствует ли стиль брендовому тону, нет ли противоречий."
      },
      {
        type: "p",
        text:
          "Более того, часть AI-систем умеет выявлять проблемы доступности контента."
      },
      {
        type: "p",
        text:
          "Например, тот же AccessiBe с помощью ИИ выявляет трудночитаемые тексты (слишком мелкий шрифт или низкий контраст) и другие барьеры еще на стадии дизайна."
      },
      {
        type: "p",
        text:
          "В результате дизайнер получает своеобразную автоматическую корректорскую вычитку интерфейса: от орфографии до юзабилити-рекомендаций."
      },
      {
        type: "p",
        text:
          "Это позволяет перед запуском продукта увериться, что тексты и подписи понятны аудитории, соответствуют задумке и не содержат ошибок, – без утомительного ручного пролистывания каждого экрана."
      },
      {
        type: "divider",
        label: "Баланс"
      },
      {
        type: "h3",
        text: "Как не потерять фокус на пользователе"
      },
      {
        type: "blockquote",
        text:
          "ИИ снимает рутину, но решение всегда за человеком: UX — это ответственность. Главное — не терять фокус на реальной проблеме пользователя. ИИ ускоряет путь, но не определяет цель."
      },
      {
        type: "p",
        text:
          "Эти слова отлично резюмируют главный принцип работы с AI-инструментами в дизайне: использовать их как ускоритель, но не как автопилот."
      },
      {
        type: "p",
        text:
          "В погоне за автоматизацией важно помнить, что за каждой метрикой и паттерном стоят живые люди со своими мотивациями, эмоциями и контекстом."
      },
      {
        type: "p",
        text:
          "ИИ оперирует шаблонами в данных и может подсказать, что делают пользователи, но не раскрывает, почему они это делают."
      },
      {
        type: "p",
        text:
          "Алгоритм не способен почувствовать нюансы, как хороший UX-исследователь: он не узнает, что испытывает пользователь, не учитывает бизнес-цели или технические ограничения в полной мере, не предвидит этические тонкости."
      },
      {
        type: "p",
        text:
          "Поэтому, внедряя ИИ в процесс, дизайнеры остаются владельцами ответственности за итоговый опыт."
      },
      {
        type: "p",
        text:
          "Полезно задавать себе вопросы: решаем ли мы реальную проблему пользователя или увлеклись игрушечными возможностями нейросети?"
      },
      {
        type: "p",
        text:
          "Проверили ли мы гипотезы на живых людях, а не только на симуляциях? Согласуется ли скоростной AI-прототип с общей продуктовой стратегией и ценностями компании?"
      },
      {
        type: "p",
        text:
          "В итоге ключевой фокус должен оставаться на человеке – его задачах, болях, особенностях поведения. ИИ может проложить скоростное шоссе в процессе дизайна, но направление движения и пункт назначения по-прежнему определяет сам дизайнер, опираясь на эмпатию и понимание пользователей."
      },
      {
        type: "divider",
        label: "Итоги"
      },
      {
        type: "h3",
        text: "Вывод"
      },
      {
        type: "p",
        text:
          "Будущее UX-дизайна немыслимо без ИИ – он уже сегодня делает работу быстрее и во многом удобнее."
      },
      {
        type: "p",
        text:
          "От анализа исследований до генерации интерфейсов и проверки мелочей – умные помощники берут на себя рутину и расширяют возможности команд."
      },
      {
        type: "p",
        text:
          "Однако самые успешные продукты рождаются там, где технологии идут рука об руку с человеческим видением. Используя ИИ для эффективности, важно сохранять критическое мышление, творческий подход и ориентацию на пользователя. Тогда искусственный интеллект станет для дизайнера не конкурентом, а надежным союзником в создании действительно ценного пользовательского опыта."
      }
    ]
  },
  {
    id: "systems-thinking",
    title: "Системное мышление в UX/UI",
    excerpt:
      "Почему дизайн‑система — это не библиотека компонентов, а способ держать продукт консистентным и масштабируемым.",
    date: "14.01.2026",
    readTime: "5 мин",
    tags: ["Design System", "Product"],
    cover: "assets/images/blog-covers/systems-thinking.svg",
    body: [
      {
        type: "h2",
        text: "Введение"
      },
      {
        type: "p",
        text:
          "С ростом продукта дизайн усложняется: когда в проекте насчитывается более 20 экранов, без системы всё быстро распадается."
      },
      {
        type: "p",
        text:
          "На деле дизайн-система — это не просто набор UI-элементов, а архитектура повторяемости и совместимости, которая удерживает все части продукта вместе и позволяет ему расти без хаоса."
      },
      {
        type: "p",
        text:
          "Иными словами, дизайн-система представляет собой совокупность правил, ролей, компонентов и общей логики, направленную на поддержание целостности дизайна."
      },
      {
        type: "p",
        text:
          "Её цель – обеспечить визуальную консистентность интерфейсов и возможность масштабирования UX/UI по мере расширения продукта."
      },
      {
        type: "callout",
        icon: "insight",
        title: "Суть",
        text:
          "Дизайн‑система — это архитектура, а не набор деталей. Она удерживает продукт вместе."
      },
      {
        type: "p",
        text:
          "Без системного подхода в интерфейсе неизбежно воцаряется разнобой."
      },
      {
        type: "p",
        text:
          "Например, один экран может использовать шрифт или цветовую палитру, отличающуюся от других; логотип на сайте устарел, а в мобильном приложении уже новый; кнопки в разных разделах работают по разным правилам – разобраться в таком продукте пользователю непросто."
      },
      {
        type: "p",
        text:
          "Отсутствие единых стандартов путает клиентов и подрывает узнаваемость бренда."
      },
      {
        type: "p",
        text:
          "Решить проблему помогает системное мышление: смотреть на UX/UI как на целостную систему, а не набор разрозненных экранов."
      },
      {
        type: "p",
        text:
          "В этой статье мы разберём, как применять системный подход в дизайне и почему полноценная дизайн‑система – это ключ к консистентному и гибко масштабируемому продукту."
      },
      {
        type: "divider",
        label: "Системный подход"
      },
      {
        type: "h3",
        text: "Системное мышление в дизайне и почему это важно"
      },
      {
        type: "p",
        text:
          "Системное мышление – это подход к проектированию интерфейсов по определённым, заранее установленным алгоритмам."
      },
      {
        type: "p",
        text:
          "При таком подходе дизайн строится словно конструктор: если все детали (компоненты, стили, правила) продуманы и совместимы заранее, то сборка нового экрана занимает минимум времени, а доработать или перестроить его не составляет труда."
      },
      {
        type: "p",
        text:
          "В компании, практикующей системный дизайн, как правило ведётся подробная документация, доступная всем участникам проекта."
      },
      {
        type: "p",
        text:
          "Это значит, что получив задачу на добавление новой страницы, дизайнер может собрать её практически «автоматически», следуя установленным правилам и паттернам."
      },
      {
        type: "p",
        text:
          "Такой метод работы позволяет создавать одновременно стабильные и гибкие продукты, которые можно легко изменять и наращивать новыми функциями."
      },
      {
        type: "callout",
        icon: "flow",
        title: "Эффект",
        text:
          "Система делает интерфейс предсказуемым и ускоряет выпуск новых экранов."
      },
      {
        type: "p",
        text:
          "Подход системного проектирования даёт ощутимые плюсы."
      },
      {
        type: "p",
        text:
          "Во-первых, дизайнеры становятся взаимозаменяемыми: если кто-то из команды уходит в отпуск или переключается на другой проект, любой другой член команды сможет подхватить работу без ущерба для качества и без долгого онбординга."
      },
      {
        type: "p",
        text:
          "Во-вторых, разработчикам не приходится каждый раз с нуля разбираться в новой логике интерфейса – все элементы ведут себя предсказуемо и единообразно."
      },
      {
        type: "p",
        text:
          "В итоге конечный продукт выглядит и работает консистентно, даже если над ним работало много разных людей."
      },
      {
        type: "p",
        text:
          "Системное мышление привносит в дизайн процесс ту самую устойчивость, при которой рост продукта (новые экраны, функции, платформы) не приводит к распаду стиля или UX-логики."
      },
      {
        type: "divider",
        label: "Дизайн‑система"
      },
      {
        type: "h3",
        text: "Дизайн‑система как продукт"
      },
      {
        type: "p",
        text:
          "Когда говорят о внедрении системного подхода, чаще всего имеют в виду создание дизайн-системы – централизованного набора стандартов и компонентов."
      },
      {
        type: "p",
        text:
          "В 2015–2016 годах появились первые полноценные дизайн-системы от больших компаний (Material Design от Google, Lightning от Salesforce, Polaris от Shopify), и поначалу они выглядели просто как сборники руководств по стилю."
      },
      {
        type: "p",
        text:
          "Однако дизайн-система – это намного больше, чем статичный гайдлайн. Это инфраструктура для повторяемости и совместимости решений в интерфейсе."
      },
      {
        type: "p",
        text:
          "Если у вас сегодня 7 функций или разделов, завтра их может стать 70. Без единой системы единообразия вы вместо целостного продукта рискуете получить хаос."
      },
      {
        type: "p",
        text:
          "Как метко заметили коллеги, если у каждой кнопки своя логика и поведение компонентов не согласовано, вы создаёте уже не интерфейс, а нечто непотребное."
      },
      {
        type: "p",
        text:
          "Дизайн-система предотвращает этот хаос, задавая общие правила для всех элементов."
      },
      {
        type: "callout",
        icon: "note",
        title: "Важно",
        text:
          "Система — это внутренний продукт команды с планом развития, поддержкой и правилами."
      },
      {
        type: "p",
        text:
          "Важно понимать, что дизайн-система – это не просто библиотека UI-компонентов, а полноценный внутренний продукт вашей команды."
      },
      {
        type: "p",
        text:
          "Компании, добившиеся успеха с дизайн-системами, относятся к ним как к продуктам: выделяют команду или ответственного, планируют развитие системы, обеспечивают поддержку и обновления."
      },
      {
        type: "p",
        text:
          "Более того, хорошо проработанная система приносит пользу всем участникам процесса, а не только дизайнерам."
      },
      {
        type: "p",
        text:
          "Она функционирует на стыке дизайна, разработки и менеджмента продукта, становясь общим языком для команды."
      },
      {
        type: "p",
        text:
          "Дизайнеры обращаются к системе за ясностью и единообразием, разработчики – за надёжной и быстрой реализацией интерфейса, продуктовые менеджеры – чтобы масштабировать продукт, не тратя время на переосмысление каждую итерацию."
      },
      {
        type: "p",
        text:
          "Если система выстроена правильно, она устраняет трения между отделами; если же нет – сама превращается в узкое место и источник проблем."
      },
      {
        type: "p",
        text:
          "Как и у любого продукта, у дизайн-системы должны быть четкие процессы и правила управления."
      },
      {
        type: "p",
        text:
          "Желательно заранее определить: кто отвечает за развитие системы, как предлагаются и утверждаются изменения, с какой периодичностью вносятся обновления, как проверяется качество новых компонентов."
      },
      {
        type: "p",
        text:
          "Без понятных моделей руководства и поддержки даже хорошая библиотека рискует быстро устареть или выйти из-под контроля."
      },
      {
        type: "p",
        text:
          "Практика показывает, что без строгого governance дизайн-система либо расползается в хаотичный \"фольклооор\" из нел一致ных решений, либо становится чрезмерно ограничивающей для команды."
      },
      {
        type: "p",
        text:
          "Поэтому необходимо регламентировать процесс: например, установить порядок ревью и принятия правок, использовать инструменты контроля версий для компонентов, настроить прозрачный цикл публикаций обновлений."
      },
      {
        type: "p",
        text:
          "Наконец, принципиальный момент: относьтесь к дизайн-системе как к живому продукту, а не разовому проекту."
      },
      {
        type: "p",
        text:
          "После первого релиза работа только начинается. Система должна постоянно поддерживаться и эволюционировать вместе с вашим продуктом и брендом."
      },
      {
        type: "p",
        text:
          "Регулярно собирайте обратную связь от дизайнеров и разработчиков, актуализируйте стили и компоненты при изменении бренда или появлении новых сценариев, проводите аудит библиотеки на устаревшие элементы."
      },
      {
        type: "p",
        text:
          "Дизайн-система – как организм, требующий питания и внимания."
      },
      {
        type: "p",
        text:
          "Если этого не делать, она рискует превратиться в ещё одну устаревшую legacy-систему, которую через пару лет придётся заменять."
      },
      {
        type: "p",
        text:
          "Зато при должном уходе дизайн-система становится невидимым драйвером роста продукта – ускоряя разработку и обеспечивая масштабирование без потери качества."
      },
      {
        type: "divider",
        label: "Ядро системы"
      },
      {
        type: "h3",
        text: "Что должно входить в ядро дизайн-системы?"
      },
      {
        type: "p",
        text:
          "Пример: типичные элементы, входящие в дизайн-систему."
      },
      {
        type: "p",
        text:
          "Любая большая дизайн-система охватывает множество аспектов – от цветовой палитры и типографики до кода компонентов и даже принципов тональности общения бренда."
      },
      {
        type: "p",
        text:
          "Однако в ядро системы следует включать только то, что действительно необходимо для воспроизведения интерфейсов вашего продукта."
      },
      {
        type: "p",
        text:
          "Вот три ключевых составляющих, на которых строится сильная дизайн-система:"
      },
      {
        type: "ul",
        items: [
          "Библиотека базовых компонентов и их состояний, которые реально используются в продукте.",
          "Набор дизайн-паттернов для типовых сценариев: таблицы, фильтры, формы, ошибки.",
          "Руководства по приоритетам и визуальной иерархии."
        ]
      },
      {
        type: "p",
        text:
          "Библиотека базовых компонентов включает все часто встречающиеся UI-элементы (кнопки, поля ввода, чекбоксы, меню и пр.) вместе с вариациями состояний (ховер, клик, отключено и т.д.), адаптированными под дизайн-токены вашего бренда."
      },
      {
        type: "p",
        text:
          "Компоненты служат строительными блоками интерфейса, поэтому важно, чтобы в систему попали только отлаженные и актуальные элементы – без дубликатов и устаревших версий."
      },
      {
        type: "p",
        text:
          "Набор паттернов описывает, как компоненты должны работать вместе в контексте — скажем, фильтр взаимодействует с таблицей результатов, или форма ввода валидируется и показывает сообщения об ошибках единообразно по всему продукту."
      },
      {
        type: "p",
        text:
          "Гайдлайны по приоритетам объясняют, как выстраивать иерархию: где делать акцент, как использовать размер шрифта, толщину линий и оттенки цвета для обозначения разных уровней важности."
      },
      {
        type: "p",
        text:
          "Такие правила обеспечивают единый подход к визуальному приоритету: пользователь интуитивно понимает, что главное на странице, а что второстепенное."
      },
      {
        type: "callout",
        icon: "chart",
        title: "Единый источник правды",
        text:
          "Обновив компонент в системе, вы обновляете десятки экранов сразу."
      },
      {
        type: "p",
        text:
          "Все перечисленные компоненты ядра должны опираться на единые правила и ограничения, принятые в вашей системе."
      },
      {
        type: "p",
        text:
          "Если этого не сделать, даже обширная библиотека может превратиться просто в склад разрозненных компонентов без общей логики их применения."
      },
      {
        type: "p",
        text:
          "Другими словами, одних деталей мало – нужна инструкция, как их собирать."
      },
      {
        type: "p",
        text:
          "Например, если у каждой фичи или кнопки будут свои уникальные свойства, а разработчики начнут использовать компоненты без оглядки на общие принципы, дизайн-система утратит смысл."
      },
      {
        type: "p",
        text:
          "В итоге вместо цельного интерфейса получится разношёрстный продукт."
      },
      {
        type: "p",
        text:
          "Поэтому крайне важно вместе с компонентами создавать документацию и гайдлайны: описывать назначение каждого элемента, рекомендации по использованию, типичные примеры внедрения."
      },
      {
        type: "p",
        text:
          "Тогда система станет по-настоящему рабочим инструментом, а не витриной UI-китов."
      },
      {
        type: "p",
        text:
          "Хорошо продуманное ядро дизайн-системы становится «единым источником правды» для всех дизайнеров и разработчиков."
      },
      {
        type: "p",
        text:
          "Обновив один базовый компонент в системе, вы обновляете десятки экранов продукта сразу."
      },
      {
        type: "p",
        text:
          "Добавив новое правило в гайдлайны, вы влияете на весь интерфейсный язык продукта."
      },
      {
        type: "p",
        text:
          "Благодаря этому сильная система ощутимо экономит время команды и делает продукт устойчивым к дальнейшим изменениям."
      },
      {
        type: "p",
        text:
          "Недаром одним из главных преимуществ дизайн-систем называют ускорение работы: например, в Альфа-Банке отмечают, что их единая дизайн-система позволяет легко собирать интерфейсы из готовых элементов и существенно экономит время команды."
      },
      {
        type: "p",
        text:
          "При росте продукта вы не тратите лишние ресурсы на переработку каждого экрана – система масштабируется вместе с проектом."
      },
      {
        type: "divider",
        label: "Примеры"
      },
      {
        type: "h3",
        text: "Примеры успешных дизайн-систем"
      },
      {
        type: "p",
        text:
          "Ниже приведены несколько реальных примеров, демонстрирующих преимущества системного подхода в дизайне."
      },
      {
        type: "p",
        text:
          "Material Design (Google) – одна из первых масштабных дизайн-систем, созданная для экосистемы Android."
      },
      {
        type: "p",
        text:
          "Material Design была задумана как единая система, чтобы все приложения развивались последовательно и в одном ключе."
      },
      {
        type: "p",
        text:
          "Общие принципы и компоненты не только улучшили пользовательский опыт за счёт единообразия, но и расширили визуальный язык Google."
      },
      {
        type: "p",
        text:
          "Благодаря этому гайду компания получила возможность оперативно создавать новые продукты без потери качества."
      },
      {
        type: "p",
        text:
          "Сегодня Material Design служит ориентиром для многих команд, показывая, как единая система упрощает масштабирование дизайна."
      },
      {
        type: "p",
        text:
          "Atlassian Design System – дизайн-система компании Atlassian, наглядно показывающая, что система – это не только про UI, но и про ценности бренда."
      },
      {
        type: "p",
        text:
          "В Atlassian все дизайн-токены, готовые элементы брендирования и правила tone of voice собраны в одном месте."
      },
      {
        type: "p",
        text:
          "Такая база не просто хранит компоненты, она транслирует философию «делать работу команд более эффективной» и даже вдохновляет сторонних дизайнеров, так как частично доступна публично."
      },
      {
        type: "p",
        text:
          "На официальном сайте Atlassian Design System выложены материалы, полезные и внутренней команде, и сообществу: фрагменты кода, шаблоны презентаций, библиотека фирменных иллюстраций – всё, что отражает единый стиль компании."
      },
      {
        type: "p",
        text:
          "«Единая дизайн-система» Альфа-Банка – отечественный пример масштабной дизайн-платформы, объединяющей десятки цифровых продуктов банка."
      },
      {
        type: "p",
        text:
          "Дизайн-система Альфа-Банка содержит не только UI-кит компонентов, но и подробные руководства для совместной работы дизайнеров и разработчиков."
      },
      {
        type: "p",
        text:
          "Это по сути внутренний продукт, интегрированный в процесс разработки банковских сервисов."
      },
      {
        type: "p",
        text:
          "В результате команда тратит меньше времени на согласование стиля и сборку новых интерфейсов – многое делается по готовым шаблонам."
      },
      {
        type: "p",
        text:
          "По словам представителей банка, система заметно ускорила выпуск новых функций и улучшила единообразие UX во всех приложениях Альфы."
      },
      {
        type: "p",
        text:
          "Пример Альфа-Банка подчёркивает, что даже для огромной экосистемы услуг можно создать единый язык интерфейса, который делает продукт понятнее для пользователей и развитие – эффективнее для команды."
      },
      {
        type: "divider",
        label: "Финал"
      },
      {
        type: "h3",
        text: "Заключение"
      },
      {
        type: "p",
        text:
          "Дизайн-система и системное мышление в UX/UI – это стратегический ответ на сложность современного цифрового продукта."
      },
      {
        type: "p",
        text:
          "Вместо того чтобы каждый раз изобретать дизайн заново, команда опирается на единый набор правил и компонентов, который масштабируется вместе с продуктом."
      },
      {
        type: "p",
        text:
          "Хорошая дизайн-система обеспечивает консистентность визуального языка, ускоряет работу и снижает число ошибок при внедрении новых функций."
      },
      {
        type: "p",
        text:
          "В количественном выражении результаты могут быть впечатляющими: исследования показывают ускорение разработки новых интерфейсов на 40–50% при использовании дизайн-системы."
      },
      {
        type: "p",
        text:
          "Но цифры – лишь часть картины. Единый подход повышает качество пользовательского опыта: интерфейсы выглядят цельно, пользователю не нужно каждый раз переучиваться, переходя между разделами или сервисами вашего бренда."
      },
      {
        type: "p",
        text:
          "Важно помнить, что создание дизайн-системы – это инвестиция."
      },
      {
        type: "p",
        text:
          "На первых порах требуется немало усилий, чтобы описать и структурировать все решения, разработать библиотеку и обучить команду ею пользоваться."
      },
      {
        type: "p",
        text:
          "Иногда бывает непросто убедить стейкхолдеров потратить время на систематизацию вместо того, чтобы сразу выдавать видимые результаты."
      },
      {
        type: "p",
        text:
          "Однако эта инвестиция окупается сполна."
      },
      {
        type: "p",
        text:
          "Каждая повторно использованная кнопка или форма – это сэкономленные часы дизайна и разработки."
      },
      {
        type: "p",
        text:
          "Каждое правило в гайде – это предотвращённая ошибка или спор в будущем."
      },
      {
        type: "p",
        text:
          "В долгосрочной перспективе дизайн-система снимает массу операционных проблем, позволяя команде сосредоточиться на действительно новых задачах, требующих творчества."
      },
      {
        type: "p",
        text:
          "Подводя итог: дизайн-система – это не склад деталей, а живой механизм, который делает продукт сильнее."
      },
      {
        type: "p",
        text:
          "Системное мышление дисциплинирует процесс дизайна, но не ограничивает креативность, а направляет её."
      },
      {
        type: "p",
        text:
          "Создавая единые правила, вы освобождаете время и ресурсы для поиска лучших решений там, где это действительно нужно."
      },
      {
        type: "p",
        text:
          "В мире, где продукты становятся всё более комплексными и многоплатформенными, системный подход в UX/UI превращается из конкурентного преимущества в необходимое условие успеха."
      },
      {
        type: "p",
        text:
          "Поставив дизайн на системные рельсы, вы удержите единый облик продукта сегодня и безболезненно масштабируете его завтра – сохраняя лояльность пользователей и уверенность команды в каждом следующем шаге развития."
      }
    ]
  },
  {
    id: "mobile-first",
    title: "Mobile‑first на практике: ошибки и решения",
    excerpt:
      "Mobile-first — это не сжатие экранов, а мышление, структура и приоритеты.",
    date: "08.01.2026",
    readTime: "18 мин чтения",
    tags: ["Mobile", "UI"],
    cover: "assets/images/blog-covers/mobile-first.svg",
    body: [
      {
        type: "h2",
        text: "Mobile-first: не только про экраны, а про мышление и структуру"
      },
      {
        type: "p",
        text:
          "Подход mobile-first — это больше, чем просто дизайн для маленького экрана."
      },
      {
        type: "p",
        text:
          "Часто думают, что достаточно «сжать» десктопный интерфейс под смартфон, но это заблуждение."
      },
      {
        type: "p",
        text:
          "На самом деле mobile-first — это мышление и стратегия проектирования продукта, когда мобильный опыт ставится во главу угла."
      },
      {
        type: "p",
        text:
          "Как справедливо отмечают эксперты, переход к mobile-first — это не просто сжатие сайта для маленьких экранов. Это переосмысление пользовательского опыта с учетом особенностей мобильных устройств."
      },
      {
        type: "p",
        text:
          "Почему это важно? Сегодня более половины веб-трафика приходится на смартфоны, и первое знакомство пользователя с вашим продуктом чаще происходит именно на мобильном."
      },
      {
        type: "p",
        text:
          "Меньший экран диктует свои правила: ограниченное пространство заставляет жестко приоритизировать контент и функции, избавляться от лишнего."
      },
      {
        type: "p",
        text:
          "Mobile-first базируется на принципе прогрессивного улучшения: сперва создается лёгкая, быстрая, понятная мобильная основа, а уже потом — расширение под планшеты и десктоп с добавлением второстепенных элементов."
      },
      {
        type: "p",
        text:
          "Это противоположно старому подходу «сначала десктоп», где мобильная версия выходит урезанной и неудобной."
      },
      {
        type: "p",
        text:
          "Иными словами, mobile-first — это про фокус."
      },
      {
        type: "p",
        text:
          "Нужно спросить себя: что действительно важно пользователю «на ходу» и как это подать максимально просто?"
      },
      {
        type: "p",
        text:
          "Это мышление заставляет думать о структуре интерфейса иначе: сначала обеспечить базовый сценарий на маленьком экране, где нет места лишнему, а потом уже достраивать деталями для больших экранов."
      },
      {
        type: "p",
        text:
          "Как результат, получается продукт с чёткой иерархией, высокой скоростью и интуитивным UX на мобильном — что выгодно всем, включая десктопных пользователей."
      },
      {
        type: "divider",
        label: "Ошибки"
      },
      {
        type: "h3",
        text: "Типичные ошибки mobile-first дизайна (и как их избежать)"
      },
      {
        type: "p",
        text:
          "Несмотря на растущую популярность mobile-first, на практике команды продолжают наступать на одни и те же грабли."
      },
      {
        type: "p",
        text:
          "Ниже мы разберем самые частые ошибки при дизайне «сначала для мобильных» — и способы их исправления."
      },
      {
        type: "p",
        text:
          "Почти все они происходят от непонимания принципа мышления."
      },
      {
        type: "p",
        text:
          "Если знать врага в лицо, mobile-first перестанет быть пугающей философией и превратится в набор конкретных практик."
      },
      {
        type: "divider",
        label: "Ошибка 1"
      },
      {
        type: "h3",
        text: "Слишком мелкие элементы управления — интерфейс под лупой"
      },
      {
        type: "p",
        text:
          "Симптом: пользователю приходится целиться, как снайперу, чтобы нажать кнопку или ссылку."
      },
      {
        type: "p",
        text:
          "Чекбоксы, кнопки, ссылки — все крошечное, палец еле попадает."
      },
      {
        type: "p",
        text:
          "В итоге промахи, «fat finger» эффект, раздражение и выход из продукта."
      },
      {
        type: "p",
        text:
          "Почему так происходит: это результат попытки впихнуть десктопный UI в мобильный экран без изменений."
      },
      {
        type: "p",
        text:
          "Элементы пропорционально уменьшаются, но физический палец-то не уменьшился."
      },
      {
        type: "p",
        text:
          "Если на десктопе клик мышкой по 8px иконке ок, то на таче это промах 9 из 10."
      },
      {
        type: "p",
        text:
          "Последствия: мелкие интерактивные области ведут к ошибочным нажатиям или вовсе невозможности совершить нужное действие."
      },
      {
        type: "p",
        text:
          "Например, формы не заполняются, покупки не совершаются — просто потому что кнопка «Оформить» сделана по принципу «лишь бы влезла»."
      },
      {
        type: "p",
        text:
          "Конверсия стремится к нулю, фрустрация — к потолку."
      },
      {
        type: "p",
        text:
          "Как исправить: увеличить тап-таргеты до комфортного размера."
      },
      {
        type: "p",
        text:
          "Apple рекомендует минимум 44×44pt для интерактивных элементов, Material Design — не меньше 48dp."
      },
      {
        type: "p",
        text:
          "Средний палец занимает площадку ~7–10 мм, значит, важные кнопки должны быть крупными и иметь отступы."
      },
      {
        type: "p",
        text:
          "Если визуально кнопка нужна небольшая, увеличь невидимую область вокруг нее с помощью паддингов."
      },
      {
        type: "p",
        text:
          "Также следи за читаемостью текста: минимальный размер шрифта около 11pt."
      },
      {
        type: "callout",
        icon: "chart",
        title: "Пример",
        text:
          "Walmart Canada увеличил покупки на 12% после увеличения кнопки «Add to Cart» и получил рост мобильных заказов на 98% после mobile-first редизайна."
      },
      {
        type: "p",
        text:
          "Кейс: в одном интернет-магазине кнопка «Оформить заказ» была мала и частично перекрыта плавающей плашкой."
      },
      {
        type: "p",
        text:
          "Кнопку увеличили на 20% и закрепили внизу экрана — завершение заказов выросло, а жалобы исчезли."
      },
      {
        type: "divider",
        label: "Ошибка 2"
      },
      {
        type: "h3",
        text: "Скрытые ключевые действия — поиск «волшебной кнопки»"
      },
      {
        type: "p",
        text:
          "Симптом: пользователь хочет выполнить важное действие, но интерфейс молчит."
      },
      {
        type: "p",
        text:
          "Ключевая функция спрятана за тремя слоями меню, иконкой без подписи или доступна только жестом."
      },
      {
        type: "p",
        text:
          "Почему так происходит: в стремлении сделать экран чище команды убирают важное в меню."
      },
      {
        type: "p",
        text:
          "Но на мобильном нет hover, а жесты редко очевидны новичкам."
      },
      {
        type: "p",
        text:
          "Последствия: ключевые сценарии становятся квестом для посвященных."
      },
      {
        type: "p",
        text:
          "Конверсия падает, потому что пользователи не находят действие."
      },
      {
        type: "p",
        text:
          "Как исправить: важные вещи должны быть на виду, «в одно касание»."
      },
      {
        type: "p",
        text:
          "Иконка без текста допустима для второстепенных функций, но не для главного действия."
      },
      {
        type: "p",
        text:
          "Жесты — только бонус, не единственный путь."
      },
      {
        type: "callout",
        icon: "insight",
        title: "Правило",
        text:
          "Если на экране за 5 секунд непонятно, как сделать главное действие — нужно переделывать."
      },
      {
        type: "p",
        text:
          "Пример: в новостном приложении кнопку «Поделиться» спрятали в меню из трех точек."
      },
      {
        type: "p",
        text:
          "Ее вынесли под статью — доля поделившихся выросла в разы."
      },
      {
        type: "p",
        text:
          "Кейс: SaaS-сервис задач спрятал кнопку «Новая задача» в боковое меню."
      },
      {
        type: "p",
        text:
          "После добавления заметной кнопки «+ Добавить» создание задач резко выросло."
      },
      {
        type: "divider",
        label: "Ошибка 3"
      },
      {
        type: "h3",
        text: "Перегруженные карточки без иерархии — информационная каша"
      },
      {
        type: "p",
        text:
          "Симптом: карточка перегружена — фото, 10 иконок, длинные описания, рейтинги и кнопки, все одинакового веса."
      },
      {
        type: "p",
        text:
          "Почему так происходит: желание «ничего не вырезать» с десктопа."
      },
      {
        type: "p",
        text:
          "Отсутствие визуальной иерархии усугубляет проблему: заголовки не выделены, отступы минимальны, все сливается."
      },
      {
        type: "p",
        text:
          "Последствия: пользователь тратит лишние секунды, не понимает, что главное, и уходит."
      },
      {
        type: "p",
        text:
          "Как исправить: оставить только основное, второстепенное — убрать вглубь."
      },
      {
        type: "p",
        text:
          "Выстроить визуальную иерархию: важное — крупнее и контрастнее."
      },
      {
        type: "p",
        text:
          "Белое пространство — друг: отступы делают карточку «дышащей»."
      },
      {
        type: "p",
        text:
          "Лучше больше шагов, но каждый понятен, чем один экран-венегрет."
      },
      {
        type: "p",
        text:
          "Пример: медиа-сайт сократил карточки до заголовка, картинки и 2–3 строк описания."
      },
      {
        type: "p",
        text:
          "Вовлеченность выросла — пользователи стали открывать больше статей."
      },
      {
        type: "p",
        text:
          "Другой пример: e-commerce каталог оставил на карточке фото, название и цену, остальное перенес внутрь."
      },
      {
        type: "p",
        text:
          "Конверсия добавления в корзину выросла."
      },
      {
        type: "divider",
        label: "Ошибка 4"
      },
      {
        type: "h3",
        text: "Плохая навигация на мобильном — лабиринт вместо меню"
      },
      {
        type: "p",
        text:
          "Симптом: пользователь не понимает, как попасть в нужный раздел."
      },
      {
        type: "p",
        text:
          "Меню спрятано, пунктов много, вложенность глубока, поиска нет."
      },
      {
        type: "p",
        text:
          "Почему так происходит: сложную структуру десктопа просто прячут за гамбургер."
      },
      {
        type: "p",
        text:
          "Последствия: потерянный пользователь = ушедший пользователь."
      },
      {
        type: "p",
        text:
          "Как исправить: минимизировать уровни вложенности и показать путь."
      },
      {
        type: "p",
        text:
          "Нижняя навигация хорошо работает для 3–5 ключевых разделов."
      },
      {
        type: "p",
        text:
          "Поиск должен быть видимым, если контента много."
      },
      {
        type: "p",
        text:
          "Пункты меню — понятные и короткие, без перегруза."
      },
      {
        type: "p",
        text:
          "Пример: новостной портал сократил меню и вывел 4 ключевых раздела в нижние вкладки."
      },
      {
        type: "p",
        text:
          "Вовлеченность выросла — пользователи быстрее находили нужное."
      },
      {
        type: "p",
        text:
          "Другой пример: магазин электроники упростил каталог до 2 шагов и добавил поиск."
      },
      {
        type: "divider",
        label: "Ошибка 5"
      },
      {
        type: "h3",
        text: "Неверное переосмысление десктопного опыта — мобильный не настольный"
      },
      {
        type: "p",
        text:
          "Симптом: мобильная версия перегружена как десктоп или, наоборот, слишком урезана."
      },
      {
        type: "p",
        text:
          "Почему так происходит: команды либо «сжимают и переносят», либо «отрезают лишнее» без понимания сценариев."
      },
      {
        type: "p",
        text:
          "Последствия: мобильный UX не работает — либо невозможно пользоваться, либо не хватает функций."
      },
      {
        type: "p",
        text:
          "Как исправить: понять, какие задачи люди решают с телефона."
      },
      {
        type: "p",
        text:
          "Сделать mobile-first MVP: минимальные функции, которые реально нужны на ходу."
      },
      {
        type: "p",
        text:
          "Сложное — оставить для десктопа или дать аккуратную альтернативу."
      },
      {
        type: "p",
        text:
          "Использовать возможности устройства: камера, геолокация, офлайн, push."
      },
      {
        type: "p",
        text:
          "Пример: финсервис упростил мобильное приложение до балансов и подтверждения платежей."
      },
      {
        type: "p",
        text:
          "Активность выросла, жалобы исчезли."
      },
      {
        type: "divider",
        label: "Советы"
      },
      {
        type: "h3",
        text: "Советы и паттерны для успешного mobile-first дизайна"
      },
      {
        type: "ul",
        items: [
          "Думай mobile-first с самого начала проекта: если фича не ложится на маленький экран, возможно, она не ключевая.",
          "Выстраивай визуальную иерархию: главное — крупнее и контрастнее, второстепенное — тише.",
          "Проектируй «толстые пальцы, большие пальцы»: основные действия в зоне большого пальца, элементы — от 44–48px.",
          "Используй проверенные паттерны: bottom nav, FAB, карточки, pull-to-refresh, знакомые иконки.",
          "Планируй адаптивность с брейкпоинтами и progressive enhancement.",
          "Думай о производительности и доступности: оптимизация, контраст, большие кнопки, простые сценарии.",
          "Тестируй на реальных устройствах и пользователях — это быстрее всего выявляет проблемы."
        ]
      },
      {
        type: "divider",
        label: "Выводы"
      },
      {
        type: "h3",
        text: "Выводы"
      },
      {
        type: "p",
        text:
          "Mobile-first сегодня — это стандарт мышления при создании интерфейсов."
      },
      {
        type: "p",
        text:
          "Это стратегия, где мобильный опыт задает тон всему продукту."
      },
      {
        type: "p",
        text:
          "Правильно реализованный mobile-first улучшает UX на всех устройствах."
      },
      {
        type: "p",
        text:
          "Подход дисциплинирует команду и заставляет ранжировать функции по важности."
      },
      {
        type: "p",
        text:
          "В итоге выигрывают все: пользователи получают быстрый, удобный сервис, а бизнес — рост конверсий и удовлетворенности."
      },
      {
        type: "p",
        text:
          "Главное — помнить, что mobile-first — это про людей и их контекст."
      },
      {
        type: "divider",
        label: "Чек-лист"
      },
      {
        type: "h3",
        text: "Чек-лист mobile-first интерфейса"
      },
      {
        type: "p",
        text:
          "Перед релизом проверь мобильный UX по следующим пунктам."
      },
      {
        type: "ul",
        items: [
          "Минимальный комфорт размеров: все кнопки и кликабельные элементы имеют размер 44–48px, нигде не требуется «ювелирная точность».",
          "Видны ли главные действия: основная цель экрана доступна в одно касание и не спрятана в меню.",
          "Простая навигация: до основных разделов можно добраться за 1–2 тапа, поиск есть при большом объеме контента.",
          "Читаемый контент: текст крупный и контрастный, длинные блоки разбиты на короткие абзацы.",
          "Четкая иерархия: за 5 секунд понятно, что главное на экране.",
          "Тапы вместо ховеров: все действия доступны по касанию, нет скрытых hover-сценариев.",
          "Жесты дополнительны: жесты не являются единственным способом выполнить важное действие.",
          "Производительность и загрузка: быстрый рендер, оптимизированные изображения, есть индикаторы ожидания.",
          "Адаптация под разные экраны: интерфейс не ломается от 320px до планшета.",
          "Использование возможностей устройства: камера, геолокация, офлайн, push — если это улучшает UX.",
          "Тестирование и отзывы: сценарии проверены на реальных устройствах и пользователях."
        ]
      }
    ]
  },
  {
    id: "analytics-for-designers",
    title: "Аналитика для дизайнеров: метрики, которые важно знать",
    excerpt:
      "Какие цифры реально помогают принимать дизайн‑решения: от конверсий до time‑to‑task.",
    date: "03.01.2026",
    readTime: "7 мин",
    tags: ["Analytics", "UX"],
    cover: "assets/images/blog-covers/analytics-for-designers.svg",
    body: [
      {
        type: "p",
        text:
          "Сегодня для UX-дизайнера недостаточно полагаться только на интуицию и эстетику – нужно опираться на данные. Продуманная аналитика помогает понять, насколько удобен продукт и где пользователи испытывают сложности. Метрики наглядно показывают, где продукт \"работает\", а где нет – на каких шагах люди сдаются, а где радуются. Дизайнеру важно понимать не только итоговую конверсию, но и поведение пользователя внутри сценария. Такие показатели позволяют найти узкие места в опыте и улучшить интерфейс на основе фактов, а не догадок. Если специалист разбирается в ключевых метриках и умеет на них влиять, через дизайн он сможет улучшать и UX продукта, и бизнес-результаты."
      },
      {
        type: "callout",
        icon: "insight",
        title: "Ключевая мысль",
        text:
          "Метрики показывают, где пользователь теряет фокус. Дизайн помогает вернуть его в нужный сценарий."
      },
      {
        type: "divider",
        label: "Ключевые метрики"
      },
      {
        type: "p",
        text:
          "Существует множество показателей успеха продукта – от продаж и удержания до рейтинга в сторах. Но дизайнеру в ежедневной работе особенно важны метрики, связанные с поведением и опытом пользователя. Минимальный набор, который реально помогает принимать дизайн-решения, включает конверсию, time-to-task, drop-off и success rate. Рассмотрим каждую из этих метрик подробнее и разберём, как они влияют на UX."
      },
      {
        type: "h3",
        text: "Конверсия (Conversion Rate)"
      },
      {
        type: "p",
        text:
          "Конверсия – это процент пользователей, достигших цели (например, совершивших покупку или регистрацию). Это одна из самых популярных метрик, показывающая, какая доля аудитории успешно проходит путь до конца. Высокая конверсия обычно означает, что дизайн и контент эффективно ведут пользователя к цели. Например, упрощение формы регистрации и удаление лишних полей могут заметно повысить конверсию — в одном кейсе подобные правки увеличили показатель на 20%."
      },
      {
        type: "p",
        text:
          "Однако сама по себе конверсия не раскрывает, на каком именно этапе пользователи испытывают трудности. Если воронка многошаговая, важно копнуть глубже: где именно люди отваливаются до совершения целевого действия? Для этого служат следующие метрики."
      },
      {
        type: "callout",
        icon: "flow",
        title: "Практика",
        text:
          "Уберите на шаге регистрации всё, что не влияет на цель. Чем меньше отвлекающих полей — тем выше конверсия."
      },
      {
        type: "h3",
        text: "Time-to-Task (время на выполнение задачи)"
      },
      {
        type: "p",
        text:
          "Time-to-Task измеряет, сколько времени у пользователя уходит на выполнение ключевой задачи в интерфейсе. Проще говоря, это длительность сценария от начала до успешного завершения. Эту метрику можно замерять как в лабораторных UX-тестах (засекая время выполнения заданий), так и с помощью аналитики на реальных данных (например, фиксируя временные метки событий начала и конца процесса). Если на важное действие уходит слишком много времени, вероятно интерфейс усложнён или пользователю трудно найти нужный шаг – это сигнал к упрощению пути."
      },
      {
        type: "p",
        text:
          "Чем меньше времени требуется на выполнение типовой операции, тем лучше опыт: растёт скорость, удовлетворённость и продуктивность пользователей. Особенно критично это для регулярных действий и внутренних систем, где экономия даже нескольких секунд на задаче масштабируется на тысячи операций в день."
      },
      {
        type: "callout",
        icon: "chart",
        title: "Сигнал",
        text:
          "Если time-to-task растёт — значит пользователь «блуждает». Ищите лишние шаги, дубли и скрытые действия."
      },
      {
        type: "h3",
        text: "Drop-off (отказы на шаге)"
      },
      {
        type: "p",
        text:
          "Drop-off (показатель отказа на шаге) показывает, на каком этапе сценария и сколько пользователей “сходят с дистанции”, не доведя дело до конца. По сути, это анализ воронки: мы смотрим, какой процент аудитории переходит от шага к шагу и где наблюдается самый большой отток. Эти данные помогают локализовать проблемное место в сценарии. Например, если из 100 начавших регистрацию только 50 доходят до шага с вводом адреса, значит, на этапе адреса половина пользователей бросает процесс – возможно, форма слишком сложная или требуются лишние данные."
      },
      {
        type: "p",
        text:
          "Зная, где именно происходит отвал пользователей, дизайнер может сфокусироваться на этом экране или шаге и устранить препятствия. Так, в одном приложении доставки еды добавили автоподстановку адреса – и процент пользователей, бросавших оформление на шаге ввода адреса, существенно снизился. Понижение drop-off на проблемных шагах ведёт к росту общей конверсии, ведь больше людей в итоге достигают целевой точки."
      },
      {
        type: "divider",
        label: "Проверка опыта"
      },
      {
        type: "h3",
        text: "Success Rate (успешность выполнения)"
      },
      {
        type: "p",
        text:
          "Success Rate (показатель успешности сценария) отражает процент пользователей, успешно завершивших определённую задачу или последовательность действий. Он тесно связан с конверсией, но применяется не только к покупкам или глобальным целям, а и к более мелким задачам внутри продукта. Например, какой процент пользователей сумел найти нужную функцию, оформить заявку без ошибок или пройти онбординг до конца."
      },
      {
        type: "p",
        text:
          "Измеряется success rate как количественно (в аналитике фиксируется доля завершивших сценарий), так и качественно – на юзабилити-тестах отмечается, справился участник с заданием или нет. Низкий процент успешности – тревожный сигнал: если, скажем, только 60% пользователей могут правильно заполнить форму, это указывает на серьёзные проблемы UX. Задача дизайнера – выявить причины неудач (неоднозначные поля, отсутствие подсказок, лишние шаги) и переработать интерфейс. При улучшении дизайна success rate растёт – например, упрощение структуры формы может поднять успешность выполнения сценария с 60% до 85%. Повышение этого показателя означает, что больше людей достигают своих целей, что ведёт к росту удовлетворённости и снижению нагрузки на поддержку."
      },
      {
        type: "h3",
        text: "Метрика без контекста – просто цифра"
      },
      {
        type: "p",
        text:
          "Наконец, важно помнить: любая метрика требует контекста и анализа причин. Голая цифра сама по себе ничего не говорит – без понимания ситуации она легко превращается в шум. Например, рост конверсии не всегда однозначно хорош: если повысить её за счёт скрытия критически важной информации или агрессивного дизайна шага, можно получить больше целевых действий, но одновременно всплеск возвратов и жалоб. Аналогично, увеличение времени сессии или количества кликов не всегда означает успех – пользователи могли просто запутаться и тратить больше времени из-за плохой навигации."
      },
      {
        type: "blockquote",
        text:
          "Метрика без контекста — просто цифра. Смысл появляется только в связке с наблюдениями и качественными данными."
      },
      {
        type: "p",
        text:
          "Чтобы метрики приносили пользу, рассматривайте их вместе с качественными данными. Сопоставляйте цифры с наблюдениями: где пользователи тормозят, что они говорят в отзывах. Если видите, что на определённом шаге высокий drop-off, проведите исследования или опросы, чтобы понять почему люди уходят. Возможно, интерфейс требует дополнительных пояснений или упрощения. Такой подход обеспечит, что вы не улучшаете показатели ради самих показателей, а действительно решаете проблемы пользователей."
      },
      {
        type: "p",
        text:
          "Метрики – это мощный инструмент дизайнера, но не самоцель. Не стоит «влюбляться» в один показатель и гнаться только за его ростом – без контекста цифры мало что значат. Гораздо ценнее видеть полную картину: сочетать данные об использовании продукта с пониманием реальных потребностей аудитории. В итоге аналитика и UX-дизайн, работая вместе, позволяют принимать выверенные решения и создавать продукты, которые удобны людям и успешны для бизнеса."
      },
      {
        type: "divider",
        label: "Сноски"
      },
      {
        type: "footnotes",
        items: [
          "Conversion Rate лучше читать в динамике и по сегментам аудитории.",
          "Time-to-Task корректнее мерить на ключевых сценариях, а не на всем пути.",
          "Success Rate удобно проверять в UX‑тестах и подтверждать аналитикой."
        ]
      }
    ]
  },
  {
    id: "design-handoff",
    title: "Дизайн‑хэнд‑офф без боли: как передавать макеты в разработку",
    excerpt:
      "Практическая система передачи дизайна: слои, спецификации, токены, сценарии и контроль качества, чтобы дизайн доезжал в прод.",
    date: "26.12.2025",
    readTime: "17 мин чтения",
    tags: ["Process", "Design System", "Product"],
    cover: "assets/images/blog-covers/design-handoff.svg",
    body: [
      {
        type: "h2",
        text: "Почему хэнд‑офф ломает дизайн"
      },
      {
        type: "p",
        text:
          "Большинство проблем в интерфейсах возникают не на стадии дизайна, а между дизайном и разработкой."
      },
      {
        type: "p",
        text:
          "Когда макет «передали», но не договорились о правилах, интерфейс распадается на частные трактовки."
      },
      {
        type: "p",
        text:
          "В итоге в проде появляются разные размеры отступов, непредсказуемые состояния и разъехавшаяся типографика."
      },
      {
        type: "p",
        text:
          "Хэнд‑офф — это не про отправку ссылки на Figma. Это про согласованный способ превращать макет в продукт."
      },
      {
        type: "callout",
        icon: "insight",
        title: "Ключевая мысль",
        text:
          "Передача дизайна — это часть процесса, а не финальный шаг."
      },
      {
        type: "divider",
        label: "Старт"
      },
      {
        type: "h3",
        text: "Что должно быть готово до передачи"
      },
      {
        type: "p",
        text:
          "Перед тем как отдавать макеты, важно подготовить систему: состояния, правила и точные спецификации."
      },
      {
        type: "p",
        text:
          "Минимальный набор: сетка, отступы, типографика, цвета, состояния компонентов, правила поведения."
      },
      {
        type: "p",
        text:
          "Если этих вещей нет, разработчик будет «додумывать» — и это всегда риск несоответствий."
      },
      {
        type: "h3",
        text: "1. Единые дизайн‑токены"
      },
      {
        type: "p",
        text:
          "Токены — это не мода, а язык между дизайном и кодом."
      },
      {
        type: "p",
        text:
          "Они фиксируют цвета, типографику, радиусы, тени и отступы как сущности, а не как случайные значения."
      },
      {
        type: "p",
        text:
          "Если в продукте есть токены, все решения становятся воспроизводимыми и контролируемыми."
      },
      {
        type: "callout",
        icon: "note",
        title: "Практика",
        text:
          "Описывай токены не только числом, но и смыслом: `surface/primary`, `text/muted`, `space/12`."
      },
      {
        type: "h3",
        text: "2. Компоненты и состояния"
      },
      {
        type: "p",
        text:
          "Каждый компонент должен иметь полный набор состояний: default, hover, active, disabled, error."
      },
      {
        type: "p",
        text:
          "Если состояние не описано, оно будет реализовано как «кажется, так логично»."
      },
      {
        type: "p",
        text:
          "Собери в отдельные страницы базовые элементы: кнопки, поля, чекбоксы, селекты, таблицы."
      },
      {
        type: "h3",
        text: "3. Сценарии и edge‑cases"
      },
      {
        type: "p",
        text:
          "Покажи не только идеальные экраны, но и проблемные сценарии: ошибки, пустые состояния, загрузку."
      },
      {
        type: "p",
        text:
          "Если экрана «данных нет» нет в макете, его сделают в коде, и результат будет случайным."
      },
      {
        type: "divider",
        label: "Процесс"
      },
      {
        type: "h3",
        text: "Как передавать макеты системно"
      },
      {
        type: "p",
        text:
          "Лучший хэнд‑офф строится на ритуале: дизайн, уточнение, реализация, сверка."
      },
      {
        type: "p",
        text:
          "Это похоже на pipeline: дизайнер готовит, разработчик уточняет, затем вместе проверяют."
      },
      {
        type: "h3",
        text: "Шаг 1. Подготовка файла"
      },
      {
        type: "p",
        text:
          "Убери лишние дубли, переименуй ключевые фреймы, структурируй по страницам."
      },
      {
        type: "p",
        text:
          "Сделай отдельную страницу с компонентами и правилами — она должна жить рядом с макетами."
      },
      {
        type: "h3",
        text: "Шаг 2. Синхронизация"
      },
      {
        type: "p",
        text:
          "Проведи короткий разбор с разработкой: поясни сложные места, критичные сценарии и допущения."
      },
      {
        type: "p",
        text:
          "Это экономит дни. Один созвон на 30 минут снимает десятки уточнений."
      },
      {
        type: "h3",
        text: "Шаг 3. Контроль реализации"
      },
      {
        type: "p",
        text:
          "После реализации проведи дизайн‑ревью: сравни UI с макетом по ключевым сценариям."
      },
      {
        type: "p",
        text:
          "Фиксируй отклонения не «по вкусу», а по принципам: токены, отступы, состояния."
      },
      {
        type: "callout",
        icon: "chart",
        title: "Эффект",
        text:
          "Регулярный дизайн‑ревью снижает визуальные отклонения и ускоряет согласование релизов."
      },
      {
        type: "divider",
        label: "Ошибки"
      },
      {
        type: "h3",
        text: "Типичные ошибки хэнд‑оффа"
      },
      {
        type: "ul",
        items: [
          "Передача «картинкой» без системы: нет токенов, правил и состояний.",
          "Разрозненные файлы: нет единого источника правды.",
          "Отсутствие edge‑cases: пустые состояния, ошибки, загрузка не учтены.",
          "Ноль коммуникации: дизайнер и разработчик работают в изоляции."
        ]
      },
      {
        type: "divider",
        label: "Чек‑лист"
      },
      {
        type: "h3",
        text: "Чек‑лист перед передачей"
      },
      {
        type: "ul",
        items: [
          "Компоненты собраны и имеют состояния.",
          "Токены описаны и используются последовательно.",
          "Важные сценарии продуманы: ошибки, пустые, загрузка.",
          "Файл структурирован и легко читается.",
          "Есть договоренность о проверке реализации."
        ]
      },
      {
        type: "divider",
        label: "Вывод"
      },
      {
        type: "h3",
        text: "Вывод"
      },
      {
        type: "p",
        text:
          "Хэнд‑офф — это не финал, а начало совместной работы."
      },
      {
        type: "p",
        text:
          "Если есть система, дизайн доезжает в прод почти без потерь."
      },
      {
        type: "p",
        text:
          "Если системы нет — продукт начинает «расползаться» сразу после первой разработки."
      }
    ]
  },
  {
    id: "ux-copy",
    title: "UX‑тексты, которые помогают пользователю",
    excerpt:
      "Как писать микрокопирайтинг для интерфейсов: ясность, тональность, ошибки и сценарии.",
    date: "12.12.2025",
    readTime: "16 мин чтения",
    tags: ["UX", "Content", "Product"],
    cover: "assets/images/blog-covers/ux-copy.svg",
    body: [
      {
        type: "h2",
        text: "Почему текст — это UX"
      },
      {
        type: "p",
        text:
          "Пользователь читает интерфейс так же, как и взаимодействует с ним."
      },
      {
        type: "p",
        text:
          "Если текст непонятен, UX ломается: человек не знает, что происходит и что делать дальше."
      },
      {
        type: "p",
        text:
          "Микрокопирайтинг — это инструмент навигации, снижения тревоги и повышения доверия."
      },
      {
        type: "divider",
        label: "Принципы"
      },
      {
        type: "h3",
        text: "Принцип 1. Ясность важнее выразительности"
      },
      {
        type: "p",
        text:
          "Хороший текст не должен быть умным — он должен быть понятным."
      },
      {
        type: "p",
        text:
          "Лучше простая фраза, чем красивый, но неоднозначный слог."
      },
      {
        type: "p",
        text:
          "Проверка: можно ли понять смысл за 3 секунды, не перечитывая?"
      },
      {
        type: "h3",
        text: "Принцип 2. Говори с пользователем его языком"
      },
      {
        type: "p",
        text:
          "Если аудитория не дизайнеры, не стоит писать «инициируйте конверсию»."
      },
      {
        type: "p",
        text:
          "Пиши так, как люди говорят в реальной жизни, но без панибратства."
      },
      {
        type: "h3",
        text: "Принцип 3. Текст — это часть сценария"
      },
      {
        type: "p",
        text:
          "Текст должен подсказывать, что происходит, и помогать принять решение."
      },
      {
        type: "p",
        text:
          "Особенно это важно в формах, оплате и ошибках."
      },
      {
        type: "callout",
        icon: "note",
        title: "Правило",
        text:
          "Если пользователь делает ошибку — виноват интерфейс, а не человек."
      },
      {
        type: "divider",
        label: "Формы"
      },
      {
        type: "h3",
        text: "Как писать тексты в формах"
      },
      {
        type: "p",
        text:
          "Лейбл должен объяснять, что требуется, а плейсхолдер — давать пример."
      },
      {
        type: "p",
        text:
          "Не путай плейсхолдер и лейбл: плейсхолдер исчезает и путает."
      },
      {
        type: "p",
        text:
          "Ошибка должна объяснять, как исправить, а не просто сообщать, что «что-то не так»."
      },
      {
        type: "ul",
        items: [
          "Плохо: «Ошибка».",
          "Хорошо: «Введите номер телефона в формате +7 900 000‑00‑00»."
        ]
      },
      {
        type: "divider",
        label: "Кнопки"
      },
      {
        type: "h3",
        text: "Тексты на кнопках"
      },
      {
        type: "p",
        text:
          "Кнопка — это действие, поэтому текст должен быть глаголом."
      },
      {
        type: "p",
        text:
          "«Отправить», «Сохранить», «Создать» работают лучше, чем абстрактное «ОК»."
      },
      {
        type: "p",
        text:
          "Если действие рискованное, добавь ясность: «Удалить навсегда»."
      },
      {
        type: "divider",
        label: "Ошибки"
      },
      {
        type: "h3",
        text: "Тексты ошибок"
      },
      {
        type: "p",
        text:
          "Ошибка должна быть конкретной и полезной."
      },
      {
        type: "p",
        text:
          "Не обвиняй пользователя и не используй технический язык."
      },
      {
        type: "p",
        text:
          "Лучший формат: «Что случилось» + «что делать дальше»."
      },
      {
        type: "divider",
        label: "Тон"
      },
      {
        type: "h3",
        text: "Тональность и доверие"
      },
      {
        type: "p",
        text:
          "Тональность должна соответствовать продукту: финтех — спокойный, развлекательный — живее."
      },
      {
        type: "p",
        text:
          "Постоянство в тоне — это часть бренда и доверия."
      },
      {
        type: "callout",
        icon: "insight",
        title: "Подсказка",
        text:
          "Составь короткий tone‑of‑voice документ: 5–7 правил для всех текстов."
      },
      {
        type: "divider",
        label: "Чек‑лист"
      },
      {
        type: "h3",
        text: "Чек‑лист UX‑текста"
      },
      {
        type: "ul",
        items: [
          "Понятно ли, что делать дальше?",
          "Есть ли конкретные инструкции при ошибке?",
          "Тексты короткие и однозначные?",
          "Кнопки начинаются с действия?",
          "Тональность стабильна по всему продукту?"
        ]
      },
      {
        type: "divider",
        label: "Вывод"
      },
      {
        type: "h3",
        text: "Вывод"
      },
      {
        type: "p",
        text:
          "UX‑текст — это часть интерфейса, а не «последний штрих»."
      },
      {
        type: "p",
        text:
          "Он снижает нагрузку, объясняет сценарии и повышает доверие."
      }
    ]
  },
  {
    id: "product-metrics",
    title: "Продуктовые метрики без шума: что измерять дизайнеру",
    excerpt:
      "Понятная система метрик для UX: что считать, как читать и как связывать с решениями.",
    date: "02.12.2025",
    readTime: "15 мин чтения",
    tags: ["Analytics", "UX", "Product"],
    cover: "assets/images/blog-covers/product-metrics.svg",
    body: [
      {
        type: "h2",
        text: "Почему метрики важны дизайнеру"
      },
      {
        type: "p",
        text:
          "Дизайн — это не только эстетика, но и измеримый эффект."
      },
      {
        type: "p",
        text:
          "Если вы не измеряете результат, вы не знаете, стало ли лучше."
      },
      {
        type: "divider",
        label: "База"
      },
      {
        type: "h3",
        text: "Метрики, которые стоит знать"
      },
      {
        type: "p",
        text:
          "Есть несколько базовых показателей, которые дают ясную картину пользовательского опыта."
      },
      {
        type: "ul",
        items: [
          "Conversion Rate — доля пользователей, достигших цели.",
          "Time‑to‑Task — время выполнения ключевого действия.",
          "Drop‑off — где пользователи теряются в сценарии.",
          "Success Rate — доля успешных прохождений сценария."
        ]
      },
      {
        type: "h3",
        text: "Conversion Rate"
      },
      {
        type: "p",
        text:
          "Конверсия показывает, насколько дизайн приводит человека к цели."
      },
      {
        type: "p",
        text:
          "Но сама по себе цифра не говорит, где проблема — для этого нужна воронка."
      },
      {
        type: "h3",
        text: "Time‑to‑Task"
      },
      {
        type: "p",
        text:
          "Если задача выполняется долго, интерфейс мешает."
      },
      {
        type: "p",
        text:
          "Сокращение времени — почти всегда признак улучшения UX."
      },
      {
        type: "h3",
        text: "Drop‑off"
      },
      {
        type: "p",
        text:
          "Падение на шаге — сигнал, где пользователь теряет мотивацию или не понимает, что делать."
      },
      {
        type: "h3",
        text: "Success Rate"
      },
      {
        type: "p",
        text:
          "Показывает, сколько людей вообще смогли завершить сценарий."
      },
      {
        type: "divider",
        label: "Ошибки"
      },
      {
        type: "h3",
        text: "Что ломает понимание метрик"
      },
      {
        type: "ul",
        items: [
          "Смотрим только итоговые цифры без контекста.",
          "Не сравниваем сегменты пользователей.",
          "Запускаем изменения без замеров «до»."
        ]
      },
      {
        type: "divider",
        label: "Связка"
      },
      {
        type: "h3",
        text: "Как связать метрики с решениями"
      },
      {
        type: "p",
        text:
          "Метрика должна быть связана с конкретным решением."
      },
      {
        type: "p",
        text:
          "Например: «Если сократим поля формы, снизим время на шаге и повысим конверсию»."
      },
      {
        type: "p",
        text:
          "Так измерения становятся инструментом дизайна, а не отчетностью."
      },
      {
        type: "callout",
        icon: "insight",
        title: "Фокус",
        text:
          "Одна метрика — одна гипотеза. Иначе вы не поймете, что сработало."
      },
      {
        type: "divider",
        label: "Практика"
      },
      {
        type: "h3",
        text: "Мини‑процесс для дизайнера"
      },
      {
        type: "ul",
        items: [
          "Определить цель экрана и метрику успеха.",
          "Зафиксировать базу: как сейчас.",
          "Сделать изменение и проверить эффект.",
          "Повторять, пока результат стабилен."
        ]
      },
      {
        type: "divider",
        label: "Вывод"
      },
      {
        type: "h3",
        text: "Вывод"
      },
      {
        type: "p",
        text:
          "Метрики — это язык, на котором дизайн разговаривает с бизнесом."
      },
      {
        type: "p",
        text:
          "Если дизайнер понимает метрики, его решения становятся точнее и сильнее."
      }
    ]
  },
  {
    id: "ux-research-lite",
    title: "Быстрые исследования: как получить инсайты за 48 часов",
    excerpt:
      "Подход к lightweight‑исследованиям, когда времени мало, а решения нужны вчера.",
    date: "28.12.2025",
    readTime: "5 мин",
    tags: ["Research", "UX"],
    cover: "assets/images/blog-covers/ux-research-lite.svg",
    body: [
      {
        type: "h2",
        text: "Быстрые исследования за 48 часов: что реально успеть"
      },
      {
        type: "p",
        text:
          "Lightweight‑ресёрч — это не «упрощённая версия нормального исследования». Это отдельный формат, где всё подчинено скорости и ясности решения. Его задача — не дать исчерпывающую картину мира, а быстро снять ключевые риски перед релизом."
      },
      {
        type: "p",
        text:
          "За 48 часов можно получить валидные инсайты, если заранее ограничить масштаб, выбрать один ключевой сценарий и не распыляться на все сегменты. В этом тексте — проверенный план, который помогает собрать данные, обработать их и выдать понятные рекомендации уже через два дня."
      },
      {
        type: "callout",
        icon: "insight",
        title: "Смысл формата",
        text:
          "Быстрый ресёрч нужен, чтобы не строить продукт вслепую, когда нет времени на долгие циклы."
      },
      {
        type: "divider",
        label: "Подготовка"
      },
      {
        type: "h3",
        text: "1. Сформулируй одну цель и один сценарий"
      },
      {
        type: "p",
        text:
          "Главная ошибка — пытаться исследовать всё сразу. Выбирай один путь, который критичен для метрики: регистрация, поиск товара, оформление заказа, первый запуск."
      },
      {
        type: "p",
        text:
          "Хорошая формулировка: «Проверить, понимают ли пользователи этап выбора тарифа и что их останавливает». Плохая формулировка: «Посмотреть, нравится ли продукт»."
      },
      {
        type: "h3",
        text: "2. Минимальная выборка — тоже выборка"
      },
      {
        type: "p",
        text:
          "Для быстрых исследований достаточно 5–7 респондентов в одном сегменте. Это позволяет поймать основные проблемы, не тратя дни на рекрутинг."
      },
      {
        type: "p",
        text:
          "Если продукт B2B, лучше взять 3–4 реальных клиента и 2–3 потенциальных. Для B2C — несколько пользователей целевой аудитории."
      },
      {
        type: "divider",
        label: "План 48 часов"
      },
      {
        type: "h3",
        text: "День 1: подготовка и интервью"
      },
      {
        type: "ul",
        items: [
          "Утро: фиксируем цель, сценарий, метрику успеха.",
          "День: рекрутинг 5–7 респондентов (через клиентов, соцсети, коллег).",
          "Вечер: интервью/тесты 30–40 минут, запись экрана и аудио."
        ]
      },
      {
        type: "p",
        text:
          "Важно: используйте один и тот же сценарий для всех участников. Любые отклонения сделают данные хаотичными и снизят качество выводов."
      },
      {
        type: "h3",
        text: "День 2: синтез и выводы"
      },
      {
        type: "ul",
        items: [
          "Утро: расшифровка ключевых моментов, быстрые заметки.",
          "День: кластеризация проблем и инсайтов.",
          "Вечер: формулировка 3–5 приоритетных улучшений."
        ]
      },
      {
        type: "divider",
        label: "Методы"
      },
      {
        type: "h3",
        text: "Какие методы подходят"
      },
      {
        type: "p",
        text:
          "В формате 48 часов лучше всего работают три метода: быстрые интервью, тестирование прототипа и анализ одного ключевого шага."
      },
      {
        type: "ul",
        items: [
          "Интервью (20–30 минут) — чтобы понять мотивацию.",
          "Тест прототипа — чтобы увидеть ошибки в сценарии.",
          "Сессионные записи — чтобы проверить фактическое поведение."
        ]
      },
      {
        type: "p",
        text:
          "Не пытайся делать всё сразу. Выбери 1–2 метода, которые дадут самые быстрые ответы на цель."
      },
      {
        type: "divider",
        label: "Скрипт"
      },
      {
        type: "h3",
        text: "Пример сценария интервью"
      },
      {
        type: "ul",
        items: [
          "Контекст: «Как вы решаете эту задачу сейчас?»",
          "Проблема: «Что в этом процессе самое неудобное?»",
          "Сценарий: «Покажите, как бы вы действовали в прототипе».",
          "Финал: «Что было непонятно? Что ожидали увидеть?»"
        ]
      },
      {
        type: "p",
        text:
          "Если пользователь запутался — не помогай сразу. Дай ему пару минут, чтобы увидеть реальную точку трения."
      },
      {
        type: "divider",
        label: "Синтез"
      },
      {
        type: "h3",
        text: "Как быстро обработать данные"
      },
      {
        type: "p",
        text:
          "После интервью выпиши 2–3 ключевые цитаты и проблему, которую они описывают. Затем сгруппируй их в кластеры."
      },
      {
        type: "p",
        text:
          "Не нужно делать полноценный исследовательский отчёт. Достаточно таблицы: проблема → где проявляется → эффект → рекомендация."
      },
      {
        type: "callout",
        icon: "note",
        title: "Шаблон вывода",
        text:
          "«На шаге X пользователи не понимают Y → теряют время → уходят → решение: Z»."
      },
      {
        type: "divider",
        label: "Рекрутинг"
      },
      {
        type: "h3",
        text: "Где найти респондентов быстро"
      },
      {
        type: "p",
        text:
          "В быстрых исследованиях рекрутинг — самый узкий шаг. Лучшие источники: текущие пользователи, база поддержки, друзья команды, подписчики в соцсетях и партнёры."
      },
      {
        type: "p",
        text:
          "Если сегмент узкий, попросите аккаунт‑менеджеров предложить 3–4 клиента. Для B2C можно использовать пост в соцсетях с простым опросом и быстрым созвоном."
      },
      {
        type: "p",
        text:
          "Важно: не берите случайных людей «лишь бы были». Лучше меньше, но ближе к целевой аудитории, иначе выводы будут неверными."
      },
      {
        type: "divider",
        label: "Инструменты"
      },
      {
        type: "h3",
        text: "Минимальный набор для 48 часов"
      },
      {
        type: "ul",
        items: [
          "Google Meet / Zoom для быстрых созвонов.",
          "Figma или прототип для проверки сценария.",
          "Таблица или Notion для фиксации заметок.",
          "Запись экрана (с разрешения участника)."
        ]
      },
      {
        type: "p",
        text:
          "Чем проще инструменты, тем меньше времени уйдет на организацию. Важно потратить время на разговор с пользователем, а не на настройку сложного сервиса."
      },
      {
        type: "divider",
        label: "Артефакты"
      },
      {
        type: "h3",
        text: "Какой результат показать команде"
      },
      {
        type: "p",
        text:
          "Самый эффективный формат — короткий артефакт на одной странице: список проблем с доказательствами и рядом — решение."
      },
      {
        type: "p",
        text:
          "Добавьте 2–3 цитаты и скриншоты проблемных мест. Это повышает доверие и помогает быстрее принять решение."
      },
      {
        type: "p",
        text:
          "Если есть время, сделайте короткую презентацию на 5–6 слайдов: контекст, сценарий, проблемы, рекомендации."
      },
      {
        type: "divider",
        label: "Мини‑кейс"
      },
      {
        type: "h3",
        text: "Пример быстрого ресёрча"
      },
      {
        type: "p",
        text:
          "В сервисе онлайн‑записи пользователи часто бросали форму на шаге выбора времени. За 48 часов команда провела 6 коротких интервью и увидела, что люди путаются между «окнами» и «доступным временем»."
      },
      {
        type: "p",
        text:
          "Решение оказалось простым: убрать лишние фильтры, показать свободные слоты крупнее и добавить подсказку «выберите дату, затем время». Конверсия в запись выросла на 9%."
      },
      {
        type: "divider",
        label: "После 48 часов"
      },
      {
        type: "h3",
        text: "Что делать дальше"
      },
      {
        type: "p",
        text:
          "Быстрый ресёрч — это старт. После внедрения изменений важно проверить эффект: метрики, отзывы, снижение вопросов в поддержку."
      },
      {
        type: "p",
        text:
          "Если результат подтверждён, следующий шаг — более глубокое исследование, чтобы не повторять ошибки и масштабировать решение."
      },
      {
        type: "divider",
        label: "Ограничения"
      },
      {
        type: "h3",
        text: "Когда 48 часов не подходят"
      },
      {
        type: "p",
        text:
          "Если продукт затрагивает финансы, здоровье или безопасность, быстрый ресёрч не заменит полноценные исследования. Там ошибки слишком дорогие."
      },
      {
        type: "p",
        text:
          "Также быстрый формат не работает, если команда не готова менять продукт. Без внедрения выводов любое исследование теряет смысл."
      },
      {
        type: "divider",
        label: "Этика"
      },
      {
        type: "h3",
        text: "Качество общения и уважение к пользователю"
      },
      {
        type: "p",
        text:
          "Даже в быстром формате важно объяснять цель исследования и получать согласие на запись. Это повышает доверие и качество ответов."
      },
      {
        type: "p",
        text:
          "Не заставляйте пользователя чувствовать себя «виноватым» за ошибки. Исследование должно выявлять проблемы интерфейса, а не проверять компетенции человека."
      },
      {
        type: "divider",
        label: "Результат"
      },
      {
        type: "h3",
        text: "Что должно быть на выходе"
      },
      {
        type: "ul",
        items: [
          "3–5 ключевых проблем (с примерами).",
          "Список быстрых улучшений (приоритет).",
          "Риски, если ничего не менять.",
          "Следующий шаг исследования, если нужен."
        ]
      },
      {
        type: "p",
        text:
          "В идеале результат ресёрча — это набор задач для ближайшего спринта. Если команда не может сразу применить выводы, то исследование не выполнило свою цель."
      },
      {
        type: "divider",
        label: "Ошибки"
      },
      {
        type: "h3",
        text: "Частые ошибки быстрого ресёрча"
      },
      {
        type: "ul",
        items: [
          "Слишком много целей в одном исследовании.",
          "Рекрутинг случайных людей без связи с сегментом.",
          "Отсутствие чёткого сценария теста.",
          "Не фиксируются конкретные наблюдения и цитаты.",
          "Выводы не превращаются в действия."
        ]
      },
      {
        type: "p",
        text:
          "Ещё одна ошибка — формулировать выводы слишком абстрактно. «Пользователи не понимают» звучит как эмоция. Лучше: «3 из 6 участников не нашли кнопку за 30 секунд»."
      },
      {
        type: "divider",
        label: "Чек‑лист"
      },
      {
        type: "ul",
        items: [
          "Есть одна цель и один ключевой сценарий.",
          "Выбрано 5–7 респондентов нужного сегмента.",
          "Сценарий интервью фиксирован и короткий.",
          "Проблемы и инсайты сгруппированы.",
          "Есть 3–5 конкретных улучшений.",
          "Команда готова применить результаты."
        ]
      },
      {
        type: "divider",
        label: "Вывод"
      },
      {
        type: "p",
        text:
          "Быстрые исследования не заменяют глубокий ресёрч, но позволяют резко снизить риск ошибок. За 48 часов можно получить качественные инсайты, если ограничить масштаб и сфокусироваться на ключевом сценарии."
      },
      {
        type: "p",
        text:
          "Секрет успеха — скорость и дисциплина: чёткая цель, быстрые интервью, ясные выводы и сразу в работу."
      },
      {
        type: "p",
        text:
          "Если повторять такой цикл регулярно, команда получает привычку принимать решения на данных, а не на догадках — даже когда времени критически мало."
      },
      {
        type: "p",
        text:
          "Это делает продукт устойчивее: небольшие итерации снижают риск больших ошибок и помогают быстрее двигаться к ценности для пользователя."
      },
      {
        type: "p",
        text:
          "Именно за это быстрые исследования ценят продуктовые команды."
      },
      {
        type: "p",
        text:
          "Это работает даже в условиях жёстких дедлайнов."
      }
    ]
  },
  {
    id: "portfolio-story",
    title: "Как рассказывать о кейсах, чтобы продавать себя",
    excerpt:
      "Структура сильного кейса: проблема, процесс, решения, результат — и немного честности.",
    date: "20.12.2025",
    readTime: "6 мин",
    tags: ["Portfolio", "Career"],
    cover: "assets/images/blog-covers/portfolio-story.svg",
    body: [
      {
        type: "p",
        text:
          "Автор: Ярослав Сигидин"
      },
      {
        type: "divider",
        label: "Почему кейсы продают"
      },
      {
        type: "h2",
        text: "Почему кейсы продают лучше, чем «портфолио из картинок»"
      },
      {
        type: "p",
        text:
          "Если у тебя в портфолио просто скриншоты и краткие подписи, клиент видит: «возможно, ты умеешь рисовать, но я не понимаю, умеешь ли ты решать задачи». Кейс — это не про кнопки. Кейс — это про доверие."
      },
      {
        type: "ul",
        items: [
          "Ты понимаешь бизнес?",
          "Ты понимаешь пользователей?",
          "Ты умеешь думать, а не только делать?",
          "Ты умеешь доводить работу до результата?",
          "Ты умеешь объяснять решения?",
          "Ты умеешь работать с ограничениями?"
        ]
      },
      {
        type: "blockquote",
        text:
          "Даже если экраны не идеальны, но кейс написан сильно — ты продаёшься лучше, чем дизайнер с «Dribbble‑шотами», у которого нет объяснения решений."
      },
      {
        type: "divider",
        label: "История"
      },
      {
        type: "h2",
        text: "Кейс как история (и почему это важно)"
      },
      {
        type: "p",
        text:
          "Самая большая ошибка — считать кейс демонстрацией финальных макетов. Кейс — это история трансформации: было → стало, проблема → решение, хаос → порядок."
      },
      {
        type: "callout",
        icon: "note",
        title: "Что делает кейс «продающим»",
        text:
          "Понятность, структура, короткие абзацы, факты и решения, без глянца ради глянца. Клиент должен думать: «Я хочу, чтобы этот человек делал мой продукт»."
      },
      {
        type: "divider",
        label: "Структура"
      },
      {
        type: "h2",
        text: "Сильная структура кейса (которая работает почти всегда)"
      },
      {
        type: "h3",
        text: "1) Контекст: что это за проект"
      },
      {
        type: "p",
        text:
          "Контекст помогает читателю быстро «войти в задачу». Если его нет — кейс воспринимается как набор экранов из вакуума."
      },
      {
        type: "ul",
        items: [
          "Что за продукт / ниша.",
          "Кто аудитория.",
          "Этап продукта (MVP, редизайн, запуск).",
          "Что было до тебя."
        ]
      },
      {
        type: "p",
        text:
          "Пример (сильный): «Проект — сервис онлайн‑записи для стоматологии. Аудитория 25–45 лет. Продукт работал, но плохо конвертировал. Пользователи выбирали врача, но не записывались»."
      },
      {
        type: "h3",
        text: "2) Проблема: какая боль была у бизнеса или пользователей"
      },
      {
        type: "p",
        text:
          "Проблема должна звучать как проблема, а не как «задача дизайнера»."
      },
      {
        type: "ul",
        items: [
          "«Пользователи не могли найти запись на приём».",
          "«70% бросали оформление заказа на шаге оплаты».",
          "«Поддержка получала 120 одинаковых вопросов в день»."
        ]
      },
      {
        type: "p",
        text:
          "Живой пример: «В доставке еды 45% уходили на шаге выбора времени. Причина: люди не понимали, что доставка возможна только через 2 часа»."
      },
      {
        type: "h3",
        text: "3) Цель: что считали успехом"
      },
      {
        type: "p",
        text:
          "Цель превращает кейс из истории в профессиональный документ."
      },
      {
        type: "ul",
        items: [
          "Поднять конверсию регистрации.",
          "Сократить время выполнения сценария.",
          "Уменьшить drop‑off.",
          "Снизить нагрузку на поддержку."
        ]
      },
      {
        type: "p",
        text:
          "Пример: «Цель — увеличить конверсию записи с 2,4% до 3,2%. Доп. цель — снизить обращения в поддержку по записи на 20%»."
      },
      {
        type: "h3",
        text: "4) Роль: что делал именно ты"
      },
      {
        type: "p",
        text:
          "Читатель должен понимать: это сделал ты или команда?"
      },
      {
        type: "p",
        text:
          "Хорошо: «Я отвечал за весь UX‑процесс: от анализа воронки и интервью до прототипов и передачи в разработку. В команде был продакт и два разработчика»."
      },
      {
        type: "h3",
        text: "5) Ограничения: что мешало сделать идеально"
      },
      {
        type: "ul",
        items: [
          "Дедлайн (2 недели).",
          "Нет аналитики или доступа к пользователям.",
          "Нельзя менять backend.",
          "Жёсткие бренд‑гайдлайны."
        ]
      },
      {
        type: "p",
        text:
          "Пример: «Backend старый, менять можно только фронт. Поэтому сфокусировались на упрощении формы и подсказках»."
      },
      {
        type: "h3",
        text: "6) Процесс: как ты думал и принимал решения"
      },
      {
        type: "p",
        text:
          "Процесс — это не список действий. Он отвечает на вопросы: что заметил, что проверил, почему выбрал именно это решение."
      },
      {
        type: "p",
        text:
          "Пример: «Увидел, что 52% уходят на шаге выбора даты. Провёл 5 интервью — люди не понимали разницу между “свободным временем” и “временем врача”. Сделал календарь проще, добавил подсказки, убрал лишние фильтры»."
      },
      {
        type: "h3",
        text: "7) Решения: что именно ты сделал"
      },
      {
        type: "ul",
        items: [
          "«Сократил форму регистрации с 9 полей до 4».",
          "«Вынес “Документы” на главный экран и переименовал в “Справки и реквизиты”».",
          "«Добавил блок “Доставка и возврат” под ценой, чтобы снизить тревожность»."
        ]
      },
      {
        type: "h3",
        text: "8) Результат: цифры + эффект + вывод"
      },
      {
        type: "p",
        text:
          "Если аналитики нет — это нормально. Покажи честный результат: запуск без правок, повторный проект, меньше вопросов в поддержку."
      },
      {
        type: "p",
        text:
          "Сильный пример: «Конверсия выросла с 2,4% до 3,1%, drop‑off на шаге выбора времени снизился с 45% до 22%, поддержка получила на 18% меньше обращений»."
      },
      {
        type: "h3",
        text: "9) Честность: сложности делают кейс сильнее"
      },
      {
        type: "p",
        text:
          "Честные детали показывают зрелость. «Я ошибся в гипотезе», «часть функций не реализовали», «пришлось переделывать»."
      },
      {
        type: "h3",
        text: "10) Финал: выводы и чему научился"
      },
      {
        type: "p",
        text:
          "Этот блок делает кейс «взрослым». Пример: «Я понял, что визуальная чистота не решает проблему, если сценарий неочевиден. Следующий раз начну с теста, а не с UI»."
      },
      {
        type: "divider",
        label: "Частые ошибки"
      },
      {
        type: "ul",
        items: [
          "Слишком много UI, слишком мало смысла.",
          "Кейс без проблемы.",
          "Кейс без роли.",
          "Кейс без результата.",
          "Слишком глянцево — не верят."
        ]
      },
      {
        type: "divider",
        label: "Мини‑чеклист"
      },
      {
        type: "ul",
        items: [
          "Контекст понятен за 10 секунд.",
          "Проблема конкретная.",
          "Есть цель.",
          "Понятна моя роль.",
          "Есть ограничения.",
          "Процесс — это логика, а не список.",
          "Решения объяснены.",
          "Есть цифры или честный результат.",
          "Есть сложности.",
          "Есть вывод."
        ]
      },
      {
        type: "ul",
        items: [
          "Проверить текст на «воду».",
          "Уточнить цифры и ограничения.",
          "Показать ключевые экраны и смысл.",
          "Сформулировать один сильный вывод."
        ]
      },
      {
        type: "divider",
        label: "Вывод"
      },
      {
        type: "p",
        text:
          "Продающий кейс — это история, структура, логика, решения, результаты и честность. Кейс продаёт не дизайн. Кейс продаёт твой мозг."
      }
    ]
  }
,
{
  "id": "design-critique",
  "title": "Дизайн‑критика, которая улучшает продукт",
  "excerpt": "Как проводить критику без токсичности: структура, вопросы и формат, которые делают дизайн сильнее.",
  "date": "24.11.2025",
  "readTime": "19 мин чтения",
  "tags": [
    "Process",
    "UX",
    "Team"
  ],
  "cover": "assets/images/blog-covers/design-critique.svg",
  "body": [
    {
      "type": "h2",
      "text": "Почему дизайн‑критика важнее, чем кажется"
    },
    {
      "type": "p",
      "text": "Дизайн‑критика — это не про «нравится / не нравится», а про скорость роста качества."
    },
    {
      "type": "p",
      "text": "Она помогает увидеть слепые зоны, проверить гипотезы и снять неопределенность до разработки."
    },
    {
      "type": "p",
      "text": "Без регулярной критики команда начинает подтверждать свои решения, а не улучшать их."
    },
    {
      "type": "p",
      "text": "Правильно выстроенная критика — это инструмент совместного мышления, а не публичная оценка дизайнера."
    },
    {
      "type": "callout",
      "icon": "insight",
      "title": "Суть",
      "text": "Критика не ломает идеи. Она очищает их от слабых мест."
    },
    {
      "type": "divider",
      "label": "Фрейм"
    },
    {
      "type": "h3",
      "text": "От вкуса к аргументам"
    },
    {
      "type": "p",
      "text": "Любая критика должна опираться на цель, контекст и данные, а не на личные предпочтения."
    },
    {
      "type": "p",
      "text": "Вопрос «почему здесь так?» полезнее, чем утверждение «я бы сделал иначе»."
    },
    {
      "type": "p",
      "text": "Если нет цели, критика становится разговором о стиле, а не о результате."
    },
    {
      "type": "p",
      "text": "Прежде чем обсуждать UI, проговорите: что должен сделать пользователь, что считать успехом, какие ограничения есть у команды."
    },
    {
      "type": "h3",
      "text": "Критика — это диалог"
    },
    {
      "type": "p",
      "text": "Формат «эксперт говорит, остальные слушают» почти всегда снижает качество обсуждения."
    },
    {
      "type": "p",
      "text": "Лучший формат — совместное исследование: команда задает вопросы, дизайнер объясняет логику, вместе уточняют риски."
    },
    {
      "type": "p",
      "text": "Так появляется общий контекст, а не список замечаний."
    },
    {
      "type": "divider",
      "label": "Структура"
    },
    {
      "type": "h3",
      "text": "Структура эффективной критики"
    },
    {
      "type": "p",
      "text": "Чтобы критика работала, она должна быть предсказуемой и повторяемой."
    },
    {
      "type": "p",
      "text": "Ниже — базовая структура, которая подходит для большинства команд."
    },
    {
      "type": "ul",
      "items": [
        "Контекст: цель, аудитория, ограничения.",
        "Сценарий: что делает пользователь.",
        "Решение: ключевые элементы и логика.",
        "Риски: где может быть непонимание или ошибка.",
        "Следующий шаг: что проверяем и как."
      ]
    },
    {
      "type": "p",
      "text": "Начинайте с контекста — это снижает спорные трактовки."
    },
    {
      "type": "p",
      "text": "Дальше разбирайте сценарий: как человек пройдет путь и где может застрять."
    },
    {
      "type": "p",
      "text": "И только затем обсуждайте визуальную форму и детали компонентов."
    },
    {
      "type": "callout",
      "icon": "flow",
      "title": "Практика",
      "text": "Если критика не заканчивается «что проверим дальше», она почти всегда бесполезна."
    },
    {
      "type": "divider",
      "label": "Вопросы"
    },
    {
      "type": "h3",
      "text": "Вопросы, которые делают критику глубже"
    },
    {
      "type": "p",
      "text": "Хорошая критика строится вокруг вопросов, которые раскрывают логику решения."
    },
    {
      "type": "ul",
      "items": [
        "Как пользователь поймет, что делать дальше?",
        "Где в сценарии самая высокая вероятность ошибки?",
        "Что будет, если данных нет или они неверные?",
        "Какие элементы конкурируют за внимание?",
        "Как решение работает на маленьком экране или в медленном интернете?"
      ]
    },
    {
      "type": "p",
      "text": "Эти вопросы проверяют дизайн на реальность, а не на «красоту»."
    },
    {
      "type": "divider",
      "label": "Ошибки"
    },
    {
      "type": "h3",
      "text": "Типичные ошибки в критике"
    },
    {
      "type": "p",
      "text": "Есть несколько паттернов, которые убивают полезность обсуждения."
    },
    {
      "type": "ul",
      "items": [
        "Оценка без контекста: критикуем детали, не понимая цели.",
        "Токсичный тон: превращаем разбор в личную оценку.",
        "Фокус на мелочи: обсуждаем иконки, не проверив сценарий.",
        "Нет решений: уходим с созвона без следующих шагов."
      ]
    },
    {
      "type": "p",
      "text": "Если ловите себя на этих паттернах — верните разговор к цели и сценарию."
    },
    {
      "type": "divider",
      "label": "Формат"
    },
    {
      "type": "h3",
      "text": "Формат, который работает"
    },
    {
      "type": "p",
      "text": "Оптимальная длительность критики — 20–30 минут на один ключевой сценарий."
    },
    {
      "type": "p",
      "text": "Если проектов несколько, лучше сделать отдельные короткие сессии, чем один длинный созвон."
    },
    {
      "type": "p",
      "text": "Перед встречей дизайнер отправляет короткий бриф: цель, аудитория, ограничения, ключевые решения."
    },
    {
      "type": "p",
      "text": "После встречи фиксируется список изменений и гипотез для проверки."
    },
    {
      "type": "callout",
      "icon": "note",
      "title": "Совет",
      "text": "Не превращайте критику в «ревью пикселей». Проверяйте решение, а не украшение."
    },
    {
      "type": "divider",
      "label": "Команда"
    },
    {
      "type": "h3",
      "text": "Как критика влияет на команду"
    },
    {
      "type": "p",
      "text": "Сильная критика укрепляет доверие: дизайнер знает, что его работу улучшают, а не оценивают."
    },
    {
      "type": "p",
      "text": "Слабая критика разрушает: люди перестают приносить идеи, боятся обсуждений и защищаются."
    },
    {
      "type": "p",
      "text": "Поэтому тон и структура критики — это управленческий инструмент, а не «мягкий навык»."
    },
    {
      "type": "divider",
      "label": "Пример"
    },
    {
      "type": "h3",
      "text": "Пример здоровой критики"
    },
    {
      "type": "p",
      "text": "Команда обсуждает экран оплаты. Дизайнер показывает сценарий, а команда задает вопросы: что видит пользователь в момент сомнения, какие есть альтернативы, как выглядит ошибка."
    },
    {
      "type": "p",
      "text": "Вместо «сделай кнопку ярче» обсуждают, в какой момент пользователю нужна уверенность. Решение — добавить блок с гарантиями и упростить текст рядом с CTA."
    },
    {
      "type": "p",
      "text": "После критики фиксируют гипотезу: «если добавить прозрачные гарантии, конверсия вырастет»."
    },
    {
      "type": "p",
      "text": "Это превращает критику в измеримый эксперимент, а не в спор о цветах."
    },
    {
      "type": "divider",
      "label": "Артефакты"
    },
    {
      "type": "h3",
      "text": "Что фиксировать после критики"
    },
    {
      "type": "ul",
      "items": [
        "Ключевые решения и причины.",
        "Замечания, которые влияют на сценарии.",
        "Список гипотез и метрик.",
        "План проверки и дедлайн."
      ]
    },
    {
      "type": "p",
      "text": "Без фиксации критика превращается в бесконечный разговор, а не в улучшение продукта."
    },
    {
      "type": "divider",
      "label": "Роли"
    },
    {
      "type": "h3",
      "text": "Роль модератора"
    },
    {
      "type": "p",
      "text": "Хорошая критика редко случается сама собой — ей нужен модератор."
    },
    {
      "type": "p",
      "text": "Он следит за временем, возвращает фокус на цель и не дает спору уйти в личные предпочтения."
    },
    {
      "type": "p",
      "text": "Модератор также фиксирует выводы и следующие шаги, чтобы обсуждение превращалось в действие."
    },
    {
      "type": "divider",
      "label": "Чек‑лист"
    },
    {
      "type": "h3",
      "text": "Чек‑лист сильной критики"
    },
    {
      "type": "ul",
      "items": [
        "Есть понятная цель и метрика успеха.",
        "Разобран пользовательский сценарий.",
        "Обсуждены edge‑cases и риски.",
        "Есть конкретные следующие шаги.",
        "Формат и тон поддерживают диалог."
      ]
    },
    {
      "type": "divider",
      "label": "Вывод"
    },
    {
      "type": "h3",
      "text": "Вывод"
    },
    {
      "type": "p",
      "text": "Дизайн‑критика — это инструмент качества, скорости и командной ясности."
    },
    {
      "type": "p",
      "text": "Если она построена на контексте и сценариях, дизайн становится сильнее, а обсуждения — короче."
    }
  ]
},
{
  "id": "dark-patterns",
  "title": "Тёмные паттерны в UX: где граница между ростом и манипуляцией",
  "excerpt": "Разбор темных паттернов, их эффектов на бизнес и как строить этичную механику роста.",
  "date": "10.11.2025",
  "readTime": "20 мин чтения",
  "tags": [
    "UX",
    "Ethics",
    "Product"
  ],
  "cover": "assets/images/blog-covers/dark-patterns.svg",
  "body": [
    {
      "type": "h2",
      "text": "Что такое тёмные паттерны"
    },
    {
      "type": "p",
      "text": "Тёмные паттерны — это интерфейсные решения, которые вынуждают пользователя делать то, что выгодно продукту, но не ему."
    },
    {
      "type": "p",
      "text": "Они работают за счет давления, скрытия вариантов и запутанных формулировок."
    },
    {
      "type": "p",
      "text": "Часто это выглядит как рост метрик, но долгосрочно приводит к потере доверия и репутации."
    },
    {
      "type": "callout",
      "icon": "insight",
      "title": "Определение",
      "text": "Если пользователь сделал действие, которого не хотел, — это тёмный паттерн."
    },
    {
      "type": "divider",
      "label": "Типы"
    },
    {
      "type": "h3",
      "text": "Основные типы тёмных паттернов"
    },
    {
      "type": "ul",
      "items": [
        "Скрытые альтернативы: «серые» ссылки на отмену или выход.",
        "Навязанные действия: автоподписка или предварительно выбранные галочки.",
        "Запутанные формулировки: двойные отрицания и неочевидные условия.",
        "Искусственная срочность: таймеры без реальной причины.",
        "Штрафы за выход: сложная отмена, скрытая кнопка удаления."
      ]
    },
    {
      "type": "p",
      "text": "Все эти механики работают краткосрочно, но разрушают отношения с пользователем."
    },
    {
      "type": "divider",
      "label": "Граница"
    },
    {
      "type": "h3",
      "text": "Где проходит граница"
    },
    {
      "type": "p",
      "text": "Не все «мотивирующие» механики являются тёмными паттернами."
    },
    {
      "type": "p",
      "text": "Граница проходит там, где пользователь теряет контроль или вводится в заблуждение."
    },
    {
      "type": "p",
      "text": "Напоминание о выгоде — ок. Скрытая отмена подписки — нет."
    },
    {
      "type": "p",
      "text": "Вопрос для проверки: «Если бы я был пользователем, я бы чувствовал себя честно информированным?»"
    },
    {
      "type": "divider",
      "label": "Последствия"
    },
    {
      "type": "h3",
      "text": "Почему тёмные паттерны вредят бизнесу"
    },
    {
      "type": "p",
      "text": "Да, они могут поднять конверсию на коротком отрезке, но это рост на доверии, а не на ценности."
    },
    {
      "type": "p",
      "text": "Пользователи жалуются, уходят, пишут негативные отзывы и не возвращаются."
    },
    {
      "type": "p",
      "text": "Регуляторы в разных странах уже штрафуют компании за манипулятивные практики."
    },
    {
      "type": "callout",
      "icon": "note",
      "title": "Риск",
      "text": "Тёмные паттерны почти всегда дешевле исправить в дизайне, чем отмывать репутацию."
    },
    {
      "type": "divider",
      "label": "Альтернатива"
    },
    {
      "type": "h3",
      "text": "Этичные механики роста"
    },
    {
      "type": "p",
      "text": "Вместо манипуляции можно строить ясные и честные сценарии."
    },
    {
      "type": "p",
      "text": "Показывайте ценность, а не прячьте выход."
    },
    {
      "type": "p",
      "text": "Делайте выборы прозрачными, показывайте последствия и сохраняйте контроль за пользователем."
    },
    {
      "type": "ul",
      "items": [
        "Честные подписки с понятной ценой и сроками.",
        "Прозрачное сравнение тарифов.",
        "Мягкие напоминания без давления.",
        "Отмена в один‑два клика."
      ]
    },
    {
      "type": "divider",
      "label": "Дизайн"
    },
    {
      "type": "h3",
      "text": "Как заменить тёмный паттерн на честный"
    },
    {
      "type": "p",
      "text": "Если вы используете «скрытую отмену», попробуйте показать выход так же заметно, как и продолжение."
    },
    {
      "type": "p",
      "text": "Если у вас есть таймер, объясните, почему он есть и что будет после него."
    },
    {
      "type": "p",
      "text": "Если продукт предлагает подписку, покажите реальные преимущества и дайте время подумать."
    },
    {
      "type": "callout",
      "icon": "flow",
      "title": "Принцип",
      "text": "Чем больше доверия, тем больше LTV. Манипуляции делают обратное."
    },
    {
      "type": "divider",
      "label": "Культура"
    },
    {
      "type": "h3",
      "text": "Как встроить этику в процесс"
    },
    {
      "type": "ul",
      "items": [
        "Добавить проверку паттернов в дизайн‑ревью.",
        "Фиксировать спорные решения и их обоснование.",
        "Оценивать не только рост, но и жалобы/отток.",
        "Обучать команду на примерах."
      ]
    },
    {
      "type": "p",
      "text": "Этика — это процесс, а не разовая правка."
    },
    {
      "type": "divider",
      "label": "Последствия"
    },
    {
      "type": "h3",
      "text": "Что происходит после внедрения тёмного паттерна"
    },
    {
      "type": "p",
      "text": "Короткий рост метрик часто сопровождается увеличением обращений в поддержку."
    },
    {
      "type": "p",
      "text": "Появляются отзывы о «обмане» и «хитрости», а рекомендации продукта снижаются."
    },
    {
      "type": "p",
      "text": "В долгой перспективе это подрывает бренд и усложняет даже честные запуски."
    },
    {
      "type": "divider",
      "label": "Кейсы"
    },
    {
      "type": "h3",
      "text": "Типичные кейсы"
    },
    {
      "type": "p",
      "text": "Подписка, где кнопка «Отменить» спрятана в настройках профиля, почти всегда вызывает волну жалоб."
    },
    {
      "type": "p",
      "text": "Форма с двойным отрицанием («Не отключать рассылку») вводит пользователя в заблуждение и портит восприятие бренда."
    },
    {
      "type": "p",
      "text": "Покупка с таймером без объяснения подрывает доверие, особенно если время «обнуляется» при перезагрузке страницы."
    },
    {
      "type": "divider",
      "label": "Разговор"
    },
    {
      "type": "h3",
      "text": "Как обсуждать это с бизнесом"
    },
    {
      "type": "p",
      "text": "Если дизайнер говорит «это неэтично», бизнес часто слышит «это тормозит рост»."
    },
    {
      "type": "p",
      "text": "Лучший подход — показать, как тёмные паттерны влияют на долгосрочные метрики: удержание, NPS, повторные покупки."
    },
    {
      "type": "p",
      "text": "Аргумент «мы потеряем доверие» работает сильнее, если подкреплен цифрами и примерами из поддержки."
    },
    {
      "type": "divider",
      "label": "Метрики"
    },
    {
      "type": "h3",
      "text": "Метрики доверия"
    },
    {
      "type": "p",
      "text": "Для оценки эффекта нужны не только конверсии, но и метрики доверия."
    },
    {
      "type": "p",
      "text": "Смотрите на рост обращений, churn, повторные покупки и долю негативных отзывов."
    },
    {
      "type": "p",
      "text": "Если тёмный паттерн повышает конверсию, но ухудшает удержание, итоговая ценность падает."
    },
    {
      "type": "divider",
      "label": "Рефрейм"
    },
    {
      "type": "h3",
      "text": "Как построить честный рост"
    },
    {
      "type": "p",
      "text": "Сильный рост строится на понятной ценности, а не на ограничении свободы пользователя."
    },
    {
      "type": "p",
      "text": "Вместо манипуляций используйте механики, которые делают выбор более осознанным: объяснение, сравнение, примеры."
    },
    {
      "type": "p",
      "text": "Если есть риск, обозначьте его честно. Это снижает краткосрочную конверсию, но повышает удержание."
    },
    {
      "type": "p",
      "text": "Пользователи лучше реагируют на прозрачность, чем на давление."
    },
    {
      "type": "divider",
      "label": "Сигналы"
    },
    {
      "type": "h3",
      "text": "Сигналы манипулятивного UX"
    },
    {
      "type": "ul",
      "items": [
        "Пользователь жалуется, что «его заставили».",
        "Ключевые действия спрятаны или требуют много шагов.",
        "Язык интерфейса давит или пугает.",
        "Отмена сложнее, чем подключение.",
        "Срочность выглядит искусственно."
      ]
    },
    {
      "type": "divider",
      "label": "Юридика"
    },
    {
      "type": "h3",
      "text": "Юридические и регуляторные риски"
    },
    {
      "type": "p",
      "text": "Во многих странах уже есть нормы, которые напрямую запрещают манипулятивные интерфейсы."
    },
    {
      "type": "p",
      "text": "Даже если продукт не штрафуют, юридический риск снижает инвестиционную привлекательность."
    },
    {
      "type": "p",
      "text": "Лучший подход — проектировать так, чтобы решение выглядело честно и при аудитах."
    },
    {
      "type": "divider",
      "label": "Чек‑лист"
    },
    {
      "type": "h3",
      "text": "Чек‑лист против тёмных паттернов"
    },
    {
      "type": "ul",
      "items": [
        "Пользователь понимает, что происходит, с первого прочтения.",
        "Выход и отмена не спрятаны и доступны на равных условиях.",
        "Нет заранее выбранных галочек на платные действия.",
        "Срочность объясняется реальной причиной.",
        "Негативные последствия описаны явно."
      ]
    },
    {
      "type": "divider",
      "label": "Вывод"
    },
    {
      "type": "h3",
      "text": "Вывод"
    },
    {
      "type": "p",
      "text": "Тёмные паттерны — это быстрый рост ценой доверия."
    },
    {
      "type": "p",
      "text": "Этичный дизайн растит бизнес медленнее, но устойчиво и долгосрочно."
    }
  ]
},
{
  "id": "ai-in-product",
  "title": "AI в продукте: как внедрять, чтобы это было полезно",
  "excerpt": "Практическое руководство: где AI действительно приносит пользу, а где превращается в игрушку.",
  "date": "28.10.2025",
  "readTime": "20 мин чтения",
  "tags": [
    "AI",
    "Product",
    "UX"
  ],
  "cover": "assets/images/blog-covers/ai-in-product.svg",
  "body": [
    {
      "type": "h2",
      "text": "Почему AI часто не приносит пользы"
    },
    {
      "type": "p",
      "text": "Многие команды внедряют AI потому что «так надо», но не потому что он решает задачу пользователя."
    },
    {
      "type": "p",
      "text": "Отсюда появляется UX‑шум: лишние функции, сложные сценарии и непонятные результаты."
    },
    {
      "type": "p",
      "text": "AI — это не фича, это инструмент. Если инструмент не помогает — он мешает."
    },
    {
      "type": "callout",
      "icon": "insight",
      "title": "Суть",
      "text": "Если AI не сокращает время или не повышает качество решения — он не нужен."
    },
    {
      "type": "divider",
      "label": "Сценарии"
    },
    {
      "type": "h3",
      "text": "Где AI действительно полезен"
    },
    {
      "type": "p",
      "text": "Есть три сценария, где AI дает измеримый эффект."
    },
    {
      "type": "ul",
      "items": [
        "Автоматизация рутины: классификация, сортировка, извлечение.",
        "Ускорение создания: черновики, шаблоны, альтернативы.",
        "Улучшение качества: подсказки, проверки, рекомендации."
      ]
    },
    {
      "type": "p",
      "text": "Во всех случаях пользователь должен понимать, что делает AI и как это влияет на результат."
    },
    {
      "type": "divider",
      "label": "Доверие"
    },
    {
      "type": "h3",
      "text": "Как построить доверие к AI"
    },
    {
      "type": "p",
      "text": "Доверие строится через прозрачность и контроль."
    },
    {
      "type": "p",
      "text": "Покажи, откуда берется результат, и дай возможность его корректировать."
    },
    {
      "type": "p",
      "text": "Лучшие AI‑продукты всегда оставляют «последнее слово» за человеком."
    },
    {
      "type": "callout",
      "icon": "note",
      "title": "Правило",
      "text": "AI предлагает, пользователь подтверждает. Не наоборот."
    },
    {
      "type": "divider",
      "label": "UX"
    },
    {
      "type": "h3",
      "text": "UX‑паттерны для AI"
    },
    {
      "type": "p",
      "text": "AI‑функции должны быть встроены в существующие сценарии, а не создавать новые сложные пути."
    },
    {
      "type": "p",
      "text": "Хорошие паттерны: автозаполнение, подсказки, резюме, варианты, проверка ошибок."
    },
    {
      "type": "p",
      "text": "Плохие паттерны: непонятные «магические» кнопки, которые делают что‑то без объяснения."
    },
    {
      "type": "divider",
      "label": "Оценка"
    },
    {
      "type": "h3",
      "text": "Как измерять эффект"
    },
    {
      "type": "p",
      "text": "AI‑фичи должны иметь метрику успеха: время на задачу, точность, рост конверсии."
    },
    {
      "type": "p",
      "text": "Если метрика не улучшилась, AI — это только витрина."
    },
    {
      "type": "ul",
      "items": [
        "Сократилось ли время на задачу?",
        "Уменьшилось ли количество ошибок?",
        "Появилась ли новая ценность для пользователя?"
      ]
    },
    {
      "type": "divider",
      "label": "Данные"
    },
    {
      "type": "h3",
      "text": "Качество данных — фундамент"
    },
    {
      "type": "p",
      "text": "AI не исправляет плохие данные. Он усиливает их."
    },
    {
      "type": "p",
      "text": "Если на входе шум, на выходе будет уверенный, но неверный результат."
    },
    {
      "type": "p",
      "text": "Поэтому качество данных, чистка и контроль версий важнее, чем «умный» интерфейс."
    },
    {
      "type": "divider",
      "label": "Неопределенность"
    },
    {
      "type": "h3",
      "text": "Как показывать неопределенность"
    },
    {
      "type": "p",
      "text": "AI не всегда уверен. Это нужно визуально показывать, иначе пользователь переоценит результат."
    },
    {
      "type": "p",
      "text": "Используйте метки уверенности, подсказки или выделение мест, требующих проверки."
    },
    {
      "type": "p",
      "text": "Прозрачность снижает риск ошибок и повышает доверие."
    },
    {
      "type": "divider",
      "label": "Риски"
    },
    {
      "type": "h3",
      "text": "Где AI опасен"
    },
    {
      "type": "p",
      "text": "Риски появляются, когда AI начинает влиять на критические решения без контроля."
    },
    {
      "type": "p",
      "text": "В таких случаях нужно повышать прозрачность, вводить двойные проверки и логирование."
    },
    {
      "type": "p",
      "text": "Пользователь должен понимать границы ответственности AI."
    },
    {
      "type": "divider",
      "label": "Процесс"
    },
    {
      "type": "h3",
      "text": "Мини‑процесс внедрения AI"
    },
    {
      "type": "ul",
      "items": [
        "Определить пользовательскую боль, которую AI снимает.",
        "Сформулировать метрику успеха.",
        "Сделать простой прототип и проверить сценарий.",
        "Добавить контроль и прозрачность.",
        "Измерить эффект и решить, масштабировать ли."
      ]
    },
    {
      "type": "divider",
      "label": "Тон"
    },
    {
      "type": "h3",
      "text": "Как говорить о результате AI"
    },
    {
      "type": "p",
      "text": "Пользователь должен понимать, насколько результат точен и на чем он основан."
    },
    {
      "type": "p",
      "text": "Лучший формат — короткое объяснение и возможность правки."
    },
    {
      "type": "p",
      "text": "Например: «Суммаризация построена на последних 20 документах. Вы можете удалить лишние»."
    },
    {
      "type": "divider",
      "label": "Пример"
    },
    {
      "type": "h3",
      "text": "Пример сценария"
    },
    {
      "type": "p",
      "text": "В продукте для поддержки AI предлагает черновик ответа клиенту. Пользователь видит выделенные места, где AI не уверен, и может быстро поправить."
    },
    {
      "type": "p",
      "text": "Результат: скорость ответа выросла, а качество не упало, потому что человек оставался «в цикле»."
    },
    {
      "type": "divider",
      "label": "Онбординг"
    },
    {
      "type": "h3",
      "text": "Как обучать пользователей AI‑функции"
    },
    {
      "type": "p",
      "text": "Нельзя ожидать, что пользователь сам поймет ценность AI."
    },
    {
      "type": "p",
      "text": "Нужны короткие подсказки, примеры ввода и демонстрация результата на реальных данных."
    },
    {
      "type": "p",
      "text": "Хороший онбординг показывает, где AI экономит время и где его лучше контролировать."
    },
    {
      "type": "divider",
      "label": "Качество"
    },
    {
      "type": "h3",
      "text": "Метрики качества AI"
    },
    {
      "type": "ul",
      "items": [
        "Точность и полнота результата.",
        "Доля ручных исправлений.",
        "Скорость выполнения сценария.",
        "Уровень доверия по опросам пользователей."
      ]
    },
    {
      "type": "divider",
      "label": "Ограничения"
    },
    {
      "type": "h3",
      "text": "Границы применения"
    },
    {
      "type": "p",
      "text": "AI особенно опасен в сценариях, где цена ошибки высока: финансы, медицина, безопасность."
    },
    {
      "type": "p",
      "text": "Здесь нужны прозрачные правила, подтверждения и отказ от автоматических действий."
    },
    {
      "type": "divider",
      "label": "Архитектура"
    },
    {
      "type": "h3",
      "text": "Как встроить AI в продуктовую архитектуру"
    },
    {
      "type": "p",
      "text": "AI должен быть частью потока, а не отдельным «магическим» режимом."
    },
    {
      "type": "p",
      "text": "Чем ближе AI к привычным действиям пользователя, тем выше принятие."
    },
    {
      "type": "p",
      "text": "Часто лучший вариант — добавить AI как подсказки, а не как отдельный экран."
    },
    {
      "type": "divider",
      "label": "Инструменты"
    },
    {
      "type": "h3",
      "text": "Набор опций, которые повышают контроль"
    },
    {
      "type": "ul",
      "items": [
        "История изменений и откат результата.",
        "Пояснение, какие данные использованы.",
        "Явное подтверждение перед применением.",
        "Возможность редактирования результата."
      ]
    },
    {
      "type": "divider",
      "label": "Где AI не нужен"
    },
    {
      "type": "h3",
      "text": "Сценарии, где AI делает хуже"
    },
    {
      "type": "p",
      "text": "Если задача простая и решается за один‑два клика, AI только усложнит путь."
    },
    {
      "type": "p",
      "text": "Также не стоит применять AI, когда нет данных для обучения или нет возможности объяснить результат."
    },
    {
      "type": "p",
      "text": "В таких случаях лучше оставить простой, понятный интерфейс."
    },
    {
      "type": "divider",
      "label": "Вывод"
    },
    {
      "type": "h3",
      "text": "Вывод"
    },
    {
      "type": "p",
      "text": "AI в продукте должен быть незаметным помощником, а не витриной технологий."
    },
    {
      "type": "p",
      "text": "Если он делает работу быстрее, чище и понятнее — он остается. Если нет — его лучше убрать."
    }
  ]
},
{
  "id": "accessibility-checklist",
  "title": "Доступность в интерфейсах: практический чек‑лист для дизайнера",
  "excerpt": "Как сделать продукт доступным: контраст, размеры, клавиатура, ошибки и проверка макетов.",
  "date": "18.10.2025",
  "readTime": "18 мин чтения",
  "tags": [
    "UX",
    "Accessibility",
    "Product"
  ],
  "cover": "assets/images/blog-covers/accessibility-checklist.svg",
  "body": [
    {
      "type": "h2",
      "text": "Почему доступность — это часть качества"
    },
    {
      "type": "p",
      "text": "Доступность — это не отдельная дисциплина, а базовое требование к хорошему UX."
    },
    {
      "type": "p",
      "text": "Если часть пользователей не может прочитать текст или нажать кнопку, продукт теряет аудиторию и репутацию."
    },
    {
      "type": "p",
      "text": "Доступный интерфейс помогает не только людям с особенностями, но и всем, кто пользуется продуктом на ходу, в стрессе или при плохом освещении."
    },
    {
      "type": "callout",
      "icon": "insight",
      "title": "Фокус",
      "text": "Доступность повышает качество и снижает количество ошибок — даже у «обычных» пользователей."
    },
    {
      "type": "divider",
      "label": "Основы"
    },
    {
      "type": "h3",
      "text": "1. Контраст и читаемость"
    },
    {
      "type": "p",
      "text": "Текст и фон должны быть достаточно контрастными, иначе информация теряется."
    },
    {
      "type": "p",
      "text": "Особенно важно это для второстепенных подсказок и ссылок, которые часто делают слишком бледными."
    },
    {
      "type": "p",
      "text": "Минимальный размер текста на мобильном — около 11–12pt, иначе чтение превращается в усилие."
    },
    {
      "type": "h3",
      "text": "2. Размеры и зоны нажатия"
    },
    {
      "type": "p",
      "text": "Кнопки и интерактивные элементы должны быть не меньше 44–48px по высоте."
    },
    {
      "type": "p",
      "text": "Если элемент визуально маленький, увеличьте его кликабельную область через внутренние отступы."
    },
    {
      "type": "h3",
      "text": "3. Навигация с клавиатуры"
    },
    {
      "type": "p",
      "text": "Даже если продукт кажется «мышиным», часть пользователей использует клавиатуру и скринридер."
    },
    {
      "type": "p",
      "text": "Таб‑навигация должна идти логично, а фокус — быть видимым."
    },
    {
      "type": "divider",
      "label": "Формы"
    },
    {
      "type": "h3",
      "text": "Ошибки и подсказки"
    },
    {
      "type": "p",
      "text": "Ошибки должны быть текстовыми, не только цветом."
    },
    {
      "type": "p",
      "text": "Фраза «неверно» не помогает. Нужна конкретика: что исправить и как."
    },
    {
      "type": "ul",
      "items": [
        "Плохо: «Ошибка».",
        "Хорошо: «Введите email в формате name@example.com»."
      ]
    },
    {
      "type": "h3",
      "text": "Лейблы и плейсхолдеры"
    },
    {
      "type": "p",
      "text": "Плейсхолдер не должен заменять лейбл — он исчезает и путает."
    },
    {
      "type": "p",
      "text": "Лейбл должен оставаться видимым и однозначным, особенно в длинных формах."
    },
    {
      "type": "divider",
      "label": "Медиа"
    },
    {
      "type": "h3",
      "text": "Иконки и изображения"
    },
    {
      "type": "p",
      "text": "Если элемент важен, он должен иметь подпись или текстовую альтернативу."
    },
    {
      "type": "p",
      "text": "Иконка без текста — это риск: разные люди интерпретируют её по‑разному."
    },
    {
      "type": "divider",
      "label": "Проверка"
    },
    {
      "type": "h3",
      "text": "Как быстро проверить макет"
    },
    {
      "type": "ul",
      "items": [
        "Проверь контраст текста и фона на ключевых экранах.",
        "Проверь размер всех кликабельных элементов.",
        "Убедись, что ошибки объясняют проблему.",
        "Проверь, что важные действия не завязаны только на цвет."
      ]
    },
    {
      "type": "callout",
      "icon": "note",
      "title": "Совет",
      "text": "Если сомневаешься — сделай проще и контрастнее. Это почти всегда улучшает UX."
    },
    {
      "type": "divider",
      "label": "Вывод"
    },
    {
      "type": "h3",
      "text": "Вывод"
    },
    {
      "type": "p",
      "text": "Доступность — это привычка. Она начинается с маленьких решений в каждом экране."
    },
    {
      "type": "p",
      "text": "Если встроить доступность в процесс, продукт становится сильнее и устойчивее."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    }
  ]
},
{
  "id": "ux-onboarding",
  "title": "Онбординг, который включается с первого экрана",
  "excerpt": "Как строить onboarding: сценарии, структура, короткие подсказки и метрики эффективности.",
  "date": "04.10.2025",
  "readTime": "17 мин чтения",
  "tags": [
    "UX",
    "Onboarding",
    "Product"
  ],
  "cover": "assets/images/blog-covers/ux-onboarding.svg",
  "body": [
    {
      "type": "h2",
      "text": "Что такое онбординг на самом деле"
    },
    {
      "type": "p",
      "text": "Онбординг — это не серия экранов «привет, вот что мы умеем»."
    },
    {
      "type": "p",
      "text": "Это процесс, который помогает человеку быстро получить первую ценность."
    },
    {
      "type": "p",
      "text": "Если пользователь не почувствовал пользу, он не останется, какой бы красивой ни была презентация."
    },
    {
      "type": "callout",
      "icon": "insight",
      "title": "Фокус",
      "text": "Онбординг должен вести к действию, а не к тексту о продукте."
    },
    {
      "type": "divider",
      "label": "Структура"
    },
    {
      "type": "h3",
      "text": "1. Цель онбординга"
    },
    {
      "type": "p",
      "text": "Сначала определите, какое действие нужно совершить пользователю, чтобы он увидел ценность."
    },
    {
      "type": "p",
      "text": "Это может быть создание первого проекта, импорт данных или выполнение одной задачи."
    },
    {
      "type": "h3",
      "text": "2. Минимальные шаги"
    },
    {
      "type": "p",
      "text": "Сократите путь до первой ценности: чем меньше шагов, тем выше вероятность успеха."
    },
    {
      "type": "p",
      "text": "Часто можно убрать половину полей или заменить их дефолтами."
    },
    {
      "type": "h3",
      "text": "3. Подсказки и контекст"
    },
    {
      "type": "p",
      "text": "Подсказка эффективна, когда появляется в нужный момент, а не заранее."
    },
    {
      "type": "p",
      "text": "Лучший формат — короткие контекстные подсказки прямо в интерфейсе."
    },
    {
      "type": "divider",
      "label": "Ошибки"
    },
    {
      "type": "h3",
      "text": "Типичные ошибки онбординга"
    },
    {
      "type": "ul",
      "items": [
        "Длинные туры вместо полезного действия.",
        "Слишком много обязательных полей.",
        "Скрытые ключевые шаги.",
        "Нет подтверждения успеха после первого действия."
      ]
    },
    {
      "type": "p",
      "text": "Если пользователь не понимает, что сделал правильно, он не закрепляет привычку."
    },
    {
      "type": "divider",
      "label": "Метрики"
    },
    {
      "type": "h3",
      "text": "Как измерять эффективность"
    },
    {
      "type": "ul",
      "items": [
        "Activation Rate — доля пользователей, достигших первой ценности.",
        "Time‑to‑Value — время до первого результата.",
        "Drop‑off — где пользователи сходят с пути.",
        "Retention — возвращаются ли после первого визита."
      ]
    },
    {
      "type": "callout",
      "icon": "flow",
      "title": "Практика",
      "text": "Одна метрика — одна гипотеза. Иначе вы не поймете, что улучшили."
    },
    {
      "type": "divider",
      "label": "Пример"
    },
    {
      "type": "h3",
      "text": "Пример сценария"
    },
    {
      "type": "p",
      "text": "В сервисе управления задачами важна первая созданная задача и назначенный дедлайн."
    },
    {
      "type": "p",
      "text": "Поэтому онбординг показывает одну кнопку «Создать задачу» и подсказывает выбрать дату."
    },
    {
      "type": "p",
      "text": "После сохранения пользователю показывают короткое подтверждение и следующий логичный шаг."
    },
    {
      "type": "divider",
      "label": "Вывод"
    },
    {
      "type": "h3",
      "text": "Вывод"
    },
    {
      "type": "p",
      "text": "Онбординг — это не вступление, а ускоритель ценности."
    },
    {
      "type": "p",
      "text": "Если выстроить его вокруг конкретного действия, конверсия и удержание растут заметно."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    }
  ]
},
{
  "id": "pricing-ux",
  "title": "Цены и UX: как интерфейс влияет на выбор тарифа",
  "excerpt": "Структура тарифов, сравнение, якоря и честные механики, которые помогают пользователю выбрать.",
  "date": "21.09.2025",
  "readTime": "18 мин чтения",
  "tags": [
    "UX",
    "Monetization",
    "Product"
  ],
  "cover": "assets/images/blog-covers/pricing-ux.svg",
  "body": [
    {
      "type": "h2",
      "text": "Почему экран цен — это UX‑сценарий"
    },
    {
      "type": "p",
      "text": "Прайсинг — не только про математику. Это про восприятие и ясность выбора."
    },
    {
      "type": "p",
      "text": "Если человек не понимает разницу между тарифами, он уходит или выбирает самый дешевый."
    },
    {
      "type": "callout",
      "icon": "insight",
      "title": "Суть",
      "text": "Пользователь покупает не тариф, а уверенность, что выбрал правильно."
    },
    {
      "type": "divider",
      "label": "Структура"
    },
    {
      "type": "h3",
      "text": "1. Ограниченное число вариантов"
    },
    {
      "type": "p",
      "text": "Три тарифа — оптимум: базовый, основной и расширенный."
    },
    {
      "type": "p",
      "text": "Пять и более вариантов почти всегда перегружают и снижают конверсию."
    },
    {
      "type": "h3",
      "text": "2. Ясные различия"
    },
    {
      "type": "p",
      "text": "Разница между тарифами должна быть очевидной: не «ещё больше всего», а конкретные ограничения."
    },
    {
      "type": "p",
      "text": "Покажите ключевые различия в первых 3–4 пунктах."
    },
    {
      "type": "h3",
      "text": "3. Сравнение по сценарию"
    },
    {
      "type": "p",
      "text": "Люди сравнивают тарифы по задачам. Дайте им такую структуру: «для чего этот тариф»."
    },
    {
      "type": "p",
      "text": "Добавьте короткие подписи: «для команды до 5 человек», «для масштабирования»."
    },
    {
      "type": "divider",
      "label": "Ошибки"
    },
    {
      "type": "h3",
      "text": "Частые ошибки в экране цен"
    },
    {
      "type": "ul",
      "items": [
        "Слишком много строк с техническими параметрами.",
        "Неясные названия тарифов.",
        "Отсутствие рекомендаций.",
        "Скрытые условия и мелкий текст."
      ]
    },
    {
      "type": "p",
      "text": "Если пользователь чувствует подвох — он не купит."
    },
    {
      "type": "divider",
      "label": "Рекомендации"
    },
    {
      "type": "h3",
      "text": "Как сделать выбор проще"
    },
    {
      "type": "p",
      "text": "Выделите «рекомендуемый» тариф, но не делайте остальные незаметными."
    },
    {
      "type": "p",
      "text": "Покажите цену за месяц и за год, чтобы человек видел выгоду."
    },
    {
      "type": "p",
      "text": "Сделайте кнопку действия одинаково заметной на всех тарифах, чтобы не создавать ощущение манипуляции."
    },
    {
      "type": "divider",
      "label": "Метрики"
    },
    {
      "type": "h3",
      "text": "Что измерять"
    },
    {
      "type": "ul",
      "items": [
        "Конверсию в оплату по тарифам.",
        "Процент пользователей, которые не сделали выбор.",
        "Сколько времени люди проводят на экране цен.",
        "Долю возвратов после покупки."
      ]
    },
    {
      "type": "callout",
      "icon": "note",
      "title": "Совет",
      "text": "Если люди проводят на экране цен слишком много времени — выбор слишком сложный."
    },
    {
      "type": "divider",
      "label": "Вывод"
    },
    {
      "type": "h3",
      "text": "Вывод"
    },
    {
      "type": "p",
      "text": "Хороший прайсинг‑UX не продает агрессивно, он помогает выбрать."
    },
    {
      "type": "p",
      "text": "Чем понятнее тарифы, тем выше доверие и итоговая конверсия."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    },
    {
      "type": "p",
      "text": "Важно фиксировать решения и возвращаться к ним после релиза, чтобы оценить эффект и при необходимости скорректировать подход."
    },
    {
      "type": "p",
      "text": "Чем яснее правило, тем меньше когнитивная нагрузка на пользователя и на команду поддержки."
    },
    {
      "type": "p",
      "text": "Не стесняйтесь показывать пользователю, что система делает и почему — прозрачность почти всегда повышает доверие."
    },
    {
      "type": "p",
      "text": "Хороший UX — это не про количество экранов, а про предсказуемость и комфорт в сценарии."
    },
    {
      "type": "p",
      "text": "Практика показывает: небольшие изменения в формулировках и структуре могут заметно снизить количество ошибок."
    }
  ]
},
{
  id: "ux-audit",
  title: "UX‑аудит без редизайна: как найти рост в текущем интерфейсе",
  excerpt:
    "Пошаговый подход к аудиту: цели, сценарии, эвристики, данные, гипотезы и план улучшений без тотальной переделки.",
  date: "05.02.2026",
  readTime: "17 мин чтения",
  tags: ["UX", "Research", "Process"],
  cover: "assets/images/blog-covers/ux-audit.svg",
  body: [
    {
      type: "h2",
      text: "Зачем аудит, если дизайн уже «нормальный»"
    },
    {
      type: "p",
      text:
        "UX‑аудит — это способ понять, где продукт теряет деньги, время и внимание пользователя, не прибегая к редизайну ради редизайна."
    },
    {
      type: "p",
      text:
        "Часто команда чувствует, что «что‑то не так», но не может назвать конкретную проблему: конверсия не растет, люди уходят на ключевом шаге, поддержка завалена похожими вопросами."
    },
    {
      type: "p",
      text:
        "Аудит дает структуру: фиксирует факты, превращает хаос наблюдений в понятную карту трения и помогает выбрать небольшие изменения с максимальным эффектом."
    },
    {
      type: "callout",
      icon: "insight",
      title: "Цель аудита",
      text:
        "Не «сделать красиво», а убрать препятствия между пользователем и ценностью продукта."
    },
    {
      type: "divider",
      label: "Подготовка"
    },
    {
      type: "h3",
      text: "1. Сформулировать бизнес‑цель и ключевые сценарии"
    },
    {
      type: "p",
      text:
        "Любой аудит начинается с вопроса «что для нас успех?». Это может быть рост конверсии, снижение оттока, рост активации или увеличение LTV."
    },
    {
      type: "p",
      text:
        "Дальше выбираются сценарии, которые сильнее всего влияют на цель: регистрация, первый заказ, повторная покупка, настройка профиля, поиск товара."
    },
    {
      type: "p",
      text:
        "Если сценариев слишком много, аудит расплывается. Лучше выбрать 2–3 критичных пути и глубоко их разобрать."
    },
    {
      type: "h3",
      text: "2. Собрать факты и контекст"
    },
    {
      type: "p",
      text:
        "Интуиция полезна, но аудит должен опираться на данные. Даже если аналитика ограничена, можно собрать минимальный набор сигналов."
    },
    {
      type: "ul",
      items: [
        "Воронка и точки выхода (по шагам).",
        "Запросы в поддержку и частые жалобы.",
        "Записи сессий, клики и тепловые карты.",
        "Интервью или быстрые опросы пользователей.",
        "Обратная связь от продаж или аккаунт‑менеджеров."
      ]
    },
    {
      type: "p",
      text:
        "На этом этапе полезно сформулировать, какие типы пользователей проходят путь, что для них важно и какие ограничения есть у бизнеса."
    },
    {
      type: "divider",
      label: "Диагностика"
    },
    {
      type: "h3",
      text: "3. Эвристики: найти нарушения базовых принципов"
    },
    {
      type: "p",
      text:
        "Эвристический анализ помогает быстро обнаружить системные проблемы: несоответствие ожиданиям, перегруженность, отсутствие обратной связи, избыточные шаги."
    },
    {
      type: "p",
      text:
        "Важно фиксировать не только «что плохо», но и «почему это мешает сценарию». Например: «в шаге оплаты не показана итоговая сумма, пользователь теряет доверие и уходит»."
    },
    {
      type: "ul",
      items: [
        "Нечитаемая иерархия: ключевое действие не видно.",
        "Слишком много обязательных полей.",
        "Нет объяснения, что произойдет после нажатия.",
        "Слишком агрессивные ошибки и отсутствие подсказок.",
        "Сложные формулировки, которые нельзя понять с первого взгляда."
      ]
    },
    {
      type: "h3",
      text: "4. Карта трения и точки потерь"
    },
    {
      type: "p",
      text:
        "Соберите все проблемы в одну карту: шаг сценария → проблема → эффект → доказательство. Это превращает список замечаний в управляемую систему."
    },
    {
      type: "p",
      text:
        "Карта помогает увидеть, где потери максимальны: например, 35% пользователей уходят на шаге выбора тарифа или 40% не завершают подтверждение."
    },
    {
      type: "divider",
      label: "Гипотезы"
    },
    {
      type: "h3",
      text: "5. От проблем к решениям"
    },
    {
      type: "p",
      text:
        "Каждая проблема должна превратиться в гипотезу улучшения: «Если мы упростим шаг и покажем выгоду, конверсия вырастет»."
    },
    {
      type: "p",
      text:
        "Важно избегать общих формулировок. Гипотеза должна быть конкретной и проверяемой: что меняем, где, какой эффект ожидаем."
    },
    {
      type: "callout",
      icon: "flow",
      title: "Принцип",
      text:
        "Слабая гипотеза = слабый результат. Формулируйте, как эксперимент, а не как пожелание."
    },
    {
      type: "h3",
      text: "6. Приоритизация: что дает быстрый эффект"
    },
    {
      type: "p",
      text:
        "Аудит ценен тем, что позволяет быстро выбрать 3–5 изменений с максимальной отдачей. Для этого используйте простую матрицу."
    },
    {
      type: "ul",
      items: [
        "Impact: сколько пользователей затронет проблема.",
        "Effort: сколько ресурсов нужно на исправление.",
        "Risk: насколько изменение влияет на бизнес‑логику."
      ]
    },
    {
      type: "p",
      text:
        "Часто наибольший эффект дают не радикальные редизайны, а небольшие правки: тексты, порядок шагов, прозрачность цен, подсказки."
    },
    {
      type: "divider",
      label: "Практика"
    },
    {
      type: "h3",
      text: "7. Быстрые проверки в полях"
    },
    {
      type: "p",
      text:
        "Аудит не обязательно заканчивается документом. Хорошая практика — сразу проверять спорные места: посмотреть на реальные сессии, задать 3 вопроса пользователям, проверить на коллегах."
    },
    {
      type: "p",
      text:
        "Даже 5 коротких интервью способны подтвердить, что проблема реальна: люди не понимают шаг, путаются в формулировках или не видят кнопку."
    },
    {
      type: "p",
      text:
        "Если у вас нет времени на исследования, используйте быстрые проверки: модератор + прототип, звонок с ключевым клиентом, экспресс‑опрос внутри продукта."
    },
    {
      type: "h3",
      text: "8. Прототипы без разработки"
    },
    {
      type: "p",
      text:
        "Перед тем как отдавать изменения в разработку, полезно собрать «доказательство» — быстрый прототип ключевого шага."
    },
    {
      type: "p",
      text:
        "Так вы проверяете гипотезу на понимание и снимаете риск дорогих правок после релиза."
    },
    {
      type: "divider",
      label: "Коммуникация"
    },
    {
      type: "h3",
      text: "Как говорить с бизнесом о результатах"
    },
    {
      type: "p",
      text:
        "Бизнесу не нужен список UI‑замечаний. Ему нужен эффект: «мы теряем X% на шаге Y и можем вернуть Z% за счет исправления»."
    },
    {
      type: "p",
      text:
        "Фокусируйтесь на связи «проблема → риск → эффект». Тогда аудит воспринимается как инвестиция, а не как декоративная работа."
    },
    {
      type: "ul",
      items: [
        "«На шаге оплаты теряется 28% — причина в отсутствии итоговой суммы».",
        "«Сократим форму на 3 поля и снизим время прохождения на 20%».",
        "«Добавим подсказку про сроки — снизим обращения в поддержку»."
      ]
    },
    {
      type: "divider",
      label: "Пример"
    },
    {
      type: "h3",
      text: "Мини‑кейс: аудит оформления заказа"
    },
    {
      type: "p",
      text:
        "В одном e‑commerce проекте аудит показал, что пользователи массово уходят на шаге доставки. На экране было сразу пять способов, но условия показывались мелким текстом."
    },
    {
      type: "p",
      text:
        "После упрощения списка до двух основных опций и явного отображения сроков конверсия в оформление выросла на 11%."
    },
    {
      type: "p",
      text:
        "Ключевое улучшение оказалось не в дизайне, а в логике: убрать лишнее и сделать выбор прозрачным."
    },
    {
      type: "p",
      text:
        "Этот пример показывает, что аудит работает лучше всего там, где пользователь принимает решение. Достаточно сделать информацию ясной, и ценность продукта начинает «продавать себя»."
    },
    {
      type: "divider",
      label: "Чек‑лист"
    },
    {
      type: "ul",
      items: [
        "Цель аудита зафиксирована и измерима.",
        "Определены 2–3 ключевых сценария.",
        "Собраны данные: воронка, поддержка, наблюдения.",
        "Проблемы связаны с конкретными шагами.",
        "Есть карта трения и приоритеты.",
        "Гипотезы сформулированы как эксперименты.",
        "Изменения можно протестировать быстро.",
        "Отчет понятен бизнесу и разработке."
      ]
    },
    {
      type: "divider",
      label: "Результат"
    },
    {
      type: "h3",
      text: "Как выглядит хороший отчет по аудиту"
    },
    {
      type: "p",
      text:
        "Итоговый отчет должен быть понятен не только дизайнеру, но и продакту, разработчику, бизнесу. Он отвечает на вопросы «где болит» и «что делать»."
    },
    {
      type: "ul",
      items: [
        "Карта сценариев и основные потери.",
        "Список проблем с доказательствами.",
        "Гипотезы улучшений и ожидаемый эффект.",
        "Приоритеты и быстрые победы на 2–4 недели.",
        "Рекомендации по дальнейшим исследованиям."
      ]
    },
    {
      type: "p",
      text:
        "Хороший аудит помогает запустить итеративный цикл улучшений. Это не финальная точка, а отправная для серии экспериментов."
    },
    {
      type: "divider",
      label: "После внедрения"
    },
    {
      type: "h3",
      text: "Закрепить эффект и не откатиться назад"
    },
    {
      type: "p",
      text:
        "После первых улучшений важно зафиксировать метрики и сравнить их с базовой линией. Без этого легко перепутать эффект с сезонностью или трафиком."
    },
    {
      type: "p",
      text:
        "Рекомендуется заранее определить, какие показатели считаем улучшением, и за какой период. Это придает изменениям прозрачность и снижает споры."
    },
    {
      type: "p",
      text:
        "Если улучшение подтвердилось, изменения должны попасть в системные правила: тексты, компоненты, паттерны. Иначе через несколько релизов проблема вернется."
    },
    {
      type: "p",
      text:
        "Хорошая практика — провести короткий повторный аудит через 6–8 недель и проверить, не появились ли новые узкие места на фоне роста трафика."
    },
    {
      type: "divider",
      label: "Вывод"
    },
    {
      type: "p",
      text:
        "UX‑аудит ценен тем, что дает быстрый эффект без дорогостоящего редизайна. Он превращает ощущения в факты, а факты — в план действий."
    },
    {
      type: "p",
      text:
        "Если вы хотите роста, начните с аудита: он покажет, где продукт теряет людей и какие улучшения дадут максимальную отдачу уже в ближайший спринт."
    },
    {
      type: "p",
      text:
        "Регулярные аудиты раз в полгода помогают поддерживать качество сценариев и замечать новые точки потерь до того, как они ударят по метрикам."
    },
    {
      type: "p",
      text:
        "Это дешевле, чем редизайн, и дает стабильный рост за счет постоянных небольших улучшений."
    },
    {
      type: "p",
      text:
        "Аудит превращает UX в управляемый процесс, а не в серию случайных правок."
    }
  ]
},
{
  id: "design-system-scale",
  title: "Дизайн‑система в рост: как поддерживать масштабирование без хаоса",
  excerpt:
    "Когда система перестает быть библиотекой и становится продуктом: роли, governance, метрики и сценарии роста.",
  date: "29.01.2026",
  readTime: "18 мин чтения",
  tags: ["Design System", "Product", "Team"],
  cover: "assets/images/blog-covers/design-system-scale.svg",
  body: [
    {
      type: "h2",
      text: "Почему дизайн‑система ломается именно в момент роста"
    },
    {
      type: "p",
      text:
        "Пока продукт небольшой, дизайн‑система кажется удобной библиотекой: кнопки, карточки, пару шаблонов."
    },
    {
      type: "p",
      text:
        "Но как только появляются новые команды, платформы и релизы, система начинает трещать: компоненты дублируются, правила расходятся, документация устаревает."
    },
    {
      type: "p",
      text:
        "Проблема не в системе, а в отсутствии управления. Без governance дизайн‑система превращается в архив решений, а не в живой продукт."
    },
    {
      type: "callout",
      icon: "insight",
      title: "Главный риск",
      text:
        "Если система не развивается вместе с продуктом, она начинает тормозить команды вместо того, чтобы ускорять."
    },
    {
      type: "divider",
      label: "Организация"
    },
    {
      type: "h3",
      text: "1. Роли и ответственность"
    },
    {
      type: "p",
      text:
        "У системы должен быть владелец. Это может быть небольшой core‑сквад или конкретный ответственный, который принимает решения и задает стандарты."
    },
    {
      type: "p",
      text:
        "Когда владельца нет, каждый проект начинает создавать «свои» версии компонентов, и через год у команды десять кнопок с разными состояниями."
    },
    {
      type: "h3",
      text: "2. Процесс внесения изменений"
    },
    {
      type: "p",
      text:
        "Команды должны понимать, как предложить новое решение: от запроса до ревью и релиза. Это снижает хаос и ускоряет внедрение."
    },
    {
      type: "p",
      text:
        "Хороший процесс включает шаблон запроса, критерии принятия, тестирование на нескольких сценариях и обновление документации."
    },
    {
      type: "divider",
      label: "Масштабирование"
    },
    {
      type: "h3",
      text: "3. Сценарии роста"
    },
    {
      type: "p",
      text:
        "Система должна отвечать не на вопрос «как выглядит кнопка», а «как собираются решения». Для этого важно иметь паттерны и шаблоны."
    },
    {
      type: "p",
      text:
        "Паттерны — это не просто набор компонентов, а готовые сценарии: форма регистрации, фильтрация, таблица, empty‑state."
    },
    {
      type: "p",
      text:
        "Когда продукт растет, именно паттерны обеспечивают масштаб: они позволяют быстро собирать новые экраны без изобретения логики."
    },
    {
      type: "h3",
      text: "4. Метрики системы"
    },
    {
      type: "p",
      text:
        "Без метрик дизайн‑система остается «красивой папкой». Минимум, который стоит измерять: доля использования компонентов, скорость сборки экранов, число расхождений."
    },
    {
      type: "p",
      text:
        "Полезно считать, сколько времени команда экономит на типовых задачах, насколько снизилось количество багов, сколько споров исчезло."
    },
    {
      type: "divider",
      label: "Качество"
    },
    {
      type: "h3",
      text: "5. Документация как продукт"
    },
    {
      type: "p",
      text:
        "Документация — это интерфейс для команды. Если она неудобная, систему не будут использовать."
    },
    {
      type: "p",
      text:
        "Сильная документация объясняет не только «как», но и «почему»: когда применять компонент, какие ошибки бывают, какие ограничения."
    },
    {
      type: "p",
      text:
        "Чем яснее правила, тем меньше арбитража между дизайном и разработкой."
    },
    {
      type: "callout",
      icon: "note",
      title: "Совет",
      text:
        "Не пытайтесь описать все сразу. Начните с критичных сценариев, постепенно расширяя систему."
    },
    {
      type: "divider",
      label: "Практика"
    },
    {
      type: "h3",
      text: "6. Как избежать распада системы"
    },
    {
      type: "ul",
      items: [
        "Регулярный аудит компонентов раз в квартал.",
        "Запрет на «быстрые кастомы» без фиксации.",
        "Единые токены и типографика для всех платформ.",
        "Короткий цикл релиза обновлений.",
        "Обучение новых команд и разработчиков."
      ]
    },
    {
      type: "p",
      text:
        "Эти практики не требуют огромных ресурсов, но стабилизируют систему и дают командам уверенность в использовании."
    },
    {
      type: "divider",
      label: "Архитектура"
    },
    {
      type: "h3",
      text: "7. Токены и уровни абстракции"
    },
    {
      type: "p",
      text:
        "Токены — это фундамент системы: цвета, типографика, отступы, состояния. Они обеспечивают единый язык для всех платформ."
    },
    {
      type: "p",
      text:
        "Важно разделять уровни: базовые токены (цвета), семантические (primary, success) и компонентные. Так изменения не ломают весь продукт."
    },
    {
      type: "h3",
      text: "8. Версионирование и миграции"
    },
    {
      type: "p",
      text:
        "Система должна иметь версии и правила обновления. Без этого команды боятся обновляться и остаются на старых компонентах."
    },
    {
      type: "p",
      text:
        "Рекомендуется публиковать релизы с понятными изменениями, вести журнал обновлений и давать инструкции по миграции."
    },
    {
      type: "divider",
      label: "Антипаттерны"
    },
    {
      type: "h3",
      text: "Что разрушает дизайн‑систему"
    },
    {
      type: "ul",
      items: [
        "Компоненты без владельца и ревью.",
        "Систему используют только дизайнеры, но не разработка.",
        "Документация устаревает и не обновляется.",
        "Новые решения сразу внедряются без проверки в нескольких продуктах.",
        "Система не имеет связи с бизнес‑целями."
      ]
    },
    {
      type: "p",
      text:
        "Эти ошибки не выглядят критичными в моменте, но через год превращаются в десятки несогласованных интерфейсов."
    },
    {
      type: "divider",
      label: "Интеграция"
    },
    {
      type: "h3",
      text: "9. Синхронизация дизайн и код"
    },
    {
      type: "p",
      text:
        "Если дизайн‑система существует только в Figma, она не масштабируется. Система должна жить и в коде, иначе разработка будет создавать свои версии компонентов."
    },
    {
      type: "p",
      text:
        "Лучший подход — единый источник токенов и библиотека компонентов, которые синхронизируются с дизайн‑частью. Это снижает расхождения и ускоряет релизы."
    },
    {
      type: "p",
      text:
        "При изменении компонента важно обновлять и дизайн, и код одновременно — иначе появляются «двойные стандарты»."
    },
    {
      type: "h3",
      text: "10. Контроль качества через PR"
    },
    {
      type: "p",
      text:
        "Хорошая практика — проверять изменения в системе так же строго, как изменения в продукте: через ревью, тестовые сценарии и понятные критерии."
    },
    {
      type: "p",
      text:
        "Это не бюрократия, а защита от хаоса: каждое решение фиксируется и становится частью общего языка."
    },
    {
      type: "divider",
      label: "Внутренний маркетинг"
    },
    {
      type: "h3",
      text: "11. Как продвигать систему внутри команды"
    },
    {
      type: "p",
      text:
        "Даже лучшая система не заработает, если ею не пользуются. Внутренний маркетинг — это регулярные демо, обучение и демонстрация эффекта."
    },
    {
      type: "p",
      text:
        "Показывайте кейсы, где система сэкономила время. Рассказывайте, как быстрее собирать экраны и меньше спорить о стиле."
    },
    {
      type: "ul",
      items: [
        "Короткие презентации «что нового» раз в месяц.",
        "Примеры экранов, собранных из системы.",
        "Шаблоны для типовых сценариев.",
        "Быстрые ответы на запросы команд."
      ]
    },
    {
      type: "divider",
      label: "Кейс"
    },
    {
      type: "h3",
      text: "Мини‑кейс: рост продукта с тремя командами"
    },
    {
      type: "p",
      text:
        "В продукте с тремя командами разработки дизайн‑система начала расходиться уже на втором квартале: появлялись разные версии таблиц и фильтров."
    },
    {
      type: "p",
      text:
        "После введения процесса запросов и ревью, а также перехода на общие токены, количество уникальных компонентов сократилось почти вдвое."
    },
    {
      type: "p",
      text:
        "Команды отметили снижение времени на согласования, а новые фичи начали выходить быстрее, потому что сценарии собирались из готовых блоков."
    },
    {
      type: "divider",
      label: "Чек‑лист"
    },
    {
      type: "ul",
      items: [
        "Есть владелец и понятные правила принятия изменений.",
        "Есть паттерны и шаблоны для типовых сценариев.",
        "Компоненты покрыты документацией и примерами.",
        "Есть метрики использования и влияния.",
        "Обновления выходят регулярно и прогнозируемо.",
        "Команды обучаются работе с системой."
      ]
    },
    {
      type: "divider",
      label: "Платформы"
    },
    {
      type: "h3",
      text: "13. Кросс‑платформенность без потери единого языка"
    },
    {
      type: "p",
      text:
        "Когда продукт существует в вебе, мобильных приложениях и внутренних панелях, единый язык особенно важен. Пользователь не должен ощущать, что это разные продукты."
    },
    {
      type: "p",
      text:
        "В таких случаях система должна содержать общие токены и принципы, но при этом учитывать нативные различия платформ."
    },
    {
      type: "p",
      text:
        "Хорошая система описывает, что едино (тон, принципы, ключевые паттерны), а что адаптируется (жесты, навигация, размеры)."
    },
    {
      type: "divider",
      label: "Экономика"
    },
    {
      type: "h3",
      text: "12. Как считать пользу для бизнеса"
    },
    {
      type: "p",
      text:
        "Дизайн‑система — это инвестиция. Ее ценность видна в экономии времени и снижении ошибок. Например, если команда собирает экран за 2 дня вместо 5, это прямое снижение затрат."
    },
    {
      type: "p",
      text:
        "Вторая часть эффекта — снижение числа UX‑багов. Единые компоненты уменьшают количество неожиданных поведенческих проблем, а значит сокращают нагрузку на поддержку."
    },
    {
      type: "p",
      text:
        "Когда система зрелая, бизнес получает предсказуемость: новые фичи выходят стабильнее, а масштабирование не сопровождается распадом интерфейса."
    },
    {
      type: "p",
      text:
        "Этот эффект сложно заметить сразу, но он становится критичным в момент быстрого роста, когда без системы команды начинают тратить время на согласования вместо разработки."
    },
    {
      type: "p",
      text:
        "В итоге система работает как «страховка» для качества интерфейса на любой скорости."
    },
    {
      type: "divider",
      label: "Вывод"
    },
    {
      type: "p",
      text:
        "Дизайн‑система в рост — это продукт со своими метриками, ответственными и процессом. Без этого она превращается в хаос и теряет доверие команды."
    },
    {
      type: "p",
      text:
        "Сильная система не ограничивает, а ускоряет: она дает предсказуемость, экономит время и позволяет масштабировать продукт без потери качества."
    },
    {
      type: "p",
      text:
        "Именно поэтому зрелые команды вкладываются в систему так же, как в ключевой продукт."
    }
  ]
},
{
  id: "activation-metrics",
  title: "Активация пользователя: метрики первого ценного действия",
  excerpt:
    "Как определить момент ценности, построить путь активации, убрать трение и измерять результат.",
  date: "12.01.2026",
  readTime: "16 мин чтения",
  tags: ["Product", "UX", "Metrics"],
  cover: "assets/images/blog-covers/activation-metrics.svg",
  body: [
    {
      type: "h2",
      text: "Что такое активация и почему это не «регистрация»"
    },
    {
      type: "p",
      text:
        "Активация — это момент, когда пользователь впервые получает реальную ценность от продукта. Не «зашел», не «зарегистрировался», а действительно понял пользу."
    },
    {
      type: "p",
      text:
        "Если команда путает регистрацию с активацией, она оптимизирует форму, а не путь к ценности. В итоге люди проходят шаг, но не становятся активными."
    },
    {
      type: "p",
      text:
        "Например, для сервиса задач активацией может быть создание первой задачи и получение уведомления. Для аналитики — первый отчет, для маркетингового сервиса — первая отправка кампании."
    },
    {
      type: "callout",
      icon: "insight",
      title: "Фокус",
      text:
        "Активация — это не событие, а осознанный опыт: «я понял, зачем этот продукт мне»."
    },
    {
      type: "divider",
      label: "Определение"
    },
    {
      type: "h3",
      text: "1. Найдите первый момент ценности"
    },
    {
      type: "p",
      text:
        "Чтобы определить активацию, нужно ответить на вопрос: что пользователь должен сделать, чтобы почувствовать пользу?"
    },
    {
      type: "p",
      text:
        "Это действие должно быть измеримым и повторяемым. Если «понял ценность» нельзя измерить, его нельзя улучшить."
    },
    {
      type: "p",
      text:
        "Хороший критерий: действие, после которого вероятность возврата увеличивается в несколько раз."
    },
    {
      type: "divider",
      label: "Путь"
    },
    {
      type: "h3",
      text: "2. Постройте короткий маршрут к активации"
    },
    {
      type: "p",
      text:
        "Чем меньше шагов до ценности, тем выше активация. Ваша задача — убрать все, что не влияет на первый результат."
    },
    {
      type: "p",
      text:
        "Если можно отложить заполнение профиля или сложные настройки, сделайте это после активации. Пользователь должен сначала получить пользу."
    },
    {
      type: "ul",
      items: [
        "Минимизируйте обязательные поля.",
        "Покажите готовый пример, если пользователь пустой.",
        "Дайте подсказки в момент действия, а не заранее.",
        "Сократите число экранов до первого результата."
      ]
    },
    {
      type: "divider",
      label: "Трение"
    },
    {
      type: "h3",
      text: "3. Уберите «малые» препятствия"
    },
    {
      type: "p",
      text:
        "Часто активацию ломают мелкие трения: непонятный текст, скрытая кнопка, ошибки валидации, отсутствие прогресса."
    },
    {
      type: "p",
      text:
        "Каждый лишний шаг снижает вероятность, что пользователь дойдет до ценности. Эти шаги нужно вычищать."
    },
    {
      type: "callout",
      icon: "flow",
      title: "Принцип",
      text:
        "Пользователь готов учиться продукту только после того, как почувствует ценность. До этого он хочет простоты."
    },
    {
      type: "divider",
      label: "Метрики"
    },
    {
      type: "h3",
      text: "4. Как измерять активацию"
    },
    {
      type: "p",
      text:
        "Самая простая метрика — доля пользователей, достигших первого ценного действия. Но важно смотреть глубже."
    },
    {
      type: "ul",
      items: [
        "Процент пользователей, которые дошли до ценности в первую сессию.",
        "Среднее время до активации.",
        "Сколько шагов пользователь делает до результата.",
        "Сравнение повторной активности у активированных и неактивированных."
      ]
    },
    {
      type: "p",
      text:
        "Если активированные пользователи возвращаются в 3–5 раз чаще, значит критерий выбран правильно."
    },
    {
      type: "divider",
      label: "Эксперименты"
    },
    {
      type: "h3",
      text: "5. Улучшайте маленькими итерациями"
    },
    {
      type: "p",
      text:
        "Активация редко улучшается одним большим релизом. Лучше серия маленьких улучшений: тексты, порядок, подсказки, стартовые шаблоны."
    },
    {
      type: "p",
      text:
        "Важен цикл: гипотеза → изменение → измерение. Даже если эффект небольшой, вы накапливаете улучшения."
    },
    {
      type: "p",
      text:
        "Хорошая практика — держать отдельную доску задач «в пути к активации» и возвращаться к ней каждые 2–3 недели."
    },
    {
      type: "divider",
      label: "Коммуникация"
    },
    {
      type: "h3",
      text: "6. Как объяснить ценность прямо в интерфейсе"
    },
    {
      type: "p",
      text:
        "Пользователь должен понимать, что он получит через минуту. Слова вроде «начать», «создать», «загрузить» работают хуже, чем конкретный результат: «получить отчет», «подготовить план», «отправить первое сообщение»."
    },
    {
      type: "p",
      text:
        "Чем яснее формулировка, тем меньше тревоги. Люди боятся сделать «не туда», особенно в незнакомом продукте."
    },
    {
      type: "p",
      text:
        "Полезный прием — показать короткий пример результата сразу после первого шага: превью отчета, пример задачи, тестовые данные."
    },
    {
      type: "divider",
      label: "Ошибки"
    },
    {
      type: "h3",
      text: "7. Что чаще всего ломает активацию"
    },
    {
      type: "ul",
      items: [
        "Слишком длинная регистрация с обязательными полями.",
        "Скрытый основной сценарий и отсутствие подсказок.",
        "Неясные тексты кнопок и заголовков.",
        "Нет мгновенной обратной связи о результате.",
        "Слишком много вариантов до первого результата."
      ]
    },
    {
      type: "p",
      text:
        "Эти проблемы легко упустить, потому что команда уже привыкла к продукту. Для нового пользователя они становятся стоп‑сигналом."
    },
    {
      type: "divider",
      label: "После активации"
    },
    {
      type: "h3",
      text: "8. Что делать, когда пользователь уже активирован"
    },
    {
      type: "p",
      text:
        "Активация — не финал. Важно закрепить опыт: показать следующий логичный шаг, напомнить о пользе и дать короткую задачу."
    },
    {
      type: "p",
      text:
        "Если после первого результата пользователь не знает, что делать дальше, часть эффекта теряется. Хороший сценарий — выстроить плавный мост к следующей ценности."
    },
    {
      type: "divider",
      label: "Удержание"
    },
    {
      type: "h3",
      text: "9. Триггеры и напоминания после первого успеха"
    },
    {
      type: "p",
      text:
        "Первые 24 часа после активации критичны. Пользователь должен получить легкий повод вернуться: напоминание, рекомендацию или следующий шаг."
    },
    {
      type: "p",
      text:
        "Важно, чтобы это было продолжением ценности, а не просто маркетинговым сообщением. Например, «готов новый отчет» или «вам доступен план на неделю»."
    },
    {
      type: "p",
      text:
        "Если продукт молчит после первого успеха, пользователь забывает о нем. Короткая цепочка последующих шагов повышает шанс повторной активности."
    },
    {
      type: "p",
      text:
        "Даже простое письмо с полезным шаблоном или подсказкой может удержать внимание и сделать возвращение логичным, а не случайным."
    },
    {
      type: "divider",
      label: "Сегменты"
    },
    {
      type: "h3",
      text: "10. У разных пользователей — разная активация"
    },
    {
      type: "p",
      text:
        "Один и тот же продукт может иметь несколько путей ценности. Новичок, продвинутый пользователь и корпоративный клиент активируются по‑разному."
    },
    {
      type: "p",
      text:
        "Если не разделять сегменты, метрика активации будет размытой. Правильно — считать путь для ключевых групп и сравнивать."
    },
    {
      type: "divider",
      label: "Онбординг"
    },
    {
      type: "h3",
      text: "11. Онбординг как кратчайший маршрут"
    },
    {
      type: "p",
      text:
        "Онбординг — это не экскурсия по продукту, а прямой маршрут к ценности. Любой шаг, не приближающий к результату, должен быть вырезан."
    },
    {
      type: "p",
      text:
        "Вместо длинных подсказок лучше использовать микро‑поддержку: короткие тексты, визуальные акценты, понятные подсказки у нужных элементов."
    },
    {
      type: "divider",
      label: "Примеры"
    },
    {
      type: "h3",
      text: "12. Пример формулировки ценности"
    },
    {
      type: "p",
      text:
        "Если продукт помогает анализировать продажи, первый результат — это быстрый отчет за вчера. Если это таск‑менеджер — список дел на сегодня."
    },
    {
      type: "p",
      text:
        "Важно, чтобы пользователь мог получить этот результат за 1–2 минуты, без подготовки и сложных настроек."
    },
    {
      type: "divider",
      label: "Глубина"
    },
    {
      type: "h3",
      text: "13. Метрики качества активации"
    },
    {
      type: "p",
      text:
        "Недостаточно считать только факт активации. Важно понимать качество: насколько уверенно пользователь проходит путь и возвращается к продукту."
    },
    {
      type: "p",
      text:
        "Показатели качества помогают отличить «случайное достижение» от осознанной ценности."
    },
    {
      type: "ul",
      items: [
        "Доля пользователей, достигших ценности без поддержки.",
        "Количество ошибок или возвратов назад на пути.",
        "Число действий до первого результата.",
        "Процент пользователей, которые повторили ценность на следующий день."
      ]
    },
    {
      type: "divider",
      label: "Скорость"
    },
    {
      type: "h3",
      text: "14. Время до ценности как KPI"
    },
    {
      type: "p",
      text:
        "Если пользователь получает пользу за 30 секунд, он почти всегда возвращается. Если за 10 минут — шанс повторного визита падает."
    },
    {
      type: "p",
      text:
        "Поэтому время до ценности — один из самых практичных KPI для продуктовой команды. Сокращая его, вы напрямую влияете на удержание."
    },
    {
      type: "divider",
      label: "Чек‑лист"
    },
    {
      type: "ul",
      items: [
        "Определен первый момент ценности.",
        "Путь к нему состоит из минимальных шагов.",
        "Все обязательные поля оправданы.",
        "Есть готовый пример, если пользователь пустой.",
        "Тексты объясняют результат, а не процесс.",
        "Метрика активации считается по сегментам.",
        "Время до ценности измеряется.",
        "Есть цикл улучшений и экспериментов."
      ]
    },
    {
      type: "divider",
      label: "Вывод"
    },
    {
      type: "p",
      text:
        "Активация — это первая победа пользователя и ваша главная точка роста. Если путь к ней короткий и понятный, продукт быстрее превращается из «попробовал» в «остался»."
    },
    {
      type: "p",
      text:
        "Инвестируя в активацию, вы улучшаете всю воронку: меньше оттока на старте, выше вовлеченность и стабильнее выручка."
    },
    {
      type: "p",
      text:
        "Сфокусируйтесь на ценности, уберите трение, измеряйте шаги — и вы получите более устойчивый рост без бесконечных редизайнов."
    },
    {
      type: "p",
      text:
        "Когда активация выстроена, продукт начинает «сам себя объяснять», а маркетинг и продажи получают более теплых и готовых пользователей."
    },
    {
      type: "p",
      text:
        "Это основа долгосрочного роста и устойчивого удержания."
    },
    {
      type: "p",
      text:
        "И это измеримо."
    }
  ]
},
{
  id: "jtbd-ux-ui-practice",
  title: "Что такое Jobs To Be Done в UX/UI и как применить JTBD на реальном проекте: пошаговый шаблон",
  excerpt:
    "Разбираем подход Jobs To Be Done простым языком: принципы, пошаговое внедрение в UX/UI и шаблон формулировки гипотез.",
  date: "11.02.2026",
  readTime: "18 мин чтения",
  tags: ["UX", "Product", "Research"],
  cover: "assets/images/blog-covers/ux-research-lite.svg",
  body: [
    {
      type: "h2",
      text: "Что такое Jobs to Be Done и зачем он нужен в UX/UI"
    },
    {
      type: "p",
      text:
        "Jobs to Be Done (JTBD) — это подход, в котором пользователь «нанимает» продукт для выполнения конкретной задачи, а не просто пользуется функциями ради функций."
    },
    {
      type: "p",
      text:
        "Идея простая: человек покупает не дрель, а возможность сделать отверстие в стене. В UX/UI это означает фокус на задаче и контексте, а не только на демографии и портретах аудитории."
    },
    {
      type: "callout",
      icon: "insight",
      title: "Ключевая мысль",
      text:
        "Пользователь приходит в продукт ради результата. Если продукт не закрывает работу, его заменяют конкурентом."
    },
    {
      type: "h3",
      text: "Принципы JTBD на практике"
    },
    {
      type: "ul",
      items: [
        "Контекст важнее портрета: важна ситуация, в которой оказался человек.",
        "Одну и ту же работу можно закрыть разными способами и разными продуктами.",
        "Каждую фичу стоит проверять вопросом: какую задачу пользователя она реально решает."
      ]
    },
    {
      type: "divider",
      label: "Шаги внедрения"
    },
    {
      type: "h3",
      text: "1. Исследуйте ситуации и задачи пользователей"
    },
    {
      type: "p",
      text:
        "Проведите интервью, опросы и анализ обратной связи. Важно понять, какие события запускают поиск решения и какого результата ожидает пользователь."
    },
    {
      type: "h3",
      text: "2. Сформулируйте Job Stories"
    },
    {
      type: "p",
      text:
        "Используйте шаблон: «Когда [ситуация], я хочу [действие], чтобы [результат]». Это помогает связать контекст, мотивацию и ожидаемую ценность."
    },
    {
      type: "blockquote",
      text:
        "Когда я опаздываю из-за пробки, я хочу быстро найти объезд, чтобы приехать вовремя."
    },
    {
      type: "h3",
      text: "3. Привяжите работы к решениям в продукте"
    },
    {
      type: "p",
      text:
        "Для каждой job story должно быть понятное решение в интерфейсе: функция, сценарий, контент или подсказка. Если решения нет, это приоритетная зона для улучшения."
    },
    {
      type: "h3",
      text: "4. Приоритизируйте работы"
    },
    {
      type: "p",
      text:
        "Оцените, какие работы происходят чаще и дают больше ценности пользователю и бизнесу. Сфокусируйтесь на них в первую очередь."
    },
    {
      type: "h3",
      text: "5. Внедрите в User Flow и UI"
    },
    {
      type: "p",
      text:
        "Проверьте путь пользователя на каждом шаге: помогает ли интерфейс быстрее выполнить работу. Уберите лишнее, усилите ключевые действия и используйте понятные формулировки."
    },
    {
      type: "h3",
      text: "6. Тестируйте и повторяйте цикл"
    },
    {
      type: "p",
      text:
        "Запускайте изменения, измеряйте время до результата, долю успешных сценариев и собирайте качественный фидбэк. JTBD работает как непрерывный процесс, а не разовое упражнение."
    },
    {
      type: "divider",
      label: "Шаблон"
    },
    {
      type: "p",
      text:
        "Шаблон UX-гипотезы на базе JTBD: «Мы считаем, что пользователи нанимают продукт для [работа]. Если улучшим [элемент интерфейса], они быстрее достигнут [результат], потому что [инсайт из исследования]»."
    },
    {
      type: "p",
      text:
        "Когда дизайн строится вокруг «работ» пользователя, продукт становится понятнее, полезнее и устойчивее к конкуренции."
    }
  ]
},
{
  id: "ux-audit-checklist-60",
  title: "Как провести UX-аудит сайта самому: чек-лист из 60 пунктов + примеры ошибок",
  excerpt:
    "Практический самостоятельный UX-аудит: что проверять на сайте, как пройтись по категориям и какие типовые ошибки встречаются чаще всего.",
  date: "11.02.2026",
  readTime: "20 мин чтения",
  tags: ["UX", "UI", "Audit"],
  cover: "assets/images/blog-covers/ux-audit.svg",
  body: [
    {
      type: "h2",
      text: "Что такое UX-аудит и зачем он нужен"
    },
    {
      type: "p",
      text:
        "UX-аудит — это проверка сайта на удобство, понятность и эффективность. Цель — найти барьеры, которые мешают пользователю выполнить нужное действие."
    },
    {
      type: "p",
      text:
        "Даже хороший сайт со временем накапливает проблемы: устаревает контент, усложняются сценарии, ломается логика переходов. Регулярный аудит позволяет вовремя это исправлять."
    },
    {
      type: "divider",
      label: "Чек-лист"
    },
    {
      type: "h3",
      text: "1. Навигация и структура"
    },
    {
      type: "ul",
      items: [
        "Меню логичное и единообразное на всех страницах.",
        "Логотип ведет на главную.",
        "Есть хлебные крошки в глубоких разделах.",
        "Поиск работает и выдает релевантные результаты."
      ]
    },
    {
      type: "h3",
      text: "2. Визуальная иерархия"
    },
    {
      type: "ul",
      items: [
        "Текст читаемый, заголовки и подзаголовки различимы.",
        "Главное действие на странице выделено.",
        "Нет визуального шума: перегруженных баннеров и анимаций.",
        "Соблюдается единый стиль компонентов."
      ]
    },
    {
      type: "h3",
      text: "3. Контент и CTA"
    },
    {
      type: "ul",
      items: [
        "Заголовки отражают суть экрана.",
        "Тексты без канцелярита и «воды».",
        "Кнопки формулируют конкретное действие и результат.",
        "Ключевой CTA виден без лишней прокрутки."
      ]
    },
    {
      type: "h3",
      text: "4. Формы"
    },
    {
      type: "ul",
      items: [
        "Только необходимые поля.",
        "Понятные лейблы и примеры ввода.",
        "Ясные сообщения об ошибках рядом с полем.",
        "После отправки пользователь видит подтверждение."
      ]
    },
    {
      type: "h3",
      text: "5. Мобильная версия и скорость"
    },
    {
      type: "ul",
      items: [
        "Нет горизонтального скролла и наложения блоков.",
        "Кнопки и ссылки удобны для нажатия пальцем.",
        "Изображения оптимизированы по размеру.",
        "Критичные страницы грузятся за 2–3 секунды."
      ]
    },
    {
      type: "h3",
      text: "6. Доверие и доступность"
    },
    {
      type: "ul",
      items: [
        "Есть контакты, раздел «О компании», политика конфиденциальности.",
        "Контраст текста достаточный.",
        "У изображений есть alt-тексты.",
        "Сайт проходим с клавиатуры, виден фокус элементов."
      ]
    },
    {
      type: "divider",
      label: "Типовые ошибки"
    },
    {
      type: "ul",
      items: [
        "Спрятанная навигация на десктопе без причины.",
        "Слишком сложный checkout с лишними шагами.",
        "Непонятные системные ошибки без объяснений.",
        "Слабая мобильная адаптация.",
        "Медленная загрузка плюс агрессивные попапы."
      ]
    },
    {
      type: "p",
      text:
        "Самостоятельный UX-аудит — рабочий способ быстро найти слабые места. Главное — проходить проверку регулярно и фиксировать улучшения по приоритету."
    }
  ]
},
{
  id: "cjm-ecommerce-guide",
  title: "Как составить CJM для интернет-магазина: этапы, события, метрики и типовые провалы",
  excerpt:
    "Полная карта пути клиента для e-commerce: этапы от первого касания до лояльности, ключевые метрики и частые точки провала.",
  date: "11.02.2026",
  readTime: "19 мин чтения",
  tags: ["UX", "Product", "CJM"],
  cover: "assets/images/blog-covers/systems-thinking.svg",
  body: [
    {
      type: "h2",
      text: "Зачем интернет-магазину Customer Journey Map"
    },
    {
      type: "p",
      text:
        "CJM — это визуальная карта пути клиента от первого знакомства с брендом до повторной покупки. Она помогает увидеть барьеры и улучшить опыт на каждом этапе."
    },
    {
      type: "divider",
      label: "Этапы пути"
    },
    {
      type: "ul",
      items: [
        "Awareness: осознание потребности.",
        "Acquisition: поиск решения и первый контакт с магазином.",
        "Consideration: изучение ассортимента и сравнение вариантов.",
        "Purchase: оформление и оплата заказа.",
        "Delivery: ожидание и получение товара.",
        "Usage: использование продукта.",
        "Retention: повторные покупки и лояльность."
      ]
    },
    {
      type: "h3",
      text: "Ключевые события и точки контакта"
    },
    {
      type: "p",
      text:
        "Для каждого этапа фиксируйте реальные действия: просмотр рекламы, визит на сайт, использование фильтров, добавление в корзину, оформление заказа, получение уведомлений, обращение в поддержку."
    },
    {
      type: "p",
      text:
        "Чем точнее карта событий, тем проще понять, где теряется пользователь."
    },
    {
      type: "divider",
      label: "Метрики"
    },
    {
      type: "ul",
      items: [
        "Привлечение: трафик, CTR, CAC.",
        "Выбор: глубина просмотра, bounce rate, add-to-cart rate.",
        "Покупка: CR, брошенные корзины, средний чек.",
        "Доставка: срок, процент задержек, возвраты.",
        "Лояльность: retention, повторные покупки, NPS, LTV."
      ]
    },
    {
      type: "divider",
      label: "Типовые провалы"
    },
    {
      type: "ul",
      items: [
        "Фокус только на этапе покупки и игнор post-purchase опыта.",
        "Сложный checkout с обязательной регистрацией.",
        "Скрытые комиссии и неожиданные доплаты на финальном шаге.",
        "Отсутствие коммуникации после оплаты и во время доставки.",
        "Игнор мобильного сценария.",
        "Карта составлена формально и не влияет на roadmap."
      ]
    },
    {
      type: "callout",
      icon: "flow",
      title: "Практика",
      text:
        "CJM работает только тогда, когда по каждой найденной проблеме есть владелец, гипотеза и срок внедрения."
    },
    {
      type: "p",
      text:
        "Сильная карта пути клиента помогает не просто «описать процесс», а системно улучшать опыт, конверсию и повторные продажи."
    }
  ]
},
{
  id: "customer-interview-ux-25-questions",
  title: "Как сделать Customer Interview для UX: 25 вопросов, структура, как не «подсказывать» пользователю",
  excerpt:
    "Пошаговый сценарий UX-интервью: структура беседы, примеры вопросов и правила нейтральной модерации без наведения.",
  date: "11.02.2026",
  readTime: "17 мин чтения",
  tags: ["UX", "Research", "Interview"],
  cover: "assets/images/blog-covers/ux-research-lite.svg",
  body: [
    {
      type: "h2",
      text: "Зачем UX-дизайнеру интервью с пользователями"
    },
    {
      type: "p",
      text:
        "Customer Interview помогает понять реальные мотивы, контекст и проблемы пользователей. Это способ уйти от догадок и проектировать на основе фактов."
    },
    {
      type: "divider",
      label: "Структура интервью"
    },
    {
      type: "ul",
      items: [
        "Подготовка: цель, сценарий, критерии отбора респондентов.",
        "Разогрев: безопасное начало и объяснение формата.",
        "Основной блок: текущий опыт, боли, мотивация, поведение.",
        "Уточнения: follow-up вопросы по важным моментам.",
        "Завершение: итог, благодарность, сбор дополнительного фидбэка."
      ]
    },
    {
      type: "h3",
      text: "Примеры вопросов"
    },
    {
      type: "ul",
      items: [
        "Как вы сейчас решаете эту задачу?",
        "Что в процессе самое сложное?",
        "Когда в последний раз возникала эта проблема?",
        "Какие сервисы вы пробовали и почему?",
        "Что для вас будет идеальным решением?"
      ]
    },
    {
      type: "h3",
      text: "Как не подсказывать ответ"
    },
    {
      type: "ul",
      items: [
        "Избегайте закрытых и оценочных вопросов.",
        "Не встраивайте желаемый ответ в формулировку.",
        "Делайте паузы и дайте человеку подумать.",
        "Сохраняйте нейтральную реакцию на любые ответы.",
        "Уточняйте через «почему» и «расскажите подробнее»."
      ]
    },
    {
      type: "callout",
      icon: "insight",
      title: "Критично важно",
      text:
        "Интервью — это не продажа решения и не защита продукта. Цель — понять человека и его контекст."
    },
    {
      type: "p",
      text:
        "Сильные UX-интервью дают материал для job stories, гипотез, сценариев и приоритизации roadmap."
    }
  ]
},
{
  id: "target-audience-designer-services",
  title: "Как определить целевую аудиторию для сайта услуг дизайнера: сегменты, боли, офферы",
  excerpt:
    "Разбираем, как выделить сегменты клиентов, выявить их боли и собрать офферы для сайта дизайнера, которые конвертируют в заявки.",
  date: "11.02.2026",
  readTime: "16 мин чтения",
  tags: ["UX", "Product", "Marketing"],
  cover: "assets/images/blog-covers/portfolio-story.svg",
  body: [
    {
      type: "h2",
      text: "Почему без сегментации сайт дизайнера слабо продает"
    },
    {
      type: "p",
      text:
        "Если пытаться говорить со «всеми сразу», сообщение размывается. Гораздо эффективнее выделить 2–3 ключевых сегмента и под каждый описать задачу, боль и конкретный оффер."
    },
    {
      type: "divider",
      label: "Базовые сегменты"
    },
    {
      type: "ul",
      items: [
        "Малый бизнес и предприниматели.",
        "Стартапы и digital-продукты.",
        "Агентства и маркетинговые отделы.",
        "Частные клиенты с разовыми задачами."
      ]
    },
    {
      type: "h3",
      text: "Что искать в каждом сегменте"
    },
    {
      type: "ul",
      items: [
        "Контекст: кто принимает решение и в какие сроки.",
        "Боль: что мешает достигать цели прямо сейчас.",
        "Риски: чего клиент боится при выборе исполнителя.",
        "Критерии выбора: цена, скорость, стиль, надежность."
      ]
    },
    {
      type: "divider",
      label: "Оффер"
    },
    {
      type: "p",
      text:
        "Формула оффера: «Помогаю [сегменту] решить [проблему] через [ваше решение] с [измеримой выгодой]»."
    },
    {
      type: "ul",
      items: [
        "Для малого бизнеса: «Соберу сайт и фирстиль под ключ за 2 недели».",
        "Для стартапа: «UX/UI, который ускорит активацию и релиз MVP».",
        "Для агентства: «Надежный аутсорс-дизайн с прогнозируемыми дедлайнами»."
      ]
    },
    {
      type: "p",
      text:
        "Чем точнее сформулирован сегмент и его боль, тем проще получить релевантные заявки и сократить цикл сделки."
    }
  ]
},
{
  id: "ux-research-to-hypothesis-ice-rice",
  title: "Как превратить результаты исследования в UX-гипотезы: формула, приоритизация ICE/RICE",
  excerpt:
    "Практика перехода от инсайтов к решениям: формула гипотезы, оценка приоритетов и выбор следующего эксперимента.",
  date: "11.02.2026",
  readTime: "15 мин чтения",
  tags: ["UX", "Product", "Metrics"],
  cover: "assets/images/blog-covers/analytics-for-designers.svg",
  body: [
    {
      type: "h2",
      text: "Почему инсайтов недостаточно"
    },
    {
      type: "p",
      text:
        "Исследование само по себе не улучшает продукт. Улучшают гипотезы и проверяемые изменения, которые на его основе запускает команда."
    },
    {
      type: "h3",
      text: "Формула UX-гипотезы"
    },
    {
      type: "blockquote",
      text:
        "Если мы сделаем [изменение], то получим [эффект], потому что [инсайт из данных]."
    },
    {
      type: "p",
      text:
        "Дополнительно фиксируйте метрику успеха и горизонт проверки, чтобы гипотеза была измеримой и не зависела от интерпретаций."
    },
    {
      type: "divider",
      label: "ICE"
    },
    {
      type: "ul",
      items: [
        "Impact: ожидаемое влияние на метрику.",
        "Confidence: уверенность на основе данных.",
        "Ease: простота реализации."
      ]
    },
    {
      type: "p",
      text:
        "ICE подходит, когда нужно быстро отранжировать много идей и выбрать наиболее выгодные по соотношению эффект/сложность."
    },
    {
      type: "divider",
      label: "RICE"
    },
    {
      type: "ul",
      items: [
        "Reach: скольких пользователей затронет изменение.",
        "Impact: сила влияния.",
        "Confidence: степень уверенности.",
        "Effort: объем ресурсов и времени."
      ]
    },
    {
      type: "p",
      text:
        "RICE полезен, когда важно учитывать охват, а не только локальный эффект в отдельном сценарии."
    },
    {
      type: "callout",
      icon: "chart",
      title: "Правило",
      text:
        "Оценки в ICE/RICE всегда приблизительные, поэтому их лучше калибровать командно и регулярно пересматривать после экспериментов."
    },
    {
      type: "p",
      text:
        "Структурный переход «инсайт → гипотеза → эксперимент → метрика» снижает хаос и ускоряет принятие продуктовых решений."
    }
  ]
},
{
  id: "nielsen-heuristics-landing-audit",
  title: "Как оценить удобство интерфейса без тестов: эвристики Нильсена + примеры на лендинге",
  excerpt:
    "Эвристический анализ интерфейса по Нильсену: как быстро найти UX-проблемы на лендинге, даже если нет доступа к юзабилити-тестам.",
  date: "11.02.2026",
  readTime: "14 мин чтения",
  tags: ["UX", "UI", "Audit"],
  cover: "assets/images/blog-covers/design-critique.svg",
  body: [
    {
      type: "h2",
      text: "Эвристический анализ как быстрый формат UX-проверки"
    },
    {
      type: "p",
      text:
        "Когда нет времени на тесты с пользователями, интерфейс можно оценить через 10 эвристик Нильсена. Это не заменяет исследования, но быстро выявляет критичные проблемы."
    },
    {
      type: "h3",
      text: "Что проверять на лендинге в первую очередь"
    },
    {
      type: "ul",
      items: [
        "Видимость состояния: есть ли понятная реакция после клика.",
        "Соответствие реальному миру: понятные термины и метафоры.",
        "Контроль пользователя: легко ли закрыть попап или отменить действие.",
        "Консистентность: единый стиль CTA, ссылок и компонентов.",
        "Предотвращение ошибок: маски ввода, подсказки, валидация.",
        "Минимализм: нет ли визуального шума и перегруза."
      ]
    },
    {
      type: "divider",
      label: "Примеры нарушений"
    },
    {
      type: "ul",
      items: [
        "Кнопка отправки формы не дает обратной связи.",
        "Непонятные подписи и абстрактные названия разделов.",
        "Навязчивый попап без очевидного закрытия.",
        "Два разных визуальных стиля для одинаковых действий.",
        "Ошибка вида «Error 1234» без человеческого объяснения."
      ]
    },
    {
      type: "callout",
      icon: "flow",
      title: "Практический подход",
      text:
        "Проходите лендинг по эвристикам как по чек-листу, фиксируйте нарушения и сразу привязывайте их к бизнес-риску: потеря лидов, рост отказов, падение доверия."
    },
    {
      type: "p",
      text:
        "Эвристики дают быстрый и дешёвый аудит, который особенно полезен до запуска рекламного трафика."
    }
  ]
},
{
  id: "ux-metrics-business-impact",
  title: "Какие метрики UX важны для бизнеса: CR, AOV, CAC, retention и как дизайнеру на них влиять",
  excerpt:
    "Разбираем ключевые бизнес-метрики через призму UX и конкретные рычаги, которыми дизайнер влияет на рост продукта.",
  date: "11.02.2026",
  readTime: "16 мин чтения",
  tags: ["UX", "Product", "Metrics"],
  cover: "assets/images/blog-covers/product-metrics.svg",
  body: [
    {
      type: "h2",
      text: "Почему UX-дизайнеру важно говорить на языке метрик"
    },
    {
      type: "p",
      text:
        "UX влияет не только на удобство интерфейса, но и на выручку, стоимость привлечения и удержание клиентов. Поэтому дизайнеру критично понимать связь решений и бизнес-результата."
    },
    {
      type: "divider",
      label: "CR"
    },
    {
      type: "p",
      text:
        "Conversion Rate показывает, какой процент пользователей совершил целевое действие. Дизайн влияет на CR через понятный CTA, прозрачный flow и снижение трения на ключевых шагах."
    },
    {
      type: "divider",
      label: "AOV"
    },
    {
      type: "p",
      text:
        "Average Order Value — средний чек. На него влияют UX-механики upsell/cross-sell, структура карточки товара, сравнение тарифов и удобство корзины."
    },
    {
      type: "divider",
      label: "CAC"
    },
    {
      type: "p",
      text:
        "Customer Acquisition Cost — стоимость привлечения клиента. Улучшая конверсию лендинга и ранний онбординг, дизайнер снижает CAC при том же маркетинговом бюджете."
    },
    {
      type: "divider",
      label: "Retention"
    },
    {
      type: "p",
      text:
        "Retention отражает, возвращаются ли пользователи в продукт. Здесь UX критичен: первый опыт, понятная навигация, ценность в первые минуты и отсутствие раздражающих барьеров."
    },
    {
      type: "h3",
      text: "Как дизайнеру влиять на метрики системно"
    },
    {
      type: "ul",
      items: [
        "Работать с аналитикой и видеть узкие места воронки.",
        "Формулировать UX-гипотезы и проверять их через эксперименты.",
        "Связывать каждое значимое изменение с целевой метрикой.",
        "Синхронизироваться с продуктом, маркетингом и аналитикой."
      ]
    },
    {
      type: "callout",
      icon: "chart",
      title: "Итог",
      text:
        "Сильный UX — это когда интерфейс одновременно удобный для пользователя и полезный для бизнеса в измеримых показателях."
    }
  ]
},
{
  id: "seo-blog-knowledge-base-structure",
  title: "Как спроектировать структуру блога/базы знаний под SEO: категории, теги, перелинковка",
  excerpt:
    "Пошаговый разбор структуры контента для SEO: как строить категории, теги и внутренние ссылки, чтобы улучшить индексацию и навигацию.",
  date: "11.02.2026",
  readTime: "17 мин чтения",
  tags: ["SEO", "Content", "UX"],
  cover: "assets/images/blog-covers/design-system-scale.svg",
  body: [
    {
      type: "h2",
      text: "Почему структура решает для SEO и UX"
    },
    {
      type: "p",
      text:
        "Структура блога или базы знаний — это каркас, который влияет и на поведение пользователя, и на то, как поисковые системы понимают ваш сайт."
    },
    {
      type: "p",
      text:
        "Если архитектура понятная, человек быстрее находит нужный материал, а поисковые роботы легче обходят и индексируют страницы."
    },
    {
      type: "divider",
      label: "Категории"
    },
    {
      type: "h3",
      text: "Категории как фундамент"
    },
    {
      type: "p",
      text:
        "Категории объединяют контент по крупным темам: например, SEO, UX, аналитика, контент. Они должны быть ограниченными по числу и понятными по названию."
    },
    {
      type: "ul",
      items: [
        "Выделяйте 5–10 основных тематик сайта.",
        "Используйте названия, которые читатель понимает без расшифровок.",
        "Добавляйте подкатегории только там, где реально много материалов.",
        "Описывайте категорию коротким текстом на странице раздела.",
        "Делайте URL осмысленными и иерархичными."
      ]
    },
    {
      type: "callout",
      icon: "insight",
      title: "SEO-эффект",
      text:
        "Страницы категорий часто ранжируются по широким запросам и становятся дополнительными точками входа."
    },
    {
      type: "divider",
      label: "Теги"
    },
    {
      type: "h3",
      text: "Теги как гибкая связка материалов"
    },
    {
      type: "p",
      text:
        "Теги не заменяют категории, а дополняют их: они объединяют статьи по узким пересекающимся темам, даже если статьи лежат в разных разделах."
    },
    {
      type: "ul",
      items: [
        "Не дублируйте названия категорий в тегах.",
        "Используйте в среднем 2–5 тегов на материал.",
        "Избегайте тегов с одной статьей — это создает «тонкие» страницы.",
        "Формулируйте теги так, как мыслит пользователь."
      ]
    },
    {
      type: "divider",
      label: "Перелинковка"
    },
    {
      type: "h3",
      text: "Внутренняя перелинковка как усилитель структуры"
    },
    {
      type: "p",
      text:
        "Внутренние ссылки связывают контент в единую систему: помогают пользователю переходить по теме и распределяют вес между страницами."
    },
    {
      type: "ul",
      items: [
        "Добавляйте контекстные ссылки в тексте статьи.",
        "Используйте блоки «Читайте также» с близкими по теме материалами.",
        "Связывайте новые материалы со старыми и наоборот.",
        "Следите, чтобы не появлялись «осиротевшие» страницы без входящих ссылок."
      ]
    },
    {
      type: "p",
      text:
        "Сильная структура = понятные категории, осмысленные теги и регулярная перелинковка. Такой блог легче масштабировать и проще продвигать в поиске."
    }
  ]
},
{
  id: "knowledge-base-navigation-toc-breadcrumbs-search",
  title: "Как сделать понятную навигацию в большой базе знаний: оглавление, хлебные крошки, поиск",
  excerpt:
    "Практика навигации для больших баз знаний: как внедрить оглавление, breadcrumbs и поиск, чтобы пользователи быстро находили нужное.",
  date: "11.02.2026",
  readTime: "15 мин чтения",
  tags: ["UX", "IA", "Content"],
  cover: "assets/images/blog-covers/ux-audit.svg",
  body: [
    {
      type: "h2",
      text: "Почему навигация критична в большой базе знаний"
    },
    {
      type: "p",
      text:
        "В объемной документации пользователь приходит за быстрым ответом. Если путь к информации длинный или неочевидный, он уходит."
    },
    {
      type: "divider",
      label: "Оглавление"
    },
    {
      type: "h3",
      text: "Оглавление внутри длинных статей"
    },
    {
      type: "ul",
      items: [
        "Ставьте блок содержания в начале материала.",
        "Стройте его по заголовкам H2/H3 с якорными ссылками.",
        "Для мобильной версии используйте компактный раскрывающийся формат.",
        "Делайте пункты короткими и информативными."
      ]
    },
    {
      type: "p",
      text:
        "Оглавление повышает сканируемость и помогает сразу перейти к нужному разделу, что снижает отказ и увеличивает дочитывания."
    },
    {
      type: "divider",
      label: "Хлебные крошки"
    },
    {
      type: "h3",
      text: "Breadcrumbs для ориентации в иерархии"
    },
    {
      type: "p",
      text:
        "Цепочка вида «Главная / Раздел / Подраздел / Статья» показывает пользователю текущее место и дает быстрый возврат на уровни выше."
    },
    {
      type: "ul",
      items: [
        "Отражайте реальную структуру сайта.",
        "Добавляйте микроразметку BreadcrumbList.",
        "Адаптируйте длинные цепочки под мобильный экран."
      ]
    },
    {
      type: "divider",
      label: "Поиск"
    },
    {
      type: "h3",
      text: "Поиск как обязательный инструмент"
    },
    {
      type: "ul",
      items: [
        "Поле поиска должно быть заметно на всех страницах базы.",
        "Используйте автоподсказки и релевантную сортировку выдачи.",
        "Ищите по заголовкам, телу статей и тегам.",
        "Собирайте поисковые запросы пользователей для улучшения контента."
      ]
    },
    {
      type: "callout",
      icon: "flow",
      title: "Итог",
      text:
        "Оглавление, breadcrumbs и поиск работают лучше вместе: один инструмент дополняет другой и сокращает путь к ответу."
    }
  ]
},
{
  id: "ux-microcopy-rules-before-after",
  title: "Как писать UX-тексты в интерфейсе: правила микрокопирайтинга (с примерами “до/после”)",
  excerpt:
    "Практические правила UX-текстов: как писать короче, яснее и дружелюбнее, чтобы снижать ошибки и повышать конверсию в интерфейсе.",
  date: "11.02.2026",
  readTime: "16 мин чтения",
  tags: ["UX", "UI", "Content"],
  cover: "assets/images/blog-covers/ux-copy.svg",
  body: [
    {
      type: "h2",
      text: "Что такое микрокопирайтинг"
    },
    {
      type: "p",
      text:
        "Микрокопирайтинг — это короткие тексты в интерфейсе: кнопки, подписи полей, ошибки, подсказки и статусы. Именно они направляют пользователя в момент действия."
    },
    {
      type: "divider",
      label: "Правила"
    },
    {
      type: "h3",
      text: "1. Пишите коротко и однозначно"
    },
    {
      type: "blockquote",
      text:
        "До: «Пройдите процедуру аутентификации». После: «Войдите в аккаунт»."
    },
    {
      type: "h3",
      text: "2. Используйте глаголы действия"
    },
    {
      type: "blockquote",
      text:
        "До: «Отправить». После: «Подписаться» / «Скачать файл» / «Оплатить»."
    },
    {
      type: "h3",
      text: "3. Делайте ошибки полезными"
    },
    {
      type: "blockquote",
      text:
        "До: «Ошибка ввода». После: «Пароль должен содержать минимум 8 символов»."
    },
    {
      type: "h3",
      text: "4. Сохраняйте единый язык"
    },
    {
      type: "p",
      text:
        "Если в одном месте вы пишете «профиль», не называйте то же самое «аккаунтом» в другом. Терминология должна быть стабильной во всем продукте."
    },
    {
      type: "h3",
      text: "5. Будьте дружелюбны, но без лишнего"
    },
    {
      type: "p",
      text:
        "Тон может быть теплым, но главное — ясность. Любая фраза должна помогать действовать, а не отвлекать."
    },
    {
      type: "callout",
      icon: "note",
      title: "Практика",
      text:
        "Тестируйте формулировки на пользователях и через A/B: даже маленькое изменение текста часто заметно влияет на конверсию."
    }
  ]
},
{
  id: "choose-article-format-guide-checklist-comparison-tutorial",
  title: "Как выбрать формат статьи под запрос: гайд vs чек-лист vs сравнение vs туториал",
  excerpt:
    "Разбираем, как подбирать формат статьи под поисковое намерение: когда нужен гайд, чек-лист, сравнение или пошаговый туториал.",
  date: "11.02.2026",
  readTime: "14 мин чтения",
  tags: ["Content", "SEO", "UX"],
  cover: "assets/images/blog-covers/portfolio-story.svg",
  body: [
    {
      type: "h2",
      text: "Формат статьи = ответ на намерение пользователя"
    },
    {
      type: "p",
      text:
        "Если формат не совпадает с ожиданием запроса, пользователь быстро уходит. Поэтому сначала определяют search intent, а затем выбирают подачу."
    },
    {
      type: "divider",
      label: "4 формата"
    },
    {
      type: "h3",
      text: "Гайд"
    },
    {
      type: "p",
      text:
        "Подходит для широких обучающих тем, где нужно системно раскрыть вопрос и дать контекст."
    },
    {
      type: "h3",
      text: "Чек-лист"
    },
    {
      type: "p",
      text:
        "Лучший выбор для проверок и повторяемых процессов: коротко, структурно, с пунктами «сделано/не сделано»."
    },
    {
      type: "h3",
      text: "Сравнение"
    },
    {
      type: "p",
      text:
        "Нужно для запросов выбора: «X vs Y», «что лучше», «какой сервис выбрать». Тут важны критерии, плюсы и минусы."
    },
    {
      type: "h3",
      text: "Туториал"
    },
    {
      type: "p",
      text:
        "Пошаговая инструкция для конкретной задачи «как сделать». Меньше теории, больше действий и скриншотов."
    },
    {
      type: "divider",
      label: "Как выбрать быстро"
    },
    {
      type: "ul",
      items: [
        "Широкий информационный запрос → гайд.",
        "Проверка процесса/список шагов → чек-лист.",
        "Запрос выбора между вариантами → сравнение.",
        "Нужно выполнить задачу прямо сейчас → туториал."
      ]
    },
    {
      type: "p",
      text:
        "Перед публикацией полезно проверить топ выдачи по запросу: если в SERP доминирует конкретный формат, лучше учитывать это в структуре статьи."
    }
  ]
},
{
  id: "how-to-format-articles-for-completion",
  title: "Как оформлять статьи, чтобы их дочитывали: структура, сканируемость, блоки, визуальные паттерны",
  excerpt:
    "Практика оформления длинных статей: как повысить дочитываемость с помощью структуры, сканируемости и визуальных паттернов чтения.",
  date: "11.02.2026",
  readTime: "15 мин чтения",
  tags: ["UX", "Content", "UI"],
  cover: "assets/images/blog-covers/design-critique.svg",
  body: [
    {
      type: "h2",
      text: "Почему читатели не дочитывают"
    },
    {
      type: "p",
      text:
        "Пользователь сначала сканирует страницу, а не читает ее подряд. Если текст выглядит как «простыня», шанс дочитывания резко падает."
    },
    {
      type: "divider",
      label: "Структура"
    },
    {
      type: "ul",
      items: [
        "Собирайте статью из логичных разделов с понятными H2/H3.",
        "Делайте вступление с обещанием ценности.",
        "Завершайте материал кратким и полезным выводом."
      ]
    },
    {
      type: "divider",
      label: "Сканируемость"
    },
    {
      type: "ul",
      items: [
        "Короткие абзацы (2–4 предложения).",
        "Списки вместо тяжелых перечислений в строку.",
        "Выделение ключевых мыслей, но без перегруза.",
        "Достаточно воздуха между блоками."
      ]
    },
    {
      type: "divider",
      label: "Блоки"
    },
    {
      type: "p",
      text:
        "Используйте цитаты, выноски, примеры, таблицы и изображения — это снижает монотонность и помогает удерживать внимание на длинной дистанции."
    },
    {
      type: "divider",
      label: "Паттерны чтения"
    },
    {
      type: "p",
      text:
        "Учитывайте F-паттерн и поведение сканирования: размещайте смысловые маркеры в заголовках и в начале абзацев, чтобы пользователь быстро понимал ценность раздела."
    },
    {
      type: "callout",
      icon: "insight",
      title: "Главное",
      text:
        "Оформление — это часть контента. Хорошая структура и визуальный ритм увеличивают дочитывание не хуже, чем сильный заголовок."
    }
  ]
},
{
  id: "information-architecture-card-sorting-tree-testing",
  title: "Что такое информационная архитектура (IA) и как её собрать: card sorting, карта сайта, tree testing",
  excerpt:
    "Разбор IA на практике: как собрать структуру контента через card sorting, оформить sitemap и проверить гипотезы с помощью tree testing.",
  date: "11.02.2026",
  readTime: "18 мин чтения",
  tags: ["IA", "UX", "Research"],
  cover: "assets/images/blog-covers/systems-thinking.svg",
  body: [
    {
      type: "h2",
      text: "Что такое IA и зачем она нужна"
    },
    {
      type: "p",
      text:
        "Информационная архитектура (IA) — это система организации контента: категории, уровни вложенности и навигационные пути, по которым пользователь доходит до ответа."
    },
    {
      type: "p",
      text:
        "Сильная IA снижает когнитивную нагрузку, упрощает поиск информации и помогает поисковым системам корректно понимать структуру ресурса."
    },
    {
      type: "divider",
      label: "Метод 1"
    },
    {
      type: "h3",
      text: "Card sorting"
    },
    {
      type: "p",
      text:
        "Пользователи группируют карточки с темами так, как им кажется логичным. Это помогает выявить естественные кластеры и понятные названия разделов."
    },
    {
      type: "ul",
      items: [
        "Подготовьте набор карточек с реальными темами/страницами.",
        "Проведите открытый или закрытый card sorting.",
        "Зафиксируйте устойчивые паттерны группировок."
      ]
    },
    {
      type: "divider",
      label: "Метод 2"
    },
    {
      type: "h3",
      text: "Карта сайта (sitemap)"
    },
    {
      type: "p",
      text:
        "На базе результатов сортировки собирают дерево разделов: главная → категории → подкатегории → страницы. Это рабочая модель навигации и URL-структуры."
    },
    {
      type: "divider",
      label: "Метод 3"
    },
    {
      type: "h3",
      text: "Tree testing"
    },
    {
      type: "p",
      text:
        "Проверка «сухого» дерева без дизайна: пользователю дают задачу найти информацию по структуре. Метод показывает, где названия или ветки непонятны."
    },
    {
      type: "ul",
      items: [
        "Составьте сценарии поиска ключевых тем.",
        "Проверьте успешность маршрутов и время нахождения.",
        "Исправьте проблемные узлы до запуска интерфейса."
      ]
    },
    {
      type: "callout",
      icon: "chart",
      title: "Результат",
      text:
        "Связка card sorting + sitemap + tree testing дает архитектуру, которая понятна и пользователям, и поисковым системам."
    }
  ]
},
{
  id: "figma-design-system-from-zero",
  title: "Как собрать дизайн-систему в Figma с нуля: токены, компоненты, варианты, документация",
  excerpt:
    "Пошаговый подход к дизайн-системе: от токенов и atomic-компонентов до вариантов, библиотеки и документации для команды.",
  date: "11.02.2026",
  readTime: "17 мин чтения",
  tags: ["Figma", "Design System", "UI"],
  cover: "assets/images/blog-covers/design-system-scale.svg",
  body: [
    { type: "h2", text: "С чего начать дизайн-систему" },
    {
      type: "p",
      text:
        "Полноценная дизайн-система — это не только UI-кит, а набор правил, компонентов и процессов, который масштабируется вместе с продуктом."
    },
    { type: "divider", label: "1. Токены" },
    {
      type: "ul",
      items: [
        "Зафиксируйте цветовые токены: базовые, текстовые, фоновые, акцентные.",
        "Создайте типографическую шкалу: заголовки, body, подписи.",
        "Определите токены отступов и размеров на модульной сетке.",
        "Используйте Variables в Figma для тем и масштабирования."
      ]
    },
    { type: "divider", label: "2. Компоненты" },
    {
      type: "p",
      text:
        "Собирайте систему по принципам Atomic Design: атомы → молекулы → организмы. Все ключевые элементы делайте на Auto Layout."
    },
    {
      type: "p",
      text:
        "Для состояний применяйте Variants: state (default/hover/disabled), size, icon и другие свойства в одном компоненте."
    },
    { type: "divider", label: "3. Документация" },
    {
      type: "ul",
      items: [
        "Опишите, когда использовать каждый компонент и когда не использовать.",
        "Зафиксируйте правила доступности, контрастов и поведения состояний.",
        "Ведите changelog, чтобы команда видела эволюцию системы.",
        "Опубликуйте библиотеку Figma и подключайте ее к рабочим файлам."
      ]
    },
    {
      type: "callout",
      icon: "insight",
      title: "Итог",
      text:
        "Сильная дизайн-система сокращает время на дизайн и разработку, повышает консистентность и снижает стоимость изменений."
    }
  ]
},
{
  id: "figma-auto-layout-10-mistakes",
  title: "Как правильно настроить Auto Layout в Figma: 10 типовых ошибок и как их исправить",
  excerpt:
    "Разбираем частые ошибки Auto Layout и практичные исправления: Hug/Fill, отступы, выравнивание, поведение при изменении контента.",
  date: "11.02.2026",
  readTime: "15 мин чтения",
  tags: ["Figma", "UI", "Layout"],
  cover: "assets/images/blog-covers/design-handoff.svg",
  body: [
    { type: "h2", text: "Почему Auto Layout ломается" },
    {
      type: "p",
      text:
        "Большинство проблем возникает из-за неверного сочетания направления, отступов и режимов Hug/Fill/Fixed во вложенных слоях."
    },
    { type: "h3", text: "Топ ошибок" },
    {
      type: "ul",
      items: [
        "Неверное направление контейнера (horizontal вместо vertical).",
        "Элементы выходят за границы из-за Fixed там, где нужен Fill/Hug.",
        "Кнопки не растягиваются, потому что не выбран Fill container.",
        "Хаотичные отступы и gap без единой системы.",
        "Отсутствие корректного alignment внутри контейнера.",
        "Смешение адаптивных и фиксированных размеров без правил.",
        "Игнор Clip Content в нужных местах.",
        "Ручная компоновка вместо системного Auto Layout."
      ]
    },
    {
      type: "callout",
      icon: "flow",
      title: "Практика",
      text:
        "Проверяйте каждый контейнер по чек-листу: направление, gap, padding, alignment, Hug/Fill и минимальные/максимальные ограничения."
    }
  ]
},
{
  id: "figma-style-organization",
  title: "Как организовать стили в Figma: типографика, цвета, эффекты, нейминг — чтобы не было хаоса",
  excerpt:
    "Система стилей в Figma без дубликатов и путаницы: структура типографики, цветовые группы, эффекты и единый нейминг.",
  date: "11.02.2026",
  readTime: "14 мин чтения",
  tags: ["Figma", "Design System", "UI"],
  cover: "assets/images/blog-covers/design-critique.svg",
  body: [
    { type: "h2", text: "Принцип: меньше, но системно" },
    {
      type: "p",
      text:
        "Хаос в стилях начинается с дубликатов и непоследовательных названий. Решение — единая структура и правила именования."
    },
    { type: "h3", text: "Что стандартизировать" },
    {
      type: "ul",
      items: [
        "Типографика: H1–H5, body, caption, button.",
        "Цвета: UI, text, background, feedback.",
        "Эффекты: ограниченный набор теней и blur-стилей.",
        "Нейминг через иерархию: Group/Role/Level."
      ]
    },
    {
      type: "p",
      text:
        "Используйте группы в названиях (например, Text/Primary, UI/Accent), удаляйте почти идентичные стили и фиксируйте словарь терминов."
    },
    {
      type: "callout",
      icon: "note",
      title: "Результат",
      text:
        "Упорядоченные стили ускоряют работу команды, уменьшают количество визуальных расхождений и упрощают handoff."
    }
  ]
},
{
  id: "adaptive-layouts-breakpoints-grids",
  title: "Как делать адаптивные макеты: брейкпоинты, сетки, контейнеры, правила для разработчика",
  excerpt:
    "Практическая схема адаптива: ключевые брейкпоинты, сетки под разные экраны и правила передачи в разработку.",
  date: "11.02.2026",
  readTime: "16 мин чтения",
  tags: ["UI", "UX", "Layout"],
  cover: "assets/images/blog-covers/mobile-first.svg",
  body: [
    { type: "h2", text: "Основа адаптива" },
    {
      type: "p",
      text:
        "Адаптивный макет строится на сочетании брейкпоинтов, сетки и контейнеров. Цель — предсказуемое поведение интерфейса на любых ширинах."
    },
    { type: "h3", text: "Минимальный набор брейкпоинтов" },
    {
      type: "ul",
      items: [
        "Mobile: до 576px.",
        "Tablet: 768px+.",
        "Desktop: 1200px+."
      ]
    },
    { type: "h3", text: "Что передавать разработчику" },
    {
      type: "ul",
      items: [
        "Макеты ключевых экранов для основных брейкпоинтов.",
        "Правила перестройки блоков и навигации.",
        "Сетку, отступы, контейнеры и ограничения ширины.",
        "Поведение компонентов между точками перелома."
      ]
    },
    {
      type: "callout",
      icon: "chart",
      title: "Ключ",
      text:
        "Чем точнее описано поведение интерфейса между брейкпоинтами, тем меньше расхождений между макетом и кодом."
    }
  ]
},
{
  id: "interface-fonts-selection",
  title: "Как выбирать шрифты для интерфейса: читаемость, кириллица, лицензии, пары и размеры",
  excerpt:
    "Выбор шрифтов для UI без ошибок: проверка читаемости и кириллицы, лицензии, сочетание гарнитур и типографическая шкала.",
  date: "11.02.2026",
  readTime: "15 мин чтения",
  tags: ["UI", "Typography", "Design"],
  cover: "assets/images/blog-covers/ux-copy.svg",
  body: [
    { type: "h2", text: "Читаемость важнее характера" },
    {
      type: "p",
      text:
        "В интерфейсе шрифт должен в первую очередь читаться на разных экранах. Декоративность — вторична."
    },
    {
      type: "ul",
      items: [
        "Проверяйте кириллицу и все нужные начертания.",
        "Уточняйте лицензию для коммерческого и web-использования.",
        "Ограничивайтесь 1–2 гарнитурами в продукте.",
        "Стройте четкую шкалу размеров и line-height."
      ]
    },
    {
      type: "p",
      text:
        "Типографическая иерархия должна быть стабильной: заголовки, основной текст, подписи и кнопки с понятной разницей по размеру и весу."
    }
  ]
},
{
  id: "accessible-ui-checklist",
  title: "Как сделать доступный UI (a11y): контраст, фокус, aria-лейблы, клавиатура — чек-лист",
  excerpt:
    "Базовый чек-лист доступности интерфейса: контраст, видимый фокус, ARIA-атрибуты и полноценная клавиатурная навигация.",
  date: "11.02.2026",
  readTime: "14 мин чтения",
  tags: ["UX", "Accessibility", "UI"],
  cover: "assets/images/blog-covers/accessibility-checklist.svg",
  body: [
    { type: "h2", text: "A11y как часть качества продукта" },
    {
      type: "p",
      text:
        "Доступный интерфейс полезен всем пользователям: снижает количество ошибок, улучшает восприятие и делает продукт устойчивее."
    },
    { type: "h3", text: "Чек-лист" },
    {
      type: "ul",
      items: [
        "Контраст текста соответствует WCAG (минимум 4.5:1 для обычного текста).",
        "Фокус у интерактивных элементов всегда видим.",
        "Все действия доступны с клавиатуры (Tab/Enter/Esc).",
        "Иконки-кнопки имеют aria-label.",
        "Ключевые изображения имеют осмысленный alt-текст.",
        "Ошибки формы читаются скринридером и понятны пользователю."
      ]
    },
    {
      type: "callout",
      icon: "insight",
      title: "Проверка",
      text:
        "Пройдите интерфейс без мыши и с включенным скринридером — это быстро показывает самые критичные проблемы доступности."
    }
  ]
},
{
  id: "ui-kit-vs-design-system-small-product",
  title: "UI-kit vs дизайн-система: в чем разница и что нужно именно для малого продукта",
  excerpt:
    "Разбираем разницу между UI-kit и дизайн-системой и выбираем подход для небольшого продукта без избыточных затрат.",
  date: "11.02.2026",
  readTime: "13 мин чтения",
  tags: ["Design System", "UI", "Product"],
  cover: "assets/images/blog-covers/design-system-scale.svg",
  body: [
    { type: "h2", text: "Главное отличие" },
    {
      type: "p",
      text:
        "UI-kit — это набор готовых интерфейсных компонентов. Дизайн-система — это UI-kit плюс правила использования, процессы, документация и развитие."
    },
    {
      type: "ul",
      items: [
        "UI-kit быстрее собрать и внедрить на старте.",
        "Дизайн-система нужна, когда продукт и команда масштабируются.",
        "Для малого продукта обычно достаточно сильного UI-kit с базовой документацией."
      ]
    },
    {
      type: "callout",
      icon: "flow",
      title: "Практичное решение",
      text:
        "Стартуйте с UI-kit, а по мере роста продукта эволюционируйте его в полноценную дизайн-систему."
    }
  ]
},
{
  id: "pain-free-forms-design",
  title: "Как проектировать формы без боли: маски, валидация, ошибки, подсказки, “сохранить прогресс”",
  excerpt:
    "Практика UX-форм: как снизить количество ошибок и брошенных сценариев через маски, подсказки, понятную валидацию и автосохранение.",
  date: "11.02.2026",
  readTime: "16 мин чтения",
  tags: ["UX", "UI", "Forms"],
  cover: "assets/images/blog-covers/ux-onboarding.svg",
  body: [
    { type: "h2", text: "Почему формы часто ломают конверсию" },
    {
      type: "p",
      text:
        "Боль в формах обычно создают три вещи: лишние поля, непонятные ошибки и потеря введенных данных при сбое."
    },
    { type: "h3", text: "Что должно быть в хорошей форме" },
    {
      type: "ul",
      items: [
        "Маски и форматтеры там, где важен формат (телефон, дата, карта).",
        "Inline-валидация с понятными сообщениями и путём исправления.",
        "Лейблы и подсказки, которые не исчезают при вводе.",
        "Явная обратная связь при отправке: loading, success, retry.",
        "Автосохранение прогресса для длинных и многошаговых форм."
      ]
    },
    {
      type: "callout",
      icon: "note",
      title: "Анти-паттерн",
      text:
        "Ошибка «Что-то пошло не так» без указания поля и причины — самый быстрый способ получить брошенную форму."
    },
    {
      type: "p",
      text:
        "Удобная форма не только повышает конверсию, но и снижает нагрузку на поддержку за счет меньшего числа ошибок и повторных попыток."
    }
  ]
},
{
  id: "developer-handoff-spec-redlines-checklist",
  title: "Как передавать макеты разработчику: спецификация, состояния, токены, redlines, checklist",
  excerpt:
    "Практичный handoff без потерь: какие состояния и спецификацию передавать, как оформить redlines и финальный checklist перед разработкой.",
  date: "11.02.2026",
  readTime: "15 мин чтения",
  tags: ["UX", "UI", "Handoff"],
  cover: "assets/images/blog-covers/design-handoff.svg",
  body: [
    { type: "h2", text: "Что нужно передавать вместе с макетом" },
    {
      type: "ul",
      items: [
        "Все состояния компонентов: default, hover, active, disabled, loading.",
        "Состояния экранов: пусто, загрузка, ошибка, успех.",
        "Единые компоненты и стили из UI-kit/библиотеки.",
        "Дизайн-токены: цвета, типографика, отступы, радиусы, тени.",
        "Точные redlines: размеры и дистанции между элементами."
      ]
    },
    {
      type: "p",
      text:
        "Для сложных мест добавляйте аннотации: что интерактивно, что динамически меняется и какие сценарии обязательны в первой версии."
    },
    {
      type: "h3",
      text: "Финальный checklist перед handoff"
    },
    {
      type: "ul",
      items: [
        "Все ключевые состояния отрисованы.",
        "Компоненты названы единообразно.",
        "Токены и стили согласованы с библиотекой.",
        "Переходы между экранами описаны.",
        "Файл отмечен как готовый к разработке."
      ]
    }
  ]
},
{
  id: "figma-dev-mode-workflow",
  title: "Figma Dev Mode: как разработчику снимать размеры и стили и что дизайнер должен подготовить",
  excerpt:
    "Как использовать Dev Mode в Figma для точного handoff: inspect, code, assets/export и подготовка файла дизайнером.",
  date: "11.02.2026",
  readTime: "14 мин чтения",
  tags: ["Figma", "Handoff", "Dev Mode"],
  cover: "assets/images/blog-covers/design-handoff.svg",
  body: [
    { type: "h2", text: "Что дает Dev Mode разработчику" },
    {
      type: "p",
      text:
        "В Dev Mode разработчик снимает размеры, отступы, типографику и цвета напрямую из макета, а также копирует автогенерируемые фрагменты кода."
    },
    {
      type: "ul",
      items: [
        "Inspect: расстояния, размеры, стили слоев.",
        "Code: CSS/Swift/Android-сниппеты.",
        "Assets: быстрый доступ к иконкам и графике.",
        "Export: выгрузка SVG/PNG/JPG/PDF."
      ]
    },
    {
      type: "h3",
      text: "Что должен подготовить дизайнер"
    },
    {
      type: "ul",
      items: [
        "Привести компонентный нейминг к единому стандарту.",
        "Отметить фреймы и экраны статусом Ready for dev.",
        "Проверить export-настройки ассетов.",
        "Добавить пояснения к нестандартной логике."
      ]
    }
  ]
},
{
  id: "design-to-css-practical-mapping",
  title: "Как сопоставить дизайн с CSS: spacing scale, rem/px, line-height, grid — практический перевод",
  excerpt:
    "Перевод макета в код без потерь: шкала отступов, rem и px, line-height и сетка CSS Grid/Flex в реальном handoff-процессе.",
  date: "11.02.2026",
  readTime: "15 мин чтения",
  tags: ["CSS", "UI", "Handoff"],
  cover: "assets/images/blog-covers/analytics-for-designers.svg",
  body: [
    { type: "h2", text: "База перевода дизайна в CSS" },
    {
      type: "ul",
      items: [
        "Выберите базовый шаг spacing (часто 8px).",
        "Фиксируйте токены отступов и размеров через переменные.",
        "Используйте rem для масштабируемой типографики.",
        "Сверяйте line-height в процентах и числовых значениях.",
        "Стройте макетные сетки через CSS Grid/Flex."
      ]
    },
    {
      type: "p",
      text:
        "Практически это выглядит так: единая шкала интервалов + типографическая система + контейнеры и сетка, которые совпадают по логике между Figma и кодом."
    },
    {
      type: "callout",
      icon: "chart",
      title: "Ключевая идея",
      text:
        "Чем меньше «ручных» единичных значений в CSS, тем проще поддерживать интерфейс и быстрее развивать продукт."
    }
  ]
},
{
  id: "designing-react-components",
  title: "Как проектировать компоненты под React: props, состояния, вариативность, edge cases",
  excerpt:
    "Подход к UI-компонентам для React: как заложить props, состояния и вариативность, чтобы компонент был переиспользуемым и устойчивым.",
  date: "11.02.2026",
  readTime: "16 мин чтения",
  tags: ["React", "UI", "Component"],
  cover: "assets/images/blog-covers/systems-thinking.svg",
  body: [
    { type: "h2", text: "Думайте компонентом, а не экраном" },
    {
      type: "p",
      text:
        "Для React важно проектировать компонент как API: какие props принимает, какие состояния имеет и как ведет себя в крайних сценариях."
    },
    {
      type: "ul",
      items: [
        "Выделите параметры компонента в props: size, variant, disabled, icon, loading.",
        "Отрисуйте все состояния: default/hover/active/disabled/loading.",
        "Соберите варианты через единый компонент, а не дублирование.",
        "Проверьте edge cases: длинные тексты, пустые данные, ошибки."
      ]
    },
    {
      type: "p",
      text:
        "Такой подход уменьшает технический долг и ускоряет внедрение новых экранов, потому что компоненты легко комбинируются и расширяются."
    }
  ]
},
{
  id: "icon-preparation-for-development",
  title: "Как подготовить иконки для разработки: размеры, stroke, export, naming, sprite/SVG",
  excerpt:
    "Чистая подготовка иконок для фронтенда: единые размеры, корректный SVG-export, нейминг и правила для спрайтов.",
  date: "11.02.2026",
  readTime: "14 мин чтения",
  tags: ["UI", "SVG", "Handoff"],
  cover: "assets/images/blog-covers/design-handoff.svg",
  body: [
    { type: "h2", text: "Почему иконки часто ломаются в разработке" },
    {
      type: "p",
      text:
        "Основные причины: разнобой в размерах, необработанные stroke-иконки, лишние группы в SVG и несогласованный нейминг файлов."
    },
    {
      type: "ul",
      items: [
        "Фиксируйте базовые размеры (например, 16/24/32).",
        "Перед export переводите stroke в outline/path при необходимости.",
        "Экспортируйте SVG без лишней вложенности слоев.",
        "Синхронизируйте нейминг в Figma и кодовой базе.",
        "Определите формат внедрения: inline SVG, sprite, img."
      ]
    },
    {
      type: "callout",
      icon: "flow",
      title: "Практика",
      text:
        "Чистые SVG-файлы и единая система имен резко снижают число ошибок при подключении и обновлении иконок."
    }
  ]
},
{
  id: "pixel-perfect-without-toxicity",
  title: "Как сделать “pixel perfect” без токсичности: допуски, критерии, что важно на самом деле",
  excerpt:
    "Баланс между точностью и скоростью: как согласовать допуски, не скатиться в перфекционизм и сохранить качество без конфликтов.",
  date: "11.02.2026",
  readTime: "13 мин чтения",
  tags: ["UI", "Handoff", "Process"],
  cover: "assets/images/blog-covers/design-critique.svg",
  body: [
    { type: "h2", text: "Pixel perfect как инструмент, а не самоцель" },
    {
      type: "p",
      text:
        "Проверка «пиксель в пиксель» полезна для выявления заметных расхождений, но погоня за каждым 1px часто замедляет команду и усложняет код."
    },
    {
      type: "ul",
      items: [
        "Согласуйте с командой допустимые отклонения заранее.",
        "Фокусируйтесь на критичных визуальных и UX-расхождениях.",
        "Не добавляйте хрупкие CSS-костыли ради незаметных мелочей.",
        "Фиксируйте критерии приемки до начала верстки."
      ]
    },
    {
      type: "callout",
      icon: "insight",
      title: "Главное",
      text:
        "Качественная реализация — это не математическая абсолютность, а предсказуемый UX, чистый код и согласованные стандарты."
    }
  ]
},
{
  id: "design-tokens-explained",
  title: "Дизайн-токены простыми словами: что это, как внедрять и как это экономит время команде",
  excerpt:
    "Понятное введение в дизайн-токены: как они связывают дизайн и код, сокращают несогласованность и ускоряют разработку.",
  date: "11.02.2026",
  readTime: "15 мин чтения",
  tags: ["Design System", "Token", "UI"],
  cover: "assets/images/blog-covers/design-system-scale.svg",
  body: [
    { type: "h2", text: "Что такое дизайн-токены" },
    {
      type: "p",
      text:
        "Дизайн-токены — это именованные переменные для визуальных параметров интерфейса: цвет, размер шрифта, отступ, радиус, тень и т.д."
    },
    {
      type: "p",
      text:
        "Они выступают единым источником правды для дизайнеров и разработчиков, потому что одни и те же значения используются и в Figma, и в коде."
    },
    {
      type: "h3",
      text: "Как внедрять"
    },
    {
      type: "ul",
      items: [
        "Начните с базовых токенов: color, spacing, typography.",
        "Приведите названия к понятной системе (semantic naming).",
        "Подключите токены к библиотеке компонентов.",
        "Автоматизируйте выгрузку в CSS/JS-переменные."
      ]
    },
    {
      type: "callout",
      icon: "chart",
      title: "Почему это экономит время",
      text:
        "Изменение одного токена масштабируется на весь продукт: меньше ручных правок, меньше несоответствий и быстрее релизы."
    }
  ]
}
];

const aboutStats = [
  { value: "30+", label: "Проектов" },
  { value: "8+", label: "Дизайн‑систем" },
  { value: "4", label: "Лет опыта" },
  { value: "20+", label: "Команд и курсов" }
];

const skills = [
  "Маркетинг",
  "Shadcn UI",
  "Material design",
  "Ant design",
  "VK UI",
  "Графический дизайн",
  "Mistral",
  "SORA",
  "Брендинг",
  "Atomaro UI",
  "Swift UI",
  "Scrum",
  "Agile",
  "SEO оптимизация",
  "Zero-кодинг",
  "CSS",
  "CJM",
  "Site Map",
  "User Flow",
  "Human interface guidelines",
  "Информационная архитектура",
  "Вайрфрейминг и прототипирование",
  "Исследование",
  "A/B тестирование",
  "Jobs-To-Be-Done",
  "First click test",
  "CustDev",
  "UX",
  "UI",
  "Таймменеджмент"
];

const experience = [
  {
    role: "Старший UX/UI дизайнер в компании Octoclick",
    dates: "10.08.2023 - 10.10.2023",
    details: [
      "Разработка и совершенствование рекламной платформы",
      "Совершенствование пользовательского опыта",
      "Разработка дашбордов и многофункциональных элементов",
      "Совершенствование библиотеки Ant Design"
    ]
  },
  {
    role: "Руководитель и методист по направлению UX/UI дизайна образовательных проектов “ПАЗЛ” и ”КОД”",
    dates: "16.10.2024 - 10.09.2025",
    details: [
      "Разработка учебного плана по направлению UX/UI дизайна",
      "Руководство командой более чем из 20 преподавателей",
      "Создание новой дизайн-системы для всех внутренних образовательных ресурсов",
      "Разработка практических заданий, включающих работу с дизайн макетами",
      "Разработка лекционных материалов и теоретической базы",
      "Контроль качества проведения занятий",
      "Контроль и управление внутренними учебными проектами",
      "Ведение открытых вебинаров и хакатонов"
    ]
  },
  {
    role: "Web - дизайнер в индонезийской компании “Orbita”",
    dates: "10.06.2023 - 10.09.2023",
    details: [
      "Брендинг, разработка маркетинговых материалов",
      "Разработка презентаций для англоязычной аудитории",
      "Масштабирование и web дизайн для существующего сайта и внедрение новых страниц",
      "UI для освещения новых ивентов / мероприятий"
    ]
  },
  {
    role: "Программист отдела WEB разработки Кубанского Государственного Аграрного университета",
    dates: "16.08.2023 - 03.09.2025",
    details: [
      "Разработка внутренних образовательных продуктов университета",
      "UX для внутренних страниц официального сайта",
      "UI для освещения новых ивентов / мероприятий"
    ]
  }
];

const projectTimeline = [
  { date: "20.07.2025", title: "UX/UI для VISIFLOW" },
  { date: "11.07.2025", title: "Многостраничный сайт для OctoCPA" },
  { date: "10.06.2025", title: "Свадебный сайт для Камнева Егора" },
  { date: "—", title: "Многостраничный сайт музыкального лейбла \"hangov3r\"" },
  { date: "20.04.2025", title: "Многостраничный сайт музыкального лейбла \"CASTLE MUSIC\"" },
  { date: "10.02.2025", title: "Многостраничный сайт американского кемпинга \"SPACE CAMP\"" },
  { date: "20.01.2025", title: "UX/UI для платформы Octoclick" },
  { date: "—", title: "Многостраничный сайт для \"Octoclick\"" },
  { date: "10.10.2024", title: "Многостраничный сайт для автосервиса \"ВЫХЛОП ЭКСПЕРТ\"" },
  { date: "29.09.2024", title: "Сайт для строительной компании \"PROFI\"" },
  { date: "21.09.2024", title: "Сайт для подкаст студии \"ЗАОЗЕРНАЯ\"" },
  { date: "05.08.2024", title: "Сайт для онлайн школы \"AMAZON\"" },
  { date: "20.05.2024", title: "Многостраничный сайт +UX/UI для “ИСС”" },
  { date: "17.07.2024", title: "Многостраничный сайт+UX/UI для “ВЫХЛОП ЭКСПЕРТ”" },
  { date: "14.05.2024", title: "Многостраничный сайт+UX/UI для “ПАЗЛ&КОД”" },
  { date: "08.04.2024", title: "Лендинг для “Русский Паб”" },
  { date: "—", title: "Лендинг для “Plitka Service”" },
  { date: "15.03.2024", title: "Лендинг для “Ландшафтный дизайн ЕКБ”" },
  { date: "20.02.2024", title: "UX/UI для образовательной платформы “в IT”" },
  { date: "—", title: "Многостраничный сайт для индонезийской компании “ORBITA”" },
  { date: "25.01.2024", title: "Многостраничный сайт+UX/UI для музыкальной группы “КВАТРО”" },
  { date: "12.01.2024", title: "UX/UI для образовательной платформы повышения квалификации \"НОК\"" },
  { date: "10.11.2023", title: "Сайт для видеорежиссера Анвара Эгамова" },
  { date: "01.10.2023", title: "UX/UI для панели оператора WEINTEK" },
  { date: "28.09.2023", title: "Многостраничный сайт для Игоря Лепихина" },
  { date: "05.08.2023", title: "Моушен дизайн для ООО “ЛукойлЮгНефтепродукт”" },
  { date: "11.05.2023", title: "Лендинг для студии воздушной гимнастики “Trip Air”" },
  { date: "21.04.2023", title: "Лендинг для дизайнера одежды “ARIVA”" },
  { date: "10.04.2023", title: "Лендинг для барбершопа “Бритвин”" },
  { date: "10.03.2023", title: "Многостраничный сайт для фотографа “LEBEDEEWW”" },
  { date: "10.09.2022", title: "Разработка внутренних продуктов для онлайн школы “OnlyScience”" }
];

const education = [
  {
    date: "2022-2023",
    title: "Красный диплом о профессиональной переподготовке 550ч.(Кубанский Государственный Аграрный университет)“Управление проектами”"
  },
  {
    date: "2021-2022",
    title: "Красный диплом о профессиональной переподготовке 550ч.(Кубанский Государственный Аграрный университет) “Цифровые инструменты т сквозные технологии в профессиональной деятельности”"
  },
  {
    date: "2019-2023",
    title: "Высшее, оконченное. Бакалавриат.(Кубанский государственный Аграрный университет)“Экология и природопользование”"
  },
  {
    date: "2023-2024",
    title: "Высшее, оконченное. Магистратура(Кубанский Государственный Аграрный университет)“Экология и природопользование”"
  },
  {
    date: "2023-2024",
    title: "Высшее, оконченное. Магистратура(Чеченский Государственный университет)“Информационные системы и технологии”"
  },

];

const contactInfo = {
  email: "sigidingo@gmail.com",
  phone: "+7 961 971-05-15",
  phoneRaw: "89619710515",
  telegram: "https://t.me/sigidingo",
  whatsapp: "https://wa.me/89619710515",
  vk: "https://vk.com/sigidingo",
  location: "Краснодар",
  status: "Фриланс"
};
