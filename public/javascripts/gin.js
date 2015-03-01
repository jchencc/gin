var app = angular.module('gin', []);

app.controller('GinController', function($scope, $http) {
    $http.get('/daily-ui/list').
        success(function(responseText) {
            $scope.list = responseText;
        });
  
});
