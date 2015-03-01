var phonecatApp = angular.module('phonecatApp', [
    'ngRoute', 'phonecatControllers', 'phonecatFilters', 'phonecatServices'
]);

phonecatApp.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: '/angular/phone-list',
                controller: 'PhoneListController'
            }).
            when('/phones/:phoneId', {
                templateUrl: '/angular/phone-detail',
                controller: 'PhoneDetailController'
            }).
            otherwise({
                redirectTo: '/phones'
            });
    }
]);