$(function(){
 
    $(".main_slider_wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="next"></button>',
        prevArrow: '<button type="button" class="prev"></button>',
        infinite: false
        // centerMode: true,
        // focusOnSelect: true,
    });

    $(".rate_star").rateYo({
        rating: 2,
        readOnly: true,
        starWidth: "18px"
      });

      $(".rate_star_five").rateYo({
        rating: 5,
        readOnly: true,
        starWidth: "18px"
      });

      let mixitup = mixitup(".gallery_inner_items");
});