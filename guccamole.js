// Show the welcome message on page load
window.onload = function() {
    document.getElementById('welcomePopup').style.display = 'flex';
};

// Close Welcome Message Popup
function closeWelcomePopup() {
    document.getElementById('welcomePopup').style.display = 'none';
}

// Popup function for "Send Recipe" button
document.getElementById('sendRecipeButton').addEventListener('click', function() {
    showPopup();
});

// Show Popup
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Close Popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
