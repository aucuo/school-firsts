
import {Swiper} from 'swiper'
import {Pagination} from 'swiper/modules'

new Swiper('#newsSwiper', {
  modules: [Pagination],
  speed: 400,
  slidesPerView: 1.08,
  spaceBetween: 12,
  pagination: {
    el: '#newsPagination',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 4,
    },
  },
});