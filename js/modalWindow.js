const modalBackdrop = document.querySelector('.backdrop');
const modalWindow = document.querySelector('.modal-section');
const openModalWindowNav = document.querySelector('.navigation__button');
const openModalWindowBtn = document.querySelector('.burger__button');
const closeModalWindow1 = document.querySelector('.modal-section__button-close');
const closeModalWindow2 = document.querySelector('.modal__button');

openModalWindowNav.addEventListener('click', () => {
  modalBackdrop.classList.remove('is-hidden');
  modalWindow.classList.add('is-up');
})

openModalWindowBtn.addEventListener('click', () => {
  modalBackdrop.classList.remove('is-hidden');
  modalWindow.classList.add('is-up');
})


closeModalWindow1.addEventListener('click', () => {
  modalBackdrop.classList.add('is-hidden');
  modalWindow.classList.remove('is-up');
})

closeModalWindow2.addEventListener('click', () => {
  modalBackdrop.classList.add('is-hidden');
  modalWindow.classList.remove('is-up');
})
