window.addEventListener('DOMContentLoaded', () => {
    // Create welcome message container
    const welcomeBox = document.createElement('div');
    welcomeBox.classList.add('welcome-message');
    welcomeBox.innerHTML = `
      <p>👋 Welcome to <strong>Bitelicious</strong> – Dive into our Gnocchi recipe!</p>
      <button id="closeWelcome">Got it!</button>
    `;
  
    document.body.appendChild(welcomeBox);
  
    // Close on button click
    document.getElementById('closeWelcome').addEventListener('click', () => {
      welcomeBox.style.opacity = '0';
      setTimeout(() => welcomeBox.remove(), 500);
    });
  });
  
