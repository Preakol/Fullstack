const modal = document.querySelector('.backdrop');
const modalBtnsOpen = document.querySelectorAll('.modal-btn-open')
// const modalBtnOpen2 = document.querySelector('.modal-btn-open2');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');
modalBtnsOpen.forEach((modalBtnOpen) => {
    modalBtnOpen.addEventListener('click', toggleModal);
})

// modalBtnOpen2.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);
