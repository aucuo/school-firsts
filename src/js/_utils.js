// _utils.js

let scrollbarWidth = 0;
const fixedElements = [
  document.querySelector('.header-fixed'),
  document.querySelector('#application .application__btn'),
].filter(el => el !== null);

export function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

// Блокировка экрана
export function blockScreen() {
  scrollbarWidth = getScrollbarWidth();

  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = `${scrollbarWidth}px`;

  fixedElements.forEach(fixedElement => {
    fixedElement.style.marginRight = `${scrollbarWidth}px`;
  });
}

// Разблокировка экрана
export function unblockScreen() {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';

  fixedElements.forEach(fixedElement => {
    fixedElement.style.marginRight = '';
  });
}