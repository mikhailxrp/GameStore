/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./src/block-hero/view.js ***!
  \********************************/
document.addEventListener("DOMContentLoaded", function () {
  const swiperHero = new Swiper(".hero-slider .slider-container", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: "auto",
    speed: 1500,
    grabCursor: true,
    mouseWheelControl: true,
    keyboardControl: true
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map