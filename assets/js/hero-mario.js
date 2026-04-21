/**
 * Белый квадрат с глазом: бегает по нижней кромке канваса (пол блока), прыжки с нормальной физикой.
 */
(() => {
  const floor = document.querySelector(".portfolio-hero-floor");
  const canvas = document.querySelector(".portfolio-hero-mario-canvas");
  if (!floor || !canvas) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let wCss = 0;
  let hCss = 112;

  const SPRITE_CSS = 22;
  let posX = 0;
  /** Высота прыжка в пикселях канваса (device px): 0 = стоит на «полу», >0 — выше пола */
  let jumpY = 0;
  let velY = 0;
  let targetX = 0;
  let lastPointerY = 0;
  let lastClientX = 0;
  let lastClientY = 0;
  let lastPointerAt = 0;
  let lastJumpAt = 0;
  let runPhase = 0;
  let runAcc = 0;
  let facing = 1;
  let lastT = 0;
  let hopTimer = 0;
  let patrolPhase = 0;

  const spriteSize = () => Math.max(8, Math.floor(SPRITE_CSS * dpr));

  /** Нижняя кромка спрайта (ноги) в координатах канваса — по верхней границе полоски «пола» */
  const feetBottomY = () => canvas.height - 2 * dpr;

  const clampTargetX = mx => {
    const s = spriteSize();
    return Math.max(0, Math.min(canvas.width - s, mx - s * 0.5));
  };

  const clientToCanvasX = clientX => {
    const rect = canvas.getBoundingClientRect();
    if (rect.width <= 0) return targetX;
    const t = (clientX - rect.left) / rect.width;
    return t * canvas.width;
  };

  const clientToCanvasY = clientY => {
    const rect = canvas.getBoundingClientRect();
    if (rect.height <= 0) return 0;
    return (clientY - rect.top) * (canvas.height / rect.height);
  };

  const onGround = () => jumpY <= 0.5 * dpr && velY <= 120 * dpr;

  const tryJump = (strength = 1) => {
    if (!onGround()) return;
    const now = performance.now();
    if (now - lastJumpAt < 160) return;
    lastJumpAt = now;
    /* velY > 0 — движение вверх (jumpY растёт) */
    velY = (720 + 260 * Math.min(1.2, strength)) * dpr;
  };

  const onPointerMove = e => {
    if (reduced) return;
    lastClientX = e.clientX;
    lastClientY = e.clientY;
    lastPointerAt = performance.now();
    const cx = clientToCanvasX(e.clientX);
    const cy = clientToCanvasY(e.clientY);
    targetX = clampTargetX(cx);
    facing = cx >= posX + spriteSize() * 0.5 ? 1 : -1;
    if (lastPointerY > 0 && cy < lastPointerY - 6 * dpr) {
      tryJump(0.45 + Math.min(0.65, (lastPointerY - cy) / (45 * dpr)));
    }
    lastPointerY = cy;
  };

  const onPointerDown = e => {
    if (reduced) return;
    lastClientX = e.clientX;
    lastClientY = e.clientY;
    lastPointerAt = performance.now();
    tryJump(1.05);
  };

  const resize = () => {
    wCss = floor.clientWidth || canvas.parentElement.clientWidth || 300;
    canvas.style.width = `${wCss}px`;
    canvas.style.height = `${hCss}px`;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(wCss * dpr);
    canvas.height = Math.floor(hCss * dpr);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.imageSmoothingEnabled = false;
    targetX = clampTargetX(canvas.width * 0.35);
    posX = targetX;
    jumpY = 0;
    velY = 0;
  };

  const drawSquare = (x, y, s, squash) => {
    const sy = s * squash;
    const offY = s - sy;
    ctx.fillStyle = "#f4f4f4";
    ctx.fillRect(x, y + offY, s, sy);
    const ex = facing > 0 ? s * 0.55 : s * 0.25;
    const eye = Math.max(1, Math.floor(2 * dpr));
    ctx.fillStyle = "#0a0a0a";
    ctx.fillRect(x + ex, y + offY + s * 0.22, eye, eye);
  };

  const render = t => {
    const rawDt = lastT ? (t - lastT) / 1000 : 0;
    lastT = t;
    const dt = Math.min(rawDt, 0.05);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const floorY0 = canvas.height - 2 * dpr;
    ctx.fillStyle = "rgba(255,255,255,0.06)";
    ctx.fillRect(0, floorY0, canvas.width, 2 * dpr);
    ctx.fillStyle = "rgba(255,255,255,0.03)";
    for (let gx = 0; gx < canvas.width; gx += 14 * dpr) {
      ctx.fillRect(gx, 0, 1 * dpr, canvas.height);
    }

    const s = spriteSize();
    const bottomY = feetBottomY();
    const gravity = 5200 * dpr;
    const maxFall = 5200 * dpr;

    const idleMs = t - lastPointerAt;
    const chasing = idleMs < 2400;

    if (!reduced) {
      if (chasing) {
        targetX = clampTargetX(clientToCanvasX(lastClientX));
        const cx = clientToCanvasX(lastClientX);
        facing = cx >= posX + s * 0.5 ? 1 : -1;
      } else {
        patrolPhase += dt * 1.15;
        const margin = s * 2.2;
        const amp = Math.max(0, canvas.width * 0.5 - margin);
        const patrolX =
          canvas.width * 0.5 + Math.sin(patrolPhase * 1.9) * amp + Math.sin(patrolPhase * 0.71) * amp * 0.12;
        targetX = clampTargetX(patrolX);
        facing = targetX >= posX + s * 0.5 ? 1 : -1;
      }

      const dx = targetX - posX;
      const dist = Math.abs(dx);
      const baseSpeed = 320 * dpr;
      const boost = chasing ? Math.min(240 * dpr, dist * 1.2) : Math.min(170 * dpr, dist * 0.85);
      const speed = baseSpeed + boost;
      posX += Math.sign(dx) * Math.min(dist, speed * dt);

      runAcc += dt;
      if (dist > 1.2 * dpr) {
        if (runAcc > 0.065) {
          runAcc = 0;
          runPhase = (runPhase + 1) % 2;
        }
      } else if (runAcc > 0.09) {
        runAcc = 0;
        runPhase = (runPhase + 1) % 2;
      }

      const vh = Math.max(1, window.innerHeight);
      const cursorTopness = 1 - lastClientY / vh;

      hopTimer += dt;
      const hopInterval = chasing ? 0.38 + (1 - cursorTopness) * 0.35 : 0.52;
      if (hopTimer >= hopInterval) {
        hopTimer = 0;
        const hop =
          chasing ? 0.18 + cursorTopness * 0.75 + Math.sin(t * 0.009) * 0.12 : 0.28 + Math.sin(t * 0.011) * 0.15;
        tryJump(Math.min(1.15, hop));
      }

      if (chasing && cursorTopness > 0.35 && Math.random() < 0.022 * cursorTopness) {
        tryJump(0.25 + cursorTopness * 0.45);
      }

      velY -= gravity * dt;
      velY = Math.max(velY, -maxFall);
      jumpY += velY * dt;

      const maxJump = Math.max(0, bottomY - s);
      if (jumpY > maxJump) {
        jumpY = maxJump;
        velY = Math.min(velY, 0);
      }

      if (jumpY <= 0) {
        jumpY = 0;
        velY = 0;
      }
    } else {
      posX = clampTargetX(canvas.width * 0.5);
      jumpY = 0;
      velY = 0;
    }

    const inAir = jumpY > 1.5 * dpr;
    const landSquash = inAir
      ? 0.94 + Math.min(0.05, Math.abs(velY) / (4500 * dpr))
      : runPhase === 1 && Math.abs(targetX - posX) > 0.8 * dpr
        ? 0.92
        : 1;

    const drawY = bottomY - s - jumpY;

    ctx.save();
    ctx.translate(posX + (facing < 0 ? s : 0), drawY);
    ctx.scale(facing, 1);
    drawSquare(0, 0, s, landSquash);
    ctx.restore();

    if (!reduced) {
      requestAnimationFrame(render);
    }
  };

  resize();
  window.addEventListener(
    "resize",
    () => {
      resize();
      if (reduced) {
        requestAnimationFrame(render);
      }
    },
    { passive: true }
  );
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  canvas.addEventListener("pointerdown", onPointerDown, { passive: true });

  lastPointerAt = performance.now();
  lastClientX = window.innerWidth * 0.5;
  lastClientY = window.innerHeight * 0.35;

  requestAnimationFrame(render);
})();
