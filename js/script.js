// Function to handle Navbar changes on scroll
function handleNavbar() {
    const nav = document.querySelector('.mutua-navbar');
    
    if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled');
    } else {
        nav.classList.remove('nav-scrolled');
    }
}

// Listen for scroll events
window.addEventListener('scroll', handleNavbar);

// Initial check on load (in case page is refreshed while scrolled)
document.addEventListener('DOMContentLoaded', () => {
    handleNavbar();
    
    // Add a simple fade-in for the Hero branding
    const heroText = document.querySelector('.hero-locations');
    if(heroText) {
        heroText.style.opacity = "0";
        setTimeout(() => {
            heroText.style.transition = "opacity 2s ease";
            heroText.style.opacity = "0.7";
        }, 500);
    }
});