window.addEventListener('scroll', () => {
    const nav = document.querySelector('.mutua-navbar');
    const links = document.querySelectorAll('.nav-menu a, .nav-brand, .contact-trigger');
    
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.padding = '20px 60px';
        nav.style.borderBottom = '1px solid #eee';
        links.forEach(link => {
            if(!link.classList.contains('shop-link')) link.style.color = 'black';
        });
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '30px 60px';
        nav.style.borderBottom = 'none';
        links.forEach(link => link.style.color = 'white');
    }
});