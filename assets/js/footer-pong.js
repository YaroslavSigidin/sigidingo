/**
 * Pixel retro Pong in the site footer: paddles on the sides, ball bounces off paddles and text lines.
 */
(() => {
  const footer = document.getElementById("footerPong");
  const canvas = document.getElementById("footerPongCanvas");
  const scoreEl = document.getElementById("footerPongScore");
  if (!footer || !canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const PADDLE_W = 6;
  const BALL = 6;
  const PADDING_X = 10;
  const SPEED = 200;
  const MAX_SPEED = 340;

  let paddleH = 52;
  let obstacles = [];
  let w = 0;
  let h = 0;
  let bgRgb = { r: 7, g: 7, b: 7 };
  let gridColor = "rgba(255,255,255,0.06)";

  let scoreLeft = 0;
  let scoreRight = 0;

  const ball = {
    x: 0,
    y: 0,
    vx: SPEED * 0.85,
    vy: SPEED * 0.45,
    size: BALL
  };

  let leftY = 0;
  let rightY = 0;
  let lastTs = 0;
  let raf = 0;

  const setScoreText = () => {
    if (scoreEl) scoreEl.textContent = `${scoreLeft}:${scoreRight}`;
  };

  const syncThemeColors = () => {
    let el = footer;
    let bg = "rgb(7, 7, 7)";
    while (el && el !== document.documentElement) {
      const c = getComputedStyle(el).backgroundColor;
      if (c && c !== "rgba(0, 0, 0, 0)" && c !== "transparent") {
        bg = c;
        break;
      }
      el = el.parentElement;
    }
    const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (m) {
      bgRgb = { r: +m[1], g: +m[2], b: +m[3] };
    }
    const isDark = document.body.getAttribute("data-theme") === "dark";
    gridColor = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.07)";
  };

  /** Коллизии по контурам строк (p, a), а не по всей колонке — мяч ближе к тексту. */
  const updateObstacles = () => {
    const fr = footer.getBoundingClientRect();
    obstacles = [];
    footer.querySelectorAll(".footer-grid > div > p, .footer-grid > div > a").forEach(el => {
      const r = el.getBoundingClientRect();
      const left = r.left - fr.left;
      const top = r.top - fr.top;
      const width = r.width;
      const height = r.height;
      if (width < 2 || height < 2) return;
      obstacles.push({ left, top, right: left + width, bottom: top + height, width, height });
    });
  };

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  const resetBall = () => {
    ball.x = w / 2 - ball.size / 2;
    ball.y = h / 2 - ball.size / 2;
    const dir = Math.random() > 0.5 ? 1 : -1;
    ball.vx = dir * SPEED * (0.75 + Math.random() * 0.25);
    ball.vy = (Math.random() * 2 - 1) * SPEED * 0.55;
  };

  const resize = () => {
    const r = footer.getBoundingClientRect();
    w = Math.max(1, Math.floor(r.width));
    h = Math.max(1, Math.floor(r.height));
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    paddleH = Math.round(clamp(h * 0.13, 40, 76));
    syncThemeColors();
    updateObstacles();
    leftY = (h - paddleH) / 2;
    rightY = leftY;
    ball.x = clamp(ball.x, 0, w - ball.size);
    ball.y = clamp(ball.y, 0, h - ball.size);
    setScoreText();
  };

  const intersects = (bx, by, bw, bh, o) =>
    bx < o.right && bx + bw > o.left && by < o.bottom && by + bh > o.top;

  const resolveRect = (b, o, restitution = 1) => {
    if (!intersects(b.x, b.y, b.size, b.size, o)) return false;

    const overlapX = Math.min(b.x + b.size - o.left, o.right - b.x);
    const overlapY = Math.min(b.y + b.size - o.top, o.bottom - b.y);
    if (overlapX <= 0 || overlapY <= 0) return false;

    if (overlapX < overlapY) {
      const fromLeft = b.x + b.size / 2 < o.left + o.width / 2;
      if (fromLeft) {
        b.x = o.left - b.size;
        b.vx = -Math.abs(b.vx) * restitution;
      } else {
        b.x = o.right;
        b.vx = Math.abs(b.vx) * restitution;
      }
    } else {
      const fromTop = b.y + b.size / 2 < o.top + o.height / 2;
      if (fromTop) {
        b.y = o.top - b.size;
        b.vy = -Math.abs(b.vy) * restitution;
      } else {
        b.y = o.bottom;
        b.vy = Math.abs(b.vy) * restitution;
      }
    }
    return true;
  };

  const paddleLeft = () => ({
    left: PADDING_X,
    top: leftY,
    right: PADDING_X + PADDLE_W,
    bottom: leftY + paddleH,
    width: PADDLE_W,
    height: paddleH
  });

  const paddleRight = () => ({
    left: w - PADDING_X - PADDLE_W,
    top: rightY,
    right: w - PADDING_X,
    bottom: rightY + paddleH,
    width: PADDLE_W,
    height: paddleH
  });

  document.addEventListener(
    "mousemove",
    e => {
      const r = footer.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) return;
      const my = e.clientY - r.top - paddleH / 2;
      leftY = clamp(my, 0, h - paddleH);
    },
    { passive: true }
  );

  document.addEventListener(
    "touchmove",
    e => {
      const t = e.touches[0];
      if (!t) return;
      const r = footer.getBoundingClientRect();
      if (t.clientX < r.left || t.clientX > r.right || t.clientY < r.top || t.clientY > r.bottom) return;
      const my = t.clientY - r.top - paddleH / 2;
      leftY = clamp(my, 0, h - paddleH);
    },
    { passive: true }
  );

  const stepAi = dt => {
    const target = ball.y - paddleH / 2;
    const k = Math.min(15 * dt, 0.92);
    rightY += (target - rightY) * k;
    rightY = clamp(rightY, 0, h - paddleH);
  };

  let frameCount = 0;

  const drawGrid = () => {
    const step = 24;
    ctx.strokeStyle = gridColor;
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x <= w; x += step) {
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, h);
    }
    ctx.stroke();
  };

  const draw = () => {
    ctx.imageSmoothingEnabled = false;
    ctx.fillStyle = `rgb(${bgRgb.r},${bgRgb.g},${bgRgb.b})`;
    ctx.fillRect(0, 0, w, h);
    drawGrid();

    const pl = paddleLeft();
    const pr = paddleRight();
    ctx.fillStyle = "rgba(240,240,240,0.92)";
    ctx.fillRect(Math.round(pl.left), Math.round(pl.top), PADDLE_W, paddleH);
    ctx.fillRect(Math.round(pr.left), Math.round(pr.top), PADDLE_W, paddleH);

    ctx.fillStyle = "#f4f4f4";
    ctx.fillRect(Math.round(ball.x), Math.round(ball.y), ball.size, ball.size);
  };

  const tick = ts => {
    if (prefersReduced) return;
    const dt = Math.min(0.033, lastTs ? (ts - lastTs) / 1000 : 0.016);
    lastTs = ts;

    stepAi(dt);

    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt;

    if (ball.y <= 0) {
      ball.y = 0;
      ball.vy = Math.abs(ball.vy);
    } else if (ball.y + ball.size >= h) {
      ball.y = h - ball.size;
      ball.vy = -Math.abs(ball.vy);
    }

    const speed = Math.hypot(ball.vx, ball.vy);
    if (speed > MAX_SPEED) {
      const k = MAX_SPEED / speed;
      ball.vx *= k;
      ball.vy *= k;
    }

    for (let pass = 0; pass < 3; pass += 1) {
      resolveRect(ball, paddleLeft(), 1);
      resolveRect(ball, paddleRight(), 1);
      for (let i = 0; i < obstacles.length; i += 1) {
        resolveRect(ball, obstacles[i], 1);
      }
    }

    /* Вылет влево — пропустила левая ракетка, очко справа. Вылет вправо — очко слева. */
    if (ball.x + ball.size < -4) {
      scoreRight += 1;
      setScoreText();
      resetBall();
    } else if (ball.x > w + 4) {
      scoreLeft += 1;
      setScoreText();
      resetBall();
    }

    frameCount += 1;
    if (frameCount % 72 === 0) updateObstacles();

    draw();
    raf = requestAnimationFrame(tick);
  };

  const ro = new ResizeObserver(() => {
    resize();
    if (!prefersReduced && !raf) raf = requestAnimationFrame(tick);
  });
  ro.observe(footer);

  window.addEventListener("load", resize, { once: true });
  resize();
  resetBall();
  setScoreText();

  new MutationObserver(() => {
    syncThemeColors();
    if (prefersReduced) draw();
  }).observe(document.body, {
    attributes: true,
    attributeFilter: ["data-theme"]
  });

  if (prefersReduced) {
    draw();
  } else {
    raf = requestAnimationFrame(tick);
  }
})();
