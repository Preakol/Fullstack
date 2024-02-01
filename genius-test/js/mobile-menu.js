const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnsClose = document.querySelectorAll('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');
const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnOpen.addEventListener('click', disableScroll);
menuBtnsClose.forEach((menuBtnClose)=>{
  menuBtnClose.addEventListener('click', toggleMenu);
  menuBtnClose.addEventListener('click', disableScroll);
})



