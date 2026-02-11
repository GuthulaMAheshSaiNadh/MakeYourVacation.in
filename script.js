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
  ["Manali Hill Escape", "mountains", [14999, 32999], ["solo", "couple", "family", "friends"], ["Manali", "Solang Valley", "Rohtang Pass", "Atal Tunnel", "Kullu", "Manikaran"], ["Snow-point visit", "River-side leisure", "Local market walk"], "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200&q=80"],
  ["Shimla – Kufri Delight", "mountains", [8999, 21999], ["couple", "family", "friends"], ["Shimla", "Kufri", "Green Valley", "Jakhoo Temple"], ["Ridge walk", "Kufri viewpoints", "Temple visit"], "https://images.unsplash.com/photo-1515036551567-bf1198eeee24?auto=format&fit=crop&w=1200&q=80"],
  ["Munnar Nature Retreat", "mountains", [10999, 24999], ["solo", "couple", "family"], ["Munnar", "Tea Gardens", "Eravikulam National Park", "Mattupetty Dam", "Echo Point"], ["Tea trail", "Boating", "Sunset points"], "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=1200&q=80"],
  ["Coorg Coffee Trails", "mountains", [11999, 26999], ["couple", "family", "friends"], ["Coorg", "Abbey Falls", "Dubare Elephant Camp", "Raja’s Seat"], ["Coffee estate tour", "Falls visit", "Camp walk"], "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80"],
  ["Darjeeling Himalayan Tour", "mountains", [13999, 28999], ["solo", "couple", "family"], ["Darjeeling", "Tiger Hill", "Tea Estates", "Ropeway"], ["Sunrise point", "Tea tasting", "Ropeway"], "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"],
  ["Goa Fun Holiday", "beach", [9999, 23999], ["couple", "family", "friends"], ["Goa", "North Goa Beaches", "South Goa Beaches"], ["Beach hopping", "Water sports", "Cruise evening"], "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"],
  ["Varkala – Kovalam Beach Escape", "beach", [8999, 21999], ["solo", "couple", "family"], ["Varkala", "Kovalam"], ["Cliff beach walk", "Sunset leisure", "Seafood trail"], "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"],
  ["Andaman Island Tour", "beach", [18999, 39000], ["couple", "family", "friends"], ["Port Blair", "Havelock Island", "Neil Island", "Ross Island"], ["Island ferry", "Snorkeling", "Beach sunset"], "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80"],
  ["Gokarna Spiritual Beach Tour", "beach", [7999, 19999], ["solo", "friends", "couple"], ["Gokarna", "Om Beach", "Kudle Beach", "Half Moon Beach", "Paradise Beach"], ["Beach trek", "Temple visit", "Bonfire evening"], "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80"],
  ["Tirupati Balaji Darshan", "pilgrimage", [6999, 16999], ["family", "couple", "solo"], ["Tirupati", "Tirumala"], ["Darshan support", "Temple queue planning", "Local prasadam trail"], "https://images.unsplash.com/photo-1613896640137-bb5b31496315?auto=format&fit=crop&w=1200&q=80"],
  ["Kashi – Prayagraj – Ayodhya", "pilgrimage", [12999, 29999], ["family", "solo"], ["Varanasi", "Prayagraj", "Ayodhya"], ["Ghat aarti", "Sangam visit", "Temple circuit"], "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1200&q=80"],
  ["Vaishno Devi Yatra", "pilgrimage", [11999, 26999], ["family", "solo", "friends"], ["Vaishno Devi", "Katra"], ["Yatra planning", "Priority options", "Evening rest stop"], "https://images.unsplash.com/photo-1574236170880-6836de3f8e4a?auto=format&fit=crop&w=1200&q=80"],
  ["South India Temple Tour", "pilgrimage", [15999, 32999], ["family", "couple"], ["Rameswaram", "Madurai", "Tirupati"], ["Temple architecture tour", "Darshan support", "Local food"], "https://images.unsplash.com/photo-1600109177111-98d70d1fb9f5?auto=format&fit=crop&w=1200&q=80"],
  ["Rajasthan Royal Tour", "heritage", [17999, 39000], ["couple", "family", "friends"], ["Jaipur", "Jodhpur", "Udaipur"], ["Fort walks", "Palace visits", "Cultural show"], "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80"],
  ["Agra Heritage Tour", "heritage", [6999, 17999], ["solo", "couple", "family"], ["Agra"], ["Taj sunrise", "Fort visit", "Street food"], "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80"],
  ["Hampi Historical Tour", "heritage", [8999, 20999], ["solo", "couple", "friends"], ["Hampi"], ["Ruins trail", "Sunset point", "Coracle ride"], "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=1200&q=80"],
  ["Leh – Ladakh Adventure", "adventure", [21999, 39000], ["friends", "solo", "couple"], ["Leh", "Nubra Valley", "Pangong Lake", "Khardung La"], ["High pass drive", "Lake camping", "Monastery visit"], "https://images.unsplash.com/photo-1626621331169-5f34af8a7dfb?auto=format&fit=crop&w=1200&q=80"],
  ["Spiti Valley Road Trip", "adventure", [19999, 39000], ["friends", "solo"], ["Spiti Valley", "Kaza", "Key Monastery", "Chandratal"], ["Road adventure", "Monastery tour", "Stargazing camp"], "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"],
  ["Coastal Karnataka Road Trip", "adventure", [14999, 33999], ["friends", "family", "couple"], ["Murudeshwar", "Gokarna", "Honnavar", "Jog Falls", "Yana Caves"], ["Temple stop", "Beach drive", "Caves exploration"], "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80"]
].map(([name, category, budgetRange, travelTypes, places, activities, image]) => ({
  name,
  category,
  budgetRange,
  travelTypes,
  places,
  activities,
  image,
  itineraryDays: [3, 5, 7, 10],
  minDays: 2,
  maxDays: 30
}));

