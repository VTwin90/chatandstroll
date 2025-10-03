AOS.init();
let userCreatedWalks = [];

function generateWalk({ mood, style, interests, location, time, day }) {
  const date = getNextDate(day);
  const specificLocation = getSpecificLocation(location);
  const walkName = `${style.charAt(0).toUpperCase() + style.slice(1)} Steps in ${location}`;
  const promptThemes = {
    low: "Letting Go",
    curious: "Discovery",
    reflective: "Resilience",
    light: "Joy"
  };
  return {
    name: walkName,
    location: specificLocation,
    date,
    time,
    promptTheme: promptThemes[mood] || "Connection"
  };
}

// Handle match form submission
document.getElementById('match-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const mood = document.getElementById('mood').value;
  const style = document.getElementById('style').value;
  const interests = document.getElementById('interests').value;
  const location = document.getElementById('location').value;
  const time = document.getElementById('time').value;
  const day = document.getElementById('day').value;

  const matchResult = document.getElementById('match-result');
  const soloPrompts = document.getElementById('solo-prompts');
  const normalized = location.trim().toLowerCase();

  if (day === "today") {
    matchResult.textContent = `We didn’t find a perfect match for today, but here’s a solo walk with prompts for your mood: ${mood}.`;
    soloPrompts.classList.remove('hidden');
    return;
  }

  if (!suggestedWalks[normalized] || userCreatedWalks.includes(normalized)) {
    matchResult.innerHTML = `
      <p class="text-lg text-red-600">There are no hosted walks in ${location} yet.</p>
      <button id="create-walk" class="mt-4 bg-primary text-white px-4 py-2 rounded-full hover:bg-red-500 transition">
        Create a Walk in ${location}
      </button>
    `;
    soloPrompts.classList.add('hidden');
    return;
  }

  const walk = suggestedWalks[normalized];
  matchResult.innerHTML = `
    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mt-6">
      <h4 class="text-2xl font-bold text-primary">${walk.name}</h4>
      <p class="mt-2 text-lg">Meet ${walk.location}</p>
      <p class="text-md text-gray-600 dark:text-gray-300">${getNextDate(day)} at ${time} local time</p>
      <p class="mt-4 italic">Prompt theme: “${walk.promptTheme}”</p>
    </div>
  `;
  soloPrompts.classList.add('hidden');
});

// Handle "Create Walk" button click
document.addEventListener('click', function (e) {
  if (e.target && e.target.id === 'create-walk') {
    const mood = document.getElementById('mood').value;
    const style = document.getElementById('style').value;
    const interests = document.getElementById('interests').value;
    const location = document.getElementById('location').value;
    const time = document.getElementById('time').value;
    const day = document.getElementById('day').value;
    const normalized = location.trim().toLowerCase();

    const knownLocations = Object.keys(suggestedWalks);
    const matchResult = document.getElementById('match-result');

    if (knownLocations.includes(normalized)) {
      matchResult.innerHTML = `
        <p class="text-lg text-yellow-600">There’s already a hosted walk in ${location}. You can join that one or check back later.</p>
      `;
      return;
    }

    const walk = generateWalk({ mood, style, interests, location, time, day });
    userCreatedWalks.push(normalized);

    matchResult.innerHTML = `
      <div class="walk-created">
        🌱 Your walk has been planted — others may join soon.
      </div>
      <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mt-6">
        <h4 class="text-2xl font-bold text-primary">${walk.name}</h4>
        <p class="mt-2 text-lg">You’ve created a walk: ${walk.location}</p>
        <p class="text-md text-gray-600 dark:text-gray-300">${walk.date} at ${walk.time} local time</p>
        <p class="mt-4 italic">Prompt theme: “${walk.promptTheme}”</p>
        <p class="mt-4 text-sm text-gray-500">Others nearby will see this walk and may join.</p>
      </div>
    `;
  }
});

// Handle prompt carousel
let current = 0;
function nextPrompt() {
  current = (current + 1) % prompts.length;
  document.getElementById('prompt-box').textContent = `“${prompts[current]}”`;
}

// Theme toggle logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');

  const isOpen = !mobileMenu.classList.contains('hidden');
  menuIcon.innerHTML = isOpen ? '&times;' : '&#9776;';
});


const floatingToggle = document.getElementById('floating-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(mode) {
  if (mode === 'dark') {
    document.documentElement.classList.add('dark');
    themeIcon.style.transform = 'rotate(180deg)';
  } else {
    document.documentElement.classList.remove('dark');
    themeIcon.style.transform = 'rotate(0deg)';
  }
  localStorage.setItem('theme', mode);
}

floatingToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});

if (localStorage.getItem('theme') === 'dark') {
  setTheme('dark');
} else {
  setTheme('light');
}
