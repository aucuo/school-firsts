
import {Swiper} from 'swiper'
import {Navigation} from 'swiper/modules'

new Swiper('#heroSwiper', {
  modules: [Navigation],
  speed: 400,
  spaceBetween: 100,
  navigation: {
    nextEl: '#heroSwiperNext',
    prevEl: '#heroSwiperPrev',
  }
});