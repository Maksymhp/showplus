const menuBtn = document.querySelector('.burger');
const menu = document.querySelector('.nav__items');

menuBtn.addEventListener('click', ()=> {
    menu.classList.toggle('nav__items--active');
});