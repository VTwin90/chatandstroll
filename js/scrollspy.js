document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[data-section]");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const activeLink = document.querySelector(`a[data-section="${id}"]`);
        if (entry.isIntersecting && activeLink) {
          navLinks.forEach(link => link.classList.remove("text-primary"));
          activeLink.classList.add("text-primary");
          console.log("Intersecting:", id);
        }
      });
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1,
    }
  );

  sections.forEach(section => observer.observe(section));
});
