(() => {
  const detailsData = {
    "ux-audit": {
      title: "UX-аудит интерфейса",
      lead: "Подробный аудит для выявления точек потерь в ключевых пользовательских сценариях и подготовки конкретного плана улучшений.",
      timeline: "Срок: 2-7 дней",
      price: "Стоимость: от 45 000 ₽",
      orderText: "Хочу заказать UX-аудит",
      tasks: [
        "Разобрать текущие сценарии: путь пользователя, точки отказа, навигацию и структуру.",
        "Проверить интерфейс по эвристикам, бизнес-целям и типовым UX-ошибкам.",
        "Определить зоны быстрых побед и зоны стратегической переработки."
      ],
      deliverables: [
        "Документ с проблемами и приоритетами (high/medium/low).",
        "Карта сценариев с комментариями по каждому критичному шагу.",
        "Пошаговый roadmap внедрения с порядком работ."
      ],
      outcome: [
        "Снижение потерь воронки на проблемных шагах.",
        "Ускорение принятия решений по доработкам.",
        "Прозрачный список задач для команды продукта и разработки."
      ]
    },
    "landing-site": {
      title: "Лендинг / маркетинг-сайт",
      lead: "Создание структуры и визуала страницы под конверсию, рекламный трафик и понятную коммуникацию оффера.",
      timeline: "Срок: 2-4 недели",
      price: "Стоимость: от 120 000 ₽",
      orderText: "Хочу заказать лендинг или сайт",
      tasks: [
        "Собрать структуру страницы под целевое действие и сегменты аудитории.",
        "Проработать контентные блоки и приоритеты внимания на экране.",
        "Сделать UI с учетом адаптива и логики взаимодействия."
      ],
      deliverables: [
        "Архитектура и прототип ключевых экранов.",
        "Финальные макеты для desktop/mobile.",
        "Набор комментариев для разработки и контента."
      ],
      outcome: [
        "Повышение конверсии в заявку или целевое действие.",
        "Понятный оффер и лучшее восприятие ценности продукта.",
        "Готовность к быстрому запуску с минимальными правками."
      ]
    },
    "product-ui": {
      title: "Product UX/UI (Web/App)",
      lead: "Проектирование сложных продуктовых интерфейсов с акцентом на логику, роли, состояния и масштабируемость.",
      timeline: "Срок: 4-10 недель",
      price: "Стоимость: от 220 000 ₽",
      orderText: "Хочу заказать Product UX/UI",
      tasks: [
        "Разложить ключевые потоки пользователей и роли в системе.",
        "Проработать состояния, ошибки, edge-cases и рабочие сценарии.",
        "Сделать интерфейсную систему, удобную для дальнейшего роста продукта."
      ],
      deliverables: [
        "User flows и карта модулей.",
        "High-fidelity макеты экранов с состояниями.",
        "Handoff-пакет и сопровождение внедрения."
      ],
      outcome: [
        "Снижение UX-ошибок в сложных сценариях.",
        "Более стабильный и предсказуемый интерфейс для пользователей.",
        "Ускорение разработки за счет ясной логики и структуры."
      ]
    },
    "design-system": {
      title: "Дизайн-система / UI-кит",
      lead: "Построение единого визуального и компонентного слоя, который снижает хаос и ускоряет выпуск новых экранов.",
      timeline: "Срок: 3-8 недель",
      price: "Стоимость: от 260 000 ₽",
      orderText: "Хочу заказать дизайн-систему",
      tasks: [
        "Определить базовые токены, сетки и правила стилистики.",
        "Собрать библиотеку компонентов и вариантов состояний.",
        "Согласовать принципы использования системы в команде."
      ],
      deliverables: [
        "UI-kit/дизайн-система с компонентами.",
        "Правила использования и примеры внедрения.",
        "Материалы для handoff и QA-контроля качества."
      ],
      outcome: [
        "Снижение количества визуальных расхождений между экранами.",
        "Ускорение проектирования и разработки новых функций.",
        "Повышение качества и единообразия продукта."
      ]
    },
    "mobile-ui": {
      title: "UI мобильного приложения",
      lead: "Проработка мобильных сценариев и интерфейсов с учетом платформенных паттернов и ограничений устройств.",
      timeline: "Срок: 3-7 недель",
      price: "Стоимость: от 170 000 ₽",
      orderText: "Хочу заказать UI мобильного приложения",
      tasks: [
        "Собрать ключевые мобильные сценарии и приоритеты экранов.",
        "Сделать интерфейс с учетом поведения iOS и Android.",
        "Упростить действия пользователя до понятных шагов."
      ],
      deliverables: [
        "Полный набор макетов мобильных экранов.",
        "Состояния элементов и сценарии ошибок.",
        "Гайд по компонентам и интерактиву."
      ],
      outcome: [
        "Рост удобства и скорости использования приложения.",
        "Снижение числа пользовательских ошибок.",
        "Более чистый и понятный мобильный опыт."
      ]
    },
    "ux-copy": {
      title: "UX-copy и тексты интерфейса",
      lead: "Создание текстов внутри интерфейса, которые снижают неопределенность и помогают пользователю дойти до целевого действия.",
      timeline: "Срок: 3-10 дней",
      price: "Стоимость: от 35 000 ₽",
      orderText: "Хочу заказать UX-copy",
      tasks: [
        "Проверить текущие тексты и точки непонимания у пользователя.",
        "Сформировать единый стиль сообщений, кнопок и подсказок.",
        "Переписать ключевые блоки с фокусом на ясность и действие."
      ],
      deliverables: [
        "Новый copy для ключевых сценариев.",
        "Гайд по tone of voice для интерфейса.",
        "Список формулировок для ошибок, success и CTA."
      ],
      outcome: [
        "Снижение количества вопросов и отказов на форме.",
        "Более предсказуемая навигация по интерфейсу.",
        "Рост конверсии за счет ясной коммуникации."
      ]
    },
    redesign: {
      title: "Редизайн без просадки",
      lead: "Обновление визуала и UX без потери текущих метрик через аккуратную поэтапную миграцию.",
      timeline: "Срок: 2-6 недель",
      price: "Стоимость: от 140 000 ₽",
      orderText: "Хочу заказать редизайн",
      tasks: [
        "Оценить риски редизайна и критичные пользовательские сценарии.",
        "Подготовить поэтапный план обновления интерфейса.",
        "Сохранить рабочую логику там, где она влияет на конверсию."
      ],
      deliverables: [
        "Стратегия редизайна и приоритеты этапов.",
        "Новые макеты с учетом текущих бизнес-ограничений.",
        "План релиза и контроля метрик после запуска."
      ],
      outcome: [
        "Обновленный визуал без резкой потери эффективности.",
        "Управляемый процесс изменений для команды.",
        "Снижение рисков при переходе на новый интерфейс."
      ]
    },
    "handoff-qa": {
      title: "Handoff и QA-сопровождение",
      lead: "Поддержка команды разработки при внедрении дизайна, чтобы итоговый интерфейс соответствовал задумке и не ломал UX.",
      timeline: "Срок: 1-4 недели",
      price: "Стоимость: от 60 000 ₽",
      orderText: "Хочу заказать handoff и QA",
      tasks: [
        "Подготовить понятную передачу макетов и логики в разработку.",
        "Отвечать на вопросы команды по сценариям и состояниям.",
        "Проверять реализованные экраны и фиксировать расхождения."
      ],
      deliverables: [
        "Handoff-пакет со спецификациями.",
        "Список QA-замечаний по результатам проверок.",
        "Рекомендации по доведению интерфейса до целевого качества."
      ],
      outcome: [
        "Меньше недопониманий между дизайном и разработкой.",
        "Сокращение количества правок после релиза.",
        "Более качественный финальный интерфейс."
      ]
    }
  };

  const modal = document.getElementById("serviceModal");
  const modalTitle = document.getElementById("serviceModalTitle");
  const modalLead = document.getElementById("serviceModalLead");
  const modalTasks = document.getElementById("serviceModalTasks");
  const modalDeliverables = document.getElementById("serviceModalDeliverables");
  const modalOutcome = document.getElementById("serviceModalOutcome");
  const modalTimeline = document.getElementById("serviceModalTimeline");
  const modalPrice = document.getElementById("serviceModalPrice");
  const modalOrder = document.getElementById("serviceModalOrder");
  let isModalClosing = false;
  let closeTimerId = null;

  const renderList = (target, list) => {
    target.innerHTML = "";
    list.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      target.appendChild(li);
    });
  };

  const openModal = serviceId => {
    const data = detailsData[serviceId];
    if (!data || !modal) return;

    modalTitle.textContent = data.title;
    modalLead.textContent = data.lead;
    modalTimeline.textContent = data.timeline;
    modalPrice.textContent = data.price;
    modalOrder.href = `https://t.me/sigidingo?text=${encodeURIComponent(data.orderText)}`;

    renderList(modalTasks, data.tasks);
    renderList(modalDeliverables, data.deliverables);
    renderList(modalOutcome, data.outcome);

    if (closeTimerId) {
      clearTimeout(closeTimerId);
      closeTimerId = null;
    }

    isModalClosing = false;
    modal.classList.remove("is-closing");
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    requestAnimationFrame(() => {
      modal.classList.add("is-open");
    });
  };

  const closeModal = () => {
    if (!modal || modal.hidden || isModalClosing) return;

    const finalizeClose = () => {
      modal.hidden = true;
      modal.setAttribute("aria-hidden", "true");
      modal.classList.remove("is-closing");
      document.body.classList.remove("modal-open");
      isModalClosing = false;
    };

    isModalClosing = true;
    modal.classList.remove("is-open");
    modal.classList.add("is-closing");

    const onTransitionEnd = event => {
      if (event.target !== modal) return;
      modal.removeEventListener("transitionend", onTransitionEnd);
      if (closeTimerId) {
        clearTimeout(closeTimerId);
        closeTimerId = null;
      }
      finalizeClose();
    };

    modal.addEventListener("transitionend", onTransitionEnd);
    closeTimerId = setTimeout(() => {
      modal.removeEventListener("transitionend", onTransitionEnd);
      closeTimerId = null;
      finalizeClose();
    }, 320);
  };

  document.querySelectorAll(".service-mini-card[data-service]").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.service));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(card.dataset.service);
      }
    });
  });

  document.querySelectorAll("[data-close-service-modal]").forEach(button => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal && !modal.hidden) {
      closeModal();
    }
  });

  const faqSearch = document.getElementById("faqSearch");
  const faqEntries = Array.from(document.querySelectorAll(".faq-entry"));
  const faqFilterBtns = Array.from(document.querySelectorAll("[data-faq-filter]"));
  const faqExpandAll = document.getElementById("faqExpandAll");
  const faqCollapseAll = document.getElementById("faqCollapseAll");
  const faqEmpty = document.getElementById("faqEmpty");

  let currentCategory = "all";

  const applyFaqFilter = () => {
    const query = String(faqSearch?.value || "").trim().toLowerCase();
    let visibleCount = 0;

    faqEntries.forEach(entry => {
      const byCategory = currentCategory === "all" || entry.dataset.category === currentCategory;
      const bySearch = !query || entry.textContent.toLowerCase().includes(query);
      const visible = byCategory && bySearch;

      entry.style.display = visible ? "block" : "none";
      if (!visible) entry.open = false;
      if (visible) visibleCount += 1;
    });

    if (faqEmpty) faqEmpty.hidden = visibleCount !== 0;
  };

  faqFilterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      faqFilterBtns.forEach(x => x.classList.remove("is-active"));
      btn.classList.add("is-active");
      currentCategory = btn.dataset.faqFilter;
      applyFaqFilter();
    });
  });

  faqSearch?.addEventListener("input", applyFaqFilter);

  faqExpandAll?.addEventListener("click", () => {
    faqEntries.forEach(entry => {
      if (entry.style.display !== "none") entry.open = true;
    });
  });

  faqCollapseAll?.addEventListener("click", () => {
    faqEntries.forEach(entry => {
      entry.open = false;
    });
  });

  faqEntries.forEach(entry => {
    entry.addEventListener("toggle", () => {
      if (!entry.open) return;
      faqEntries.forEach(other => {
        if (other !== entry) other.open = false;
      });
    });
  });
})();
