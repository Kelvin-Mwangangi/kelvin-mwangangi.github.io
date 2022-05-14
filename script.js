const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 5,
    slidesPerView: 1,
    // freeMode: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // keyboard: {
    //   enabled: true,
    //   onlyInViewport: false,
    // },
    // mousewheel: {
    //   invert: true,
    // },
    autoplay: {
      delay: 5000,
    },
});

