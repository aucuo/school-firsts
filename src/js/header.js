
const headerEl = document.querySelector('header.header');
const headerFixed = headerEl && headerEl.querySelector('.header-fixed');

headerFixed && window.addEventListener('scroll', () => {
  headerFixed.classList.toggle('header-fixed--shown', window.pageYOffset > 100);
});