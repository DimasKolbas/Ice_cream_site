const burgerBackdrop = document.querySelector('.backdrop');
const burger = document.querySelector('.burger');
const openButton = document.querySelector('.navigation__burger-menu');
const closeButton = document.querySelector('.burger__icon');

openButton.addEventListener('click', () => {
    burgerBackdrop.classList.remove('is-hidden');
    burger.classList.add('is-open');
})

closeButton.addEventListener('click', () => {
    burgerBackdrop.classList.add('is-hidden');
    burger.classList.remove('is-open');
})


