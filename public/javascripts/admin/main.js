var app = angular.module('admin', []);

app.run(function($rootScope, $http) {
    $http.get('/daily-ui/list')
        .success(function(data) {
            $rootScope.list = data;
        });

    $rootScope.add = function() {
        if ($rootScope.title && $rootScope.link) {
            $http.post('/daily-ui/add', {
                link: $rootScope.link,
                label: $rootScope.title
            }).success(function(data) {
                console.log(data);
            });
        }
    };

    $rootScope.update = function(index) {
        console.log(index);
    };

    $rootScope.delete = function(index) {
        if (confirm('delete ' + $rootScope.list[index].label + '?')) {
            $http.post('/daily-ui/delete', {
                id: $rootScope.list[index]._id
            }).success(function(responseText) {
                console.log(responseText);
            });
        }
    };
});
