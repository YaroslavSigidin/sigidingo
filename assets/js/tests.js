(() => {
  const quizSets = {
    "uxui-core": {
      id: "uxui-core",
      title: "UX/UI Core",
      description: "10 вопросов по UX/UI и продуктовым решениям",
      questions: [
        {
          id: "q1",
          question: "Какой принцип отвечает за то, чтобы пользователь всегда понимал, что происходит?",
          options: ["Согласованность", "Обратная связь", "Эстетика", "Минимализм"],
          correct: 1,
          explanation: "Обратная связь помогает пользователю понимать состояние системы в реальном времени.",
          topic: "ux"
        },
        {
          id: "q2",
          question: "Что такое first click test?",
          options: [
            "Тест на скорость загрузки",
            "Проверка первого клика в сценарии",
            "Оценка кликабельности кнопок",
            "Сравнение цветовых схем"
          ],
          correct: 1,
          explanation: "First click test показывает, куда пользователь кликает первым в задаче.",
          topic: "research"
        },
        {
          id: "q3",
          question: "Какой размер тап‑таргета рекомендует Material Design?",
          options: ["32dp", "40dp", "48dp", "56dp"],
          correct: 2,
          explanation: "48dp — базовая рекомендация для удобного тапа на мобильных устройствах.",
          topic: "ui"
        },
        {
          id: "q4",
          question: "Что такое JTBD?",
          options: [
            "Метод анализа пользовательских задач",
            "Список UI‑компонентов",
            "Система оценки дизайна",
            "Метрика удержания"
          ],
          correct: 0,
          explanation: "Jobs To Be Done помогает понять задачу, которую пользователь " +
            "нанимает продукт решать.",
          topic: "product"
        },
        {
          id: "q5",
          question: "Какой показатель лучше всего отражает активацию?",
          options: [
            "Количество регистраций",
            "Доля пользователей, достигших ценности",
            "Время на странице",
            "Общее число кликов"
          ],
          correct: 1,
          explanation: "Activation фиксирует долю пользователей, дошедших до первого ценного действия.",
          topic: "metrics"
        },
        {
          id: "q6",
          question: "Что означает progressive enhancement?",
          options: [
            "Сначала мобильная версия, потом десктоп",
            "Постепенное улучшение интерфейса поверх доступной базовой версии",
            "Ускорение анимаций",
            "Использование анимаций вместо текста"
          ],
          correct: 1,
          explanation: "Базовая версия должна работать без JS, а JS — только улучшать опыт.",
          topic: "frontend"
        },
        {
          id: "q7",
          question: "Для чего нужна дизайн‑система?",
          options: [
            "Чтобы собирать UI из повторяемых компонентов",
            "Чтобы заменить исследования",
            "Чтобы ускорить разработку за счёт анимаций",
            "Чтобы скрыть баги"
          ],
          correct: 0,
          explanation: "Design system повышает консистентность и скорость разработки.",
          topic: "system"
        },
        {
          id: "q8",
          question: "Какой элемент должен быть наиболее заметным на экране?",
          options: ["Второстепенная ссылка", "Основное действие (CTA)", "Подвал", "Логотип"],
          correct: 1,
          explanation: "Главное действие должно иметь наивысший визуальный приоритет.",
          topic: "ui"
        },
        {
          id: "q9",
          question: "Что такое когнитивная нагрузка?",
          options: [
            "Скорость интерфейса",
            "Количество усилий для понимания",
            "Время на анимации",
            "Размер шрифта"
          ],
          correct: 1,
          explanation: "Это количество ментальных усилий пользователя для выполнения задачи.",
          topic: "ux"
        },
        {
          id: "q10",
          question: "Какой метод помогает понять, почему пользователи уходят?",
          options: [
            "Интервью и анализ сценариев",
            "Выбор цвета",
            "A/B тест без гипотез",
            "Увеличение числа баннеров"
          ],
          correct: 0,
          explanation: "Исследования и сценарный анализ выявляют реальные причины оттока.",
          topic: "research"
        }
      ]
    }
  };

  const badges = [
    {
      id: "starter",
      title: "Starter",
      check: ({ answered }) => answered >= 1
    },
    {
      id: "streak3",
      title: "Streak 3",
      check: ({ bestStreak }) => bestStreak >= 3
    },
    {
      id: "precision",
      title: "Precision 80%",
      check: ({ accuracy }) => accuracy >= 0.8
    }
  ];

  const levelByScore = score => {
    if (score >= 9) return "Senior";
    if (score >= 7) return "Middle+";
    if (score >= 5) return "Middle";
    return "Starter";
  };

  const qs = (sel, scope = document) => scope.querySelector(sel);
  const qsa = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

  const state = {
    variant: "A",
    currentQuizId: "uxui-core",
    currentIndex: 0,
    answers: [],
    answeredCount: 0,
    points: 0,
    streak: 0,
    bestStreak: 0,
    score: 0,
    level: "Starter",
    earnedBadges: new Set(),
    startedAt: 0
  };

  const el = {
    quizTitle: qs("#quizTitle"),
    quizStepLabel: qs("#quizStepLabel"),
    progressBar: qs("#quizProgressBar"),
    progressCaption: qs("#quizProgressCaption"),
    quizHeading: qs("#quizQuestionHeading"),
    quizOptions: qs("#quizOptions"),
    quizFeedback: qs("#quizFeedback"),
    quizNext: qs("#quizNext"),
    quizPrev: qs("#quizPrev"),
    quizResult: qs("#quizResult"),
    resultScoreText: qs("#resultScoreText"),
    resultLevelText: qs("#resultLevelText"),
    resultInsight: qs("#resultInsight"),
    resultBadges: qs("#resultBadges"),
    quizReset: qs("#quizReset"),
    pointsValue: qs("#pointsValue"),
    streakValue: qs("#streakValue"),
    levelValue: qs("#levelValue"),
    badgeGrid: qs("#badgeGrid"),
    recommendationsList: qs("#recommendationsList"),
    toastRegion: qs("#toastRegion"),
    playerName: qs("#playerName"),
    playerGreeting: qs("#playerGreeting"),
    savePlayerName: qs("#savePlayerName"),
    catalogCards: qsa(".test-card"),
    selectQuizButtons: qsa(".select-quiz"),
    variantLabel: qs("#abVariantLabel")
  };

  const activeQuiz = () => quizSets[state.currentQuizId];

  const showToast = message => {
    if (!el.toastRegion) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    el.toastRegion.appendChild(toast);
    setTimeout(() => toast.remove(), 2600);
  };

  const track = (name, params = {}) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });

    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }

    if (typeof window.ym === "function") {
      try {
        window.ym(106779298, "reachGoal", name, params);
      } catch (error) {
        // no-op
      }
    }
  };

  const assignVariant = () => {
    const params = new URLSearchParams(window.location.search);
    const queryVariant = params.get("variant");
    const storedVariant = localStorage.getItem("quiz_variant");
    const valid = value => value === "A" || value === "B";

    if (valid(queryVariant)) {
      state.variant = queryVariant;
    } else if (valid(storedVariant)) {
      state.variant = storedVariant;
    } else {
      state.variant = Math.random() < 0.5 ? "A" : "B";
    }

    localStorage.setItem("quiz_variant", state.variant);
    document.body.classList.toggle("ab-b", state.variant === "B");
    if (el.variantLabel) el.variantLabel.textContent = `Текущий вариант: ${state.variant}`;
    track("variant_assigned", { variant: state.variant });
  };

  const loadPlayer = () => {
    const savedName = (localStorage.getItem("quiz_player_name") || "").trim();
    if (savedName && el.playerName) el.playerName.value = savedName;
    if (savedName && el.playerGreeting) {
      el.playerGreeting.textContent = `Привет, ${savedName}! Готов к новому тесту?`;
    }
  };

  const savePlayer = () => {
    const value = (el.playerName?.value || "").trim();
    if (!value) {
      localStorage.removeItem("quiz_player_name");
      if (el.playerGreeting) el.playerGreeting.textContent = "Привет! Готов пройти новый тест?";
      showToast("Имя очищено.");
      return;
    }
    localStorage.setItem("quiz_player_name", value);
    if (el.playerGreeting) el.playerGreeting.textContent = `Привет, ${value}! Готов к новому тесту?`;
    showToast("Имя сохранено.");
  };

  const setQuiz = quizId => {
    if (!quizSets[quizId]) return;
    state.currentQuizId = quizId;
    el.catalogCards.forEach(card => card.classList.toggle("is-active", card.dataset.quiz === quizId));

    if (quizId !== "uxui-core") {
      showToast("Этот тест скоро появится. Сейчас доступен UX/UI Core.");
      state.currentQuizId = "uxui-core";
      el.catalogCards.forEach(card => card.classList.toggle("is-active", card.dataset.quiz === "uxui-core"));
    }

    resetQuiz(false);
  };

  const updateSidebar = () => {
    if (el.pointsValue) el.pointsValue.textContent = String(state.points);
    if (el.streakValue) el.streakValue.textContent = String(state.streak);
    if (el.levelValue) el.levelValue.textContent = state.level;

    badges.forEach(badge => {
      const node = qs(`[data-badge="${badge.id}"]`, el.badgeGrid || document);
      if (!node) return;
      node.classList.toggle("is-earned", state.earnedBadges.has(badge.id));
    });
  };

  const updateProgress = () => {
    const total = activeQuiz().questions.length;
    const answered = state.answers.filter(v => v !== null).length;
    const percent = Math.round((answered / total) * 100);
    if (el.progressBar) el.progressBar.style.width = `${percent}%`;
    if (el.progressCaption) el.progressCaption.textContent = `${percent}% завершено`;
    if (el.quizStepLabel) el.quizStepLabel.textContent = `Вопрос ${state.currentIndex + 1} из ${total}`;
  };

  const setFeedback = (message, type) => {
    if (!el.quizFeedback) return;
    el.quizFeedback.textContent = message || "";
    el.quizFeedback.classList.remove("success", "error");
    if (type) el.quizFeedback.classList.add(type);
  };

  const renderQuestion = () => {
    const quiz = activeQuiz();
    const item = quiz.questions[state.currentIndex];
    const selected = state.answers[state.currentIndex];

    if (el.quizTitle) el.quizTitle.textContent = quiz.title;
    if (el.quizHeading) el.quizHeading.textContent = item.question;

    if (el.quizOptions) {
      el.quizOptions.innerHTML = item.options
        .map((option, index) => {
          const isChecked = selected === index;
          return `
            <label class="quiz-option" data-index="${index}">
              <input type="radio" name="quizOption" value="${index}" ${isChecked ? "checked" : ""} />
              <span>${option}</span>
            </label>
          `;
        })
        .join("");
    }

    const optionNodes = qsa(".quiz-option", el.quizOptions || document);
    optionNodes.forEach(node => {
      node.addEventListener("click", () => {
        const index = Number(node.dataset.index);
        state.answers[state.currentIndex] = index;
        if (el.quizNext) el.quizNext.disabled = false;
        setFeedback("Ответ выбран. Нажмите «Далее».", null);
      });
    });

    if (el.quizPrev) el.quizPrev.disabled = state.currentIndex === 0;
    if (el.quizNext) {
      el.quizNext.disabled = selected === null;
      el.quizNext.textContent = state.currentIndex === quiz.questions.length - 1 ? "Показать результат" : "Далее";
    }

    updateProgress();
  };

  const updateBadges = () => {
    const answered = state.answers.filter(value => value !== null).length;
    const accuracy = answered ? state.score / answered : 0;

    badges.forEach(badge => {
      if (state.earnedBadges.has(badge.id)) return;
      if (badge.check({ answered, bestStreak: state.bestStreak, accuracy })) {
        state.earnedBadges.add(badge.id);
        track("badge_earned", { badge_id: badge.id, quiz_id: state.currentQuizId });
        showToast(`Бейдж получен: ${badge.title}`);
      }
    });
  };

  const buildRecommendations = topicScore => {
    const entries = Object.entries(topicScore);
    entries.sort((a, b) => a[1] - b[1]);

    const byTopic = {
      research: "Статья: UX Research Lite — быстрые исследования в продукте.",
      metrics: "Статья: Product Metrics — как связать UX и бизнес-метрики.",
      system: "Статья: Design System Scale — как масштабировать UI без хаоса.",
      frontend: "Статья: Design to CSS — handoff и реализация без потерь.",
      ux: "Статья: UX Audit Checklist — 60 пунктов для проверки интерфейса.",
      ui: "Статья: Interface Fonts Selection и визуальная иерархия CTA.",
      product: "Статья: JTBD UX/UI Practice — формулировка гипотез под задачу."
    };

    const weakTopics = entries.filter(([, value]) => value < 0.7).slice(0, 3).map(([topic]) => byTopic[topic]).filter(Boolean);
    if (!weakTopics.length) {
      return [
        "Сильный результат. Попробуйте углубить навыки через кейсы в Portfolio.",
        "Переходите в блог и берите advanced статьи по аналитике и дизайн-системам.",
        "Повторите тест через неделю для проверки прогресса."
      ];
    }

    return weakTopics;
  };

  const showResult = () => {
    const quiz = activeQuiz();
    const total = quiz.questions.length;
    const score = state.answers.reduce((sum, answer, idx) => sum + (answer === quiz.questions[idx].correct ? 1 : 0), 0);
    state.score = score;
    state.level = levelByScore(score);
    updateBadges();

    const topicTotals = {};
    const topicHits = {};

    quiz.questions.forEach((q, idx) => {
      topicTotals[q.topic] = (topicTotals[q.topic] || 0) + 1;
      topicHits[q.topic] = (topicHits[q.topic] || 0) + (state.answers[idx] === q.correct ? 1 : 0);
    });

    const topicScore = {};
    Object.keys(topicTotals).forEach(topic => {
      topicScore[topic] = topicHits[topic] / topicTotals[topic];
    });

    if (el.resultScoreText) el.resultScoreText.textContent = `${score}/${total}`;
    if (el.resultLevelText) el.resultLevelText.textContent = `Уровень: ${state.level}`;
    if (el.resultInsight) {
      el.resultInsight.textContent =
        score >= 8
          ? "Сильный уровень. Можно переходить к продвинутым кейсам и A/B-экспериментам."
          : "Есть потенциал роста. Проверьте рекомендации и повторите тест после изучения материалов.";
    }

    if (el.resultBadges) {
      el.resultBadges.innerHTML = [...state.earnedBadges].map(id => `<span class="badge-item is-earned">${id}</span>`).join("") || "<span class=\"badge-item\">Пока без бейджей</span>";
    }

    const recommendations = buildRecommendations(topicScore);
    if (el.recommendationsList) {
      el.recommendationsList.innerHTML = recommendations.map(item => `<li>${item}</li>`).join("");
    }

    if (el.quizResult) el.quizResult.classList.remove("is-hidden");
    track("quiz_complete", {
      quiz_id: state.currentQuizId,
      score,
      total_questions: total,
      level: state.level,
      variant: state.variant,
      duration_sec: Math.round((Date.now() - state.startedAt) / 1000)
    });
  };

  const evaluateCurrentAnswer = () => {
    const quiz = activeQuiz();
    const item = quiz.questions[state.currentIndex];
    const selected = state.answers[state.currentIndex];

    if (selected === null || selected === undefined) {
      setFeedback("Выберите вариант ответа, чтобы продолжить.", "error");
      return false;
    }

    const isCorrect = selected === item.correct;
    const optionNodes = qsa(".quiz-option", el.quizOptions || document);
    optionNodes.forEach((node, idx) => {
      node.classList.remove("is-correct", "is-wrong");
      if (idx === item.correct) node.classList.add("is-correct");
      if (idx === selected && !isCorrect) node.classList.add("is-wrong");
    });

    if (isCorrect) {
      state.points += 10;
      state.streak += 1;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
      setFeedback(`Верно. ${item.explanation}`, "success");
    } else {
      state.points = Math.max(0, state.points - 3);
      state.streak = 0;
      setFeedback(`Неверно. ${item.explanation}`, "error");
    }

    state.answeredCount += 1;
    state.score = state.answers.reduce((sum, answer, idx) => sum + (answer === quiz.questions[idx].correct ? 1 : 0), 0);
    state.level = levelByScore(state.score);

    updateBadges();
    updateSidebar();

    const answerPayload = {
      quiz_id: state.currentQuizId,
      question_id: item.id,
      is_correct: isCorrect,
      index: state.currentIndex,
      variant: state.variant
    };
    track("quiz_question_answered", answerPayload);
    track("quiz_answer", answerPayload);

    return true;
  };

  const nextQuestion = () => {
    const quiz = activeQuiz();
    const ok = evaluateCurrentAnswer();
    if (!ok) return;

    if (state.currentIndex === quiz.questions.length - 1) {
      showResult();
      if (el.quizNext) el.quizNext.disabled = true;
      return;
    }

    setTimeout(() => {
      state.currentIndex += 1;
      setFeedback("", null);
      renderQuestion();
    }, state.variant === "B" ? 220 : 140);
  };

  const prevQuestion = () => {
    if (state.currentIndex === 0) return;
    state.currentIndex -= 1;
    setFeedback("", null);
    renderQuestion();
  };

  const resetQuiz = (trackReset = true) => {
    const quiz = activeQuiz();
    state.currentIndex = 0;
    state.answers = Array(quiz.questions.length).fill(null);
    state.answeredCount = 0;
    state.points = 0;
    state.streak = 0;
    state.bestStreak = 0;
    state.score = 0;
    state.level = "Starter";
    state.earnedBadges = new Set();
    state.startedAt = Date.now();

    if (el.quizResult) el.quizResult.classList.add("is-hidden");
    if (el.quizNext) el.quizNext.disabled = true;

    updateSidebar();
    renderQuestion();

    if (trackReset) {
      track("quiz_restart", { quiz_id: state.currentQuizId, variant: state.variant });
    } else {
      track("quiz_start", { quiz_id: state.currentQuizId, variant: state.variant });
    }
  };

  const bindEvents = () => {
    el.selectQuizButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const card = btn.closest(".test-card");
        if (!card) return;
        setQuiz(card.dataset.quiz);
        const target = qs("#quizApp");
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    if (el.quizNext) el.quizNext.addEventListener("click", nextQuestion);
    if (el.quizPrev) el.quizPrev.addEventListener("click", prevQuestion);
    if (el.quizReset) el.quizReset.addEventListener("click", () => resetQuiz(true));
    if (el.savePlayerName) el.savePlayerName.addEventListener("click", savePlayer);
  };

  assignVariant();
  loadPlayer();
  bindEvents();
  resetQuiz(false);
})();
