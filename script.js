document.addEventListener('DOMContentLoaded', function () {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      navbar.style.padding = '10px 30px';
      navbar.style.background = 'rgba(0, 0, 0, 0.9)';
      navbar.style.transition = 'all 0.3s ease';
    } else {
      navbar.style.padding = '15px 30px';
      navbar.style.background = '#000000';
    }
  });

  // Search functionality
  const searchBar = document.querySelector('.search-bar input');
  const searchButton = document.querySelector('.search-bar button');
  const recipeCards = document.querySelectorAll('.recipe-card');

  function performSearch() {
    const searchTerm = searchBar.value.toLowerCase();

    recipeCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();

      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        card.style.display = 'block';
        card.style.boxShadow = '0 0 20px #f806cc';
        setTimeout(() => {
          card.style.boxShadow = '0 0 15px #08f7fe';
        }, 2000);
      } else {
        card.style.display = 'none';
      }
    });

    if (searchTerm === '') {
      recipeCards.forEach(card => {
        card.style.display = 'block';
      });
    }
  }

  searchButton.addEventListener('click', performSearch);
  searchBar.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });

  // Recipe card hover and click animations
  recipeCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      this.style.transform = 'scale(1.05)';
      this.style.boxShadow = '0 0 20px #f806cc';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'scale(1)';
      this.style.boxShadow = '0 0 15px #08f7fe';
    });

    card.addEventListener('click', function () {
      const recipeName = this.querySelector('h3').textContent;
      alert(`Recipe details for ${recipeName} coming soon! 🍽`);
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Dynamic category filters from section titles
  const sections = document.querySelectorAll('.section-title');
  const navLinks = document.querySelector('.nav-links');

  sections.forEach(section => {
    const categoryName = section.textContent.trim();
    const filterBtn = document.createElement('li');
    filterBtn.innerHTML = `<a href="#" data-category="${categoryName}">${categoryName}</a>`;
    navLinks.appendChild(filterBtn);

    filterBtn.querySelector('a').addEventListener('click', function (e) {
      e.preventDefault();
      section.scrollIntoView({ behavior: 'smooth' });
      section.style.transform = 'scale(1.05)';
      section.style.color = '#fe53bb';
      setTimeout(() => {
        section.style.transform = 'scale(1)';
        section.style.color = '#08f7fe';
      }, 2000);
    });
  });

  // Lazy load images
  const lazyImages = document.querySelectorAll('.recipe-card img');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src || img.src;
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Animate section titles on scroll
  const animateSections = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section-title').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    animateSections.observe(section);
  });

  // Neon logo effect
  const logo = document.querySelector('.logo');
  setInterval(() => {
    logo.style.textShadow = '0 0 10px #08f7fe, 0 0 20px #08f7fe, 0 0 30px #08f7fe';
    setTimeout(() => {
      logo.style.textShadow = '0 0 5px #08f7fe';
    }, 500);
  }, 3000);

  // Back to Top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '⬆';
  backToTopBtn.style.position = 'fixed';
  backToTopBtn.style.bottom = '20px';
  backToTopBtn.style.right = '20px';
  backToTopBtn.style.padding = '10px 15px';
  backToTopBtn.style.background = '#f806cc';
  backToTopBtn.style.border = 'none';
  backToTopBtn.style.borderRadius = '50%';
  backToTopBtn.style.color = 'white';
  backToTopBtn.style.cursor = 'pointer';
  backToTopBtn.style.display = 'none';
  backToTopBtn.style.zIndex = '999';
  backToTopBtn.style.boxShadow = '0 0 10px #fe53bb';
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', function () {
    backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
