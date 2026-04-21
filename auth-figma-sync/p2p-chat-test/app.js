const state = {
  online: true,
  filter: "all",
  newBelow: 0,
  pendingQueue: [],
  messages: [
    { id: "m1", type: "system", text: "Сделка открыта. Ожидается перевод от покупателя.", time: "12:04", important: true },
    { id: "m2", type: "incoming", text: "Здравствуйте. Готов подтвердить после поступления.", time: "12:06" },
    { id: "m3", type: "outgoing", text: "Принял, переведу в течение 5 минут.", time: "12:07", status: "delivered" },
    { id: "m4", type: "incoming", text: "Реквизиты актуальны, ожидаю перевод.", time: "12:08" },
    { id: "m5", type: "system", text: "Авто-проверка anti-fraud: высокий риск не обнаружен.", time: "12:09" },
    { id: "m6", type: "incoming", text: "Если будет задержка банка, напишите в чат.", time: "12:10" },
    { id: "m7", type: "error", text: "Не удалось доставить вложение " + "\"чек.png\"", time: "12:11" },
    { id: "m8", type: "incoming", text: "Ок, на связи.", time: "12:12" }
  ]
};

const ui = {
  list: document.getElementById("messagesList"),
  frame: document.getElementById("messagesFrame"),
  composer: document.getElementById("composer"),
  input: document.getElementById("messageInput"),
  connection: document.getElementById("connectionState"),
  syncBanner: document.getElementById("syncBanner"),
  syncBannerText: document.getElementById("syncBannerText"),
  jumpBtn: document.getElementById("jumpToLatestBtn"),
  newCount: document.getElementById("newCount"),
  dealStatus: document.getElementById("dealStatus"),
  tabs: Array.from(document.querySelectorAll(".tab"))
};

function viewMessages() {
  const f = state.filter;
  return state.messages.filter((m) => {
    if (f === "all") return true;
    if (f === "system") return m.type === "system";
    if (f === "errors") return m.type === "error" || m.status === "failed";
    if (f === "important") return Boolean(m.important) || m.type === "system";
    return true;
  });
}

function messageClass(m) {
  const classes = ["message"];
  if (m.type === "outgoing") classes.push("outgoing");
  if (m.type === "incoming") classes.push("incoming");
  if (m.type === "system") classes.push("system");
  if (m.type === "error" || m.status === "failed") classes.push("error");
  if (m.important) classes.push("important");
  return classes.join(" ");
}

function statusText(m) {
  if (m.status === "pending") return "Отправляется (локально)";
  if (m.status === "failed") return "Ошибка отправки";
  if (m.status === "delivered") return "Доставлено";
  if (m.edited) return "Изменено";
  if (m.deleted) return "Удалено";
  return "";
}

function render() {
  const visible = viewMessages();
  ui.list.innerHTML = visible
    .map(
      (m) => `
      <article class="${messageClass(m)}">
        <div>${m.deleted ? "Сообщение удалено" : m.text}</div>
        <div class="meta">${m.time}${statusText(m) ? " · " + statusText(m) : ""}</div>
      </article>
    `
    )
    .join("");

  ui.connection.textContent = state.online
    ? `Online · sync ${Math.floor(Math.random() * 5) + 1}с назад`
    : "Offline · ожидаем восстановление";

  ui.syncBanner.classList.toggle("hidden", state.online);
  ui.jumpBtn.classList.toggle("hidden", state.newBelow === 0);
  ui.newCount.textContent = String(state.newBelow);

  ui.tabs.forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.filter === state.filter);
  });
}

function scrollToBottom() {
  ui.frame.scrollTop = ui.frame.scrollHeight;
  state.newBelow = 0;
  render();
}

function pushMessage(message) {
  state.messages.push(message);
  const nearBottom = ui.frame.scrollHeight - ui.frame.scrollTop - ui.frame.clientHeight < 80;
  if (!nearBottom) {
    state.newBelow += 1;
  }
  render();
  if (nearBottom) scrollToBottom();
}

function now() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

