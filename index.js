const swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  simulateTouch: true,
  grabCursor: true,
  mousewheel: {
    sensitivity: 1,
    thresholdDelta: 50,
    thresholdTime: 400,
  },
  on: {
    init: function () {
      const firstSlide = this.slides[0];
      const overlay = firstSlide.querySelector(".overlay");
      if (overlay) overlay.classList.add("slide-in");
    },
    slideChangeTransitionStart: function () {
      document
        .querySelectorAll(".swiper-slide .overlay")
        .forEach((el) => el.classList.remove("slide-in"));
    },
    slideChangeTransitionEnd: function () {
      const currentSlide = this.slides[this.activeIndex];
      const overlay = currentSlide.querySelector(".overlay");
      if (overlay) overlay.classList.add("slide-in");
    },
  },
});

// 메뉴 토글 기능
const menuBtn = document.getElementById("menu-btn");
const menuOverlay = document.getElementById("menu-overlay");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  menuOverlay.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  const headerContainer = document.querySelector(".header_container");
  const remToPx = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  const triggerDistance = 3 * remToPx;

  if (window.scrollY > triggerDistance) {
    headerContainer.classList.add("scrolled");
  } else {
    headerContainer.classList.remove("scrolled");
  }
});
