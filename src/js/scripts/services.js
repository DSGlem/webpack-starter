$(".services-slider").slick({
  // normal options...
  infinite: false,
  slidesToShow: 3,
  arrows: true,
  prevArrow: $(".slick-prev"),
  nextArrow: $(".slick-next"),
  // the magic
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        infinite: true
      }
    },
    {

      breakpoint: 766.98,
      settings: "unslick" // destroys slick

    }
  ]
});