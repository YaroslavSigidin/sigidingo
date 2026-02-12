const qs = (sel, scope = document) => scope.querySelector(sel);
const qsa = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));
const FALLBACK_COVER = "assets/images/HERO/PROFI.jpg";
const SERVICE_WORKER_PATH = "/sw.js";
const DATA_BUNDLE = "assets/js/data.js?v=20260212-1";
let dataHydrated = false;
let dataBundlePromise = null;
const RESPONSIVE_IMAGES = new Set([
  "assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/visiflow/HERO.jpg",
  "assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/Octoclick/%D0%9E%D0%91%D0%9B%D0%9E%D0%96%D0%9A%D0%90.jpg",
  "assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/MIROX%201/%D0%9E%D0%91%D0%9B%D0%9E%D0%96%D0%9A%D0%90.jpg",
  "assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/AI/HERO.png",
  "assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/MIROX%20APP/HERO_.jpg",
  "assets/images/%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B/WINGLISH/HERO.jpg",
  "assets/images/HERO/NOK-20260212.jpg",
  "assets/images/%D1%81%D0%B0%D0%B9%D1%82%D1%8B/SPACE%20CAMP/HERO.jpg",
  "assets/images/%D1%81%D0%B0%D0%B9%D1%82%D1%8B/ISS/HERO.jpg",
  "assets/images/%D1%81%D0%B0%D0%B9%D1%82%D1%8B/PROFI/HERO__.jpg",
  "assets/images/HERO/SOLOMADOM.jpg",
  "assets/images/%D1%81%D0%B0%D0%B9%D1%82%D1%8B/AMAZON/HERO.png",
  "assets/images/%D1%81%D0%B0%D0%B9%D1%82%D1%8B/CASTLE%20MUSIC/HERO_____.jpg",
  "assets/images/HERO/KVATRO.jpg",
  "assets/images/%D1%81%D0%B0%D0%B9%D1%82%D1%8B/LEKI%20TRAVEL/HERO____.jpg",
  "assets/images/HERO/VIHLOP%20EXPERT.jpg"
]);

const isDataAvailable = () =>
  typeof projects !== "undefined" ||
  typeof featuredProjects !== "undefined" ||
  typeof caseStudies !== "undefined" ||
  typeof articles !== "undefined";

