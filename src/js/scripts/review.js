$(".review-slider").slick({
  // normal options...
  infinite: false,
  slidesToShow: 2,
  prevArrow: $(".slick-prev"),
  nextArrow: $(".slick-next"),
  // the magic
  responsive: [
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
