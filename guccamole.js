// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href;
      }
    });
  });
  
  // Welcome popup
  window.addEventListener('load', () => {
    const welcome = document.createElement('div');
    welcome.className = 'welcome-popup';
    welcome.innerHTML = '🥑 Welcome to <strong>Bitelicious</strong>!<br>Let’s smash some Guccamole!';
    Object.assign(welcome.style, {
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%) translateY(-30px)',
      backgroundColor: '#222',
      color: '#fff',
      padding: '15px 30px',
      borderRadius: '12px',
      fontSize: '1.2rem',
      textAlign: 'center',
      zIndex: 1000,
      boxShadow: '0 0 10px rgba(255,255,255,0.2)',
      opacity: '0',
      transition: 'all 0.6s ease'
    });
  
    document.body.appendChild(welcome);
  
    setTimeout(() => {
      welcome.style.opacity = '1';
      welcome.style.transform = 'translateX(-50%) translateY(0)';
    }, 500);
  
    setTimeout(() => {
      welcome.style.opacity = '0';
      welcome.style.transform = 'translateX(-50%) translateY(-30px)';
      setTimeout(() => welcome.remove(), 600);
    }, 4000);
  });
  
  // Back to top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '⬆️';
  backToTopBtn.className = 'back-to-top';
  document.body.appendChild(backToTopBtn);
  
  Object.assign(backToTopBtn.style, {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    padding: '10px 15px',
    borderRadius: '50%',
    backgroundColor: '#ff66cc',
    color: '#000',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    display: 'none',
    animation: 'bounce 2s infinite',
    zIndex: '999'
  });
  
  window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
// Section animations
  const animatable = document.querySelectorAll('section, h2, ul, ol, article');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });
  
  animatable.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
  });
  
  // Optional: Add cursor pointer and toggle to FAQs (if using toggle-style FAQs)
  const faqs = document.querySelectorAll('.faq-box p strong');
  faqs.forEach(faq => {
    faq.style.cursor = 'pointer';
    faq.addEventListener('click', () => {
      faq.parentElement.classList.toggle('active-faq');
    });
  });
  
  
  
