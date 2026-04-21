(() => {
  const stage = document.getElementById("consultDvdStage");
  const logo = document.getElementById("consultDvdLogo");
  const form = document.getElementById("consultDvdForm");
  if (!stage || !logo) return;

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /** Классика DVD: равномерная скорость, отражение от границ, смена «цвета» при ударе. */
  const initBounce = () => {
    if (reduceMotion) {
      logo.style.left = "50%";
      logo.style.top = "50%";
      logo.style.transform = "translate(-50%, -50%)";
      return;
    }

    const speed = 0.72;
    let dx = speed * (Math.random() > 0.5 ? 1 : -1) * 0.92;
    let dy = speed * (Math.random() > 0.5 ? 1 : -1) * 0.78;
    const norm = Math.hypot(dx, dy) || 1;
    dx = (dx / norm) * speed;
    dy = (dy / norm) * speed;

    let x = 8 + Math.random() * 40;
    let y = 8 + Math.random() * 40;
    let hue = 0;

    const applyHue = () => {
      hue = (hue + 37 + Math.floor(Math.random() * 50)) % 360;
      logo.style.filter = `sepia(1) saturate(3.2) hue-rotate(${hue}deg) brightness(1.08)`;
    };

    const tick = () => {
      if (document.visibilityState === "hidden") {
        requestAnimationFrame(tick);
        return;
      }

      const sw = stage.clientWidth;
      const sh = stage.clientHeight;
      const lw = logo.offsetWidth;
      const lh = logo.offsetHeight;
      const maxX = Math.max(0, sw - lw);
      const maxY = Math.max(0, sh - lh);

      x += dx;
      y += dy;

      let bounced = false;
      if (x <= 0) {
        x = 0;
        dx = Math.abs(dx);
        bounced = true;
      } else if (x >= maxX) {
        x = maxX;
        dx = -Math.abs(dx);
        bounced = true;
      }
      if (y <= 0) {
        y = 0;
        dy = Math.abs(dy);
        bounced = true;
      } else if (y >= maxY) {
        y = maxY;
        dy = -Math.abs(dy);
        bounced = true;
      }

      if (bounced) applyHue();

      logo.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(tick);
    };

    const ro = new ResizeObserver(() => {
      const sw = stage.clientWidth;
      const sh = stage.clientHeight;
      const lw = logo.offsetWidth;
      const lh = logo.offsetHeight;
      const maxX = Math.max(0, sw - lw);
      const maxY = Math.max(0, sh - lh);
      x = Math.min(Math.max(0, x), maxX);
      y = Math.min(Math.max(0, y), maxY);
    });
    ro.observe(stage);

    applyHue();
    logo.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(tick);
  };

  if (logo.querySelector("img")) {
    const img = logo.querySelector("img");
    if (img.complete) initBounce();
    else img.addEventListener("load", initBounce, { once: true });
  } else {
    initBounce();
  }

  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const phone = String(fd.get("phone") || "").trim();
      let username = String(fd.get("username") || "").trim();
      if (username && !username.startsWith("@")) username = `@${username.replace(/^@+/, "")}`;
      const lines = [
        "Заявка: бесплатная консультация (главная)",
        `Имя: ${name || "—"}`,
        `Телефон: ${phone || "—"}`,
        `Telegram: ${username || "—"}`
      ];
      const url = `https://t.me/sigidingo?text=${encodeURIComponent(lines.join("\n"))}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
})();
