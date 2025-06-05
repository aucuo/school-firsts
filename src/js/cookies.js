
const cookiesEls = document.querySelectorAll('.cookies');

cookiesEls.forEach(cookiesEl => {
  const buttonEl = cookiesEl.querySelector('.cookies__btn')

  buttonEl.addEventListener('click', () => {
    cookiesEl.classList.toggle('cookies--hidden');
  })
})