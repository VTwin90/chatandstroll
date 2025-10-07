function updateFavicon() {
  const isDark = document.documentElement.classList.contains('dark');
  const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = isDark ? 'assets/favicon-dark.png' : 'assets/favicon-light.png';
  document.head.appendChild(favicon);
}

// Run it when the page loads
updateFavicon();
