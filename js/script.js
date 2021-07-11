const burgerBtn = document.querySelector('.header__burger-icon');
const mobMenu = document.querySelector('.menu');
const mainSection = document.querySelector('.main');

burgerBtn.addEventListener('click', () => {
    mobMenu.classList.toggle('opened');
    burgerBtn.classList.toggle('crossed');
    mainSection.classList.toggle('freeze');
});