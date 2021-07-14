const burgerBtn = document.querySelector('.header__burger-icon');
const mobMenu = document.querySelector('.menu');
const mainSection = document.querySelector('.main');
const body = document.querySelector('body');
let timeOutFunctionId;

const desktopWidth = 1024;

burgerBtn.addEventListener('click', () => {
    mobMenu.classList.toggle('opened');
    burgerBtn.classList.toggle('crossed');
    mainSection.classList.toggle('freeze');
});

const removeMobMenu = () => {
    mobMenu.remove();

    burgerBtn.classList.remove('crossed');
    mobMenu.classList.remove('opened');
    mainSection.classList.remove('freeze');
}

const showMobMenu = () => {
    body.appendChild(mobMenu);
}

window.addEventListener('resize', () => {
    clearTimeout(timeOutFunctionId);

    const appWidth = document.documentElement.clientWidth;

    if(appWidth <= desktopWidth) isMobile = true;

    if(appWidth >= desktopWidth) {
        removeMobMenu();
    } else if (appWidth <= desktopWidth) {
        timeOutFunctionId = setTimeout(showMobMenu, 500);
    }

}, true);