
const menuHamburger = document.querySelector(".menuHamburger");
const menu = document.querySelector('.menuDeroulantActif');

if (menuHamburger) {
    menuHamburger.addEventListener('click', function () {
        menu.classList.toggle('mobile-menu');

    });
}
