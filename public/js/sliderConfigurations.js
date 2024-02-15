const swiper = new Swiper('.about__slider', {
  speed: 400,
  breakpoints: {
    360: { // >= then width
      slidesPerView: 1,
      spaceBetween: 25
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
});