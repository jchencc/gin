var designApp = angular.module('designApp', [
    'ngRoute', 'designControllers'
]);

designApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/color', {
        templateUrl: '/design/color',
        controller: 'ColorController'
    }).otherwise({
        redirectTo: '/color'
    });
}]);