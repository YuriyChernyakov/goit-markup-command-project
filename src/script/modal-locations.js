
(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-location-open]"),
    closeModalBtn: document.querySelector("[modal-location-close]"),
    modal: document.querySelector("[modal-location]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();