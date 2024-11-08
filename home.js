
  document.addEventListener("DOMContentLoaded", function () {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    let isSliding = true;

    function startSlider() {
      sliderWrapper.classList.add("animate-slide");
    }

    function stopSlider() {
      sliderWrapper.classList.remove("animate-slide");
    }

    // Hover to stop the animation
    sliderWrapper.addEventListener("mouseenter", stopSlider);
    sliderWrapper.addEventListener("mouseleave", startSlider);

    startSlider(); // Initial start
  });
  // function resizeIframe(obj) {
  //   console.log("88")
  //   obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
  // }
  $(function(){
    $("#navbar-part").load("navbar.html");
  });
  $(function(){
    $("#footer-part").load("footer.html");
  });
  