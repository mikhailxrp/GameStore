/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/block-games-line/view.js ***!
  \**************************************/
document.addEventListener("DOMContentLoaded", () => {
  const swiperGames = new Swiper(".game-line-container", {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    slidesPerView: "auto",
    speed: 3500,
    grabCursor: true,
    mouseWheelControl: true,
    keyboardControl: true
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map