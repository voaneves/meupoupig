jQuery('.card-slider').slick({
  centerMode: true,
  slidesToShow:3,
  autoplay: false,
  slidesToScroll:1,
  dots: false,
  responsive:[
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
