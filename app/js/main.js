$(function(){
 
    $(".main_slider_wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="next"></button>',
        prevArrow: '<button type="button" class="prev"></button>',
        infinite: false,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1001,
              settings: {
                infinite: true,
                arrows: false,
                autoplay: true
                }
            }
        ]
    });

    $(".news_inner_slider_wrapper").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        responsive: [
            {
            breakpoint: 1171,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
  });

  $(".instructors_box_name").on("click", function(e){
    e.preventDefault();
    $(this).toggleClass("rotate").next().slideToggle();
    $(".instructors_box_name").not(this).removeClass("rotate").next().slideUp();
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

    new WOW().init();

    $(".header_top_menu_btn").on("click", function(){
        $(".menu_list_top").slideToggle();
    });

    $(".header_bottom_menu_btn").on("click", function(){
        $(".menu_list_bottom").slideToggle();
    });

    let mixer = mixitup(".gallery_inner_items");
});

