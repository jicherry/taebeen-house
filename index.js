// const swiper = new Swiper(".mySwiper", {
//   direction: "vertical", // 세로 방향
//   slidesPerView: 1, // 한 번에 하나의 섹션
//   mousewheel: true, // 마우스 휠로 이동
//   speed: 800, // 전환 속도(ms)
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   // 스크롤이 너무 민감하지 않게 약간의 관성 추가
//   simulateTouch: true, // 터치 스와이프 가능
//   grabCursor: true,
// });

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

  // ✅ mousewheel 설정 세밀 조정
  mousewheel: {
    sensitivity: 1, // 휠 민감도 (기본 1)
    releaseOnEdges: false, // 끝에서 기본 스크롤로 넘기지 않음
    thresholdDelta: 50, // 휠 감도 임계값 — 이걸 추가하면 1단계만 이동
    thresholdTime: 400, // 최소 시간 간격(ms)
  },
});
