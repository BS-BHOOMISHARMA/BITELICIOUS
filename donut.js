// donut.js

// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Use a sweet welcome message instead of alert
  window.addEventListener('load', () => {
    const welcome = document.createElement('div');
    welcome.className = 'welcome-popup';
    welcome.innerHTML = '🍩 Welcome to Bitelicious! <br>Ready to make some delicious donuts?';
    document.body.appendChild(welcome);
    
    setTimeout(() => {
      welcome.style.opacity = '1';
      welcome.style.transform = 'translateY(0)';
    }, 500);
  
    setTimeout(() => {
      welcome.style.opacity = '0';
      welcome.style.transform = 'translateY(-50px)';
      setTimeout(() => welcome.remove(), 1000);
    }, 4000); // stays for 4 sec
  });
// Create and style the back-to-top button
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
    backgroundColor: '#1fe7e7',
    color: '#000',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    display: 'none',
    animation: 'bounce 2s infinite',
    zIndex: '999'
  });
  
  // Show/hide back-to-top button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  // Scroll to top
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  
  
