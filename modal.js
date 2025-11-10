(() => {
  const refs = {
    openCallbackBtn: document.querySelector("[data-modal-open]"),
    closeCallbackBtn: document.querySelector("[data-modal-close]"),
    callbackModal: document.querySelector("[data-modal]"),
  };

  refs.openCallbackBtn.addEventListener("click", toggleCallbackModal);
  refs.closeCallbackBtn.addEventListener("click", toggleCallbackModal);

  function toggleCallbackModal() {
    refs.callbackModal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();
 
// // Всі модалки на сторінці
// const modals = document.querySelectorAll('[data-modal]');

// modals.forEach(modal => {
//   const closeBtn = modal.querySelector('[data-modal-close]');

//   // Відкриття модалки (тут приклад для однієї кнопки, можна зробити кілька)
//   const openBtns = document.querySelectorAll(`[data-modal-open="${modal.id}"]`);
//   openBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//       modal.classList.remove('is-hidden');
//       document.body.classList.add('no-scroll');
//     });
//   });

//   // Закриття модалки по кнопці
//   closeBtn.addEventListener('click', () => {
//     modal.classList.add('is-hidden');
//     document.body.classList.remove('no-scroll');
//   });

//   // Закриття модалки при кліку поза контентом
//   modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//       modal.classList.add('is-hidden');
//       document.body.classList.remove('no-scroll');
//     }
//   });
// });
