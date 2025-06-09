
const headerEl = document.querySelector('header.header');
const headerFixed = headerEl && headerEl.querySelector('.header-fixed');

const burgerBtnEls = headerEl && headerEl.querySelectorAll('.info__burger');
const mobileMenuEl = headerEl && headerEl.querySelector('.header-mobile');

const mobileListButtonEls = mobileMenuEl && mobileMenuEl.querySelectorAll('.nav-list__link')

headerFixed.classList.toggle('header-fixed--shown', window.pageYOffset > 100);
headerFixed && window.addEventListener('scroll', () => {
  headerFixed.classList.toggle('header-fixed--shown', window.pageYOffset > 100);
});

burgerBtnEls && burgerBtnEls.forEach(btnEl => {
  btnEl.addEventListener('click', () => {
    const isActive = btnEl.classList.contains('info__burger--active');

    btnEl.classList.toggle('info__burger--active', !isActive);

    if (mobileMenuEl) {
      mobileMenuEl.style.display = isActive ? '' : 'block';
    }
  });
})

mobileListButtonEls && mobileListButtonEls.forEach(btnEl => {
  const parentItemEl = btnEl.closest('.nav-list__item');
  const innerItemEl = parentItemEl.querySelector('.nav-inner');

  btnEl.addEventListener('click', () => {
    parentItemEl.classList.toggle('nav-list__item--active');
  });
});
