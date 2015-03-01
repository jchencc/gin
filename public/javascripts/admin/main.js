var app = angular.module('admin', []);

app.run(function($rootScope, $http) {
    $http.get('/daily-ui/list')
        .success(function(data) {
            $rootScope.list = data;
        });

    $rootScope.add = function() {
        $http.post('/daily-ui/add', {
            link: '/daily-ui/20141211-snow',
            label: 'Snow'
        }).success(function(data) {
            console.log(data);
        });
    };

    $rootScope.update = function(index) {
        console.log(index);
    };

    $rootScope.delete = function(index) {
        $http.post('/daily-ui/delete', {
            link: '/daily-ui/practice'
        }).success(function(responseText) {
            console.log(responseText);
        });
    };
});
