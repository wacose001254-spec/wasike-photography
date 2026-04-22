// --- NAVBAR SCROLL EFFECT ---
const nav = document.querySelector('.glass-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.style.padding = '15px 50px';
        nav.style.background = 'rgba(5, 5, 5, 0.9)';
    } else {
        nav.style.padding = '25px 50px';
        nav.style.background = 'rgba(255, 255, 255, 0.05)';
    }
});

// --- FORM HANDLING ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent to Wasike Photography! We will get back to you soon.');
        contactForm.reset();
    });
}

// --- FADE IN ANIMATION ON SCROLL ---
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.photo-item, .about-text, .booking-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});