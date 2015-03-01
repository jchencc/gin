$(document).ready(function() {
    $('.dropdown button').click(function() {
        if ($('.dropdown').hasClass('active')) {
            $('.dropdown').removeClass('active');
        } else {
            $('.dropdown .menu').show(0, function() {
                $('.dropdown').addClass('active');
            });
            $('.dropdown .menu li').removeClass('hover');
            $('.dropdown .menu li').each(function() {
                if ($(this).text() == $('.dropdown button:first-child').text()) {
                    $(this).addClass('hover');
                    return false;
                }
            });
        }
    });
    $('.dropdown .menu').on('transitionend', function() {
        if (!$('.dropdown').hasClass('active')) {
            // console.log('hide');
            $('.dropdown .menu').hide();
        }
    });
    $('.dropdown .menu li').hover(function() {
        $('.dropdown .menu li').removeClass('hover');
        $(this).addClass('hover');
    });
    $('.dropdown .menu li').click(function() {
        // console.log($(this).text());
        $('.dropdown button:first-child').text($(this).text()).click();
    });
});