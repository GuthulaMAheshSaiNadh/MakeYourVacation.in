const modal = document.getElementById("aiModal");
const openBtn = document.getElementById("openAiAssistant");
const closeBtn = document.getElementById("closeAiAssistant");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatLog = document.getElementById("chatLog");

if (openBtn && modal) {
  openBtn.addEventListener("click", () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    chatInput?.focus();
    addAIMessage("Great! Tell me your preferred destination, travel type, and budget level.");
  });
}

if (closeBtn && modal) {
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  });
}

if (chatForm) {
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;

    addUserMessage(text);
    const reply = recommendPackage(text);
    addAIMessage(reply);
    chatInput.value = "";
  });
}

function addUserMessage(text) {
  appendMessage(text, "user");
}

function addAIMessage(text) {
  appendMessage(text, "ai");
}

function appendMessage(text, type) {
  if (!chatLog) return;
  const p = document.createElement("p");
  p.className = `msg ${type}`;
  p.textContent = text;
  chatLog.appendChild(p);
  chatLog.scrollTop = chatLog.scrollHeight;
}

function recommendPackage(input) {
  const q = input.toLowerCase();

  if (q.includes("manali") || q.includes("mountain") || q.includes("hill")) {
    return "Best match: Manali Hill Escape. It gives a great hill-station experience with Solang Valley, Rohtang Pass, Kullu and Manikaran in a budget-friendly standard plan.";
  }
  if (q.includes("beach") || q.includes("goa") || q.includes("andaman")) {
    return "Best match: Goa Fun Holiday. If you want islands, Andaman Island Tour is also a strong pick with Port Blair, Havelock and Neil Island.";
  }
  if (q.includes("temple") || q.includes("pilgrimage") || q.includes("darshan")) {
    return "Best match: Tirupati Balaji Darshan. For multi-city spiritual journeys, choose Kashi – Prayagraj – Ayodhya.";
  }
  if (q.includes("history") || q.includes("heritage") || q.includes("culture")) {
    return "Best match: Rajasthan Royal Tour with Jaipur, Jodhpur and Udaipur. Agra Heritage Tour is ideal for a shorter cultural break.";
  }
  if (q.includes("adventure") || q.includes("road trip") || q.includes("bike")) {
    return "Best match: Spiti Valley Road Trip. For high-altitude adventure, Leh – Ladakh Adventure is perfect.";
  }

  return "Thanks! Based on your message, I recommend starting with Shimla – Kufri Delight for a balanced, middle-class friendly package. Share your destination preference for a sharper plan.";
}
