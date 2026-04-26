(function () {
  const disk = document.getElementById("skillMapDisk");
  const nodesEl = document.getElementById("skillMapNodes");
  const svg = document.getElementById("skillMapSvg");
  const mobileTags = document.getElementById("skillMapMobileTags");
  if (!disk || !nodesEl || !svg) return;

  // 2026: актуальные навыки для UX/UI + vibe-coding (AI‑assisted)
  const SKILL_LABELS = [
    // Core craft
    "Figma",
    "Auto‑layout",
    "Design system",
    "UI kit",
    "Design tokens",
    "Component library",
    "Visual hierarchy",
    "Grid & spacing",
    "Typography",
    "Micro‑interactions",
    "Motion",
    "Accessibility (WCAG)",
    "Responsive design",
    "Mobile UX",
    "Forms & validation",
    "Empty/error states",

    // UX & product thinking
    "User research",
    "JTBD",
    "Personas",
    "CJM / journey map",
    "User flows",
    "Information architecture",
    "Content design",
    "UX writing",
    "Heuristic review",
    "Usability testing",

    // Delivery & teamwork
    "Handoff & specs",
    "Dev Mode",
    "Design QA",
    "Stakeholders",
    "Workshops",
    "Documentation",

    // Measurement
    "Product metrics",
    "Analytics",
    "Event tracking",
    "A/B testing",
    "Experiment design",
    "Funnel analysis",

    // Modern product reality (AI as tool, not цель)
    "AI‑assisted work",
    "Prompting",
  ];

  function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
  }

  function rand01(seed) {
    // deterministic pseudo‑random in [0..1)
    const s = Math.sin(seed * 999.123 + 0.12345) * 43758.5453123;
    return s - Math.floor(s);
  }

  function generateBasePositions(n) {
    // Rectangle layout with minimum distance (so skills are further apart).
    // Keep padding so tooltips don’t clip.
    const padX = 4;
    const padY = 12;
    const minX = padX;
    const maxX = 100 - padX;
    const minY = padY;
    const maxY = 100 - padY;
    // Wide canvas: x-distance is more "expensive" in pixels.
    const aspectX = 2.1;
    const minDist = 11.8;

    const out = [];
    const maxAttempts = 6000;
    let attempts = 0;

    while (out.length < n && attempts < maxAttempts) {
      const i = out.length;
      const ax = rand01(attempts * 1.7 + i * 13.1);
      const ay = rand01(attempts * 2.3 + i * 17.9);
      const x = minX + ax * (maxX - minX);
      const y = minY + ay * (maxY - minY);

      let ok = true;
      for (let k = 0; k < out.length; k += 1) {
        const dx = (x - out[k].x) * aspectX;
        const dy = y - out[k].y;
        if (dx * dx + dy * dy < minDist * minDist) {
          ok = false;
          break;
        }
      }
      if (ok) out.push({ x, y });
      attempts += 1;
    }

    // Fallback: if we couldn't place all points, relax slightly and fill.
    while (out.length < n) {
      const i = out.length;
      const x = minX + rand01(i * 21.7) * (maxX - minX);
      const y = minY + rand01(i * 29.3) * (maxY - minY);
      out.push({ x, y });
    }

    return out;
  }

  const BASE_POS = generateBasePositions(SKILL_LABELS.length);
  const SKILLS = SKILL_LABELS.map((label, i) => ({ label, x: BASE_POS[i].x, y: BASE_POS[i].y }));

  if (mobileTags) {
    mobileTags.innerHTML = SKILL_LABELS.map(label => `<span class="skill-map-mobile-tag">${label}</span>`).join("");
  }

  // Connect all skills with one very thin line (single path).
  // Order is computed from CURRENT positions so the chain stays coherent after dragging.
  const INDICES = Array.from({ length: SKILLS.length }, (_, i) => i);
  const getOrder = () =>
    INDICES.slice().sort((a, b) => {
      const ax = positions[a].x;
      const bx = positions[b].x;
      if (ax !== bx) return ax - bx;
      return positions[a].y - positions[b].y;
    });

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const positions = SKILLS.map((s) => ({ x: s.x, y: s.y }));
  const bounds = { minX: 2, maxX: 98, minY: 4, maxY: 96 };
  const buttons = [];

  SKILLS.forEach((s, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "skill-map-node";
    btn.setAttribute("aria-label", s.label);
    btn.dataset.label = s.label;
    btn.style.left = `${s.x}%`;
    btn.style.top = `${s.y}%`;
    const tip = document.createElement("span");
    tip.className = "skill-map-tooltip";
    tip.textContent = s.label;
    btn.appendChild(tip);
    nodesEl.appendChild(btn);
    buttons.push(btn);
  });

  // No lines between nodes
  svg.innerHTML = "";

  function applyPositions() {
    positions.forEach((p, i) => {
      buttons[i].style.left = `${p.x}%`;
      buttons[i].style.top = `${p.y}%`;
    });
  }

  if (prefersReduced) {
    applyPositions();
    // Even with reduced motion, keep drag enabled.
  }

  // --- Drag & drop: nodes are static, user can move and overlap them ---
  let drag = null;
  let zCounter = 3;

  function clientToPct(clientX, clientY) {
    const rect = disk.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    return { x, y };
  }

  function setPos(i, x, y) {
    positions[i].x = clamp(x, bounds.minX, bounds.maxX);
    positions[i].y = clamp(y, bounds.minY, bounds.maxY);
  }

  function onPointerMove(e) {
    if (!drag) return;
    if (e.pointerId !== drag.pointerId) return;
    const pt = clientToPct(e.clientX, e.clientY);
    if (!pt) return;
    setPos(drag.idx, pt.x - drag.offX, pt.y - drag.offY);
    applyPositions();
  }

  function endDrag(e) {
    if (!drag) return;
    if (e.pointerId !== drag.pointerId) return;
    try {
      drag.el.releasePointerCapture?.(drag.pointerId);
    } catch (_e) {}
    drag.el.classList.remove("is-dragging");
    drag = null;
  }

  buttons.forEach((btn, idx) => {
    btn.addEventListener("pointerdown", (e) => {
      if (e.button != null && e.button !== 0) return;
      const pt = clientToPct(e.clientX, e.clientY);
      if (!pt) return;
      e.preventDefault();
      zCounter += 1;
      btn.style.zIndex = String(zCounter);
      btn.classList.add("is-dragging");
      drag = {
        idx,
        el: btn,
        pointerId: e.pointerId,
        offX: pt.x - positions[idx].x,
        offY: pt.y - positions[idx].y,
      };
      try {
        btn.setPointerCapture?.(e.pointerId);
      } catch (_e) {}
    });
    btn.addEventListener("pointermove", onPointerMove);
    btn.addEventListener("pointerup", endDrag);
    btn.addEventListener("pointercancel", endDrag);
  });

  // initial paint
  applyPositions();
})();
