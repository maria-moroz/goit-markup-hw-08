(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal__open]'),
    closeModalBtn: document.querySelector('[data-modal__close]'),
    modal: document.querySelector('[backdrop-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("is-open");
    refs.modal.classList.toggle('backdrop-modal--hidden');
  }
})();