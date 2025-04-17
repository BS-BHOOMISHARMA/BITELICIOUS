// script.js

// Wait for DOM to load before running scripts
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");
  
    // Search button click behavior
    searchButton.addEventListener("click", () => {
      const query = searchInput.value.trim();
  
      if (query) {
        alert(`🍽️ Searching for: "${query}"... Bon Appétit!`);
        // You can add real search functionality here
      } else {
        alert("😅 Oops! Please type something to search!");
      }
    });
  });
  
  // Sticky navbar effect
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
  