var gulp = require('gulp')
	templateCache = require('gulp-angular-templatecache')
	gulpif = require('gulp-if')
	load = require('gulp-load-plugins')();


gulp.task('js', ['cleanjs', 'cleanZip', 'build-js']);

// Takes all folders from app and creates app.js
gulp.task('build-js',['build-templates'], function() {
	return gulp.src([
		'frontend/public/public.js', 
		'frontend/main/module.js', 
		'frontend/main/templates.js', 
		'frontend/public/**/*module.js',
		'frontend/public/**/*.js', 
		])
		.pipe(load.ngAnnotate())
		.pipe(load.uglify())
		.pipe(load.concat('app.js'))
		.pipe(gulp.dest('frontend/dist/js'));
});
 
gulp.task('build-templates', function () {
	return gulp.src([
		'frontend/common/**/*.html', 
		'frontend/public/*.html', 
		'frontend/public/**/*.html', 
		'frontend/user/*.html',
		'frontend/user/**/*.html'
		])
		.pipe(gulpif(/[.]html$/, templateCache({
			module: 'app.templates',
			standalone: true
		})))
		.pipe(load.ngAnnotate())
		.pipe(load.uglify())
		.pipe(load.concat('templates.js'))
		.pipe(gulp.dest('frontend/main'));
});