const modal = document.getElementById("aiModal");
const openBtn = document.getElementById("openAiAssistant");
const closeBtn = document.getElementById("closeAiAssistant");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatLog = document.getElementById("chatLog");
const dynamicHero = document.getElementById("dynamicHero");

const heroImages = [
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1600&q=80"
];

if (dynamicHero) {
  let idx = 0;
  dynamicHero.style.backgroundImage = `url('${heroImages[idx]}')`;
  setInterval(() => {
    idx = (idx + 1) % heroImages.length;
    dynamicHero.style.backgroundImage = `url('${heroImages[idx]}')`;
  }, 4000);
}

if (openBtn && modal) {
  openBtn.addEventListener("click", () => {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    chatInput?.focus();
    addAIMessage("Great! Please tell me: destination type, people count, budget style, and total days. I will suggest package + places + itinerary.");
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
    return `Recommended Package: Manali Hill Escape\n\nPlaces Covered: Manali, Solang Valley, Rohtang Pass, Atal Tunnel, Kullu, Manikaran\nIdeal Duration: 5 to 6 days\nSample Itinerary:\nDay 1: Arrival in Manali, Mall Road, local market\nDay 2: Solang Valley activities + Atal Tunnel drive\nDay 3: Rohtang Pass excursion (weather permitting)\nDay 4: Kullu sightseeing + river point + shawl market\nDay 5: Manikaran temple visit and return\nBest For: Families/couples looking for scenic weather and budget comfort.`;
  }

  if (q.includes("beach") || q.includes("goa") || q.includes("andaman")) {
    return `Recommended Package: Goa Fun Holiday\n\nPlaces Covered: North Goa Beaches, South Goa Beaches\nIdeal Duration: 4 to 5 days\nSample Itinerary:\nDay 1: Arrival + Baga/Calangute evening\nDay 2: North Goa tour (Fort Aguada, Candolim, Anjuna)\nDay 3: South Goa tour (Colva, Miramar, Dona Paula)\nDay 4: Water sports / cruise / shopping\nDay 5: Leisure breakfast + departure\nAlternate Island Option: Andaman Island Tour for 6 to 7 days (Port Blair, Havelock, Neil Island, Ross Island).`;
  }

  if (q.includes("temple") || q.includes("pilgrimage") || q.includes("darshan")) {
    return `Recommended Package: Tirupati Balaji Darshan\n\nPlaces Covered: Tirupati, Tirumala\nIdeal Duration: 2 to 3 days\nSample Itinerary:\nDay 1: Arrival, local temple visits, stay in Tirupati\nDay 2: Early morning Tirumala darshan\nDay 3: Optional local temples + return\nFor Longer Spiritual Trip: Kashi – Prayagraj – Ayodhya (5 to 6 days).`;
  }

  if (q.includes("history") || q.includes("heritage") || q.includes("culture")) {
    return `Recommended Package: Rajasthan Royal Tour\n\nPlaces Covered: Jaipur, Jodhpur, Udaipur\nIdeal Duration: 6 to 7 days\nSample Itinerary:\nDay 1-2: Jaipur (Amber Fort, City Palace, Hawa Mahal)\nDay 3-4: Jodhpur (Mehrangarh Fort, old city walk)\nDay 5-6: Udaipur (City Palace, Lake Pichola, Sajjangarh)\nDay 7: Departure\nShort Option: Agra Heritage Tour (2 days).`;
  }

  if (q.includes("adventure") || q.includes("road trip") || q.includes("bike") || q.includes("ladakh") || q.includes("spiti")) {
    return `Recommended Package: Spiti Valley Road Trip\n\nPlaces Covered: Spiti Valley, Kaza, Key Monastery, Chandratal\nIdeal Duration: 7 to 8 days\nSample Itinerary:\nDay 1: Shimla to Narkanda\nDay 2: Narkanda to Kalpa\nDay 3: Kalpa to Kaza\nDay 4: Kaza local + Key Monastery\nDay 5: Kaza villages + high-altitude views\nDay 6: Kaza to Chandratal\nDay 7-8: Return via Manali route\nAlternative: Leh-Ladakh Adventure for 7 days.`;
  }

  return `Suggested Package: Shimla – Kufri Delight\n\nPlaces Covered: Shimla, Kufri, Green Valley, Jakhoo Temple\nIdeal Duration: 4 days\nSample Itinerary:\nDay 1: Arrival + Mall Road + Ridge\nDay 2: Kufri and Green Valley\nDay 3: Jakhoo Temple and local exploration\nDay 4: Leisure morning + departure\n\nTip: Share your preferred destination type (mountain/beach/temple/heritage/adventure), travel days, and group size for a more customized plan.`;
}
