// ScrollSpy Navigation — highlights active section in nav based on viewport visibility
document.addEventListener("DOMContentLoaded", () => {
  // Select all sections with an ID and matching nav links
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[data-section]");

  // Create an IntersectionObserver to track which section is in view
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const activeLink = document.querySelector(`a[data-section="${id}"]`);

        // If section is visible, highlight its nav link
        if (entry.isIntersecting && activeLink) {
          navLinks.forEach(link => link.classList.remove("text-primary"));
          activeLink.classList.add("text-primary");
          // console.log("Intersecting:", id); // Uncomment for debugging
        }
      });
    },
    {
      rootMargin: "-20% 0px -60% 0px", // Adjusts when section is considered "in view"
      threshold: 0.1,
    }
  );

  // Start observing each section
  sections.forEach(section => observer.observe(section));
});
