// Function to handle Navbar logic based on page type
function initNavigation() {
    const nav = document.querySelector('.mutua-navbar');
    const isHomePage = document.querySelector('.home-hero');

    const handleScroll = () => {
        if (isHomePage) {
            // Only toggle on home page
            if (window.scrollY > 50) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on load
}

document.addEventListener('DOMContentLoaded', initNavigation);