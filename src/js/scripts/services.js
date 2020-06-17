$(".services-slider").slick({
  // normal options...
  infinite: false,
  slidesToShow: 3,
  arrows: true,
  prevArrow: $(".slick-prev"),
  nextArrow: $(".slick-next"),
  // the magic
  responsive: [
    {
      arrows: true,
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
