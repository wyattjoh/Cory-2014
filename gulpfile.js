var gulp = require('gulp');
var gutil = require('gulp-util');

// Plugins
var recess = require('gulp-recess');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var coffeelint = require('gulp-coffeelint');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');

var paths = {
  stylesheets: './private/stylesheets/*.less',
  images: './private/images/*.*',
  scripts: './private/javascripts/*.coffee'
};

gulp.task('stylesheets', function () {
  return gulp.src(paths.stylesheets)
  	.pipe(recess())
    .pipe(less())
    // .pipe(minifyCSS())
    .pipe(gulp.dest('./public/stylesheets'));
});

// Copy all static images
gulp.task('images', function() {
 return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('./public/images'));
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(coffeelint())
    .pipe(coffee())
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascripts'));
})

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(paths.stylesheets, ['stylesheets']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['stylesheets', 'images', 'scripts']);