// import $ from "jquery";
// import "slick-carousel";

$(".reviews__slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infiniteL: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infiniteL: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infiniteL: true,
      },
    },
  ],
});
$(function() {
    let header = $('#header');

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data('scroll');
        let blockOffset = $(blockId).offset().top;

        if (!$this.hasClass('arrow-scroll')) {
            $('#nav-toggle').toggleClass('active');
            $('.menu').toggleClass('active');
        }

        $('html, body').animate({
            scrollTop: blockOffset - header.innerHeight()
        }, 500);
    });
});
$(function() {
    $('#nav-toggle').on('click', function(event) {
        event.preventDefault();
    
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });
});