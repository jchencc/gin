var app = angular.module('admin', []);

app.run(function($rootScope, $http) {
    $http.get('/daily-ui/list')
        .success(function(data) {
            $rootScope.list = data.map(function(v) {
                try {
                    return JSON.parse(v);
                } catch (e) {
                    console.log(e);
                    return {label: '', link: ''};
                }
            });
        });

    $rootScope.add = function() {
        $http.post('/daily-ui/add', {
            label: 'Practice2',
            link: '/daily-ui/practice'
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

app.filter('parse', function() {
    return function(input) {
        if (input instanceof Array) {
            return input.map(function(v) {
                return JSON.parse(v);
            });
        }
    }
});
