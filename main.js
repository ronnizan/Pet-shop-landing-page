(function(){

    $('.regular').slick({
        // centerMode: true,
        // dots: true,
        infinite: true,
        speed: 1000,
        // dots: true,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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


      $('#itemslider').carousel({ interval: 3000 });

      $('.carousel-showmanymoveone .item').each(function(){
      var itemToClone = $(this);
      
      for (var i=1;i<6;i++) {
      itemToClone = itemToClone.next();
      
      if (!itemToClone.length) {
      itemToClone = $(this).siblings(':first');
      }
      
      itemToClone.children(':first-child').clone()
      .addClass("cloneditem-"+(i))
      .appendTo($(this));
      }
      });

      $('#WAButton').floatingWhatsApp({
        phone: '972542356555',
        headerTitle: 'צרו איתנו קשר', 
        popupMessage: '?שלום, איך נוכל לעזור',
        showPopup: true, 
        buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', 
        headerColor: 'green',
        backgroundColor: 'green !important', 
        position: "right"    
      });

})()