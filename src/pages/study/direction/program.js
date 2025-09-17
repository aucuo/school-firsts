import './program.scss'

import {Swiper} from 'swiper'


const breakpoint = window.innerWidth <= 768;

if (breakpoint) {
  new Swiper('[data-js-program-swiper]', {
    speed: 400,
    slidesPerView: 1.08,
    spaceBetween: 12,
  });
}