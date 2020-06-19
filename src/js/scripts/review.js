$(".review-slider").slick({
  // normal options...
  infinite: false,
  slidesToShow: 2,
  prevArrow: $(".review-prev"),
  nextArrow: $(".review-next"),
  // the magic
  responsive: [{
    breakpoint: 767.98,
    settings: {
      slidesToShow: 1,
    },
  }, ],
});