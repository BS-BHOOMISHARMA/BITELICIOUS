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
  
    // Optional: Console welcome message
    console.log("👋 Welcome to Bitelicious - Frontend powered by love & code!");
  
    // Confetti on load
    launchConfetti();
  });
  
  // Simple confetti burst (CSS-like)
  function launchConfetti() {
    const colors = ["#ff9ecf", "#90f5d7", "#ffd3f7", "#7efff5"];
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.animationDuration = 1 + Math.random() * 2 + "s";
      document.body.appendChild(confetti);
  
      setTimeout(() => confetti.remove(), 3000);
    }
  }
  
