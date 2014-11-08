var gulp = require('gulp');
var watch = require('gulp-watch');
var path = require('path');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('css', function(){
  gulp.src('assets/src/less/app.less')
  .pipe(less({
    paths: [path.join(__dirname, 'less', 'includes') ]
  }))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('assets/css'));
});

gulp.task('js', function(){
  gulp.src('assets/src/js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish))
  .pipe(gulp.dest('assets/js'));
});

gulp.task('production', function(){
  gulp.src('assets/css/*.css')
  .pipe(minify())
  .pipe(concat('main.min.css'))
  .pipe(gulp.dest('assets/css'));

  gulp.src('assets/js/*.js')
  .pipe(uglify())
  .pipe(concat('scripts.min.js'))
  .pipe(gulp.dest('assets/js'));
});

gulp.task('default', function(){
  gulp.watch('assets/src/**', ['css', 'js']);
});
