(() => {
  const stage = document.getElementById("visualStage");
  if (!stage) return;

  const update = event => {
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const mx = (x - 0.5) * 2;
    const my = (y - 0.5) * 2;
    stage.style.setProperty("--mx", mx.toFixed(3));
    stage.style.setProperty("--my", my.toFixed(3));
    stage.style.setProperty("--cx", `${(x * 100).toFixed(2)}%`);
    stage.style.setProperty("--cy", `${(y * 100).toFixed(2)}%`);
  };

  const reset = () => {
    stage.style.setProperty("--mx", "0");
    stage.style.setProperty("--my", "0");
    stage.style.setProperty("--cx", "50%");
    stage.style.setProperty("--cy", "50%");
  };

  stage.addEventListener("pointermove", update);
  stage.addEventListener("pointerleave", reset);
})();
