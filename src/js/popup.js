import { blockScreen, unblockScreen } from './_utils.js'

const popupEls = document.querySelectorAll('[data-popup]');
const popupTargetsEls = document.querySelectorAll('[data-popup-target]');

let lastOpenedPopup = null;


popupTargetsEls.forEach((targetEl) => {
  const popupInstanceEl = document.querySelector(`[data-popup="${targetEl.dataset.popupTarget}"]`);

  targetEl.addEventListener('click', () => {
    if (lastOpenedPopup) {
      lastOpenedPopup.style.display = 'none';
    }

    blockScreen();

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
      lastOpenedPopup = null;

      unblockScreen();
    });
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lastOpenedPopup) {
    lastOpenedPopup.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    lastOpenedPopup = null;

    unblockScreen();
  }
});