function updateFavicon() {
  const isDark = document.documentElement.classList.contains('dark');
  const favicon = document.querySelector("link[rel='icon']") || document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = isDark
    ? 'assets/favicons/dark/favicon-32x32.png'
    : 'assets/favicons/light/favicon-32x32.png';
  document.head.appendChild(favicon);
}

updateFavicon();
