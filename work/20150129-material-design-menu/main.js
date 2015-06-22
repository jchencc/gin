$(document).ready(function() {
    $('.switch a').click(function() {
        if ($('header').hasClass('active')) {
            $('header').removeClass('active');
            $('main').removeClass('active');
        } else {
            $('header').addClass('active');
            $('main').addClass('active');
        }
    })
});