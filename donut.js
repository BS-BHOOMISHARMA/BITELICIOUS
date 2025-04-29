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
  
  
