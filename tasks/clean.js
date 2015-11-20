var gulp = require('gulp');
var del = require('del');

gulp.task('clean', ['cleanjs', 'cleancss', 'cleanhtml', 'cleanZip']);

gulp.task('cleanjs', function () {
	del(['dist/**/*.js', 'dist/**/*.js.map'], { read: false });
});

gulp.task('cleancss', function () {
	del(['dist/**/*.css*'], { read: false });
});

gulp.task('cleanhtml', function () {
	del(['dist/**/*.html*'], { read: false });
});

gulp.task('cleanZip', function () {
	del(['dist/**/*.zip*'], { read: false });
});

gulp.task('clean:reporters', function () {
	del(['test/results/coverage/*','test/results/jasmine/*', 'test/results/e2e/*'], { read: false });
});

gulp.task('clean:e2eReporters', function () {
	del(['test/results/e2e/*'], { read: false });
});