const packageGrid = document.getElementById("packageGrid");
const travelTypeFilter = document.getElementById("travelTypeFilter");
const destinationFilter = document.getElementById("destinationFilter");
const daysFilter = document.getElementById("daysFilter");
const daysValue = document.getElementById("daysValue");
const resultCount = document.getElementById("resultCount");
const budgetMin = document.getElementById("budgetMin");
const budgetMax = document.getElementById("budgetMax");
const budgetRangeValue = document.getElementById("budgetRangeValue");
const findPackageBtn = document.getElementById("findPackageBtn");
const aiResultCard = document.getElementById("aiResultCard");

if (packageGrid) {
  [travelTypeFilter, destinationFilter].forEach((control) => {
    control?.addEventListener("change", renderPackages);
  });

  daysFilter?.addEventListener("input", () => {
    daysValue.textContent = `${daysFilter.value} days`;
    renderPackages();
  });

  [budgetMin, budgetMax].forEach((slider) => {
    slider?.addEventListener("input", syncBudgetRange);
  });

  findPackageBtn?.addEventListener("click", findBestPackage);
  syncBudgetRange();
  renderPackages();
}

function syncBudgetRange() {
  if (!budgetMin || !budgetMax) return;
  let minVal = Number(budgetMin.value);
  let maxVal = Number(budgetMax.value);

  if (minVal > maxVal) {
    [minVal, maxVal] = [maxVal, minVal];
    budgetMin.value = minVal;
    budgetMax.value = maxVal;
  }

  budgetRangeValue.textContent = `₹${formatNum(minVal)} - ₹${formatNum(maxVal)}`;
  renderPackages();
}

function getFilteredPackages() {
  const type = travelTypeFilter?.value || "all";
  const destination = destinationFilter?.value || "all";
  const selectedDays = Number(daysFilter?.value || 5);
  const minBudget = Number(budgetMin?.value || 299);
  const maxBudget = Number(budgetMax?.value || 39000);

  return standardPackages.filter((pkg) => {
    const typeMatch = type === "all" || pkg.travelTypes.includes(type);
    const destinationMatch = destination === "all" || pkg.category === destination;
    const dayMatch = selectedDays >= pkg.minDays && selectedDays <= pkg.maxDays;
    const budgetMatch = pkg.budgetRange[0] <= maxBudget && pkg.budgetRange[1] >= minBudget;
    return typeMatch && destinationMatch && dayMatch && budgetMatch;
  });
}

