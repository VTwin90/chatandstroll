// Utility Functions — handles date logic and location mapping for walk generation

function getNextDate(day) {
  const today = new Date();
  // Convert user-friendly day labels into numeric offsets from today
  const daysMap = {
    today: 0,
    tomorrow: 1,
    weekend: (today.getDay() <= 5 ? 6 - today.getDay() : 0),
    nextweek: 7
  };

  // Adjust date based on selected day
  today.setDate(today.getDate() + (daysMap[day] ?? 0));

  // Return date in UK format (DD/MM/YYYY), using the user's local time zone
  return today.toLocaleDateString('en-GB');
}

function getSpecificLocation(userInput) {
  const normalized = userInput.trim().toLowerCase();

  // Map known locations to meeting spots
  const locationMap = {
    "oslo": "near the fountain in Frogner Park, Oslo, Norway",
    "edinburgh": "near the castle viewpoint, Edinburgh, Scotland",
    "berlin": "near the Victory Column, Tiergarten, Berlin",
    "new york": "near the Bethesda Terrace, Central Park, New York",
    "london": "by the rose garden in Hyde Park, London"
  };

  // Fallback for unknown locations
  return locationMap[normalized] || `somewhere peaceful near ${userInput}`;
}