// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     // direction: 'vertical',
//     loop: true,
//     spaceBetween: 5,
//     slidesPerView: 1,
//     // freeMode: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     // keyboard: {
//     //   enabled: true,
//     //   onlyInViewport: false,
//     // },
//     // mousewheel: {
//     //   invert: true,
//     // },
//     autoplay: {
//       delay: 5000,
//     },
// });

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
}