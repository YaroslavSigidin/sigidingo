(() => {
  const canvas = document.getElementById("runnerCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const scoreNode = document.getElementById("scoreValue");
  const bestNode = document.getElementById("bestValue");
  const badgeNode = document.getElementById("badgeValue");
  const pauseBtn = document.getElementById("pauseBtn");
  const pauseBtnMobile = document.getElementById("pauseBtnMobile");
  const restartBtn = document.getElementById("restartBtn");
  const soundBtn = document.getElementById("soundBtn");
  const jumpBtn = document.getElementById("jumpBtn");

  const STORAGE_KEY = "sigidingo_runner_v1";
  const gravity = 0.65;
  const jumpVelocity = -12.5;
  const groundY = canvas.height - 72;
  const badgeSteps = [100, 300, 600];

  const state = {
    running: true,
    gameOver: false,
    muted: false,
    score: 0,
    best: 0,
    speed: 4.6,
    time: 0,
    flash: 0,
    badges: new Set(),
    lastSentScoreBucket: -1
  };

  const player = {
    x: 120,
    y: groundY,
    w: 34,
    h: 46,
    vy: 0,
    onGround: true,
    squash: 0
  };

  const obstacles = [];
  let obstacleTimer = 0;
  let rafId = null;
  let audioCtx = null;

  const now = () => (window.performance ? performance.now() : Date.now());

  function sendMetric(goal, params = {}) {
    if (typeof window.ym !== "function") return;
    try {
      window.ym(106779298, "reachGoal", goal, params);
    } catch (_) {
      // noop
    }
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      state.best = Number(parsed.best) || 0;
      state.muted = Boolean(parsed.muted);
      if (Array.isArray(parsed.badges)) {
        parsed.badges.forEach(v => state.badges.add(v));
      }
    } catch (_) {
      // noop
    }
  }

  function persistState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          best: state.best,
          muted: state.muted,
          badges: Array.from(state.badges)
        })
      );
    } catch (_) {
      // noop
    }
  }

  function updateHud() {
    scoreNode.textContent = String(Math.floor(state.score));
    bestNode.textContent = String(Math.floor(state.best));
    if (!state.badges.size) {
      badgeNode.textContent = "Ready";
      return;
    }
    const topBadge = Math.max(...Array.from(state.badges));
    badgeNode.textContent = `${topBadge}+`;
  }

  function ensureAudio() {
    if (audioCtx || state.muted) return;
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    audioCtx = new Ctx();
  }

  function beep(freq, duration = 0.08, type = "square", volume = 0.025) {
    if (state.muted) return;
    ensureAudio();
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = volume;
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const t = audioCtx.currentTime;
    gain.gain.setValueAtTime(volume, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.start(t);
    osc.stop(t + duration);
  }

  function onJump() {
    if (!state.running || state.gameOver) return;
    if (!player.onGround) return;
    player.vy = jumpVelocity;
    player.onGround = false;
    player.squash = 1;
    beep(720, 0.07, "triangle", 0.03);
  }

  function resetGame() {
    state.score = 0;
    state.speed = 4.6;
    state.gameOver = false;
    state.running = true;
    state.time = 0;
    state.flash = 0;
    state.lastSentScoreBucket = -1;

    player.y = groundY;
    player.vy = 0;
    player.onGround = true;
    player.squash = 0;

    obstacles.length = 0;
    obstacleTimer = 0;

    updateHud();
    sendMetric("game_restart", { source: "runner" });
  }

  function togglePause() {
    if (state.gameOver) return;
    state.running = !state.running;
    const text = state.running ? "Pause" : "Resume";
    pauseBtn.textContent = text;
    pauseBtnMobile.textContent = text;
    sendMetric(state.running ? "game_resume" : "game_pause", { source: "runner" });
  }

  function toggleSound() {
    state.muted = !state.muted;
    soundBtn.textContent = state.muted ? "Sound: Off" : "Sound: On";
    soundBtn.setAttribute("aria-pressed", String(!state.muted));
    persistState();
  }

  function spawnObstacle() {
    const width = 16 + Math.random() * 18;
    const height = 24 + Math.random() * 48;
    obstacles.push({
      x: canvas.width + 40,
      y: groundY + player.h - height,
      w: width,
      h: height,
      color: Math.random() > 0.5 ? "#42d3a6" : "#6bb7ff"
    });
  }

  function intersects(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  }

  function update(dt) {
    if (!state.running || state.gameOver) return;

    state.time += dt;
    state.score += dt * 15;
    state.speed = Math.min(12, 4.6 + state.score * 0.01);

    const scoreBucket = Math.floor(state.score / 100);
    if (scoreBucket !== state.lastSentScoreBucket && scoreBucket > 0) {
      state.lastSentScoreBucket = scoreBucket;
      sendMetric("game_progress", { bucket: scoreBucket * 100 });
    }

    badgeSteps.forEach(step => {
      if (state.score >= step && !state.badges.has(step)) {
        state.badges.add(step);
        state.flash = 1;
        beep(980, 0.09, "sine", 0.03);
        sendMetric("badge_earned", { badge: step });
        persistState();
      }
    });

    player.vy += gravity;
    player.y += player.vy;
    player.squash = Math.max(0, player.squash - dt * 3.8);

    if (player.y >= groundY) {
      player.y = groundY;
      player.vy = 0;
      player.onGround = true;
      player.squash = 0;
    }

    obstacleTimer -= dt;
    if (obstacleTimer <= 0) {
      spawnObstacle();
      obstacleTimer = Math.max(0.58, 1.5 - state.speed * 0.08) + Math.random() * 0.55;
    }

    for (let i = obstacles.length - 1; i >= 0; i -= 1) {
      const obs = obstacles[i];
      obs.x -= state.speed;
      if (obs.x + obs.w < -20) {
        obstacles.splice(i, 1);
        continue;
      }
      const hitbox = {
        x: player.x + 3,
        y: player.y + 2,
        w: player.w - 6,
        h: player.h - 2
      };
      if (intersects(hitbox, obs)) {
        state.gameOver = true;
        state.running = false;
        pauseBtn.textContent = "Pause";
        pauseBtnMobile.textContent = "Pause";
        state.best = Math.max(state.best, Math.floor(state.score));
        persistState();
        beep(210, 0.17, "sawtooth", 0.04);
        sendMetric("game_over", { score: Math.floor(state.score), best: state.best });
      }
    }

    state.flash = Math.max(0, state.flash - dt * 1.4);
    updateHud();
  }

  function drawBackground() {
    const grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
    grd.addColorStop(0, "#131825");
    grd.addColorStop(1, "#0d1018");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 50) {
      const drift = (state.time * state.speed * 3) % 50;
      ctx.beginPath();
      ctx.moveTo(x - drift, groundY + player.h + 4);
      ctx.lineTo(x + 20 - drift, groundY + player.h + 4);
      ctx.stroke();
    }

    ctx.fillStyle = "rgba(66, 211, 166, 0.15)";
    ctx.fillRect(0, groundY + player.h, canvas.width, canvas.height - groundY - player.h);
  }

  function drawPlayer() {
    const squashX = 1 + player.squash * 0.2;
    const squashY = 1 - player.squash * 0.12;
    const w = player.w * squashX;
    const h = player.h * squashY;

    ctx.save();
    ctx.translate(player.x + player.w / 2, player.y + player.h / 2);
    ctx.fillStyle = "#ffffff";
    ctx.shadowColor = "rgba(66, 211, 166, 0.55)";
    ctx.shadowBlur = 20;
    roundRect(ctx, -w / 2, -h / 2, w, h, 8);
    ctx.fill();

    ctx.fillStyle = "#0a0d13";
    ctx.fillRect(-4, -10, 8, 8);
    ctx.restore();
  }

  function drawObstacles() {
    obstacles.forEach(obs => {
      ctx.fillStyle = obs.color;
      ctx.shadowBlur = 14;
      ctx.shadowColor = "rgba(107, 183, 255, 0.45)";
      roundRect(ctx, obs.x, obs.y, obs.w, obs.h, 5);
      ctx.fill();
    });
    ctx.shadowBlur = 0;
  }

  function drawOverlay() {
    if (state.flash > 0) {
      ctx.fillStyle = `rgba(66, 211, 166, ${0.25 * state.flash})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    if (!state.running && !state.gameOver) {
      drawCenterText("PAUSED", "Нажми P или кнопку Resume", "#f4f4f4");
      return;
    }

    if (state.gameOver) {
      drawCenterText("GAME OVER", "R или Restart для новой попытки", "#ff8f8f");
    }
  }

  function drawCenterText(title, subtitle, color) {
    ctx.fillStyle = "rgba(4, 5, 9, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = color;
    ctx.font = '700 40px "Sora", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText(title, canvas.width / 2, canvas.height / 2 - 12);

    ctx.fillStyle = "#d4d4d4";
    ctx.font = '500 16px "Sora", sans-serif';
    ctx.fillText(subtitle, canvas.width / 2, canvas.height / 2 + 26);
  }

  function roundRect(context, x, y, w, h, r) {
    const radius = Math.min(r, w / 2, h / 2);
    context.beginPath();
    context.moveTo(x + radius, y);
    context.arcTo(x + w, y, x + w, y + h, radius);
    context.arcTo(x + w, y + h, x, y + h, radius);
    context.arcTo(x, y + h, x, y, radius);
    context.arcTo(x, y, x + w, y, radius);
    context.closePath();
  }

  let prev = now();

  function frame() {
    const t = now();
    const dt = Math.min(0.033, (t - prev) / 1000);
    prev = t;

    update(dt);
    drawBackground();
    drawObstacles();
    drawPlayer();
    drawOverlay();

    rafId = requestAnimationFrame(frame);
  }

  function bindEvents() {
    window.addEventListener("keydown", e => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        onJump();
      }
      if (e.key.toLowerCase() === "p") {
        e.preventDefault();
        togglePause();
      }
      if (e.key.toLowerCase() === "r") {
        e.preventDefault();
        resetGame();
      }
    });

    canvas.addEventListener("pointerdown", onJump, { passive: true });
    jumpBtn?.addEventListener("click", onJump);
    pauseBtn?.addEventListener("click", togglePause);
    pauseBtnMobile?.addEventListener("click", togglePause);
    restartBtn?.addEventListener("click", resetGame);
    soundBtn?.addEventListener("click", toggleSound);

    document.addEventListener(
      "visibilitychange",
      () => {
        if (document.hidden && state.running && !state.gameOver) {
          togglePause();
        }
      },
      false
    );
  }

  function start() {
    loadState();
    soundBtn.textContent = state.muted ? "Sound: Off" : "Sound: On";
    soundBtn.setAttribute("aria-pressed", String(!state.muted));
    updateHud();
    bindEvents();
    sendMetric("game_start", { source: "runner" });
    cancelAnimationFrame(rafId);
    prev = now();
    frame();
  }

  start();
})();
