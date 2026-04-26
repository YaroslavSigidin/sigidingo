/* global Matter */
/**
 * Главная: поле ~60vh — курсор, пиксельный ч/б пакман, плашки с физикой Matter.js
 * (аналогично подходу «гравитация в Zero-блоке»: границы + тела с массой и столкновениями).
 */
(() => {
  const section = document.getElementById("homePacGame");
  if (!section) return;
  const stage = section.querySelector(".home-pac-stage");
  const canvas = section.querySelector(".home-pac-canvas");
  const scoreEl = document.getElementById("homePacScore");
  if (!stage || !canvas || !scoreEl) return;

  const isMobile =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(max-width: 720px)").matches;
  if (isMobile) {
    section.classList.add("home-pac--mobile");
    return;
  }

  const prefersReduced =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    section.classList.add("home-pac--reduced");
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const PAC_SPEED = 158;
  const DOT_FLEE_SPEED = 72;
  const PAC_R = 15;
  const HIT_R = 4;
  const MARGIN = 12;
  const CATCH = PAC_R + 9;
  const BLOCK_COUNT = 5;
  const PAC_PIX = 18;

  const SLAB_COPY = [
    "Реализовал более 40 коммерческих проектов: от лендингов до дизайна образовательных платформ.",
    "Более 6 лет занимаюсь совершенствованием UX/UI дизайна и формированием современного IT-сообщества.",
    "Реализовал полноценный курс обучения по UX/UI дизайну на 4 года, через который прошло более 2000 студентов.",
    "Работал с топовыми российскими компаниями: Сбербанк, Ростелеком, МТС, Аскон.",
    "Сформировал с нуля 4 полноценные дизайн-системы для цифровых продуктов."
  ];

  const SLAB_FILL = { dark: "#111111", light: "#fafafa" };
  const SLAB_STROKE = { dark: "#262626", light: "#e3e3e5" };

  const pacOff = document.createElement("canvas");
  pacOff.width = pacOff.height = PAC_PIX;
  const pctx = pacOff.getContext("2d");
  if (!pctx) return;

  let w = 0;
  let h = 0;
  let px = 0;
  let py = 0;
  let dx = 0;
  let dy = 0;
  let tx = 0;
  let ty = 0;
  let cursorIn = false;
  let lastTs = 0;
  let mouthPhase = 0;
  let inited = false;
  /** @type {{ body?: object; x: number; y: number; w: number; h: number; angle: number; copy: string; slabIndex: number | null; isCell?: boolean }[]} */
  let blocks = [];
  let score = 0;

  /** @type {object | null} */
  let matterEngine = null;
  /** @type {object | null} */
  let mouseConstraint = null;
  /** @type {object | null} */
  let matterMouse = null;

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  /** Старт и респавн пакмана — центр поля (canvas), с отступом от краёв */
  const resetPacCenter = () => {
    px = clamp(w * 0.5, MARGIN + PAC_R, w - MARGIN - PAC_R);
    py = clamp(h * 0.5, MARGIN + PAC_R, h - MARGIN - PAC_R);
  };

  const slabCornerRadius = b => Math.min(16, Math.max(10, b.w * 0.038, b.h * 0.085));

  const pathRoundRect = (x, y, ww, hh, rad) => {
    const r = Math.min(rad, ww / 2, hh / 2);
    ctx.beginPath();
    if (typeof ctx.roundRect === "function") {
      ctx.roundRect(x, y, ww, hh, r);
    } else {
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + ww - r, y);
      ctx.arcTo(x + ww, y, x + ww, y + r, r);
      ctx.lineTo(x + ww, y + hh - r);
      ctx.arcTo(x + ww, y + hh, x + ww - r, y + hh, r);
      ctx.lineTo(x + r, y + hh);
      ctx.arcTo(x, y + hh, x, y + hh - r, r);
      ctx.lineTo(x, y + r);
      ctx.arcTo(x, y, x + r, y, r);
      ctx.closePath();
    }
  };

  const wrapSlabLines = (text, maxW, fontPx) => {
    ctx.font = `500 ${fontPx}px Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, monospace`;
    const words = text.split(/\s+/).filter(Boolean);
    const lines = [];
    let line = "";
    const pushLine = ln => {
      if (ln) lines.push(ln);
    };
    for (const word of words) {
      if (ctx.measureText(word).width > maxW) {
        pushLine(line);
        line = "";
        let chunk = "";
        for (const ch of word) {
          const trial = chunk + ch;
          if (ctx.measureText(trial).width <= maxW) chunk = trial;
          else {
            if (chunk) lines.push(chunk);
            chunk = ch;
          }
        }
        line = chunk;
        continue;
      }
      const trial = line ? `${line} ${word}` : word;
      if (ctx.measureText(trial).width <= maxW) line = trial;
      else {
        pushLine(line);
        line = word;
      }
    }
    pushLine(line);
    return lines;
  };

  const fitSlabLayout = (copy, innerW, maxInnerH) => {
    let fs = 16.5;
    for (; fs >= 8.2; fs -= 0.5) {
      const lh = fs * 1.38;
      const lines = wrapSlabLines(copy, innerW, fs);
      if (lines.length * lh <= maxInnerH) return { fs, lines, lh };
    }
    const lh = 8 * 1.38;
    return { fs: 8, lines: wrapSlabLines(copy, innerW, 8), lh };
  };

  const SLAB_SCALE = 1.5;
  const SLAB_HEIGHT_MULT = 2;
  /** Нижняя зона: разделительная линия над номером + отступ + строка индекса */
  const INDEX_BAND = 42;
  /** Линия рисуется выше baseline цифр (не в одну линию с ними) */
  const INDEX_LINE_ABOVE_BASELINE = 24;

  const buildBlockSpecs = () => {
    const pad = Math.round(12 * SLAB_SCALE);
    const GAP = 12;
    /** Одна ширина плашек; узкий экран — не шире трети поля; ×1.5 к базовой ширине */
    let bw = Math.min(Math.floor(w * 0.3), 280);
    bw = Math.max(96, Math.min(bw, Math.floor((w - 2 * MARGIN - 2 * GAP) / 3) - 1));
    bw = Math.round(bw * 1.5);
    bw = Math.min(bw, Math.max(96, w - 2 * MARGIN - 4));

    const innerW = Math.max(48, bw - pad * 2);
    const maxInnerH =
      Math.min(132 * SLAB_SCALE, h * 0.32 * SLAB_SCALE) * SLAB_HEIGHT_MULT - INDEX_BAND;
    const bhCap = Math.min(h * 0.55, h * 0.5);

    const bhs = [];
    for (let i = 0; i < BLOCK_COUNT; i++) {
      const copy = SLAB_COPY[i] ?? "";
      const { fs, lines, lh } = fitSlabLayout(copy, innerW, Math.max(80, maxInnerH));
      const bhText = lines.length * lh + pad * 2 + INDEX_BAND;
      const bh = Math.min(
        Math.max(Math.round(58 * SLAB_SCALE) * SLAB_HEIGHT_MULT, bhText),
        bhCap
      );
      bhs.push(bh);
    }

    /**
     * «Рассыпанная» композиция (референс): центры в долях поля [MARGIN … w-MARGIN],
     * углы в градусах. Индекс = SLAB_COPY / номер на плашке 01…05.
     * 01 верх слева, 02 центр-лево, 03 справа, 04 низ слева, 05 низ по центру.
     */
    const scatter = [
      { cx: 0.24, cy: 0.24, deg: -7 },
      { cx: 0.41, cy: 0.46, deg: -26 },
      { cx: 0.77, cy: 0.35, deg: 38 },
      { cx: 0.23, cy: 0.68, deg: 0 },
      { cx: 0.5, cy: 0.77, deg: 0 }
    ];

    const list = [];
    for (let i = 0; i < BLOCK_COUNT; i++) {
      const bh = bhs[i];
      const sc = scatter[i];
      const cx = MARGIN + sc.cx * (w - 2 * MARGIN);
      const cy = MARGIN + sc.cy * (h - 2 * MARGIN);
      let x = cx - bw / 2;
      let y = cy - bh / 2;
      x = clamp(x, MARGIN, Math.max(MARGIN, w - MARGIN - bw));
      y = clamp(y, MARGIN, Math.max(MARGIN, h - MARGIN - bh));
      list.push({
        x,
        y,
        w: bw,
        h: bh,
        copy: SLAB_COPY[i] ?? "",
        slabIndex: i + 1,
        angle: (sc.deg * Math.PI) / 180
      });
    }
    return list;
  };

  /** Маленькая «клетка»: те же Matter.js-тело и перетаскивание; сверху рисуется поверх пакмана */
  const buildCellSpec = () => {
    const cw = clamp(Math.round(w * 0.15), 58, 104);
    const ch = clamp(Math.round(h * 0.11), 46, 82);
    const cx = MARGIN + 0.88 * (w - 2 * MARGIN);
    const cy = MARGIN + 0.2 * (h - 2 * MARGIN);
    let x = cx - cw / 2;
    let y = cy - ch / 2;
    x = clamp(x, MARGIN, Math.max(MARGIN, w - MARGIN - cw));
    y = clamp(y, MARGIN, Math.max(MARGIN, h - MARGIN - ch));
    return {
      x,
      y,
      w: cw,
      h: ch,
      copy: "",
      slabIndex: null,
      angle: 0,
      isCell: true
    };
  };

  const allBlockSpecs = () => [...buildBlockSpecs(), buildCellSpec()];

  const resolveCircleRect = (cx, cy, r, rx, ry, rw, rh) => {
    const qx = clamp(cx, rx, rx + rw);
    const qy = clamp(cy, ry, ry + rh);
    let ndx = cx - qx;
    let ndy = cy - qy;
    let d2 = ndx * ndx + ndy * ndy;
    if (d2 >= r * r) return { x: cx, y: cy };
    const d = Math.sqrt(d2);
    if (d < 1e-4) {
      const dl = cx - rx;
      const dr = rx + rw - cx;
      const dt = cy - ry;
      const db = ry + rh - cy;
      const m = Math.min(dl, dr, dt, db);
      if (m === dl) return { x: rx - r, y: cy };
      if (m === dr) return { x: rx + rw + r, y: cy };
      if (m === dt) return { x: cx, y: ry - r };
      return { x: cx, y: ry + rh + r };
    }
    const inv = r / d;
    return { x: qx + ndx * inv, y: qy + ndy * inv };
  };

  const resolveCircleAllRects = (cx, cy, r, rects) => {
    let x = cx;
    let y = cy;
    for (let iter = 0; iter < 8; iter++) {
      let changed = false;
      for (const b of rects) {
        const n = resolveCircleRect(x, y, r, b.x, b.y, b.w, b.h);
        if (n.x !== x || n.y !== y) {
          x = n.x;
          y = n.y;
          changed = true;
        }
      }
      if (!changed) break;
    }
    x = clamp(x, MARGIN + r, w - MARGIN - r);
    y = clamp(y, MARGIN + r, h - MARGIN - r);
    return { x, y };
  };

  const getPacCollisionRects = () =>
    blocks.map(b => {
      if (b.body) {
        const bb = b.body.bounds;
        return { x: bb.min.x, y: bb.min.y, w: bb.max.x - bb.min.x, h: bb.max.y - bb.min.y };
      }
      return { x: b.x, y: b.y, w: b.w, h: b.h };
    });

  const syncBlocksFromMatter = () => {
    for (const b of blocks) {
      if (!b.body) continue;
      b.x = b.body.position.x - b.w / 2;
      b.y = b.body.position.y - b.h / 2;
      b.angle = b.body.angle;
    }
  };

  /** Срез экстремальных скоростей после столкновений — меньше «вылетов» за край */
  const clampBlockVelocities = () => {
    if (typeof Matter === "undefined" || !matterEngine) return;
    const { Body } = Matter;
    const maxLin = 24;
    const maxAng = 0.2;
    for (const b of blocks) {
      if (!b.body) continue;
      const body = b.body;
      const { x: vx, y: vy } = body.velocity;
      const sp = Math.hypot(vx, vy);
      if (sp > maxLin) {
        const k = maxLin / sp;
        Body.setVelocity(body, { x: vx * k, y: vy * k });
      }
      const av = body.angularVelocity;
      if (Math.abs(av) > maxAng) {
        Body.setAngularVelocity(body, Math.sign(av) * maxAng);
      }
    }
  };

  /** Снять DOM-слушатели Matter.Mouse (при resize иначе дублируются). */
  const detachMatterMouseFromCanvas = () => {
    if (!matterMouse) return;
    const m = matterMouse;
    const el = m.element;
    if (!el || typeof m.mousedown !== "function") return;
    el.removeEventListener("mousemove", m.mousemove);
    el.removeEventListener("mousedown", m.mousedown);
    el.removeEventListener("mouseup", m.mouseup);
    el.removeEventListener("mousewheel", m.mousewheel);
    el.removeEventListener("DOMMouseScroll", m.mousewheel);
    el.removeEventListener("touchmove", m.mousemove);
    el.removeEventListener("touchstart", m.mousedown);
    el.removeEventListener("touchend", m.mouseup);
  };

  const destroyMatterWorld = () => {
    if (typeof Matter === "undefined") return;
    detachMatterMouseFromCanvas();
    if (matterEngine) {
      Matter.Engine.clear(matterEngine);
      matterEngine = null;
    }
    mouseConstraint = null;
    matterMouse = null;
  };

  const syncMatterMouseScale = () => {
    if (typeof Matter === "undefined" || !matterMouse) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return;
    /**
     * Matter.Mouse._getRelativeMousePosition уже переводит client → координаты bitmap (canvas.width).
     * Мир физики и тела заданы в CSS-пикселях (0…w), поэтому масштаб — rect/canvas, не canvas/rect.
     */
    Matter.Mouse.setScale(matterMouse, {
      x: rect.width / canvas.width,
      y: rect.height / canvas.height
    });
  };

  const initStaticFallback = () => {
    const specs = allBlockSpecs();
    blocks = specs.map(s => ({
      ...s,
      angle: s.angle ?? 0
    }));
  };

  const initMatterWorld = () => {
    destroyMatterWorld();
    if (typeof Matter === "undefined") {
      initStaticFallback();
      return false;
    }

    const { Engine, Bodies, Composite, Mouse, MouseConstraint } = Matter;

    matterEngine = Engine.create();
    matterEngine.enableSleeping = true;
    matterEngine.constraintIterations = 4;
    matterEngine.positionIterations = 10;
    matterEngine.velocityIterations = 8;
    /** Нулевая гравитация: плашки держат заданный «рассыпанный» расклад, не съезжают вниз */
    matterEngine.world.gravity.x = 0;
    matterEngine.world.gravity.y = 0;
    matterEngine.world.gravity.scale = 0.00145;

    const world = matterEngine.world;
    const wallOpts = { isStatic: true, friction: 1, frictionStatic: 1, restitution: 0 };
    const thick = Math.max(48, MARGIN * 4);
    const ground = Bodies.rectangle(w / 2, h - MARGIN / 2, w + thick * 2, MARGIN, wallOpts);
    const ceiling = Bodies.rectangle(w / 2, MARGIN / 2, w + thick * 2, MARGIN, wallOpts);
    const leftWall = Bodies.rectangle(MARGIN / 2, h / 2, MARGIN, h + thick * 2, wallOpts);
    const rightWall = Bodies.rectangle(w - MARGIN / 2, h / 2, MARGIN, h + thick * 2, wallOpts);
    Composite.add(world, [ground, ceiling, leftWall, rightWall]);

    const specs = allBlockSpecs();
    blocks = [];
    for (const s of specs) {
      const rr = Math.min(14, Math.min(s.w, s.h) * 0.04);
      const cx = s.x + s.w / 2;
      const cy = s.y + s.h / 2;
      const body = Bodies.rectangle(cx, cy, s.w, s.h, {
        friction: 0.78,
        frictionStatic: 0.94,
        restitution: 0.02,
        density: s.isCell ? 0.0024 : 0.0021,
        chamfer: { radius: Math.max(1, rr * 0.92) },
        angle: s.angle ?? 0,
        /** Одна отрицательная группа — плашки не толкают друг друга, композиция сохраняется */
        collisionFilter: { group: -2 },
        frictionAir: 0.07
      });
      Composite.add(world, body);
      blocks.push({
        body,
        x: s.x,
        y: s.y,
        w: s.w,
        h: s.h,
        angle: s.angle ?? 0,
        copy: s.copy ?? "",
        slabIndex: s.slabIndex,
        isCell: !!s.isCell
      });
    }

    matterMouse = Mouse.create(canvas);
    mouseConstraint = MouseConstraint.create(matterEngine, {
      mouse: matterMouse,
      constraint: {
        stiffness: 0.28,
        damping: 0.085,
        render: { visible: false }
      }
    });
    Composite.add(world, mouseConstraint);
    /**
     * Matter по умолчанию вешает mousewheel с preventDefault — страница не скроллится над canvas.
     * Колесо для зума не используем; вертикальный скролл страницы оставляем.
     */
    const wheelEl = matterMouse.element;
    wheelEl.removeEventListener("mousewheel", matterMouse.mousewheel);
    wheelEl.removeEventListener("DOMMouseScroll", matterMouse.mousewheel);
    syncMatterMouseScale();
    return true;
  };

  const rasterPacFrame = gapOpen => {
    const cx = (PAC_PIX - 1) / 2;
    const cy = (PAC_PIX - 1) / 2;
    const R = PAC_PIX / 2 - 0.6;
    pctx.clearRect(0, 0, PAC_PIX, PAC_PIX);
    for (let row = 0; row < PAC_PIX; row++) {
      for (let col = 0; col < PAC_PIX; col++) {
        const pdx = col + 0.5 - cx;
        const pdy = row + 0.5 - cy;
        const dist = Math.hypot(pdx, pdy);
        if (dist > R) continue;
        const ang = Math.atan2(pdy, pdx);
        if (pdx > 0 && Math.abs(ang) < gapOpen * Math.PI * 0.48) continue;
        const edge = dist > R - 1.05;
        pctx.fillStyle = edge ? "#0a0a0a" : "#ececec";
        pctx.fillRect(col, row, 1, 1);
      }
    }
  };

  const applyCanvasSize = () => {
    const r = stage.getBoundingClientRect();
    const nw = Math.max(1, Math.floor(r.width));
    const nh = Math.max(1, Math.floor(r.height));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(nw * dpr);
    canvas.height = Math.floor(nh * dpr);
    canvas.style.width = `${nw}px`;
    canvas.style.height = `${nh}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const first = !inited;
    w = nw;
    h = nh;
    if (first) {
      dx = w * 0.55;
      dy = h * 0.45;
      tx = dx;
      ty = dy;
      resetPacCenter();
      initMatterWorld();
      inited = true;
    } else {
      dx = clamp(dx, MARGIN + HIT_R, w - MARGIN - HIT_R);
      dy = clamp(dy, MARGIN + HIT_R, h - MARGIN - HIT_R);
      tx = clamp(tx, MARGIN + HIT_R, w - MARGIN - HIT_R);
      ty = clamp(ty, MARGIN + HIT_R, h - MARGIN - HIT_R);
      px = clamp(px, MARGIN + PAC_R, w - MARGIN - PAC_R);
      py = clamp(py, MARGIN + PAC_R, h - MARGIN - PAC_R);
      initMatterWorld();
    }
    syncMatterMouseScale();
  };

  const updatePointer = e => {
    const rect = stage.getBoundingClientRect();
    tx = e.clientX - rect.left;
    ty = e.clientY - rect.top;
    cursorIn = tx >= -4 && tx <= rect.width + 4 && ty >= -4 && ty <= rect.height + 4;
  };

  stage.addEventListener("pointermove", updatePointer, { passive: true });
  stage.addEventListener("pointerover", updatePointer, { passive: true });
  stage.addEventListener("pointerleave", () => {
    cursorIn = false;
  });

  const ro = new ResizeObserver(() => applyCanvasSize());
  ro.observe(stage);
  applyCanvasSize();

  let pacSectionVisible = true;
  if (typeof IntersectionObserver === "function") {
    const pacIo = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.target === section) pacSectionVisible = e.isIntersecting;
        }
      },
      { root: null, rootMargin: "120px 0px", threshold: 0 }
    );
    pacIo.observe(section);
  }

  window.addEventListener("scroll", syncMatterMouseScale, { passive: true });

  const withSlabLocalDraw = (b, fn) => {
    const cx = b.x + b.w * 0.5;
    const cy = b.y + b.h * 0.5;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(b.angle);
    ctx.translate(-b.w * 0.5, -b.h * 0.5);
    fn();
    ctx.restore();
  };

  const drawSlabFill = (b, dark) => {
    const rr = slabCornerRadius(b);
    pathRoundRect(0, 0, b.w, b.h, rr);
    ctx.fillStyle = dark ? SLAB_FILL.dark : SLAB_FILL.light;
    ctx.fill();
  };

  const drawSlabStroke = b => {
    const rr = slabCornerRadius(b);
    pathRoundRect(0, 0, b.w, b.h, rr);
    ctx.stroke();
  };

  const drawSlabBottomLine = (b, dark) => {
    const pad = Math.round(12 * SLAB_SCALE);
    const idxBaselineY = b.h - pad;
    const y = idxBaselineY - INDEX_LINE_ABOVE_BASELINE;
    ctx.beginPath();
    ctx.moveTo(pad, y + 0.5);
    ctx.lineTo(b.w - pad, y + 0.5);
    ctx.strokeStyle = dark ? "rgba(38, 38, 38, 0.5)" : "rgba(227, 227, 229, 0.5)";
    ctx.lineWidth = 1;
    ctx.stroke();
  };

  const drawSlabIndex = (b, dark) => {
    const pad = Math.round(12 * SLAB_SCALE);
    const rr = slabCornerRadius(b);
    ctx.save();
    pathRoundRect(0, 0, b.w, b.h, rr);
    ctx.clip();
    ctx.font = '600 12px Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, monospace';
    ctx.fillStyle = dark ? "rgba(150, 152, 162, 0.8)" : "rgba(75, 78, 88, 0.88)";
    ctx.textAlign = "left";
    ctx.textBaseline = "bottom";
    const label = String(b.slabIndex).padStart(2, "0");
    ctx.fillText(label, pad, b.h - pad);
    ctx.restore();
  };

  const drawSlabText = (b, dark) => {
    const rr = slabCornerRadius(b);
    const pad = Math.round(12 * SLAB_SCALE);
    const innerW = Math.max(24, b.w - pad * 2);
    const innerH = Math.max(40, b.h - pad * 2 - INDEX_BAND);
    const { fs, lines, lh } = fitSlabLayout(b.copy, innerW, innerH);
    ctx.save();
    pathRoundRect(0, 0, b.w, b.h, rr);
    ctx.clip();
    ctx.fillStyle = dark ? "rgba(245, 245, 247, 0.96)" : "rgba(26, 26, 30, 0.94)";
    ctx.font = `500 ${fs}px Consolas, ui-monospace, SFMono-Regular, Menlo, Monaco, monospace`;
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    let tyText = pad;
    for (const ln of lines) {
      ctx.fillText(ln, pad, tyText);
      tyText += lh;
    }
    ctx.restore();
  };

  /** Сетка «клетки» внутри плашки */
  const drawCellCage = (b, dark) => {
    const rr = slabCornerRadius(b);
    const pad = Math.max(6, Math.round(Math.min(b.w, b.h) * 0.12));
    ctx.save();
    pathRoundRect(0, 0, b.w, b.h, rr);
    ctx.clip();
    ctx.strokeStyle = dark ? "rgba(200, 202, 212, 0.38)" : "rgba(70, 72, 82, 0.45)";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 4]);
    ctx.strokeRect(pad + 0.5, pad + 0.5, b.w - pad * 2, b.h - pad * 2);
    ctx.setLineDash([]);
    ctx.strokeStyle = dark ? "rgba(170, 172, 184, 0.28)" : "rgba(90, 92, 102, 0.38)";
    const mx = b.w * 0.5;
    const my = b.h * 0.5;
    ctx.beginPath();
    ctx.moveTo(mx, pad);
    ctx.lineTo(mx, b.h - pad);
    ctx.moveTo(pad, my);
    ctx.lineTo(b.w - pad, my);
    ctx.stroke();
    ctx.restore();
  };

  const drawSlabBlock = (b, dark) => {
    ctx.strokeStyle = dark ? SLAB_STROKE.dark : SLAB_STROKE.light;
    ctx.lineWidth = b.isCell ? 1.2 : 1;
    if (!Number.isFinite(b.angle)) b.angle = 0;
    withSlabLocalDraw(b, () => {
      drawSlabFill(b, dark);
      drawSlabStroke(b);
      if (b.isCell) {
        drawCellCage(b, dark);
      } else {
        drawSlabText(b, dark);
        drawSlabBottomLine(b, dark);
        drawSlabIndex(b, dark);
      }
    });
  };

  const step = ts => {
    if (!inited || w < 2 || h < 2) {
      requestAnimationFrame(step);
      return;
    }

    if (!lastTs) lastTs = ts;
    const dt = Math.min(0.05, (ts - lastTs) / 1000) || 1 / 60;
    lastTs = ts;
    mouthPhase += dt;

    if (pacSectionVisible && matterEngine && typeof Matter !== "undefined") {
      Matter.Engine.update(matterEngine, dt * 1000);
      clampBlockVelocities();
    }
    syncBlocksFromMatter();

    const pacRects = getPacCollisionRects();

    if (cursorIn) {
      tx = clamp(tx, MARGIN + HIT_R, w - MARGIN - HIT_R);
      ty = clamp(ty, MARGIN + HIT_R, h - MARGIN - HIT_R);
      dx = tx;
      dy = ty;
    } else {
      let vx = dx - px;
      let vy = dy - py;
      const len = Math.hypot(vx, vy) || 1;
      vx /= len;
      vy /= len;
      dx += vx * DOT_FLEE_SPEED * dt;
      dy += vy * DOT_FLEE_SPEED * dt;
      dx = clamp(dx, MARGIN + HIT_R, w - MARGIN - HIT_R);
      dy = clamp(dy, MARGIN + HIT_R, h - MARGIN - HIT_R);
    }

    const resolvedPrey = resolveCircleAllRects(dx, dy, HIT_R, pacRects);
    dx = resolvedPrey.x;
    dy = resolvedPrey.y;

    const tcx = dx - px;
    const tcy = dy - py;
    const dist = Math.hypot(tcx, tcy) || 1;
    const stepPac = PAC_SPEED * dt;
    if (dist > stepPac) {
      px += (tcx / dist) * stepPac;
      py += (tcy / dist) * stepPac;
    } else {
      px = dx;
      py = dy;
    }

    const resolvedPac = resolveCircleAllRects(px, py, PAC_R, pacRects);
    px = resolvedPac.x;
    py = resolvedPac.y;

    if (Math.hypot(dx - px, dy - py) < CATCH) {
      score += 1;
      scoreEl.textContent = String(score);
      resetPacCenter();
      const again = resolveCircleAllRects(px, py, PAC_R, getPacCollisionRects());
      px = again.x;
      py = again.y;
    }

    ctx.clearRect(0, 0, w, h);

    const dark = document.body.getAttribute("data-theme") === "dark";
    for (const b of blocks) {
      if (b.isCell) continue;
      drawSlabBlock(b, dark);
    }

    const gapMin = 0.055;
    const gapMax = 0.34;
    const chew = 0.5 + 0.5 * Math.sin(mouthPhase * Math.PI * 2 * 3.2);
    const gapOpen = gapMin + (gapMax - gapMin) * chew;

    rasterPacFrame(gapOpen);
    const ang = Math.atan2(dy - py, dx - px);
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(ang);
    const drawSize = PAC_R * 2.15;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(pacOff, 0, 0, PAC_PIX, PAC_PIX, -drawSize / 2, -drawSize / 2, drawSize, drawSize);
    ctx.restore();

    for (const b of blocks) {
      if (!b.isCell) continue;
      drawSlabBlock(b, dark);
    }

    requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
})();
