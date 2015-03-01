var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.
    controller('PhoneListController', [
        '$scope', 'Phone', function($scope, Phone) {

            $scope.phones = Phone.query();
            $scope.orderProp = 'name';
    }]).
    controller('PhoneDetailController', [
        '$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone) {

            $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
                $scope.mainImageUrl = phone.images[0];
            });

            $scope.changeImage = function(imageUrl) {
                $scope.mainImageUrl = imageUrl;
            };
    }]);