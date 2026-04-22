// 1. Automatic Local Gallery Shuffler
function shuffleGallery() {
    const gallery = document.getElementById('main-gallery');
    if (gallery) {
        const nodes = Array.from(gallery.children);
        for (let i = nodes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            gallery.appendChild(nodes[j]);
        }
    }
}

// 2. Scroll Reveal Effects
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.photo-item, .section-title, .hero-overlay');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};

// 3. Navbar Dynamics
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.glass-nav');
    if (window.scrollY > 50) {
        nav.style.padding = '15px 50px';
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        nav.style.padding = '20px 50px';
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
    }
});

// Initializing the "Empire" Site
window.addEventListener('DOMContentLoaded', () => {
    // Randomize gallery on load
    shuffleGallery();
    
    // Set animations
    document.querySelectorAll('.photo-item, .section-title').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s ease-out";
    });
    
    revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);