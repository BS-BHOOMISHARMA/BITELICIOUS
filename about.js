// Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  
