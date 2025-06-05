const fixedElements = [
  document.querySelector('.header-fixed'),
  document.querySelector('#application .application__btn'),
].filter(el => el !== null); // Фильтруем возможные null'ы

const popupEls = document.querySelectorAll('[data-popup]');
const popupTargetsEls = document.querySelectorAll('[data-popup-target]');

let lastOpenedPopup = null;
let scrollbarWidth = 0;

function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function resetFixedElements() {
  fixedElements.forEach(fixedElement => {
    fixedElement.style.marginRight = '';
  });
}

popupTargetsEls.forEach((targetEl) => {
  const popupInstanceEl = document.querySelector(`[data-popup="${targetEl.dataset.popupTarget}"]`);

  targetEl.addEventListener('click', () => {
    if (lastOpenedPopup) {
      lastOpenedPopup.style.display = 'none';
    }

    scrollbarWidth = getScrollbarWidth();

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    fixedElements.forEach(fixedElement => {
      fixedElement.style.marginRight = `${scrollbarWidth}px`;
    });

    popupInstanceEl.style.display = 'flex';
    lastOpenedPopup = popupInstanceEl;
  });
});

popupEls.forEach((popupEl) => {
  const closeBtn = popupEl.querySelector('[data-popup-close]');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      popupEl.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      resetFixedElements();
      lastOpenedPopup = null;
    });
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lastOpenedPopup) {
    lastOpenedPopup.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    resetFixedElements();
    lastOpenedPopup = null;
  }
});