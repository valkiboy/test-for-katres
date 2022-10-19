const navProductionLink = document.querySelector('.nav-production__link');
const navSubmenu = document.querySelector('.nav-submenu');
const navNroductionItem = document.querySelector('.nav-production__item');

if (typeof (navProductionLink && navSubmenu && navNroductionItem) !== 'undefined' && navProductionLink && navSubmenu && navNroductionItem !== null) {

  navProductionLink.addEventListener('click', function (evt) {
    if (navSubmenu.classList.contains('nav-submenu--open')) {
      evt.preventDefault();
      navSubmenu.classList.remove('nav-submenu--open');
      navNroductionItem.classList.remove('nav-production__item--open');
    } else {
      evt.preventDefault();
      navSubmenu.classList.add('nav-submenu--open');
      navNroductionItem.classList.add('nav-production__item--open');
    }
  });
}
