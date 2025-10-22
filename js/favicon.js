// Favicon Logic — updates icon based on theme for visual consistency
function updateFavicon() {
  const isDark = document.documentElement.classList.contains('dark');
  const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = isDark
    ? 'assets/favicons/dark/favicon-32x32.png'
    : 'assets/favicons/light/favicon-32x32.png';
  // Ensures favicon reflects current theme — supports dark mode and light mode 
  document.head.appendChild(favicon);
}

updateFavicon();
