(() => {
  const refs = {
    openModalBtn: document.querySelector("[modal-locations-open]"),
    closeModalBtn: document.querySelector("[modal-locations-close]"),
    modal: document.querySelector("[modal-locations]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();