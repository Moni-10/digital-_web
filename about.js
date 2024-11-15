const hamburger = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close-icon');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.style.display = 'none';
    closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    closeIcon.style.display = 'none';
    hamburger.style.display = 'block';
});
