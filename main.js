(function(){

    $('.regular').slick({
        // centerMode: true,
        // dots: true,
        infinite: true,
        speed: 1000,
        // dots: true,
        autoplay:true,
        autoplaySpeed:5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              centerMode: false,

            }
          },
          {
            breakpoint: 600,
            settings: {
              centerMode: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });



})()