function renderPackages() {
  if (!packageGrid) return;
  const filtered = getFilteredPackages();

  resultCount.textContent = `${filtered.length} packages found`;
  packageGrid.innerHTML = "";

  if (filtered.length === 0) {
    packageGrid.innerHTML = `<p class="no-results">No package found for current filters. Try widening budget range or changing filters.</p>`;
    return;
  }

  filtered.forEach((pkg) => {
    const card = document.createElement("article");
    card.className = "package-card";
    card.innerHTML = `
      <img src="${pkg.image}" alt="${pkg.name}" class="package-image" />
      <div class="card-top">
        <h4>${pkg.name}</h4>
        <span class="budget-tag">₹${formatNum(pkg.budgetRange[0])} - ₹${formatNum(pkg.budgetRange[1])}</span>
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

function findBestPackage() {
  const filtered = getFilteredPackages();
  if (!aiResultCard) return;

  if (!filtered.length) {
    aiResultCard.hidden = false;
    aiResultCard.innerHTML = `<h3>AI Package Suggestion</h3><p>No matching package found for your inputs. Please adjust filters and try again.</p>`;
    return;
  }

  const days = Number(daysFilter.value || 5);
  const minBudget = Number(budgetMin.value || 299);
  const maxBudget = Number(budgetMax.value || 39000);
  const userMidBudget = (minBudget + maxBudget) / 2;

  const best = filtered
    .map((pkg) => {
      const pkgMid = (pkg.budgetRange[0] + pkg.budgetRange[1]) / 2;
      return { pkg, score: Math.abs(pkgMid - userMidBudget) };
    })
    .sort((a, b) => a.score - b.score)[0].pkg;

  const estimatedCost = estimateCost(best, days, userMidBudget);

  aiResultCard.hidden = false;
  aiResultCard.innerHTML = `
    <h3>AI Package Suggestion</h3>
    <div class="ai-package-layout">
      <img src="${best.image}" alt="${best.name}" class="ai-package-image" />
      <div>
        <h4>${best.name}</h4>
        <p><strong>Recommended Duration:</strong> ${days} Days</p>
        <p><strong>Places Covered:</strong> ${best.places.join(", ")}</p>
        <p><strong>Activities:</strong> ${best.activities.join(", ")}</p>
        <p><strong>Travel:</strong> Comfortable transfers and local travel support included.</p>
        <p><strong>Food:</strong> Daily breakfast + selected local meals included.</p>
        <p><strong>Shelter:</strong> Clean, comfort-focused hotel/homestay stays.</p>
        <p class="price-section"><strong>Price Section (Total Estimated Cost):</strong> ₹${formatNum(estimatedCost)}</p>
      </div>
    </div>
    <p class="ai-itinerary"><strong>Suggested Itinerary:</strong> ${buildItinerary(best, normalizeItineraryDays(days))}</p>
  `;
  aiResultCard.scrollIntoView({ behavior: "smooth", block: "center" });
}

function estimateCost(pkg, days, userMidBudget) {
  const avgPkgCost = (pkg.budgetRange[0] + pkg.budgetRange[1]) / 2;
  const dayFactor = Math.max(0.75, days / 5);
  const comfortFactor = userMidBudget > avgPkgCost ? 1.08 : 0.96;
  const total = Math.round(avgPkgCost * dayFactor * comfortFactor);
  return Math.min(39000, Math.max(299, total));
}

function normalizeItineraryDays(days) {
  if (days <= 3) return 3;
  if (days <= 5) return 5;
  if (days <= 7) return 7;
  return 10;
}

function buildItinerary(pkg, days) {
  const places = pkg.places;
  if (days === 3) {
    return `Day 1 arrival + ${places[0]}; Day 2 explore ${places.slice(1, 3).join(" & ") || places[0]}; Day 3 activities + local shopping + return.`;
  }
  if (days === 5) {
    return `Day 1 arrival and rest; Day 2 ${places[0]}; Day 3 ${places[1] || places[0]}; Day 4 ${places[2] || places[0]} + activities; Day 5 food trail + departure.`;
  }
  if (days === 7) {
    return `Day-wise 7-day plan includes ${places.slice(0, 4).join(", ")} with activity slots, comfort travel, and dedicated local food experiences.`;
  }
  return `10-day extended itinerary covers ${places.join(", ")} with relaxed pacing, major activities, scenic time, and comfort-focused stay planning.`;
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function formatNum(value) {
  return Number(value).toLocaleString("en-IN");
}
