window.addEventListener("scroll", function () {
  const headerContainer = document.querySelector(".header_container");
  const remToPx = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  const triggerDistance = 3 * remToPx; // 3rem 스크롤 시 배경 생김

  if (window.scrollY > triggerDistance) {
    headerContainer.classList.add("scrolled");
  } else {
    headerContainer.classList.remove("scrolled");
  }
});