const loadDataBundle = () => {
  if (isDataAvailable()) return Promise.resolve();
  if (dataBundlePromise) return dataBundlePromise;
  dataBundlePromise = new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src^="${DATA_BUNDLE}"]`);
    if (existing && existing.dataset.loaded === "true") {
      resolve();
      return;
    }
    const script = existing || document.createElement("script");
    script.src = DATA_BUNDLE;
    script.defer = true;
    script.dataset.loaded = "false";
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error("Failed to load data bundle"));
    if (!existing) {
      document.body.appendChild(script);
    }
  });
  return dataBundlePromise;
};

const hydrateDataFeatures = () => {
  renderFeatured();
  renderProjects();
  renderServicesProofCards();
  renderAbout();
  renderArticles();
  renderCaseStudy();
  renderArticlePage();
};

const scheduleDataHydration = () => {
  if (dataHydrated) return;
  const run = () => {
    loadDataBundle()
      .then(() => {
        if (dataHydrated) return;
        dataHydrated = true;
        hydrateDataFeatures();
      })
      .catch(() => {});
  };
  if ("requestIdleCallback" in window) {
    requestIdleCallback(run, { timeout: 2000 });
  } else {
    setTimeout(run, 1);
  }
};

const bindImageFallback = image => {
  if (!image) return;
  image.addEventListener(
    "error",
    () => {
      image.src = FALLBACK_COVER;
    },
    { once: true }
  );
};

const getResponsiveImageAttrs = src => {
  const dot = src.lastIndexOf(".");
  if (dot <= 0) return { srcset: "", sizes: "" };
  const base = src.slice(0, dot);
  const ext = src.slice(dot);
  return {
    srcset: `${base}-640${ext} 640w, ${base}-960${ext} 960w, ${src} 1200w`,
    sizes: "(max-width: 720px) 92vw, (max-width: 1200px) 45vw, 586px"
  };
};

const getModernSourceSet = (src, ext) => {
  const dot = src.lastIndexOf(".");
  if (dot <= 0) return "";
  const base = src.slice(0, dot);
  return `${base}-640.${ext} 640w, ${base}-960.${ext} 960w, ${base}.${ext} 1200w`;
};

const renderPicture = ({ src, alt, loading = "lazy", decoding = "async" }) => {
  const normalized = src.replace(/-(640|960)(?=\.[a-zA-Z0-9]+$)/, "");
  if (!RESPONSIVE_IMAGES.has(normalized)) {
    return `<img src="${src}" alt="${alt || ""}" loading="${loading}" decoding="${decoding}" />`;
  }
  const { srcset, sizes } = getResponsiveImageAttrs(src);
  const avifSet = getModernSourceSet(src, "avif");
  const webpSet = getModernSourceSet(src, "webp");
  return `
    <picture>
      <source type="image/avif" srcset="${avifSet}" sizes="${sizes}">
      <source type="image/webp" srcset="${webpSet}" sizes="${sizes}">
      <img src="${src}" alt="${alt || ""}" loading="${loading}" decoding="${decoding}"
        ${srcset ? `srcset="${srcset}" sizes="${sizes}"` : ""} />
    </picture>
  `;
};

const initNav = () => {
  const toggle = qs("#mobileToggle");
  const links = qs("#navLinks");
  if (!toggle || !links) return;
  let overlay = qs(".nav-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    document.body.appendChild(overlay);
  }

  const closeMenu = () => {
    links.classList.remove("open");
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    links.classList.add("open");
    document.body.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
    if (!qs(".nav-close", links)) {
      const closeBtn = document.createElement("button");
      closeBtn.className = "nav-close";
      closeBtn.type = "button";
      closeBtn.setAttribute("aria-label", "Close menu");
      closeBtn.textContent = "×";
      closeBtn.addEventListener("click", closeMenu);
      links.prepend(closeBtn);
    }
  };

  toggle.addEventListener("click", () => {
    if (links.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener("click", closeMenu);
  qsa("a", links).forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
};

const initServiceWorker = () => {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(SERVICE_WORKER_PATH).catch(() => {});
  });
};

const initMobilePortfolioDefault = () => {
  const isMobile = window.matchMedia("(max-width: 860px)").matches;
  if (!isMobile) return;
  const path = window.location.pathname;
  if (!path.endsWith("/") && !path.endsWith("/index.html") && !path.endsWith("index.html")) return;
  if (sessionStorage.getItem("mobilePortfolioRedirect")) return;
  sessionStorage.setItem("mobilePortfolioRedirect", "true");
  return;
};

const applyTheme = theme => {
  if (theme === "dark") {
    document.body.dataset.theme = "dark";
  } else {
    delete document.body.dataset.theme;
  }
};

const initThemeToggle = () => {
  const btn = qs("[data-theme-toggle]");
  if (!btn) return;
  let theme = localStorage.getItem("siteTheme");
  if (!theme) theme = "dark";
  applyTheme(theme);
  btn.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("siteTheme", theme);
    applyTheme(theme);
  });
};

const navigateWithTransition = url => {
  document.body.classList.add("page-exit");
  setTimeout(() => {
    window.location.href = url;
  }, 250);
};

const initReveal = () => {
  const items = qsa(".reveal");
  if (!items.length) return;
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          if (entry.target.dataset.scramble === "true") {
            scrambleText(entry.target);
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach(item => observer.observe(item));
};

const scrambleText = (element, duration = 900) => {
  const original = element.textContent;
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩ";
  let start = null;

  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const revealCount = Math.floor(progress * original.length);
    let output = "";
    for (let i = 0; i < original.length; i += 1) {
      const char = original[i];
      if (i < revealCount || char === " " || char === "\u2014") {
        output += char;
      } else {
        output += chars[Math.floor(Math.random() * chars.length)];
      }
    }
    element.textContent = output;
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = original;
    }
  };

  requestAnimationFrame(step);
};

const renderFeatured = () => {
  const container = qs("#featured-projects");
  if (!container || typeof featuredProjects === "undefined") return;
  container.innerHTML = "";
  featuredProjects.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.innerHTML = `
      ${renderPicture({ src: project.image, alt: project.title })}
      <div class="content">
        <span class="tag">Case study</span>
        <h3>${project.title}</h3>
        <p>${project.subtitle}</p>
        ${
          project.tags
            ? `<div class="tag-list">${project.tags
                .map(tag => `<span class="tag-pill">${tag}</span>`)
                .join("")}</div>`
            : ""
        }
      </div>
    `;
    bindImageFallback(qs("img", card));
    card.addEventListener("click", () => {
      const target = projects.find(item => item.id === project.id);
      if (target) openProjectModal(target);
    });
    container.appendChild(card);
  });
};

const getPrimaryProjectLink = project => {
  const links = Array.isArray(project?.liveLinks) ? project.liveLinks.filter(item => item?.url) : [];
  return links.length ? links[0] : null;
};

const renderProjects = () => {
  const grid = qs("#projects-grid");
  if (!grid || typeof projects === "undefined") return;
  let activeFilter = "all";
  const preserveStatic = grid.dataset.staticGrid === "true";

  const renderGrid = () => {
    grid.innerHTML = "";
    projects
      .filter(project => activeFilter === "all" || project.category === activeFilter)
      .forEach(project => {
        const tagLabel = project.category === "uxui" ? "UX/UI" : "WEB";
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.dataset.projectId = project.id;
    card.innerHTML = `
          ${renderPicture({ src: project.image, alt: project.title })}
          <div class="content">
            <span class="tag">${tagLabel}</span>
            <h3>${project.title}</h3>
            <p>${project.subtitle || ""}</p>
            ${
              project.tags
                ? `<div class="tag-list">${project.tags
                    .map(tag => `<span class="tag-pill">${tag}</span>`)
                    .join("")}</div>`
                : ""
            }
          </div>
        `;
        bindImageFallback(qs("img", card));
        card.addEventListener("click", () => openProjectModal(project));
        grid.appendChild(card);
      });
    initReveal();
  };

  if (!grid.dataset.modalDelegationBound) {
    grid.addEventListener("click", event => {
      const card = event.target.closest(".project-card");
      if (!card) return;
      const { projectId } = card.dataset;
      if (!projectId || typeof projects === "undefined") return;
      const project = projects.find(item => item.id === projectId);
      openProjectModal(project);
    });
    grid.dataset.modalDelegationBound = "true";
  }

  const tabs = qsa(".tab-button");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(item => item.classList.remove("active"));
      tab.classList.add("active");
      activeFilter = tab.dataset.filter;
      renderGrid();
    });
  });

  if (!preserveStatic) {
    renderGrid();
  }
};

const MONTH_SHORT = ["ЯНВ", "ФЕВ", "МАР", "АПР", "МАЙ", "ИЮН", "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НОЯ", "ДЕК"];

const parsePeriodToDays = period => {
  if (!period) return 0;
  const text = String(period).toLowerCase();
  const num = Number((text.match(/\d+([.,]\d+)?/) || ["0"])[0].replace(",", "."));
  if (!Number.isFinite(num) || num <= 0) return 0;
  if (text.includes("дн") || text.includes("day")) return num;
  if (text.includes("нед") || text.includes("week")) return num * 7;
  if (text.includes("мес") || text.includes("month")) return num * 30;
  return num * 7;
};

const getProjectTimelineRange = project => {
  const range = project?.calendarRange || {};
  const hasStart = Number.isFinite(range.startMonth);
  const hasEnd = Number.isFinite(range.endMonth);
  const hasMonths = Number.isFinite(range.months);

  let months = 0;
  if (hasMonths) {
    months = Math.max(0, Math.min(12, Number(range.months)));
  } else if (hasStart && hasEnd) {
    months = ((range.endMonth - range.startMonth + 12) % 12) + 1;
  } else {
    const timeline = Array.isArray(project?.timeline) ? project.timeline : [];
    const totalDays = timeline.reduce((acc, item) => acc + parsePeriodToDays(item?.period || item), 0);
    months = totalDays > 0 ? Math.max(0.25, Math.min(12, totalDays / 30)) : 0;
  }

  const startMonth = hasStart ? Math.max(0, Math.min(11, Number(range.startMonth))) : 0;
  const endMonth = months > 0 ? (Math.floor(startMonth + months - 0.001) % 12 + 12) % 12 : startMonth;
  const label = typeof range.label === "string" && range.label.trim()
    ? range.label.trim()
    : `${MONTH_SHORT[startMonth]} — ${MONTH_SHORT[endMonth]}`;
  return { startMonth, endMonth, months, label };
};

const pluralizeRu = (value, one, few, many) => {
  const abs = Math.abs(value) % 100;
  const mod10 = abs % 10;
  if (abs > 10 && abs < 20) return many;
  if (mod10 > 1 && mod10 < 5) return few;
  if (mod10 === 1) return one;
  return many;
};

const getProjectDurationWeeks = (project, monthsFallback) => {
  const range = project?.calendarRange || {};
  if (Number.isFinite(range.weeks) && Number(range.weeks) > 0) {
    return Math.round(Number(range.weeks));
  }
  const timeline = Array.isArray(project?.timeline) ? project.timeline : [];
  const totalDays = timeline.reduce((acc, item) => acc + parsePeriodToDays(item?.period || item), 0);
  if (totalDays > 0) return Math.max(1, Math.round(totalDays / 7));
  return Math.max(1, Math.round((monthsFallback * 30) / 7));
};

const getProjectDurationLabel = (project, months) => {
  if (months >= 11.5) {
    return { value: "1", unit: "год" };
  }
  if (months >= 1) {
    const roundedMonths = Math.max(1, Math.round(months));
    return {
      value: String(roundedMonths),
      unit: pluralizeRu(roundedMonths, "месяц", "месяца", "месяцев")
    };
  }
  const weeks = getProjectDurationWeeks(project, months);
  return {
    value: String(weeks),
    unit: pluralizeRu(weeks, "неделя", "недели", "недель")
  };
};

const renderTimelineYearOrbit = project => {
  const { startMonth, endMonth, months, label } = getProjectTimelineRange(project);
  const duration = getProjectDurationLabel(project, months);
  const size = 212;
  const center = size / 2;
  const radius = 74;
  const circumference = 2 * Math.PI * radius;
  const segment = Math.max(0, Math.min(circumference, (months / 12) * circumference));
  const startDeg = -90 + startMonth * 30;
  const monthMarks = MONTH_SHORT.map((label, index) => {
    const angle = ((-90 + index * 30) * Math.PI) / 180;
    const x = center + Math.cos(angle) * (radius + 24);
    const y = center + Math.sin(angle) * (radius + 24);
    return `<span class="year-orbit-month" style="left:${x}px;top:${y}px;">${label}</span>`;
  }).join("");
  return `
    <div class="year-orbit">
      <div class="year-orbit-canvas" style="width:${size}px;height:${size}px;">
        <svg viewBox="0 0 ${size} ${size}" class="year-orbit-svg" aria-hidden="true">
          <circle class="year-orbit-track" cx="${center}" cy="${center}" r="${radius}"></circle>
          <circle
            class="year-orbit-segment"
            cx="${center}"
            cy="${center}"
            r="${radius}"
            stroke-dasharray="${segment} ${circumference - segment}"
            transform="rotate(${startDeg} ${center} ${center})">
          </circle>
        </svg>
        <div class="year-orbit-months">${monthMarks}</div>
        <div class="year-orbit-center">
          <strong>${duration.value}</strong>
          <span>${duration.unit}</span>
        </div>
      </div>
      <p class="year-orbit-caption">${label}</p>
    </div>
  `;
};

const renderServicesProofCards = () => {
  const host = qs("#servicesCaseGrid");
  if (!host || typeof projects === "undefined") return;

  const proofIds = ["visiflow", "octoclick", "ai", "mirox-app", "nok"];
  const proofProjects = proofIds
    .map(id => projects.find(item => item.id === id))
    .filter(Boolean);

  host.innerHTML = "";

  proofProjects.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.innerHTML = `
      ${renderPicture({ src: project.image, alt: project.title })}
      <div class="content">
        <span class="tag">Case study</span>
        <h3>${project.title}</h3>
        <p>${project.description || project.subtitle || ""}</p>
        <a class="proof-link" href="case-">Смотреть кейс</a>
      </div>
    `;
    bindImageFallback(qs("img", card));
    card.addEventListener("click", event => {
      if (event.target.closest(".proof-link")) return;
      navigateWithTransition(`case-`);
    });
    host.appendChild(card);
  });

  initReveal();
};

const buildModalStoryChapters = (project, caseData) => {
  if (Array.isArray(caseData?.storyChapters) && caseData.storyChapters.length) {
    return caseData.storyChapters;
  }

  const task = caseData?.task || project.description || "Контекст проекта будет добавлен позже.";
  const processPoints = Array.isArray(caseData?.whatDone) ? caseData.whatDone.slice(0, 3) : [];
  const metricPoints = Array.isArray(caseData?.metrics) ? caseData.metrics.slice(0, 3) : [];

  const processText = processPoints.length
    ? processPoints.join(" ")
    : "Сначала фиксирую baseline, затем проверяю гипотезы в прототипах и подтверждаю решения на тестах.";
  const metricText = metricPoints.length
    ? metricPoints.join(" ")
    : "Метрики влияния фиксируются после внедрения через product analytics и качественный фидбэк.";

  return [
    { label: "Контекст", title: "Какая была задача", text: task },
    { label: "Процесс", title: "Как строилась работа", text: processText },
    { label: "Метрики", title: "Как измерялся результат", text: metricText }
  ];
};

const openProjectModal = project => {
  if (!project) return;
  const modal = qs("#projectModal");
  if (!modal) return;
  const scrollbar = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollbar ? `${scrollbar}px` : "";
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  const modalContentEl = qs("#projectModal .modal-content");
  const cover = qs("#modalCover");
  if (cover) {
    cover.src = project.image || "";
    cover.alt = project.title || "Project cover";
    bindImageFallback(cover);
  }
  const title = qs("#modalTitle");
  if (title) title.textContent = project.title || "Проект";
  const subtitle = qs("#modalSubtitle");
  if (subtitle) subtitle.textContent = project.subtitle || "";
  const description = qs("#modalDescription");
  if (description) {
    description.textContent = project.description || project.subtitle || "";
  }
  const sidePrimaryLink = qs("#modalPrimaryLink");
  if (sidePrimaryLink) {
    const primaryLink = getPrimaryProjectLink(project);
    if (primaryLink) {
      sidePrimaryLink.href = primaryLink.url;
      sidePrimaryLink.textContent = `Открыть ${primaryLink.label || "сайт проекта"}`;
      sidePrimaryLink.classList.remove("is-hidden");
    } else {
      sidePrimaryLink.removeAttribute("href");
      sidePrimaryLink.classList.add("is-hidden");
    }
  }
  const sideTitle = qs("#modalSideTitle");
  if (sideTitle) sideTitle.textContent = project.title || "Проект";
  const sideDesc = qs("#modalSideDescription");
  if (sideDesc) {
    sideDesc.textContent =
      project.description || project.subtitle || "Описание появится позже.";
  }
  const sideTimeline = qs("#modalSideTimeline");
  if (sideTimeline) {
    sideTimeline.innerHTML = renderTimelineYearOrbit(project);
  }
  const sideMetrics = qs("#modalSideMetrics");
  if (sideMetrics) {
    const metricsList = Array.isArray(project.metrics) ? project.metrics : [];
    sideMetrics.innerHTML = metricsList.length
      ? metricsList.map(item => `<li>${item}</li>`).join("")
      : "<li>—</li>";
  }
  const sideTech = qs("#modalSideTech");
  if (sideTech) {
    const techList = Array.isArray(project.technologies) ? project.technologies : [];
    sideTech.innerHTML = techList.length
      ? techList.map(item => `<span class="tag-pill">${item}</span>`).join("")
      : '<span class="tag-pill">—</span>';
  }
  const sideTools = qs("#modalSideTools");
  if (sideTools) {
    const toolList = Array.isArray(project.tools) ? project.tools : [];
    sideTools.innerHTML = toolList.length
      ? toolList.map(item => `<span class="tag-pill">${item}</span>`).join("")
      : '<span class="tag-pill">—</span>';
  }
  const tagsHost = qs("#modalTags");
  if (tagsHost) {
    tagsHost.innerHTML = project.tags
      ? project.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join("")
      : "";
  }
  const detailsHost = qs("#modalDetails");
  let modalStoryChapters = [];
  if (detailsHost) {
    detailsHost.innerHTML = "";
    if (project.caseKey && typeof caseStudies !== "undefined" && caseStudies[project.caseKey]) {
      const data = caseStudies[project.caseKey];
      modalStoryChapters = buildModalStoryChapters(project, data);
      if (typeof data.modalFullHtml === "string" && data.modalFullHtml.trim()) {
        detailsHost.innerHTML = data.modalFullHtml;
      } else {
      detailsHost.innerHTML = `
        <h4>Задача</h4>
        <p>${data.task}</p>
        <h4>Что сделано</h4>
        <ul class="case-list">${data.whatDone.map(item => `<li>${item}</li>`).join("")}</ul>
        <h4>Метрики</h4>
        <ul class="case-list">${data.metrics.map(item => `<li>${item}</li>`).join("")}</ul>
        ${
          modalStoryChapters.length
            ? `
          <h4>История кейса</h4>
          <div class="modal-story-intro">
            ${modalStoryChapters
              .slice(0, 2)
              .map(
                chapter => `
              <article class="modal-story-inline">
                <p class="story-kicker">${chapter.label || "История"}</p>
                <h5>${chapter.title || ""}</h5>
                <p>${chapter.text || ""}</p>
              </article>
            `
              )
              .join("")}
          </div>
        `
            : ""
        }
      `;
      }
    }
  }
  const gallery = qs("#modalGallery");
  if (gallery) {
    gallery.innerHTML = "";
  }
  const modalCoverSrc = (project.image || project.preview || "").split("?")[0];
  const images = (project.gallery && project.gallery.length ? project.gallery : [project.image])
    .filter(Boolean)
    .filter((src, index) => {
      // Skip first gallery frame if it duplicates the modal cover image.
      if (index !== 0 || !modalCoverSrc) return true;
      return String(src).split("?")[0] !== modalCoverSrc;
    });
  if (gallery) {
    images.forEach((img, index) => {
      const card = document.createElement("div");
      card.className = "modal-gallery-card modal-void";
      card.style.transitionDelay = `${index * 0.08}s`;
      const image = document.createElement("img");
      image.src = img;
      image.alt = project.title || "Project image";
      image.loading = "lazy";
      bindImageFallback(image);
      card.appendChild(image);
      gallery.appendChild(card);

      const chapter = modalStoryChapters[index] || null;
      if (chapter) {
        const storyCard = document.createElement("article");
        storyCard.className = "modal-gallery-story modal-void";
        storyCard.style.transitionDelay = `${index * 0.08 + 0.03}s`;
        storyCard.innerHTML = `
          <p class="story-kicker">${chapter.label || "История"}</p>
          <h4>${chapter.title || ""}</h4>
          <p>${chapter.text || ""}</p>
        `;
        gallery.appendChild(storyCard);
      }
    });
  }
  const recommendations = qs("#modalRecommendations");
  if (recommendations && Array.isArray(projects)) {
    recommendations.innerHTML = "";
    const list = projects.filter(item => item.id !== project.id).slice(0, 4);
    list.forEach(item => {
      const card = document.createElement("div");
      card.className = "recommendation-card";
      card.innerHTML = `
        ${renderPicture({ src: item.image, alt: item.title })}
        <div class="info">
          <strong>${item.title}</strong>
          <div class="tag-list">
            ${(item.tags || []).slice(0, 2).map(tag => `<span class="tag-pill">${tag}</span>`).join("")}
          </div>
        </div>
      `;
      bindImageFallback(qs("img", card));
      card.addEventListener("click", () => {
        openProjectModal(item);
      });
      recommendations.appendChild(card);
    });
  }
  if (modalContentEl) modalContentEl.scrollTop = 0;
};

const initModal = () => {
  const modal = qs("#projectModal");
  const close = qs("#projectModalClose");
  if (!modal || !close) return;
  close.addEventListener("click", () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.body.style.paddingRight = "";
  });
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      document.body.style.paddingRight = "";
    }
  });
  window.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      document.body.style.paddingRight = "";
    }
  });
};

const initModalTabs = () => {
  const modal = qs("#projectModal");
  if (!modal) return;
  modal.addEventListener("click", event => {
    const btn = event.target.closest(".modal-tab");
    if (!btn) return;
    const target = btn.dataset.modalTab;
    const buttons = qsa(".modal-tab", modal);
    const panels = qsa(".modal-tab-panel", modal);
    buttons.forEach(item => item.classList.toggle("active", item === btn));
    panels.forEach(panel => panel.classList.toggle("active", panel.dataset.modalPanel === target));
  });
};

const initModalLightbox = () => {
  const lightbox = qs("#modalLightbox");
  if (!lightbox) return;
  const img = qs("img", lightbox);
  const prev = qs("[data-modal-lightbox-prev]", lightbox);
  const next = qs("[data-modal-lightbox-next]", lightbox);
  if (!img || !prev || !next) return;

  let images = [];
  let current = 0;

  const open = index => {
    if (!images.length) return;
    current = index;
    img.src = images[current].src;
    lightbox.classList.add("active");
  };

  document.addEventListener("click", event => {
    const target = event.target.closest("#projectModal .modal-cover img, #projectModal .modal-gallery img");
    if (!target) return;
    const cover = qs("#projectModal .modal-cover img");
    const gallery = qsa("#projectModal .modal-gallery img");
    images = [];
    if (cover && cover.src) images.push(cover);
    images = images.concat(gallery);
    const index = images.indexOf(target);
    open(Math.max(0, index));
  });

  const change = direction => {
    if (!images.length) return;
    current = (current + direction + images.length) % images.length;
    img.src = images[current].src;
  };

  prev.addEventListener("click", event => {
    event.stopPropagation();
    change(-1);
  });
  next.addEventListener("click", event => {
    event.stopPropagation();
    change(1);
  });
  lightbox.addEventListener("click", () => lightbox.classList.remove("active"));
};

const initArticleReveal = () => {
  const items = qsa(".article-reveal");
  if (!items.length) return;
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach(item => observer.observe(item));
};

const initArticleProgress = () => {
  const bar = qs(".reading-progress-bar");
  const content = qs("#articleContent");
  if (!bar || !content) return;

  const update = () => {
    const rect = content.getBoundingClientRect();
    const viewport = window.innerHeight || 0;
    const total = rect.height - viewport * 0.25;
    const passed = Math.min(total, Math.max(0, -rect.top + viewport * 0.15));
    const progress = total > 0 ? passed / total : 0;
    bar.style.transform = `scaleX(${progress})`;
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", update);
  update();
};

const initMetroTimeline = () => {
  const wraps = qsa(".metro-wrap");
  if (!wraps.length) return;

  const update = () => {
    const viewport = window.innerHeight || 0;
    wraps.forEach(wrap => {
      const list = qs(".metro-timeline", wrap);
      const progress = qs(".metro-line-progress", wrap);
      if (!list || !progress) return;
      const rect = list.getBoundingClientRect();
      const pageTop = window.scrollY || window.pageYOffset;
      const start = rect.top + pageTop - viewport * 0.6;
      const end = rect.bottom + pageTop - viewport * 0.3;
      const pct = Math.min(1, Math.max(0, (pageTop - start) / (end - start)));
      progress.style.height = `${pct * list.offsetHeight}px`;

      const items = qsa(".timeline-item", list);
      items.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        const active = itemRect.top < viewport * 0.65;
        item.classList.toggle("is-active", active);
      });
    });
  };

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        update();
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", update);
  update();
};

const renderAbout = () => {
  const skillsList = qs("#skillsList");
  if (skillsList && typeof skills !== "undefined") {
    skillsList.innerHTML = "";
    skills.forEach(skill => {
      const pill = document.createElement("span");
      pill.className = "skill-pill";
      pill.textContent = skill;
      skillsList.appendChild(pill);
    });
  }

  const statsHost = qs("#aboutStats");
  if (statsHost && typeof aboutStats !== "undefined") {
    statsHost.innerHTML = "";
    aboutStats.forEach(stat => {
      const card = document.createElement("div");
      card.className = "stat-card";
      card.innerHTML = `
        <strong>${stat.value}</strong>
        <span>${stat.label}</span>
      `;
      statsHost.appendChild(card);
    });
  }

  const experienceList = qs("#experienceList");
  if (experienceList && typeof experience !== "undefined") {
    experienceList.innerHTML = "";
    experience.forEach(item => {
      const card = document.createElement("div");
      card.style.marginBottom = "18px";
      card.innerHTML = `
        <strong>${item.role}</strong>
        <p style="font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--muted);">${item.dates}</p>
        <ul class="case-list">
          ${item.details.map(detail => `<li>${detail}</li>`).join("")}
        </ul>
      `;
      experienceList.appendChild(card);
    });
  }

  const timelineList = qs("#timelineList");
  if (timelineList && typeof projectTimeline !== "undefined") {
    timelineList.innerHTML = "";
    projectTimeline.forEach(entry => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.innerHTML = `
        <span>${entry.date}</span>
        <p>${entry.title}</p>
      `;
      timelineList.appendChild(item);
    });
  }

  const educationList = qs("#educationList");
  if (educationList && typeof education !== "undefined") {
    educationList.innerHTML = "";
    education.forEach(entry => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.innerHTML = `
        <span>${entry.date}</span>
        <p>${entry.title}</p>
      `;
      educationList.appendChild(item);
    });
  }
};

const renderArticles = () => {
  if (typeof articles === "undefined" || !Array.isArray(articles)) return;
  if (!articles.length) return;

  const featured = articles.find(item => item.featured) || articles[0];

  const buildFeatured = item => {
    const articleHref = `/blog/${encodeURIComponent(item.id)}/`;
    return `
    <article class="article-featured reveal">
      <div class="article-cover">
        <img src="${item.cover}" alt="${item.title}" loading="lazy" decoding="async" />
      </div>
      <div class="article-body">
        <div class="article-meta">
          <span>${item.date}</span>
          <span>${item.readTime}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <div class="tag-list">
          ${item.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join("")}
        </div>
        <a class="button" href="${articleHref}">Читать статью</a>
      </div>
    </article>
  `;
  };

  const buildCard = item => {
    const articleHref = `/blog/${encodeURIComponent(item.id)}/`;
    return `
    <a class="article-link" href="${articleHref}">
      <article class="article-card reveal">
        <div class="article-cover">
          <img src="${item.cover}" alt="${item.title}" loading="lazy" decoding="async" />
        </div>
        <div class="article-body">
          <div class="article-meta">
            <span>${item.date}</span>
            <span>${item.readTime}</span>
          </div>
          <h4>${item.title}</h4>
          <p>${item.excerpt}</p>
          <div class="tag-list">
            ${item.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join("")}
          </div>
        </div>
      </article>
    </a>
  `;
  };

  const featuredHost = qs("#articlesFeatured") || qs("#blogFeatured");
  if (featuredHost) {
    featuredHost.innerHTML = buildFeatured(featured);
    initReveal();
  }

  const gridHost = qs("#articlesGrid") || qs("#blogGrid");
  if (gridHost) {
    const limit = Number(gridHost.dataset.limit) || articles.length;
    const list = featuredHost
      ? articles.filter(item => item.id !== featured.id)
      : articles;
    gridHost.innerHTML = list.slice(0, limit).map(buildCard).join("");
    initReveal();
  }

  const blogGrid = qs("#blogGrid");
  if (blogGrid) {
    const searchInput = qs("#blogSearchInput");
    const searchForm = qs("#blogSearchForm");
    const filterButtons = qsa(".blog-compact-menu .filter-pill");
    let activeFilter = "all";

    const normalize = value => String(value || "").toLowerCase();

    const applyFilters = () => {
      const query = normalize(searchInput ? searchInput.value : "");
      const filtered = articles.filter(item => {
        const tags = (item.tags || []).map(tag => normalize(tag));
        const matchesTag = activeFilter === "all" || tags.includes(activeFilter);
        const haystack = normalize(`${item.title} ${item.excerpt} ${(item.tags || []).join(" ")}`);
        const matchesQuery = !query || haystack.includes(query);
        return matchesTag && matchesQuery;
      });
      blogGrid.innerHTML = filtered.map(buildCard).join("");
      initReveal();
    };

    if (searchForm) {
      searchForm.addEventListener("submit", event => {
        event.preventDefault();
        applyFilters();
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", () => applyFilters());
    }

    if (filterButtons.length) {
      filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          filterButtons.forEach(item => item.classList.remove("is-active"));
          btn.classList.add("is-active");
          activeFilter = normalize(btn.dataset.filter || "all");
          applyFilters();
        });
      });
    }

    applyFilters();
  }
};

const renderArticlePage = () => {
  const title = qs("#articleTitle");
  const lead = qs("#articleLead");
  const date = qs("#articleDate");
  const readTime = qs("#articleReadTime");
  const tags = qs("#articleTags");
  const cover = qs("#articleCover");
  const badge = qs("#articleTitleBadge");
  const content = qs("#articleContent");
  const related = qs("#relatedArticles");
  const reactionsHost = qs("#articleReactions");
  const reactionCount = qs("#articleReactionCount");
  const ratingStars = qs("#articleRatingStars");
  const ratingValue = qs("#articleRatingValue");
  if (!title || !content) return;
  if (typeof articles === "undefined" || !Array.isArray(articles) || !articles.length) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("post");
  const article = articles.find(item => item.id === slug) || articles[0];

  title.textContent = article.title || "Статья";
  if (badge) badge.textContent = article.title || "Статья";
  if (lead) lead.textContent = article.excerpt || "";
  if (date) date.textContent = article.date || "";
  if (readTime) readTime.textContent = article.readTime || "";
  if (cover) {
    cover.src = article.cover || "";
    cover.alt = article.title || "cover";
  }
  if (tags) {
    tags.innerHTML = (article.tags || [])
      .map(tag => `<span class="tag-pill">${tag}</span>`)
      .join("");
  }

  if (content) {
    const blocks = Array.isArray(article.body) ? article.body : [];
    const iconMap = {
      insight:
        '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M9 18h6M10.5 21h3M8 14a5 5 0 1 1 8 0c-1 1-2 2-2 4h-4c0-2-1-3-2-4z"/></svg>',
      chart:
        '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M4 20h16M7 16V8M12 16V5M17 16v-6"/></svg>',
      flow:
        '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M5 7h6a3 3 0 0 1 3 3v7M5 7l3-3M5 7l3 3M19 17h-6a3 3 0 0 1-3-3V7M19 17l-3-3M19 17l-3 3"/></svg>',
      note:
        '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M6 3h9l3 3v15H6zM9 11h6M9 15h6"/></svg>'
    };
    content.innerHTML = blocks
      .map(block => {
        if (block.type === "h2") return `<h2 class="article-reveal">${block.text}</h2>`;
        if (block.type === "h3") return `<h3 class="article-reveal">${block.text}</h3>`;
        if (block.type === "p")
          return `<p class="article-paragraph article-reveal">${block.text}</p>`;
        if (block.type === "blockquote")
          return `<blockquote class="article-quote article-reveal"><span class="quote-mark">“</span>${block.text}</blockquote>`;
        if (block.type === "ul") {
          const items = (block.items || []).map(item => `<li>${item}</li>`).join("");
          return `<ul class="article-list article-reveal">${items}</ul>`;
        }
        if (block.type === "divider") {
          const label = block.label ? `<span>${block.label}</span>` : "";
          return `<div class="article-divider article-reveal">${label}</div>`;
        }
        if (block.type === "callout") {
          const icon = iconMap[block.icon] || iconMap.note;
          return `
            <div class="article-callout article-reveal">
              <div class="callout-head">
                <div class="callout-icon">${icon}</div>
                ${block.title ? `<h4>${block.title}</h4>` : ""}
              </div>
              <p>${block.text || ""}</p>
            </div>
          `;
        }
        if (block.type === "footnotes") {
          const items = (block.items || []).map(item => `<li>${item}</li>`).join("");
          return `<ol class="article-footnotes article-reveal">${items}</ol>`;
        }
        return "";
      })
      .join("");
  }

  if (related) {
    const picks = articles.filter(item => item.id !== article.id).slice(0, 6);
    related.innerHTML = picks
      .map(
        item => `
        <a class="article-link" href="/blog/${encodeURIComponent(item.id)}/">
          <article class="article-card">
            <div class="article-cover">
              <img src="${item.cover}" alt="${item.title}" loading="lazy" decoding="async" />
            </div>
            <div class="article-body">
              <div class="article-meta">
                <span>${item.date}</span>
                <span>${item.readTime}</span>
              </div>
              <h4>${item.title}</h4>
              <p>${item.excerpt}</p>
            </div>
          </article>
        </a>
      `
      )
      .join("");
  }

  if (reactionsHost && reactionCount) {
    const reactionsKey = `article:${article.id}:reactions`;
    const selectedKey = `article:${article.id}:reaction:selected`;
    const stored = JSON.parse(localStorage.getItem(reactionsKey) || "{}");
    const total = Object.values(stored).reduce((sum, val) => sum + val, 0);
    reactionCount.textContent = `${total} реакций`;
    let selected = localStorage.getItem(selectedKey);

    reactionsHost.querySelectorAll("button").forEach(button => {
      const key = button.dataset.reaction;
      const count = stored[key] || 0;
      const countEl = button.querySelector(".reaction-count");
      if (countEl) countEl.textContent = count;
      if (selected && selected === key) button.classList.add("active");
      button.setAttribute("aria-pressed", selected === key ? "true" : "false");
      button.addEventListener("click", () => {
        if (selected === key) {
          stored[key] = Math.max(0, (stored[key] || 0) - 1);
          if (countEl) countEl.textContent = stored[key];
          selected = null;
          localStorage.removeItem(selectedKey);
          button.classList.remove("active");
          button.setAttribute("aria-pressed", "false");
        } else {
          if (selected) {
            const prev = reactionsHost.querySelector(`[data-reaction="${selected}"]`);
            if (prev) {
              const prevCountEl = prev.querySelector(".reaction-count");
              stored[selected] = Math.max(0, (stored[selected] || 0) - 1);
              if (prevCountEl) prevCountEl.textContent = stored[selected];
              prev.classList.remove("active");
              prev.setAttribute("aria-pressed", "false");
            }
          }
          stored[key] = (stored[key] || 0) + 1;
          if (countEl) countEl.textContent = stored[key];
          selected = key;
          localStorage.setItem(selectedKey, key);
          button.classList.add("active");
          button.setAttribute("aria-pressed", "true");
        }
        localStorage.setItem(reactionsKey, JSON.stringify(stored));
        const updatedTotal = Object.values(stored).reduce((sum, val) => sum + val, 0);
        reactionCount.textContent = `${updatedTotal} реакций`;
      });
    });
  }

  if (ratingStars && ratingValue) {
    const ratingKey = `article:${article.id}:rating`;
    const current = Number(localStorage.getItem(ratingKey) || 0);
    const updateStars = value => {
      ratingStars.querySelectorAll("button").forEach(button => {
        const starValue = Number(button.dataset.rating);
        button.classList.toggle("active", starValue <= value);
      });
      ratingValue.textContent = value ? `Оценка: ${value} из 5` : "Оценка: —";
    };
    updateStars(current);
    ratingStars.querySelectorAll("button").forEach(button => {
      button.addEventListener("click", () => {
        const value = Number(button.dataset.rating);
        localStorage.setItem(ratingKey, String(value));
        updateStars(value);
      });
    });
  }
};

const initChat = () => {
  const form = qs("#chatForm");
  const input = qs("#chatInput");
  const messages = qs("#chatMessages");
  if (!form || !input || !messages) return;
  const telegramUser = form.dataset.telegram || "sigidingo";

  const appendMessage = (text, type) => {
    const row = document.createElement("div");
    row.className = `chat-row${type === "user" ? " user" : ""}`;
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${type}`;
    bubble.textContent = text;
    row.appendChild(bubble);
    messages.appendChild(row);
    messages.scrollTop = messages.scrollHeight;
  };

  const appendTelegramLink = text => {
    const row = document.createElement("div");
    row.className = "chat-row";
    const bubble = document.createElement("div");
    bubble.className = "chat-bubble bot";
    const link = document.createElement("a");
    link.className = "button ghost";
    link.textContent = "Отправить заявку в Telegram";
    const tgText = encodeURIComponent(text);
    link.href = `https://t.me/share/url?url=&text=${tgText}`;
    link.target = "_blank";
    link.rel = "noreferrer";
    bubble.appendChild(link);
    row.appendChild(bubble);
    messages.appendChild(row);
    messages.scrollTop = messages.scrollHeight;
  };

  form.addEventListener("submit", event => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    appendMessage(text, "user");
    input.value = "";

    const reply =
      "Спасибо! Уточните цель, аудиторию, срок и есть ли доступ к аналитике. Я подготовлю предложение.";
    appendMessage(reply, "bot");
    appendTelegramLink(`Запрос с сайта: ${text}. Контакт: @${telegramUser}`);
  });
};

