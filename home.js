document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  let isSliding = true;

  function startSlider() {
    sliderWrapper.classList.add("animate-slide");
  }

  function stopSlider() {
    sliderWrapper.classList.remove("animate-slide");
  }

  sliderWrapper.addEventListener("mouseenter", stopSlider);
  sliderWrapper.addEventListener("mouseleave", startSlider);

  startSlider();
});

$(function () {
  $("#navbar-part").load("navbar.html");
});
$(function () {
  $("#footer-part").load("footer.html");
});
