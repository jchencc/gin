$(document).ready(function() {
    var $dialog     = $('.dialog'),
        $feedback   = $('.feedback');

    $('.submit').click(function() {
        $dialog.animate({
            opacity: 0
        }, {
            duration: 800,
            easing: 'easeInOutBack',
            step: function(now, tx) {
                var top = 100 * (1 - now);

                $dialog.css('top', top + 'px');
            },
            complete: function() {
                $dialog.hide();
                $feedback.show();

                $feedback.animate({
                    opacity: 1
                },{
                    duration: 800,
                    easing: 'easeOutCubic',
                    step: function(now, tx) {
                        var top = 100 * now;

                        $feedback.css('top', top + 'px');

                        if (now > .5) {
                            $feedback.find('.icon').addClass('active');
                        }
                    }
                });
            }
        });
    });

    $('.feedback a').click(function() {
        $feedback.animate({
            opacity: 0,
        }, {
            duration: 800,
            easing: 'easeInOutBack',
            step: function(now, tx) {
                var top = 200 - 100 * now;

                $feedback.css('top', top + 'px');
            },
            complete: function() {
                $feedback.hide();
                $dialog.show();

                $dialog.animate({
                    opacity: 1
                }, {
                    duration: 800,
                    easing: 'easeOutCubic',
                    step: function(now, tx) {
                        var top = 100 * (now - 1);

                        $dialog.css('top', top + 'px');
                    },
                    complete: function() {
                        $feedback.find('.icon').removeClass('active');
                    }
                })
            }
        });
    });
});