const renderCaseStudy = () => {
  const caseKey = document.body.dataset.case;
  if (!caseKey || typeof caseStudies === "undefined") return;
  const data = caseStudies[caseKey];
  if (!data) return;

  const titleEl = qs("#caseTitle");
  const subtitleEl = qs("#caseSubtitle");
  const taskEl = qs("#caseTask");
  const whatDoneEl = qs("#caseWhatDone");
  const metricsEl = qs("#caseMetrics");
  const galleryEl = qs("#caseGallery");
  const linksEl = qs("#caseLinks");
  const tagsEl = qs("#caseTags");

  if (titleEl) titleEl.textContent = data.title;
  if (subtitleEl) subtitleEl.textContent = data.subtitle;
  if (taskEl) taskEl.textContent = data.task;

  if (whatDoneEl) {
    whatDoneEl.innerHTML = data.whatDone.map(item => `<li>${item}</li>`).join("");
  }

  if (metricsEl) {
    metricsEl.innerHTML = data.metrics.map(item => `<li>${item}</li>`).join("");
  }

  if (galleryEl) {
    galleryEl.innerHTML = data.images
      .map(
        img => `<img src="${img}" alt="${data.title}" loading="lazy" decoding="async" />`
      )
      .join("");
  }

  if (linksEl && data.links) {
    linksEl.innerHTML = data.links
      .map(
        link =>
          `<a class="button" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`
      )
      .join("");
  }

  if (tagsEl && data.tags) {
    tagsEl.innerHTML = data.tags.map(tag => `<span class="tag-pill">${tag}</span>`).join("");
  }
};

