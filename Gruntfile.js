var path = require('path'),
    child_process = require('child_process');

module.exports = function(grunt) {
    grunt.initConfig({
        jasmine: {
            src: [
                'public/javascripts/app.js',
                'public/javascripts/controller.js',
                'public/javascripts/filters.js',
                'public/javascripts/services.js'
            ],
            options: {
                specs: 'test/unit/*Spec.js',
                vendor: [
                    'public/bower_components/angular/angular.min.js',
                    'public/bower_components/angular-route/angular-route.min.js',
                    'public/bower_components/angular-resource/angular-resource.min.js'
                ],
                helpers: [
                    'public/bower_components/angular-mocks/angular-mocks.js'
                ]
            }
        },
        jshint: {
            all: [
                'public/javascripts/**/*.js',
                'test/**/*.js',
                '*.js'
            ]
        },
        karma: {
            options: {
                files: [
                    'public/bower_components/angular/angular.min.js',
                    'public/bower_components/angular-route/angular-route.min.js',
                    'public/bower_components/angular-resource/angular-resource.min.js',
                    'public/javascripts/app.js',
                    'public/javascripts/controller.js',
                    'public/javascripts/filters.js',
                    'public/javascripts/services.js'
                ],
                autoWatch: false,
                frameworks: ['jasmine'],
                browsers: ['Chrome'],
                plugins: [
                    'karma-jasmine',
                    'karma-chrome-launcher'
                ]
            },
            unit: {

            }
        },
        watch: {
            routes: {
                files: 'routes/**/*.js',
            }
        }
    });

    
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-karma');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', 'Log some stuff', function() {
        grunt.log.write('xxx').ok();
    });

    grunt.registerTask('test', ['jshint', 'jasmine']);

    var cp = null;

    grunt.registerTask('server', function() {

        cp = child_process.exec('node bin/www');

        grunt.task.run('watch');
    });

    grunt.event.on('watch', function(action, filepath) {
        var key = path.join(__dirname, filepath);
        console.log(key);

        if (cp) {
            cp.kill();
        }
        cp = child_process.exec('node bin/www');
    });
};