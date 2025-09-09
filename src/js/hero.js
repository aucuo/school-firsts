
import {Swiper} from 'swiper'
import {Pagination, Navigation} from 'swiper/modules'

new Swiper('#heroSwiper', {
  modules: [Pagination, Navigation],
  speed: 400,
  spaceBetween: 100,
  pagination: {
    el: '#heroSwiperPagination',
    bulletClass: 'pagination__bullet',
    bulletActiveClass: 'pagination__bullet--active',
    clickable: true,
  },
  navigation: {
    nextEl: '#heroSwiperNext',
    prevEl: '#heroSwiperPrev',
  }
});