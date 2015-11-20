var gulp = require('gulp')
	karma = require('gulp-karma');

gulp.task('test', ['unit']);

gulp.task('unit', ['js', 'clean:reporters'], function () {
	return gulp.src('./foobar') // Needs to be bogus file or it will overwrite files in conf file
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}))
		.on('error', function(err) {
			throw err;
		});
});