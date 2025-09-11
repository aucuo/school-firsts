
import {Swiper} from 'swiper'
import {Navigation, Pagination} from 'swiper/modules'

new Swiper('#reviewsSwiper', {
  modules: [Navigation, Pagination],
  speed: 400,
  slidesPerView: 1.08,
  spaceBetween: 12,
  navigation: {
    nextEl: '#reviewsSwiperNext',
    prevEl: '#reviewsSwiperPrev',
  },
  pagination: {
    el: '#reviewsPagination',
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