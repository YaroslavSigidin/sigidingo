(() => {
  const qs = (sel, scope = document) => scope.querySelector(sel);
  const qsa = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const toastRegion = qs("#toastRegion");
  const openers = new Map();
  const servicesData = [
    { id: "audit", title: "UX‑аудит интерфейса", goals: ["Конверсия", "Редизайн без риска", "Скорость запуска"], priceFrom: 45000, format: "2–7 дней" },
    { id: "landing", title: "Конверсионный лендинг / сайт", goals: ["Конверсия", "SEO-готовность", "Скорость запуска"], priceFrom: 120000, format: "2–4 недели" },
    { id: "marketing-site", title: "Многостраничный маркетинг‑сайт", goals: ["SEO-готовность", "Конверсия", "Скорость запуска"], priceFrom: 180000, format: "3–6 недель" },
    { id: "product-ui", title: "Дизайн web/app продукта", goals: ["Сложный B2B", "Редизайн без риска", "Скорость запуска"], priceFrom: 220000, format: "4–10 недель" },
    { id: "ux-flows", title: "UX‑потоки и прототипирование", goals: ["Сложный B2B", "Скорость запуска", "Редизайн без риска"], priceFrom: 90000, format: "1–3 недели" },
    { id: "design-system", title: "Дизайн‑система / UI‑кит", goals: ["Дизайн-система", "Скорость запуска", "Сложный B2B"], priceFrom: 260000, format: "3–8 недель" },
    { id: "retainer", title: "Поддержка команды (Retainer)", goals: ["Скорость запуска", "Редизайн без риска", "Сложный B2B"], priceFrom: 160000, format: "ежемесячно" },
    { id: "consulting", title: "UX‑консалтинг и ревью", goals: ["Редизайн без риска", "Скорость запуска", "Конверсия"], priceFrom: 12000, format: "почасовой" }
  ];
  const packagesData = [
    { id: "start", name: "Start · Audit & Plan", price: "от 45 000 ₽" },
    { id: "growth", name: "Growth · Design Sprint", price: "от 120 000 ₽" },
    { id: "scale", name: "Scale · Product UI", price: "от 220 000 ₽" },
    { id: "retainer", name: "Retainer · Design Partner", price: "от 160 000 ₽/мес" }
  ];
  const casesData = [
    { id: "saas", title: "SaaS‑кабинет: отчётность и сценарии", note: "пример — замените на реальные" },
    { id: "marketing", title: "Маркетинг‑сайт: рост заявок", note: "пример — замените на реальные" },
    { id: "ds", title: "Дизайн‑система: ускорение разработки", note: "пример — замените на реальные" }
  ];
  const testimonialsData = [
    { id: 1, role: "Head of Marketing", company: "(NDA)" },
    { id: 2, role: "Product Lead", company: "(NDA)" },
    { id: 3, role: "Founder", company: "(NDA)" },
    { id: 4, role: "PM", company: "(NDA)" },
    { id: 5, role: "Engineering Manager", company: "(NDA)" }
  ];
  const faqData = [
    { id: "timeline", topic: "Стоимость", question: "Сколько длится проект?" },
    { id: "start-small", topic: "Стоимость", question: "Можно ли начать с малого этапа?" },
    { id: "pricing", topic: "Стоимость", question: "Как формируется цена?" },
    { id: "process", topic: "Процесс", question: "Как выглядит процесс по неделям?" },
    { id: "revisions", topic: "Процесс", question: "Сколько правок включено?" },
    { id: "integration", topic: "Процесс", question: "Можно подключиться к действующей команде?" },
    { id: "nda", topic: "NDA", question: "Подписываете NDA?" },
    { id: "payment", topic: "NDA", question: "Как проходит оплата?" },
    { id: "whitelabel", topic: "NDA", question: "Возможен формат white-label?" },
    { id: "handoff", topic: "Handoff", question: "Что получит разработка в handoff?" },
    { id: "support", topic: "Handoff", question: "Помогаете после передачи?" },
    { id: "metrics", topic: "Handoff", question: "Какие метрики отслеживаем?" }
  ];

  const showToast = (message, type = "info") => {
    if (!toastRegion) return;
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toastRegion.appendChild(toast);
    window.setTimeout(() => {
      toast.remove();
    }, 3000);
  };

  const hydrateDataDrivenHints = () => {
    const proposalInterest = qs("#proposalInterest");
    if (proposalInterest) {
      servicesData.forEach(item => {
        const exists = qsa("option", proposalInterest).some(opt => opt.textContent.trim() === item.title);
        if (exists) return;
        const opt = document.createElement("option");
        opt.value = item.id;
        opt.textContent = item.title;
        proposalInterest.appendChild(opt);
      });
    }

    qsa(".service-card").forEach(card => {
      const title = normalize(card.querySelector("h3")?.textContent);
      const match = servicesData.find(item => normalize(item.title) === title);
      if (!match) return;
      card.dataset.serviceId = match.id;
      card.setAttribute("data-format", match.format);
    });

    qsa(".tag-filter").forEach(button => {
      const goal = button.dataset.goal;
      if (!goal || goal === "all") return;
      const count = servicesData.filter(item => item.goals.includes(goal)).length;
      button.setAttribute("aria-label", `${goal}: ${count} услуг`);
    });

    const packagesTitle = qs("#packagesTitle");
    if (packagesTitle && !packagesTitle.dataset.countApplied) {
      packagesTitle.dataset.countApplied = "true";
      packagesTitle.textContent = `${packagesTitle.textContent} · ${packagesData.length} формата`;
    }

    const casesTitle = qs("#casesTitle");
    if (casesTitle && !casesTitle.dataset.countApplied) {
      casesTitle.dataset.countApplied = "true";
      casesTitle.textContent = `${casesTitle.textContent} · ${casesData.length} кейса`;
    }

    const testimonialsTitle = qs("#testimonialsTitle");
    if (testimonialsTitle && !testimonialsTitle.dataset.countApplied) {
      testimonialsTitle.dataset.countApplied = "true";
      testimonialsTitle.textContent = `${testimonialsTitle.textContent} · ${testimonialsData.length} отзывов`;
    }

    const faqTitle = qs("#faqTitle");
    if (faqTitle && !faqTitle.dataset.countApplied) {
      faqTitle.dataset.countApplied = "true";
      faqTitle.textContent = `${faqTitle.textContent} · ${faqData.length} вопросов`;
    }
  };

  const normalize = value => String(value || "").toLowerCase().replace(/\s+/g, " ").trim();

  const initMermaid = () => {
    const boot = () => {
      if (!window.mermaid) return;
      window.mermaid.initialize({
        startOnLoad: true,
        theme: document.body.dataset.theme === "dark" ? "dark" : "default",
        securityLevel: "loose"
      });
    };

    if (window.mermaid) {
      boot();
      return;
    }

    window.addEventListener("load", () => boot(), { once: true });
  };

  const initSmoothAnchors = () => {
    qsa('a[href^="#"]').forEach(link => {
      link.addEventListener("click", event => {
        const id = link.getAttribute("href");
        if (!id || id === "#") return;
        const target = qs(id);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start"
        });
        history.pushState(null, "", id);
      });
    });
  };

  const initSectionObserver = () => {
    const nav = qs("#servicesSubnav");
    if (!nav) return;
    const links = qsa(".subnav-link", nav);
    if (!links.length) return;

    const byId = new Map();
    links.forEach(link => {
      const id = (link.getAttribute("href") || "").slice(1);
      if (id) byId.set(id, link);
    });

    const sections = [...byId.keys()].map(id => qs(`#${id}`)).filter(Boolean);
    if (!sections.length) return;

    const setActive = id => {
      links.forEach(link => {
        const active = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("is-active", active);
      });
    };

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.35, 0.7] }
    );

    sections.forEach(section => observer.observe(section));
  };

  const initGoalFilters = () => {
    const buttons = qsa(".tag-filter");
    const cards = qsa(".service-card");
    const shortcuts = qsa("[data-goal-shortcut]");
    const grid = qs("#serviceGrid");
    if (!buttons.length || !cards.length || !grid) return;

    const applyFilter = goal => {
      grid.classList.add("is-loading");

      buttons.forEach(btn => {
        const active = btn.dataset.goal === goal;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", active ? "true" : "false");
      });

      cards.forEach(card => {
        const goals = (card.dataset.goals || "").split(",").map(value => value.trim());
        const show = goal === "all" || goals.includes(goal);
        card.hidden = !show;
      });

      window.setTimeout(() => {
        grid.classList.remove("is-loading");
      }, 150);
    };

    buttons.forEach(btn => {
      btn.addEventListener("click", () => applyFilter(btn.dataset.goal || "all"));
    });

    shortcuts.forEach(shortcut => {
      shortcut.addEventListener("click", () => {
        const goal = shortcut.dataset.goalShortcut;
        if (goal) applyFilter(goal);
      });
    });
  };

  const openDialog = (dialog, opener) => {
    if (!dialog) return;
    if (opener) openers.set(dialog.id, opener);

    if (typeof dialog.showModal === "function") {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute("open", "open");
    }

    const firstFocusable = qs("input, select, textarea, button", dialog);
    if (firstFocusable) firstFocusable.focus();
  };

  const closeDialog = dialog => {
    if (!dialog) return;

    if (typeof dialog.close === "function" && dialog.open) {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }

    const opener = openers.get(dialog.id);
    if (opener && typeof opener.focus === "function") opener.focus();
  };

  const initDialogs = () => {
    qsa("[data-dialog-open]").forEach(trigger => {
      trigger.addEventListener("click", () => {
        const dialogId = trigger.getAttribute("data-dialog-open");
        const dialog = qs(`#${dialogId}`);
        openDialog(dialog, trigger);
      });
    });

    qsa("[data-dialog-close]").forEach(button => {
      button.addEventListener("click", () => {
        const dialogId = button.getAttribute("data-dialog-close");
        closeDialog(qs(`#${dialogId}`));
      });
    });

    qsa("dialog").forEach(dialog => {
      dialog.addEventListener("cancel", event => {
        event.preventDefault();
        closeDialog(dialog);
      });

      dialog.addEventListener("click", event => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;
        if (!isInDialog) closeDialog(dialog);
      });
    });
  };

  const applyValidationMessages = form => {
    if (!form) return;

    const fields = qsa("input, select, textarea", form);
    fields.forEach(field => {
      field.addEventListener("input", () => {
        field.setCustomValidity("");
      });

      field.addEventListener("invalid", () => {
        if (field.validity.valueMissing) {
          field.setCustomValidity("Заполните это поле, чтобы продолжить.");
        } else if (field.validity.typeMismatch && field.type === "email") {
          field.setCustomValidity("Введите корректный email, например name@company.com");
        } else {
          field.setCustomValidity("Проверьте значение поля.");
        }
      });
    });
  };

  const initForms = () => {
    const miniForm = qs("#miniContactForm");
    const briefForm = qs("#briefForm");
    const proposalForm = qs("#proposalForm");

    [miniForm, briefForm, proposalForm].forEach(form => applyValidationMessages(form));

    if (miniForm) {
      miniForm.addEventListener("submit", event => {
        event.preventDefault();
        if (!miniForm.reportValidity()) return;
        showToast("Запрос принят. Отвечу в течение 24 часов.", "success");
        miniForm.reset();
      });
    }

    if (briefForm) {
      briefForm.addEventListener("submit", event => {
        event.preventDefault();
        if (!briefForm.reportValidity()) return;
        showToast("Бриф отправлен. Подготовлю оценку и вернусь с планом.", "success");
        briefForm.reset();
        closeDialog(qs("#briefDialog"));
      });
    }

    if (proposalForm) {
      proposalForm.addEventListener("submit", event => {
        event.preventDefault();
        if (!proposalForm.reportValidity()) return;
        showToast("КП отправлено. Проверьте почту и папку Спам.", "success");
        proposalForm.reset();
        closeDialog(qs("#proposalDialog"));
      });
    }
  };

  const initCopyHelpers = () => {
    const preset = qs("#telegramPreset");
    const presetButton = qs("#copyPresetBtn");

    if (preset && presetButton) {
      presetButton.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(preset.textContent.trim());
          showToast("Шаблон сообщения скопирован.", "success");
        } catch {
          showToast("Не удалось скопировать. Выделите текст вручную.", "error");
        }
      });
    }

    qsa(".copy-code-btn").forEach(button => {
      button.addEventListener("click", async () => {
        const id = button.getAttribute("data-copy-target");
        const target = id ? qs(`#${id}`) : null;
        if (!target) return;

        try {
          await navigator.clipboard.writeText(target.textContent.trim());
          showToast("Код скопирован.", "success");
        } catch {
          showToast("Не удалось скопировать код.", "error");
        }
      });
    });
  };

  hydrateDataDrivenHints();
  initMermaid();
  initSmoothAnchors();
  initSectionObserver();
  initGoalFilters();
  initDialogs();
  initForms();
  initCopyHelpers();
})();
