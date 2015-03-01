var phonecatFilters = angular.module('phonecatFilters', []);
phonecatFilters.filter('checkmark', function() {
    return function(input) {
        console.log(input);
        return input ? '\u2713' : '\u2718';
    };
});