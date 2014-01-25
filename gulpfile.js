var gulp = require('gulp');
var gutil = require('gulp-util');

// Plugins
var recess = require('gulp-recess');
var less = require('gulp-less');

gulp.task('less', function () {
  gulp.src('./public/stylesheets/*.less')
		.pipe(recess())
    .pipe(less())
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('default', ['less']);