const initLightbox = () => {
  const lightbox = qs("#lightbox");
  if (!lightbox) return;
  const img = qs("img", lightbox);
  const prev = qs("[data-lightbox-prev]", lightbox);
  const next = qs("[data-lightbox-next]", lightbox);
  const galleryImages = qsa(".gallery img");
  if (!galleryImages.length) return;

  let current = 0;

  const open = index => {
    current = index;
    img.src = galleryImages[current].src;
    lightbox.classList.add("active");
  };

  galleryImages.forEach((image, index) => {
    image.addEventListener("click", () => open(index));
  });

  const change = direction => {
    current = (current + direction + galleryImages.length) % galleryImages.length;
    img.src = galleryImages[current].src;
  };

  prev.addEventListener("click", e => {
    e.stopPropagation();
    change(-1);
  });
  next.addEventListener("click", e => {
    e.stopPropagation();
    change(1);
  });
  lightbox.addEventListener("click", () => lightbox.classList.remove("active"));
};

const initCalculator = () => {
  const modal = qs("#calculatorModal");
  const openButtons = qsa("[data-open-calculator]");
  const closeBtn = qs("[data-close-calculator]");
  const form = qs("#calculatorForm");
  const result = qs("#calculatorResult");
  if (!modal || !form) return;

  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
      form.reset();
      if (result) result.textContent = "";
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    });
  }

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
    }
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    const total = calculateEstimate(new FormData(form));
    if (result) {
      result.textContent = `Предварительная стоимость: ${Math.round(total).toLocaleString("ru-RU")} руб. Оффер отправлен на вашу почту.`;
    }
  });
};

