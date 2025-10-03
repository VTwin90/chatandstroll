function getNextDate(day) {
  const today = new Date();
  const daysMap = {
    today: 0,
    tomorrow: 1,
    weekend: (today.getDay() <= 5 ? 6 - today.getDay() : 0),
    nextweek: 7
  };
  today.setDate(today.getDate() + (daysMap[day] ?? 0));
  return today.toLocaleDateString('en-GB');
}

function getSpecificLocation(userInput) {
  const normalized = userInput.trim().toLowerCase();
  const locationMap = {
    "oslo": "near the fountain in Frogner Park, Oslo, Norway",
    "edinburgh": "near the castle viewpoint, Edinburgh, Scotland",
    "berlin": "near the Victory Column, Tiergarten, Berlin",
    "new york": "near the Bethesda Terrace, Central Park, New York",
    "london": "by the rose garden in Hyde Park, London"
  };
  return locationMap[normalized] || `somewhere peaceful near ${userInput}`;
}
