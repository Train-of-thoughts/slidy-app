const swiper = new Swiper('.about__slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  centeredSlides: true,
  longSwipes: false,
  breakpoints: {
    0: { // >= then width
      slidesPerView: 1,
      spaceBetween: 40
    },
    450: {
      slidesPerView: 1.5,
      spaceBetween: 40
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 40
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