const calculateEstimate = formData => {
  const screens = Number(formData.get("screens")) || 1;
  const urgency = formData.get("urgency");
  const hasSeo = formData.get("seo");
  const hasAdaptive = formData.get("adaptive");

  let base = 65000;
  const projectType = formData.get("projectType");
  if (projectType === "landing") base = 45000;
  if (projectType === "app") base = 80000;
  if (projectType === "service") base = 90000;

  if (document.body.dataset.calculatorType === "design") {
    base += 15000;
  }

  let total = base + screens * 4500;
  if (hasSeo) total += 15000;
  if (hasAdaptive) total += 10000;
  if (urgency === "fast") total *= 1.2;
  return total;
};

const initCalculatorPage = () => {
  const form = qs("#calculatorPageForm");
  const result = qs("#calculatorPageResult");
  if (!form || !result) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const total = calculateEstimate(new FormData(form));
    result.textContent = `Предварительная стоимость: ${Math.round(total).toLocaleString("ru-RU")} руб. Оффер отправлен на вашу почту.`;
  });
};

const initCounters = () => {
  const counters = qsa("[data-count]");
  if (!counters.length) return;

  counters.forEach(counter => {
    const target = Number(counter.dataset.count) || 0;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));

    const update = () => {
      current += step;
      if (current >= target) {
        counter.textContent = `${target}+`;
        return;
      }
      counter.textContent = `${current}+`;
      requestAnimationFrame(update);
    };

    update();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-enter");
  requestAnimationFrame(() => {
    document.body.classList.add("page-loaded");
    document.body.classList.remove("page-enter");
  });

  initNav();
  initServiceWorker();
  initThemeToggle();
  initMobilePortfolioDefault();
  qsa(".section-title, .section-subtitle, .hero-title, .case-hero h1").forEach(el => {
    el.classList.add("reveal");
    el.dataset.scramble = "true";
  });
  initReveal();
  initChat();
  initModal();
  initModalTabs();
  initModalLightbox();
  initLightbox();
  initCalculator();
  initCalculatorPage();
  initCounters();
  initMetroTimeline();
  initArticleReveal();
  initArticleProgress();
  scheduleDataHydration();

  qsa('a[href^="case-"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      navigateWithTransition(link.getAttribute("href"));
    });
  });
});
