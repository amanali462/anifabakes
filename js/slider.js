jQuery(document).ready(function($) {
    $('.cupcake-slider').slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
      prevArrow:"<img class='a-left control-c prev slick-prev' src='images/home/icon-feather-arrow-left-circle.png'>",
      nextArrow:"<img class='a-right control-c next slick-next' src='images/home/icon-feather-arrow-right-circle.png'>",
  });
});

jQuery(document).ready(function($) {
    $('.feedback-slider').slick({
      prevArrow:"<img class='a-left control-c prev slick-prev' src='images/home/icon-feather-arrow-left-circle.png'>",
      nextArrow:"<img class='a-right control-c next slick-next' src='images/home/icon-feather-arrow-right-circle.png'>",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    mobileFirst: true,
    responsive: [{
    breakpoint: 850,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='images/home/icon-feather-arrow-left-circle.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='images/home/icon-feather-arrow-right-circle.png'>",
        }
    }]
    
    });
});




