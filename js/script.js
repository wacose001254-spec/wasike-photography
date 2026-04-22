// Change Nav background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 100) {
        nav.style.backgroundColor = 'rgba(0,0,0,0.9)';
        nav.style.padding = '20px 50px';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.padding = '30px 50px';
    }
});

// Smooth Fade-in for Showcase
const items = document.querySelectorAll('.work-item');
const activeOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
        }
    });
}, { threshold: 0.2 });

items.forEach(item => {
    item.style.opacity = "0";
    item.style.transition = "opacity 1s ease-out";
    activeOnScroll.observe(item);
});