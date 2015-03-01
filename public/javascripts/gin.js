var app = angular.module('gin', []);

app.controller('GinController', function($scope) {
  $scope.list = [{
    link: '/daily-ui/practice',
    label: 'Practice'
  }, {
    link: '/daily-ui/phone-list',
    label: 'Phone List'
  }];
});
