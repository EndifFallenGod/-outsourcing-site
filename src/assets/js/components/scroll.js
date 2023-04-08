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