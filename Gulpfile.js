var gulp = require('gulp');
var sass = require('gulp-sass');

var input = './src/scss/main.scss';
var output = './public/';

gulp.task('style', function () {
  return gulp
    .src(input)
    .pipe(sass())
    .pipe(gulp.dest(output));
});

gulp.task('watch', function() {
    return gulp.watch('./src/scss/**/*.scss', ['style']);
});