// $(document).ready(function() {
//     $('.viewport').hide();
//     $('#show').click(function() {
//         if ($('.viewport').is(':hidden')) {
//             $('.viewport').slideDown();
//         } else {
//             $('.viewport').slideUp();
//         }
//     });
// });

var app = angular.module('app', []);

app.directive('slide', function() {
    return {
        restricted: 'A',
        link: function(scope, element, attrs) {
            scope.$watch(attrs.slide, function(newValue, oldValue) {
                if (newValue) {
                    return element.slideDown();
                } else {
                    return element.slideUp();
                }
            });
        }
    };
});
