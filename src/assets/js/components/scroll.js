$(function() {
    let header = $('#header');

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let $this = $(this);
        let blockId = $this.data('scroll');
        let blockOffset = $(blockId).offset().top;

        $('#nav-toggle').toggleClass('active');
        $('.menu').toggleClass('active');

        $('html, body').animate({
            scrollTop: blockOffset - header.innerHeight()
        }, 500);
    });
});