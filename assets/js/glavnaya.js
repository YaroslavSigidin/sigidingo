(() => {
  const stage = document.getElementById("sphereStage");
  const cards = Array.from(document.querySelectorAll("[data-tilt-card]"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (stage && !reduceMotion) {
    const updateSphere = event => {
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const mx = (x - 0.5) * 2;
      const my = (y - 0.5) * 2;
      stage.style.setProperty("--mx", mx.toFixed(3));
      stage.style.setProperty("--my", my.toFixed(3));
    };

    const resetSphere = () => {
      stage.style.setProperty("--mx", "0");
      stage.style.setProperty("--my", "0");
    };

    stage.addEventListener("pointermove", updateSphere);
    stage.addEventListener("pointerleave", resetSphere);
  }

  if (!cards.length || reduceMotion) return;

  const onMove = (card, event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * 10;
    const ry = (x - 0.5) * 10;
    const tx = (x - 0.5) * 4;
    const ty = (y - 0.5) * 4;

    card.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
    card.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
    card.style.setProperty("--tx", `${tx.toFixed(2)}px`);
    card.style.setProperty("--ty", `${ty.toFixed(2)}px`);
    card.style.setProperty("--shine-x", `${(x * 100).toFixed(1)}%`);
    card.style.setProperty("--shine-y", `${(y * 100).toFixed(1)}%`);
  };

  const resetCard = card => {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--tx", "0px");
    card.style.setProperty("--ty", "0px");
    card.style.setProperty("--shine-x", "50%");
    card.style.setProperty("--shine-y", "50%");
  };

  cards.forEach(card => {
    card.addEventListener("pointermove", event => onMove(card, event));
    card.addEventListener("pointerleave", () => resetCard(card));
  });
})();
