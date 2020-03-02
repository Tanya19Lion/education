$(function(){
 
    $(".main_slider_wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="next"></button>',
        prevArrow: '<button type="button" class="prev"></button>',
        infinite: false
    });

    $(".news_inner_slider_wrapper").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: false
  });

  $(".instructors_box_name").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("rotate").next().slideToggle();
    $(".instructors_box_name"
    ).not(this).removeClass("rotate").next().slideUp();
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


      let mixer = mixitup(".gallery_inner_items");
});

