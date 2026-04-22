window.addEventListener('scroll', () => {
    const nav = document.querySelector('.mutua-nav');
    const logo = document.querySelector('.logo');
    const links = document.querySelectorAll('.links a');
    
    if (window.scrollY > 200) {
        nav.style.background = 'white';
        nav.style.padding = '20px 60px';
        logo.style.color = 'black';
        links.forEach(link => link.style.color = 'black');
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '40px 60px';
        logo.style.color = 'white';
        links.forEach(link => link.style.color = 'white');
    }
});