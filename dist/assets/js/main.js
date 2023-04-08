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
    let introHeight = $('#intro').innerHeight();

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data('scroll');
        let blockOffset = $(blockId).offset().top;

        $('html, body').animate({
            scrollTop: blockOffset - header.innerHeight()
        }, 500);
    });
});