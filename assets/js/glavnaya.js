(() => {
  const stage = document.getElementById("visualStage");
  if (!stage) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = null;

  const render = () => {
    currentX += (targetX - currentX) * 0.14;
    currentY += (targetY - currentY) * 0.14;
    stage.style.setProperty("--mx", currentX.toFixed(3));
    stage.style.setProperty("--my", currentY.toFixed(3));
    stage.style.setProperty("--cx", `${((currentX / 2 + 0.5) * 100).toFixed(2)}%`);
    stage.style.setProperty("--cy", `${((currentY / 2 + 0.5) * 100).toFixed(2)}%`);
    rafId = requestAnimationFrame(render);
  };

  const updateTarget = event => {
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    targetX = (x - 0.5) * 2;
    targetY = (y - 0.5) * 2;
  };

  const reset = () => {
    targetX = 0;
    targetY = 0;
  };

  stage.addEventListener("pointermove", updateTarget);
  stage.addEventListener("pointerleave", reset);

  if (!rafId) {
    rafId = requestAnimationFrame(render);
  }
})();
