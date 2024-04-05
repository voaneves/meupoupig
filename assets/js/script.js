jQuery('.card-slider').slick({
  centerMode: true,
  slidesToShow:3,
  autoplay: false,
  slidesToScroll:1,
  dots: true,
  responsive:[
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    }
  ]
});
