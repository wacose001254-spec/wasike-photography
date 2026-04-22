// Navbar Transparency
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 100) {
        nav.style.backgroundColor = 'rgba(0,0,0,0.95)';
        nav.style.padding = '20px 50px';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.padding = '30px 50px';
    }
});

// Fade-in animations for a premium feel
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.work-item, .stream-header').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 1s ease-out";
    observer.observe(el);
});