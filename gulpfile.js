var gulp = require('gulp'),
    connect = require('gulp-connect'),
    watch = require('gulp-watch'),
    mocha = require('gulp-mocha');

gulp.task('connect', function() {
  connect.server({
    port: 3000,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.src('daily-ui/**/*')
    .pipe(watch('daily-ui/**/*'));
});

gulp.task('mocha', function() {
  gulp.src('test/unit/router-spec.js')
    .pipe(mocha());
});

gulp.task('default', ['connect', 'watch']);