ui.composer.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = ui.input.value.trim();
  if (!text) return;

  const pending = {
    id: `tmp-${Date.now()}`,
    type: "outgoing",
    text,
    time: now(),
    status: state.online ? "delivered" : "pending"
  };

  pushMessage(pending);
  ui.input.value = "";

  if (!state.online) {
    state.pendingQueue.push(pending.id);
  }
});

document.getElementById("confirmTransferBtn").addEventListener("click", () => {
  pushMessage({
    id: `sys-${Date.now()}`,
    type: "system",
    text: "Покупатель подтвердил: перевод выполнен.",
    time: now(),
    important: true
  });
  ui.dealStatus.textContent = "Перевод отмечен";
  ui.dealStatus.className = "pill status-success";
});

document.getElementById("goOfflineBtn").addEventListener("click", () => {
  state.online = false;
  ui.syncBannerText.textContent = "Нет интернета. Сообщения сохраняются локально и отправятся при восстановлении.";
  render();
});

document.getElementById("goOnlineBtn").addEventListener("click", () => {
  state.online = true;
  syncQueue();
});

document.getElementById("retrySyncBtn").addEventListener("click", () => {
  if (state.online) syncQueue();
});

document.getElementById("injectEventsBtn").addEventListener("click", () => {
  const events = [
    { type: "incoming", text: "Поступил перевод 85 000 ₽, сверяю выписку.", important: true },
    { type: "system", text: "Сообщение продавца было отредактировано.", important: false },
    { type: "incoming", text: "Уточните последние 4 цифры карты отправителя." },
    { type: "error", text: "Сбой polling: таймаут запроса, retry через 4с." },
    { type: "system", text: "Сообщение удалено модерацией: нарушение правил." }
  ];

  events.forEach((e, idx) => {
    setTimeout(() => {
      pushMessage({
        id: `ev-${Date.now()}-${idx}`,
        type: e.type,
        text: e.text,
        time: now(),
        important: e.important
      });
    }, idx * 500);
  });
});

document.getElementById("heavyStateBtn").addEventListener("click", () => {
  state.online = false;
  state.filter = "all";
  ui.dealStatus.textContent = "Спор открыт";
  ui.dealStatus.className = "pill status-danger";

  const heavy = [
    { type: "system", text: "Арбитраж подключен к сделке.", important: true },
    { type: "incoming", text: "Прикрепляю квитанцию, проверьте сумму и время." },
    { type: "outgoing", text: "Квитанцию вижу, жду финальное подтверждение банка.", status: "pending" },
    { type: "error", text: "Ваше последнее сообщение не синхронизировано." },
    { type: "system", text: "Сообщение продавца удалено." },
    { type: "incoming", text: "Я не могу подтвердить, средства еще hold в банке." },
    { type: "system", text: "Сделка перейдет в авто-эскалацию через 02:30.", important: true }
  ];

  heavy.forEach((m, idx) => {
    state.messages.push({
      id: `heavy-${Date.now()}-${idx}`,
      type: m.type,
      text: m.text,
      time: now(),
      status: m.status,
      important: m.important
    });
  });

  state.newBelow = 4;
  ui.syncBannerText.textContent = "Связь нестабильна. Есть несинхронизированные события и новые сообщения ниже.";
  render();
  ui.frame.scrollTop = Math.max(0, ui.frame.scrollHeight / 3);
});

ui.tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    state.filter = tab.dataset.filter;
    render();
  });
});

ui.jumpBtn.addEventListener("click", () => {
  scrollToBottom();
});

function syncQueue() {
  if (state.pendingQueue.length === 0) {
    ui.syncBannerText.textContent = "Сеть восстановлена. Синхронизация завершена.";
    render();
    return;
  }

  const queued = new Set(state.pendingQueue);
  state.pendingQueue = [];

  state.messages = state.messages.map((m) => {
    if (queued.has(m.id) && m.status === "pending") {
      return { ...m, status: "delivered" };
    }
    return m;
  });

  pushMessage({
    id: `sys-sync-${Date.now()}`,
    type: "system",
    text: `Синхронизация после offline: отправлено ${queued.size} локальных события(й).`,
    time: now(),
    important: true
  });

  render();
}

render();
scrollToBottom();
