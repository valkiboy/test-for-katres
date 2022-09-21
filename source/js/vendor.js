// Swiper 7.4.1
import './vendor/swiper';

const swiper = new Swiper('.intro__swiper', {

  // Стрелки
  navigation: {
    nextEl: '.intro__button-next',
    prevEl: '.intro__button-prev',
  },

  // Отключаем скрол на ПК
  // simulateTouch: false,

});

