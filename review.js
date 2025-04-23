// Smooth scrolling for nav links and "Back to Top"
document.querySelectorAll('nav a, .back-to-top').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(targetId);
      section?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Intersection Observer for fade-in elements
const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => fadeInObserver.observe(el));

// Review form submission feedback
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  alert('🎉 Thank you for your review! You’re awesome!');
  form.reset();
});

// Highlight Carousel Functionality
const carousel = document.querySelector('.highlight-carousel');
const cards = carousel?.querySelectorAll('.highlight-card');
let currentIndex = 0;

function showCard(index) {
  cards.forEach((card, i) => {
    card.style.display = i === index ? 'block' : 'none';
  });
}

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  showCard(currentIndex);
}

// Initial state
if (cards && cards.length > 0) {
  showCard(currentIndex);
  setInterval(nextCard, 5000); // Change card every 5 seconds
}
