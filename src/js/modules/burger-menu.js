const burgerBtn = document.querySelector('[data-burger-menu]');
const mobileMenu = document.querySelector('[data-mobile-menu]');

burgerBtn.addEventListener('click', e => {
  mobileMenu.classList.toggle('menu-open');
});
