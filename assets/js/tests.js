const quizData = [
  {
    question: "Какой принцип отвечает за то, чтобы пользователь всегда понимал, что происходит?",
    options: [
      "Согласованность",
      "Обратная связь",
      "Эстетика",
      "Минимализм"
    ],
    correct: 1
  },
  {
    question: "Что такое first click test?",
    options: [
      "Тест на скорость загрузки",
      "Проверка первого клика в сценарии",
      "Оценка кликабельности кнопок",
      "Сравнение двух цветовых схем"
    ],
    correct: 1
  },
  {
    question: "Какой размер тап‑таргета рекомендует Material Design?",
    options: ["32dp", "40dp", "48dp", "56dp"],
    correct: 2
  },
  {
    question: "Что такое JTBD?",
    options: [
      "Метод анализа пользовательских задач",
      "Список UI‑компонентов",
      "Система оценки дизайна",
      "Метрика удержания"
    ],
    correct: 0
  },
  {
    question: "Какой показатель лучше всего отражает активацию?",
    options: [
      "Количество регистраций",
      "Доля пользователей, достигших ценности",
      "Время на странице",
      "Общее число кликов"
    ],
    correct: 1
  },
  {
    question: "Что означает термин " +
      "\"progressive enhancement\"?",
    options: [
      "Сначала мобильная версия, потом десктоп",
      "Постепенное улучшение интерфейса для больших экранов",
      "Ускорение анимаций",
      "Использование анимаций вместо текста"
    ],
    correct: 1
  },
  {
    question: "Для чего нужна дизайн‑система?",
    options: [
      "Чтобы собирать UI из повторяемых компонентов",
      "Чтобы заменить исследования",
      "Чтобы ускорить разработку за счет анимаций",
      "Чтобы скрыть баги"
    ],
    correct: 0
  },
  {
    question: "Какой элемент должен быть наиболее заметным на экране?",
    options: [
      "Второстепенная ссылка",
      "Основное действие (CTA)",
      "Подвал",
      "Логотип"
    ],
    correct: 1
  },
  {
    question: "Что такое когнитивная нагрузка?",
    options: [
      "Скорость интерфейса",
      "Количество усилий для понимания",
      "Время на анимации",
      "Размер шрифта"
    ],
    correct: 1
  },
  {
    question: "Какой метод помогает понять, почему пользователи уходят?",
    options: [
      "Интервью и анализ сценариев",
      "Выбор цвета",
      "A/B тест без гипотез",
      "Увеличение количества баннеров"
    ],
    correct: 0
  }
];

const quizForm = document.getElementById("uxQuiz");
const quizBody = document.getElementById("quizBody");
const quizPanel = document.getElementById("quizPanel");
const quizResult = document.getElementById("quizResult");
const resultScore = document.getElementById("resultScore");
const resultLevel = document.getElementById("resultLevel");
const resultNote = document.getElementById("resultNote");
const quizWarning = document.getElementById("quizWarning");
const quizProgress = document.getElementById("quizProgress");
const quizReset = document.getElementById("quizReset");
const quizNext = document.getElementById("quizNext");
const quizPrev = document.getElementById("quizPrev");
const quizQuestionHeading = document.getElementById("quizQuestionHeading");

let currentIndex = 0;
const answers = Array(quizData.length).fill(null);

const updateProgress = () => {
  const answered = answers.filter(value => value !== null).length;
  quizProgress.textContent = `${answered}/${quizData.length}`;
};

const renderQuestion = () => {
  const item = quizData[currentIndex];
  const options = item.options
    .map(
      (opt, optIndex) => `
        <label class="quiz-option">
          <input type="radio" name="q${currentIndex}" value="${optIndex}" ${
            answers[currentIndex] === optIndex ? "checked" : ""
          } />\n          <span>${opt}</span>
        </label>\n      `
    )
    .join("");

  quizBody.innerHTML = `
    <fieldset class="quiz-item">
      <div class="quiz-options">
        ${options}
      </div>
    </fieldset>
  `;

  if (quizQuestionHeading) {
    quizQuestionHeading.textContent = `${currentIndex + 1}. ${item.question}`;
  }

  const selected = answers[currentIndex] !== null;
  if (quizNext) {
    quizNext.disabled = !selected;
    quizNext.textContent = currentIndex === quizData.length - 1 ? "Показать результат" : "Далее";
  }
  if (quizPrev) {
    quizPrev.disabled = currentIndex === 0;
  }

  quizBody.querySelectorAll("input[type=radio]").forEach(input => {
    input.addEventListener("change", event => {
      answers[currentIndex] = Number(event.target.value);
      quizWarning.textContent = "";
      updateProgress();
      if (quizNext) quizNext.disabled = false;
    });
  });
};

const getLevel = score => {
  if (score >= 8) {
    return {
      label: "Senior",
      note:
        "Отличный уровень. Ты уверенно ориентируешься в UX/UI и понимаешь продуктовые контексты."
    };
  }
  if (score >= 5) {
    return {
      label: "Middle",
      note:
        "Хорошая база. Есть понимание ключевых принципов, но стоит усилить практику и углубиться в исследования."
    };
  }
  return {
    label: "Junior",
    note:
      "Есть основы, но нужна практика. Начни с сценариев, исследований и понятной иерархии интерфейса."
  };
};

if (quizForm && quizBody) {
  renderQuestion();
  updateProgress();

  if (quizNext) {
    quizNext.addEventListener("click", () => {
      if (answers[currentIndex] === null) {
        quizWarning.textContent = "Выбери вариант ответа, чтобы продолжить.";
        return;
      }

      if (currentIndex < quizData.length - 1) {
        currentIndex += 1;
        renderQuestion();
        return;
      }

      const score = answers.reduce((acc, answer, idx) => {
        return acc + (answer === quizData[idx].correct ? 1 : 0);
      }, 0);

      const level = getLevel(score);
      resultScore.textContent = `Результат: ${score}/${quizData.length} правильных`;
      resultLevel.textContent = level.label;
      resultNote.textContent = level.note;
      if (quizPanel) quizPanel.classList.add("is-hidden");
      quizResult.classList.add("is-ready");
      quizResult.classList.remove("is-hidden");
      quizNext.disabled = true;
    });
  }

  if (quizPrev) {
    quizPrev.addEventListener("click", () => {
      if (currentIndex === 0) return;
      currentIndex -= 1;
      quizWarning.textContent = "";
      renderQuestion();
    });
  }

  if (quizReset) {
    quizReset.addEventListener("click", () => {
      quizForm.reset();
      quizWarning.textContent = "";
      resultScore.textContent = "Пройди тест, чтобы увидеть уровень.";
      resultLevel.textContent = "";
      resultNote.textContent = "";
      quizResult.classList.remove("is-ready");
      quizResult.classList.add("is-hidden");
      if (quizPanel) quizPanel.classList.remove("is-hidden");
      answers.fill(null);
      currentIndex = 0;
      renderQuestion();
      updateProgress();
    });
  }
}
