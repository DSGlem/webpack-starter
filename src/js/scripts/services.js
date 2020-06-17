$(".services-slider").slick({
  // normal options...
  infinite: false,
  slidesToShow: 3,
  prevArrow: $(".slick-prev"),
  nextArrow: $(".slick-next"),
  // the magic
  responsive: [{
      breakpoint: 991.98,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767.98,
      settings: "unslick",
    },
  ],
});