var gulp = require('gulp'),
	load = require('gulp-load-plugins')();

gulp.task('lint', function () {
	return gulp.src(['frontend/**/*.js'])
		.pipe(load.jshint())
		.pipe(load.jshint.reporter(require('jshint-stylish')));
});
