var gulp = require('gulp'),
    connect = require('gulp-connect'),
    clean = require('gulp-clean');

var WORK_FILES = [
  'index.html',
  'work.json',
  'assets/**',
  'bower_components/**',
  'work/**'
];

gulp.task('serve', ['clean', 'copy'], function() {
  connect.server({
    root: 'dist',
    port: 3000,
    livereload: true
  });
});

gulp.task('clean', function() {
  return gulp.src('dist', {read: false})
      .pipe(clean());
});

gulp.task('copy', ['clean'], function() {
  return gulp.src(WORK_FILES, {base: '.'})
      .pipe(gulp.dest('dist'));
});

gulp.task('reload', function() {
  connect.reload();
});

gulp.task('watch', function() {
  var watcher = gulp.watch(WORK_FILES, {interval: 500}, ['copy']);

  watcher.on('change', function(event) {
    console.log(event.path);
  });
});

gulp.task('default', ['serve'], function() {
  gulp.start('watch');
});
