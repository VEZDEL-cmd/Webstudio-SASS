(() => {
  const refs = {
    openCallbackBtn: document.querySelector("[data-modal-menu-open]"),
    closeCallbackBtn: document.querySelector("[data-modal-menu-close]"),
    callbackModal: document.querySelector("[data-modal]"),
  };

  refs.openCallbackBtn.addEventListener("click", toggleCallbackModal);
  refs.closeCallbackBtn.addEventListener("click", toggleCallbackModal);

  function toggleCallbackModal() {
    refs.callbackModal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
 