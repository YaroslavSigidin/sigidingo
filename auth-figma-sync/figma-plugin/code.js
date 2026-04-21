const CONTENT = {
  header: {
    user: "Ярослав Сигидин",
    settings: "Настройки",
    logout: "Выйти"
  },
  course: {
    title: "Название обучения",
    description: "Описание описание описание обучения",
    access: "Доступ открыт"
  },
  topCards: [
    { badge: "100", title: "Все вопросы", subtitle: "Случайный порядок решения" },
    { badge: "5", title: "Практика", subtitle: "Видеразборы" },
    { badge: "Не сдан", title: "Экзамен", subtitle: "Промежуточная проверка" }
  ],
  bottomCards: [
    { badge: "100", title: "Знаю", subtitle: "80% и более верных ответов" },
    { badge: "100", title: "Делаю ошибки", subtitle: "80% и более верных ответов" },
    { badge: "100", title: "Не знаю", subtitle: "80% и более верных ответов" },
    { badge: "100", title: "Не решал", subtitle: "80% и более верных ответов" }
  ]
};

const TOKENS = {
  pageBg: "#EDF3FF",
  shell: "#0F1727",
  shellBorder: "#2A3654",
  panel: "#111D32",
  panelSoft: "#172743",
  textMain: "#EEF4FF",
  textMute: "#8FA4C7",
  mint: "#1F9F8F",
  mintSoft: "#1F9F8F33",
  amber: "#C57C1A",
  amberSoft: "#C57C1A33",
  red: "#D55757",
  redSoft: "#D5575733"
};

let SEMIBOLD_STYLE = "Bold";

function rgb(hex) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  return {
    r: ((num >> 16) & 255) / 255,
    g: ((num >> 8) & 255) / 255,
    b: (num & 255) / 255
  };
}

function setFill(node, hex) {
  node.fills = [{ type: "SOLID", color: rgb(hex) }];
}

function setStroke(node, hex, weight) {
  node.strokes = [{ type: "SOLID", color: rgb(hex) }];
  node.strokeWeight = weight || 1;
}

function makeFrame(name, x, y, w, h, fill, radius) {
  const node = figma.createFrame();
  node.name = name;
  node.x = x;
  node.y = y;
  node.resize(w, h);
  node.cornerRadius = radius || 0;
  node.strokes = [];
  setFill(node, fill);
  return node;
}

function makeText(text, x, y, size, color, weight) {
  const node = figma.createText();
  node.characters = text;
  node.x = x;
  node.y = y;
  node.fontSize = size;
  node.fontName = { family: "Inter", style: weight === "Semi Bold" ? SEMIBOLD_STYLE : weight || "Regular" };
  setFill(node, color);
  return node;
}

function badgeStyle(value) {
  if (/не сдан/i.test(value)) {
    return { text: TOKENS.red, bg: TOKENS.redSoft, border: "#D5575788" };
  }
  if (value === "5") {
    return { text: TOKENS.amber, bg: TOKENS.amberSoft, border: "#C57C1A88" };
  }
  return { text: TOKENS.mint, bg: TOKENS.mintSoft, border: "#1F9F8F88" };
}

function makeBadge(value, x, y) {
  const style = badgeStyle(value);
  const w = Math.max(58, value.length * 9 + 24);
  const b = makeFrame("Badge/" + value, x, y, w, 32, "#142137", 8);
  setFill(b, style.bg);
  setStroke(b, style.border, 1);
  b.appendChild(makeText(value, 12, 8, 13, style.text, "Semi Bold"));
  return b;
}

function makeTopButton(value, x, y, strong) {
  const w = Math.max(96, value.length * 9 + 28);
  const btn = makeFrame("Button/" + value, x, y, w, 40, strong ? TOKENS.mint : TOKENS.panelSoft, 10);
  setStroke(btn, TOKENS.shellBorder, 1);
  btn.appendChild(makeText(value, 14, 11, 14, strong ? "#052722" : TOKENS.textMain, "Semi Bold"));
  return btn;
}

function decorateCard(card, w, h, color) {
  const ring = figma.createEllipse();
  ring.name = "Ring";
  ring.resize(190, 190);
  ring.x = w - 110;
  ring.y = h - 85;
  ring.fills = [];
  setStroke(ring, "#FFFFFF2B", 1);
  card.appendChild(ring);

  const accent = makeFrame("Accent", 20, h - 24, 120, 6, color, 99);
  accent.opacity = 0.35;
  card.appendChild(accent);
}

