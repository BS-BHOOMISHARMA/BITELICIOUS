document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('review-form');

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form submission and page reload

    // Get form values
    const name = document.getElementById("name").value;
    const recipe = document.getElementById("recipe").value;
    const rating = document.getElementById("rating").value;
    const reviewText = document.getElementById("review").value;

    // Create a new review element
    const newReview = document.createElement("div");
    newReview.classList.add("review");

    newReview.innerHTML = `
      <p>"${reviewText}"</p>
      <p><strong>– ${name}</strong></p>
      <p>${"⭐".repeat(parseInt(rating))}</p>
    `;

    // Append the new review to the review section
    document.getElementById("all-reviews").appendChild(newReview);

    // Optionally: Show a success message
    alert('🎉 Thank you for your review! You’re awesome!');

    // Reset the form fields
    form.reset();
  });

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
});
