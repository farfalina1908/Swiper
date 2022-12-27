new Swiper(".reviews-slider", {
  paginaion: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  slideToClickedSlide: true,

  hashNavigation: {
    watchState: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".reviews-slider",
  },

  loop: true,
  loopedSlides: 3,

  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },

  speed: 1000,

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
