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

const standardPackages = [
  ["Manali Hill Escape", "mountains", "economy", ["solo", "couple", "family", "friends"], ["Manali", "Solang Valley", "Rohtang Pass", "Atal Tunnel", "Kullu", "Manikaran"]],
  ["Shimla – Kufri Delight", "mountains", "value", ["couple", "family", "friends"], ["Shimla", "Kufri", "Green Valley", "Jakhoo Temple"]],
  ["Munnar Nature Retreat", "mountains", "value", ["solo", "couple", "family"], ["Munnar", "Tea Gardens", "Eravikulam National Park", "Mattupetty Dam", "Echo Point"]],
  ["Coorg Coffee Trails", "mountains", "value", ["couple", "family", "friends"], ["Coorg", "Abbey Falls", "Dubare Elephant Camp", "Raja’s Seat"]],
  ["Darjeeling Himalayan Tour", "mountains", "premium", ["solo", "couple", "family"], ["Darjeeling", "Tiger Hill", "Tea Estates", "Ropeway"]],
  ["Goa Fun Holiday", "beach", "value", ["couple", "family", "friends"], ["Goa", "North Goa Beaches", "South Goa Beaches"]],
  ["Varkala – Kovalam Beach Escape", "beach", "economy", ["solo", "couple", "family"], ["Varkala", "Kovalam"]],
  ["Andaman Island Tour", "beach", "premium", ["couple", "family", "friends"], ["Port Blair", "Havelock Island", "Neil Island", "Ross Island"]],
  ["Gokarna Spiritual Beach Tour", "beach", "economy", ["solo", "friends", "couple"], ["Gokarna", "Om Beach", "Kudle Beach", "Half Moon Beach", "Paradise Beach"]],
  ["Tirupati Balaji Darshan", "pilgrimage", "economy", ["family", "couple", "solo"], ["Tirupati", "Tirumala"]],
  ["Kashi – Prayagraj – Ayodhya", "pilgrimage", "value", ["family", "solo"], ["Varanasi", "Prayagraj", "Ayodhya"]],
  ["Vaishno Devi Yatra", "pilgrimage", "value", ["family", "solo", "friends"], ["Vaishno Devi", "Katra"]],
  ["South India Temple Tour", "pilgrimage", "premium", ["family", "couple"], ["Rameswaram", "Madurai", "Tirupati"]],
  ["Rajasthan Royal Tour", "heritage", "premium", ["couple", "family", "friends"], ["Jaipur", "Jodhpur", "Udaipur"]],
  ["Agra Heritage Tour", "heritage", "economy", ["solo", "couple", "family"], ["Agra"]],
  ["Hampi Historical Tour", "heritage", "value", ["solo", "couple", "friends"], ["Hampi"]],
  ["Leh – Ladakh Adventure", "adventure", "premium", ["friends", "solo", "couple"], ["Leh", "Nubra Valley", "Pangong Lake", "Khardung La"]],
  ["Spiti Valley Road Trip", "adventure", "premium", ["friends", "solo"], ["Spiti Valley", "Kaza", "Key Monastery", "Chandratal"]],
  ["Coastal Karnataka Road Trip", "adventure", "value", ["friends", "family", "couple"], ["Murudeshwar", "Gokarna", "Honnavar", "Jog Falls", "Yana Caves"]]
].map(([name, category, budget, travelTypes, places]) => ({
  name,
  category,
  budget,
  travelTypes,
  places,
  itineraryDays: [3, 5, 7, 10],
  minDays: 2,
  maxDays: 30
}));

const packageGrid = document.getElementById("packageGrid");
const budgetFilter = document.getElementById("budgetFilter");
const travelTypeFilter = document.getElementById("travelTypeFilter");
const destinationFilter = document.getElementById("destinationFilter");
const daysFilter = document.getElementById("daysFilter");
const daysValue = document.getElementById("daysValue");
const resultCount = document.getElementById("resultCount");

if (packageGrid) {
  [budgetFilter, travelTypeFilter, destinationFilter].forEach((control) => {
    control?.addEventListener("change", renderPackages);
  });

  daysFilter?.addEventListener("input", () => {
    daysValue.textContent = `${daysFilter.value} days`;
    renderPackages();
  });

  renderPackages();
}

function renderPackages() {
  const budget = budgetFilter?.value || "all";
  const type = travelTypeFilter?.value || "all";
  const destination = destinationFilter?.value || "all";
  const selectedDays = Number(daysFilter?.value || 5);

  const filtered = standardPackages.filter((pkg) => {
    const budgetMatch = budget === "all" || pkg.budget === budget;
    const typeMatch = type === "all" || pkg.travelTypes.includes(type);
    const destinationMatch = destination === "all" || pkg.category === destination;
    const dayMatch = selectedDays >= pkg.minDays && selectedDays <= pkg.maxDays;
    return budgetMatch && typeMatch && destinationMatch && dayMatch;
  });

  resultCount.textContent = `${filtered.length} packages found`;
  packageGrid.innerHTML = "";

  if (filtered.length === 0) {
    packageGrid.innerHTML = `<p class="no-results">No package found for current filters. Try changing budget, travel type, destination, or days.</p>`;
    return;
  }

  filtered.forEach((pkg) => {
    const card = document.createElement("article");
    card.className = "package-card";
    card.innerHTML = `
      <div class="card-top">
        <h4>${pkg.name}</h4>
        <span class="budget-tag">${capitalize(pkg.budget)}</span>
      </div>
      <p class="meta-line"><strong>Travel Type:</strong> ${pkg.travelTypes.map(capitalize).join(", ")}</p>
      <p class="meta-line"><strong>Destination Type:</strong> ${capitalize(pkg.category)}</p>
      <p class="meta-line"><strong>Places:</strong> ${pkg.places.join(", ")}</p>
      <label class="itinerary-picker">
        Itinerary Plan:
        <select class="itinerary-select">
          ${pkg.itineraryDays.map((d) => `<option value="${d}">${d} Days</option>`).join("")}
        </select>
      </label>
      <div class="itinerary-text"></div>
    `;

    const select = card.querySelector(".itinerary-select");
    const itineraryBox = card.querySelector(".itinerary-text");

    const updateItinerary = () => {
      const days = Number(select.value);
      itineraryBox.textContent = buildItinerary(pkg, days);
    };

    select.addEventListener("change", updateItinerary);
    updateItinerary();
    packageGrid.appendChild(card);
  });
}

function buildItinerary(pkg, days) {
  const places = pkg.places;
  if (days === 3) {
    return `3 Days Itinerary: Day 1 arrival + ${places[0]}; Day 2 explore ${places.slice(1, 3).join(" & ") || places[0]}; Day 3 local sightseeing + return.`;
  }
  if (days === 5) {
    return `5 Days Itinerary: Day 1 arrival; Day 2 ${places[0]}; Day 3 ${places[1] || places[0]}; Day 4 ${places[2] || places[0]}; Day 5 shopping + departure.`;
  }
  if (days === 7) {
    return `7 Days Itinerary: Balanced tour covering ${places.slice(0, 4).join(", ")} with leisure breaks, local food experiences, and transfer support.`;
  }
  return `10 Days Itinerary: Extended journey covering ${places.join(", ")} with relaxed pacing, extra activities, local culture, and comfort-focused travel.`;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
