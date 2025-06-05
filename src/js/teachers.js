
import {Swiper} from 'swiper'
import {Navigation} from 'swiper/modules'

new Swiper('#teachersSwiper', {
  modules: [Navigation],
  speed: 400,
  slidesPerView: 1.08,
  spaceBetween: 12,
  navigation: {
    nextEl: '#teachersSwiperNext',
    prevEl: '#teachersSwiperPrev',
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