$(function() {
    $('#nav-toggle').on('click', function(event) {
        event.preventDefault();
    
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });
});