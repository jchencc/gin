var designControllers = angular.module('designControllers', []);

designControllers.controller('ColorController', ['$scope', '$http', function($scope, $http) {
    $http.get('/data/color-theme.json').success(function(data) {
        $scope.themes = data;
    });
}]);