function createPrimaryCard(item, x, y, index) {
  const gradients = ["#1A2B4B", "#2E2447", "#3D2525"];
  const card = makeFrame("Primary/" + item.title, x, y, 432, 310, gradients[index] || gradients[0], 18);
  setStroke(card, TOKENS.shellBorder, 1);

  card.appendChild(makeBadge(item.badge, 20, 18));
  card.appendChild(makeText(item.title, 20, 78, 44, TOKENS.textMain, "Semi Bold"));
  card.appendChild(makeText(item.subtitle, 20, 136, 20, TOKENS.textMute, "Regular"));
  decorateCard(card, 432, 310, badgeStyle(item.badge).text);

  return card;
}

function createStatusCard(item, x, y) {
  const card = makeFrame("Status/" + item.title, x, y, 318, 270, TOKENS.panel, 16);
  setStroke(card, TOKENS.shellBorder, 1);

  card.appendChild(makeBadge(item.badge, 18, 16));
  card.appendChild(makeText(item.title, 18, 72, 40, TOKENS.textMain, "Semi Bold"));
  card.appendChild(makeText(item.subtitle, 18, 128, 16, TOKENS.textMute, "Regular"));
  decorateCard(card, 318, 270, badgeStyle(item.badge).text);

  return card;
}

async function loadFonts() {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  try {
    await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
    SEMIBOLD_STYLE = "Semi Bold";
  } catch (_) {
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    SEMIBOLD_STYLE = "Bold";
  }
}

async function run() {
  try {
    await loadFonts();

    const page = figma.currentPage;

    const bg = makeFrame("System/V2", 40, 40, 1680, 1180, TOKENS.pageBg, 0);
    page.appendChild(bg);

    const shell = makeFrame("Shell", 90, 90, 1580, 1080, TOKENS.shell, 28);
    setStroke(shell, TOKENS.shellBorder, 1);
    bg.appendChild(shell);

    const topBar = makeFrame("TopBar", 30, 24, 1520, 72, TOKENS.panel, 16);
    setStroke(topBar, TOKENS.shellBorder, 1);
    shell.appendChild(topBar);

    const userChip = makeFrame("UserChip", 16, 16, 260, 40, TOKENS.panelSoft, 12);
    setStroke(userChip, TOKENS.shellBorder, 1);
    userChip.appendChild(makeText(CONTENT.header.user, 12, 11, 14, TOKENS.textMain, "Semi Bold"));
    topBar.appendChild(userChip);

    topBar.appendChild(makeTopButton(CONTENT.header.settings, 1250, 16, false));
    topBar.appendChild(makeTopButton(CONTENT.header.logout, 1388, 16, true));

    const hero = makeFrame("Hero", 30, 116, 1520, 250, TOKENS.panel, 22);
    setStroke(hero, TOKENS.shellBorder, 1);
    shell.appendChild(hero);

    hero.appendChild(makeText(CONTENT.course.title, 24, 30, 78, TOKENS.textMain, "Semi Bold"));
    hero.appendChild(makeText(CONTENT.course.description, 28, 124, 24, TOKENS.textMute, "Regular"));
    hero.appendChild(makeBadge(CONTENT.course.access, 28, 168));

    const sideModule = makeFrame("MetaModule", 1220, 24, 276, 198, TOKENS.panelSoft, 16);
    setStroke(sideModule, TOKENS.shellBorder, 1);
    sideModule.appendChild(makeText("Система статусов", 16, 16, 14, TOKENS.textMute, "Regular"));
    sideModule.appendChild(makeText("7 направлений", 16, 42, 34, TOKENS.textMain, "Semi Bold"));
    const progressTrack = makeFrame("ProgressTrack", 16, 106, 244, 8, "#2B3E60", 99);
    const progressFill = makeFrame("ProgressFill", 16, 106, 152, 8, TOKENS.mint, 99);
    sideModule.appendChild(progressTrack);
    sideModule.appendChild(progressFill);
    sideModule.appendChild(makeText("Динамическая зона контроля прогресса", 16, 124, 12, TOKENS.textMute, "Regular"));
    hero.appendChild(sideModule);

    for (let i = 0; i < CONTENT.topCards.length; i++) {
      shell.appendChild(createPrimaryCard(CONTENT.topCards[i], 30 + i * 516, 390, i));
    }

    for (let j = 0; j < CONTENT.bottomCards.length; j++) {
      shell.appendChild(createStatusCard(CONTENT.bottomCards[j], 30 + j * 388, 720));
    }

    page.selection = [shell];
    figma.viewport.scrollAndZoomIntoView([shell]);
    figma.closePlugin("Готово: полностью новый дизайн-системный экран создан");
  } catch (error) {
    const message = error && error.message ? error.message : "Unknown error";
    figma.closePlugin("Ошибка: " + message);
  }
}

run();
