/**
 * Hero background: WebGL2 Bayer dither. Режим smoke — как раньше; дуга горизонта — эллипсоид (не круг).
 */
(function initHeroDitherBg() {
  const declarePI = `
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`;

  const proceduralHash11 = `
  float hash11(float p) {
    p = fract(p * 0.3183099) + 0.1;
    p *= p + 19.19;
    return fract(p * p);
  }
`;

  const proceduralHash21 = `
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`;

  const simplexNoise = `
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;

  const vertexShaderSource = `#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

void main() {
  gl_Position = a_position;
}
`;

  const fragmentShaderSource = `#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec4 u_colorBack;
uniform vec4 u_colorFront;
uniform float u_shape;
uniform float u_type;
uniform float u_pxSize;
uniform vec2 u_mouse;
uniform vec2 u_mouseVel;

out vec4 fragColor;

${simplexNoise}
${declarePI}
${proceduralHash11}
${proceduralHash21}

float getSimplexNoise(vec2 uv, float t) {
  float noise = .5 * snoise(uv - vec2(0., .3 * t));
  noise += .5 * snoise(2. * uv + vec2(0., .32 * t));
  return noise;
}

const int bayer2x2[4] = int[4](0, 2, 3, 1);
const int bayer4x4[16] = int[16](
  0,  8,  2, 10,
 12,  4, 14,  6,
  3, 11,  1,  9,
 15,  7, 13,  5
);

const int bayer8x8[64] = int[64](
   0, 32,  8, 40,  2, 34, 10, 42,
  48, 16, 56, 24, 50, 18, 58, 26,
  12, 44,  4, 36, 14, 46,  6, 38,
  60, 28, 52, 20, 62, 30, 54, 22,
   3, 35, 11, 43,  1, 33,  9, 41,
  51, 19, 59, 27, 49, 17, 57, 25,
  15, 47,  7, 39, 13, 45,  5, 37,
  63, 31, 55, 23, 61, 29, 53, 21
);

float getBayerValue(vec2 uv, int size) {
  ivec2 pos = ivec2(mod(uv, float(size)));
  int index = pos.y * size + pos.x;

  if (size == 2) {
    return float(bayer2x2[index]) / 4.0;
  } else if (size == 4) {
    return float(bayer4x4[index]) / 16.0;
  } else if (size == 8) {
    return float(bayer8x8[index]) / 64.0;
  }
  return 0.0;
}

void main() {
  float t = .5 * u_time;
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  uv -= .5;

  float pxSize = u_pxSize;
  vec2 pxSizeUv = gl_FragCoord.xy;
  pxSizeUv -= .5 * u_resolution;
  pxSizeUv /= pxSize;
  vec2 pixelizedUv = floor(pxSizeUv) * pxSize / u_resolution.xy;
  pixelizedUv += .5;
  pixelizedUv -= .5;

  vec2 shape_uv = pixelizedUv;
  vec2 dithering_uv = pxSizeUv;
  vec2 ditheringNoise_uv = uv * u_resolution;

  float shape = 0.;
  if (u_shape < 1.5) {
    shape_uv *= .001;
    shape = 0.5 + 0.5 * getSimplexNoise(shape_uv, t);
    shape = smoothstep(0.3, 0.9, shape);

  } else if (u_shape < 2.5) {
    shape_uv *= .003;
    for (float i = 1.0; i < 6.0; i++) {
      shape_uv.x += 0.6 / i * cos(i * 2.5 * shape_uv.y + t);
      shape_uv.y += 0.6 / i * cos(i * 1.5 * shape_uv.x + t);
    }
    shape = .15 / abs(sin(t - shape_uv.y - shape_uv.x));
    shape = smoothstep(0.02, 1., shape);

  } else if (u_shape < 3.5) {
    shape_uv *= .05;
    float stripeIdx = floor(2. * shape_uv.x / TWO_PI);
    float rand = hash11(stripeIdx * 10.);
    rand = sign(rand - .5) * pow(.1 + abs(rand), .4);
    shape = sin(shape_uv.x) * cos(shape_uv.y - 5. * rand * t);
    shape = pow(abs(shape), 6.);

  } else if (u_shape < 4.5) {
    vec2 suv = shape_uv;
    vec2 p = shape_uv * 3.55;
    vec2 aspect = vec2(u_resolution.x / max(u_resolution.y, 1.0), 1.0);
    vec2 m = u_mouse * 3.85;
    float tm = t * 0.48;

    vec2 warp = vec2(
      snoise(p * 0.78 + vec2(tm * 0.32, -tm * 0.24)),
      snoise(p * 0.74 + vec2(-tm * 0.16, tm * 0.34))
    );
    vec2 q = p + warp * 1.42;
    q += u_mouse * vec2(0.55, -0.42);

    float n = 0.50 * snoise(q * 1.02 + vec2(sin(tm * 0.15), -tm * 0.52));
    n += 0.30 * snoise(q * 2.18 + vec2(tm * 0.2, tm * 0.14));
    n += 0.16 * snoise(q * 4.5 + vec2(-tm * 0.26, tm * 0.22));
    n += 0.08 * snoise(q * 8.8 + tm * 0.12);

    vec2 dm = (p * 0.27 - m) * aspect;
    float wisp = exp(-dot(dm, dm) * 1.75);
    n += wisp * 0.34 * sin(dot(q, vec2(1.15, 0.68)) * 5.8 - tm * 3.4);
    n += wisp * 0.14 * sin(dot(q, vec2(-0.9, 1.1)) * 7.2 + tm * 2.1);

    float vel = length(u_mouseVel);
    n += vel * wisp * 0.11;

    float bottomHaze = (1.0 - smoothstep(-0.5, 0.48, suv.y)) * 0.095;
    float drift = 0.04 * sin(suv.x * 4.2 + tm * 0.6) * (1.0 - smoothstep(-0.35, 0.5, suv.y));

    float smoke = 0.5 + 0.48 * n;
    smoke += bottomHaze + drift;
    smoke = pow(clamp(smoke, 0.0, 1.0), 0.86);
    float s = clamp(smoke, 0.0, 1.0);

    vec2 euv = shape_uv;
    float aspE = u_resolution.x / max(u_resolution.y, 1.0);
    euv.x *= aspE;
    vec2 em = vec2(u_mouse.x * 0.068, -0.34 + u_mouse.y * 0.044);
    float erx = 1.22;
    float ery = 0.62;
    vec2 ed = euv - em;
    float ell = (ed.x * ed.x) / (erx * erx) + (ed.y * ed.y) / (ery * ery);
    float cap = 1.0 - smoothstep(0.94, 1.06, ell);
    shape = s * cap;

  } else if (u_shape < 5.5) {
    float dist = length(shape_uv);
    float waves = sin(pow(dist, 1.7) * 7. - 3. * t) * .5 + .5;
    shape = waves;

  } else if (u_shape < 6.5) {
    float l = length(shape_uv);
    float angle = 6. * atan(shape_uv.y, shape_uv.x) + 4. * t;
    float twist = 1.2;
    float offset = pow(l, -twist) + angle / TWO_PI;
    float mid = smoothstep(0., 1., pow(l, twist));
    shape = mix(0., fract(offset), mid);

  } else if (u_shape < 7.5) {
    shape_uv *= 2.;
    float d = 1. - pow(length(shape_uv), 2.);
    vec3 pos = vec3(shape_uv, sqrt(d));
    vec3 lightPos = normalize(vec3(cos(1.5 * t), .8, sin(1.25 * t)));
    shape = .5 + .5 * dot(lightPos, pos);
    shape *= step(0., d);

  } else if (u_shape < 8.5) {
    vec2 p = shape_uv;
    float asp = u_resolution.x / max(u_resolution.y, 1.0);
    p.x *= asp;
    vec2 cen = vec2(u_mouse.x * 0.085, -0.34 + u_mouse.y * 0.055);
    float erx = 1.24;
    float ery = 0.68;
    vec2 pc = p - cen;
    float ee = (pc.x * pc.x) / (erx * erx) + (pc.y * pc.y) / (ery * ery);
    float inside = smoothstep(1.05, 0.86, ee);
    vec2 q = vec2(pc.x / erx, pc.y / ery);
    q = clamp(q, vec2(-0.995), vec2(0.995));
    float z2 = 1.0 - dot(q, q);
    float z = sqrt(max(z2, 0.0001));
    float cz = 0.36 * min(erx, ery);
    vec3 nor = normalize(vec3(pc.x / (erx * erx), pc.y / (ery * ery), z / max(cz * cz, 0.0001)));
    vec2 st = q * 5.8;
    float tm = t * 0.19;
    float n = 0.50 * snoise(st + vec2(tm * 0.09, -tm * 0.07));
    n += 0.28 * snoise(st * 2.05 + vec2(-tm * 0.1, tm * 0.12));
    n += 0.14 * snoise(st * 4.9);
    n += 0.08 * snoise(st * 9.8 + tm * 0.05);
    vec2 wm = u_mouse * vec2(2.6, 1.75);
    n += 0.10 * snoise((st + wm) * 1.75);
    n += 0.05 * snoise(st * 17.0);
    float h = 0.5 + 0.48 * n;
    vec3 lightDir = normalize(vec3(-0.42, 0.32, 0.88));
    float diff = max(0.0, dot(nor, lightDir));
    float hemi = 0.16 + 0.84 * diff;
    float limb = smoothstep(0.18, 0.94, length(q));
    hemi *= mix(1.0, 0.32, limb * limb);
    float rim = (1.0 - limb) * 0.11;
    shape = (h * hemi + rim) * inside;
    shape = pow(clamp(shape, 0.0, 1.0), 0.84);

  } else {
    shape_uv *= 2.;
    float d = 1. - pow(length(shape_uv), 2.);
    vec3 pos = vec3(shape_uv, sqrt(d));
    vec3 lightPos = normalize(vec3(cos(1.5 * t), .8, sin(1.25 * t)));
    shape = .5 + .5 * dot(lightPos, pos);
    shape *= step(0., d);
  }

  int type = int(floor(u_type));
  float dithering = 0.0;

  switch (type) {
    case 1: {
      dithering = step(hash21(ditheringNoise_uv), shape);
    } break;
    case 2:
      dithering = getBayerValue(dithering_uv, 2);
      break;
    case 3:
      dithering = getBayerValue(dithering_uv, 4);
      break;
    default:
      dithering = getBayerValue(dithering_uv, 8);
      break;
  }

  dithering -= .5;
  float res = step(.5, shape + dithering);

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  fragColor = vec4(color, opacity);
}
`;

  const DitheringShapes = {
    simplex: 1,
    warp: 2,
    dots: 3,
    smoke: 4,
    ripple: 5,
    swirl: 6,
    sphere: 7,
    planet: 8
  };

  const DitheringTypes = {
    random: 1,
    "2x2": 2,
    "4x4": 3,
    "8x8": 4
  };

  function hexToRgba(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return [0, 0, 0, 1];
    return [
      Number.parseInt(result[1], 16) / 255,
      Number.parseInt(result[2], 16) / 255,
      Number.parseInt(result[3], 16) / 255,
      1
    ];
  }

  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  function createProgram(gl, vsSource, fsSource) {
    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return null;
    const program = gl.createProgram();
    if (!program) return null;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }
    return program;
  }

  function boot() {
    const canvas = document.querySelector(".portfolio-hero-canvas");
    const section = document.querySelector(".portfolio-hero");
    if (!canvas || !section) return;

    const colorBack = "#0a0a0a";
    /** ~в 2× темнее прежнего #a8adb5 — полутон слабее, заголовок читается лучше */
    const colorFront = "#54565a";
    const shape = "smoke";
    const type = "8x8";
    const pxSize = 8;
    let speed = 0.48;

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      speed = 0;
    }

    const gl = canvas.getContext("webgl2", { alpha: false, antialias: false, powerPreference: "low-power" });
    if (!gl) {
      section.style.background = colorBack;
      return;
    }

    const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
    if (!program) {
      section.style.background = colorBack;
      return;
    }

    const locations = {
      u_time: gl.getUniformLocation(program, "u_time"),
      u_resolution: gl.getUniformLocation(program, "u_resolution"),
      u_colorBack: gl.getUniformLocation(program, "u_colorBack"),
      u_colorFront: gl.getUniformLocation(program, "u_colorFront"),
      u_shape: gl.getUniformLocation(program, "u_shape"),
      u_type: gl.getUniformLocation(program, "u_type"),
      u_pxSize: gl.getUniformLocation(program, "u_pxSize"),
      u_mouse: gl.getUniformLocation(program, "u_mouse"),
      u_mouseVel: gl.getUniformLocation(program, "u_mouseVel")
    };

    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let targetX = 0;
    let targetY = 0;

    function kickLoopIfIdle() {
      if (raf === 0) {
        raf = requestAnimationFrame(loop);
      }
    }

    function setPointerFromEvent(e) {
      const rect = canvas.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) return;
      targetX = (e.clientX - rect.left) / rect.width - 0.5;
      targetY = 0.5 - (e.clientY - rect.top) / rect.height;
      kickLoopIfIdle();
    }

    function resetPointer() {
      targetX = 0;
      targetY = 0;
      kickLoopIfIdle();
    }

    function handleHeroPointerMove(e) {
      const rect = section.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        resetPointer();
        return;
      }
      setPointerFromEvent(e);
    }

    document.addEventListener("pointermove", handleHeroPointerMove, { passive: true });

    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    gl.useProgram(program);

    const startTime = performance.now();
    let raf = 0;
    let width = 0;
    let height = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.floor(section.clientWidth * dpr));
      const h = Math.max(1, Math.floor(section.clientHeight * dpr));
      if (w === width && h === height) return;
      width = w;
      height = h;
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    }

    const pointerSmooth = 0.18;

    function draw() {
      resize();
      const t = ((performance.now() - startTime) / 1000) * speed;

      mouseX += (targetX - mouseX) * pointerSmooth;
      mouseY += (targetY - mouseY) * pointerSmooth;

      let velX = (mouseX - prevMouseX) * 140;
      let velY = (mouseY - prevMouseY) * 140;
      const vMax = 48;
      velX = Math.max(-vMax, Math.min(vMax, velX));
      velY = Math.max(-vMax, Math.min(vMax, velY));
      prevMouseX = mouseX;
      prevMouseY = mouseY;

      gl.clearColor(10 / 255, 10 / 255, 10 / 255, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);

      if (locations.u_time) gl.uniform1f(locations.u_time, t);
      if (locations.u_resolution) gl.uniform2f(locations.u_resolution, width, height);
      if (locations.u_colorBack) gl.uniform4fv(locations.u_colorBack, hexToRgba(colorBack));
      if (locations.u_colorFront) gl.uniform4fv(locations.u_colorFront, hexToRgba(colorFront));
      if (locations.u_shape) gl.uniform1f(locations.u_shape, DitheringShapes[shape]);
      if (locations.u_type) gl.uniform1f(locations.u_type, DitheringTypes[type]);
      if (locations.u_pxSize) gl.uniform1f(locations.u_pxSize, pxSize);
      if (locations.u_mouse) gl.uniform2f(locations.u_mouse, mouseX, mouseY);
      if (locations.u_mouseVel) gl.uniform2f(locations.u_mouseVel, velX, velY);

      section.style.setProperty("--hero-mx", mouseX.toFixed(5));
      section.style.setProperty("--hero-my", mouseY.toFixed(5));

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }

    function loop() {
      draw();
      const smoothing = Math.hypot(targetX - mouseX, targetY - mouseY) > 0.0008;
      const timeRuns = speed !== 0;
      if (timeRuns || smoothing) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = 0;
      }
    }

    draw();
    raf = 0;
    if (speed !== 0) {
      raf = requestAnimationFrame(loop);
    }

    const ro = new ResizeObserver(() => {
      draw();
      kickLoopIfIdle();
    });
    ro.observe(section);

    window.addEventListener(
      "beforeunload",
      () => {
        document.removeEventListener("pointermove", handleHeroPointerMove);
        cancelAnimationFrame(raf);
        ro.disconnect();
        gl.deleteProgram(program);
      },
      { once: true }
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
