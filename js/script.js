// Smooth reveal for headings
document.addEventListener('DOMContentLoaded', () => {
    const revealText = document.querySelector('.reveal-text');
    if(revealText) {
        revealText.style.opacity = "0";
        revealText.style.transform = "scale(1.1)";
        setTimeout(() => {
            revealText.style.transition = "all 1.5s ease-out";
            revealText.style.opacity = "1";
            revealText.style.transform = "scale(1)";
        }, 500);
    }
});

// Parallax effect for genre boxes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const boxes = document.querySelectorAll('.genre-box');
    boxes.forEach((box, index) => {
        box.style.backgroundPositionY = -(scrolled * 0.1) + 'px';
    });
});