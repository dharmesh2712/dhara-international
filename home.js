document.getElementById('login-popup').addEventListener('click',function(){
 document.getElementById('loginModal').style.display = 'flex'    
});
document.getElementById('navbar-toggle').addEventListener('click', function() {
    const navbarCta = document.getElementById('navbar-cta');
    navbarCta.classList.toggle('hidden');
  });
function closePopup(){
    document.getElementById('loginModal').style.display = 'none'
}
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
