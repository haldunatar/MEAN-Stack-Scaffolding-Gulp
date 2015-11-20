var gulp = require('gulp')
	sass = require('gulp-sass');
	minifyCSS = require('gulp-minify-css');

gulp.task('style', ['sass']);
 
gulp.task('sass', function () {
  gulp.src('frontend/common/styles/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('frontend/dist/css'));
});
