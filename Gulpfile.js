var gulp = require('gulp')
    requireDir = require('require-dir')
    dir = requireDir('./tasks')
    connect = require('gulp-connect');

gulp.task('connect', function (){
    connect.server({
        port: 9000,
        base: "/",
        livereload: true
    });
});
 
gulp.task('run', ['connect', 'style', 'js', 'lint'], function () {
    gulp.watch([
        './frontend/*.js',
        './frontend/**/*.js',
        './frontend/common/**/*.js',
        './frontend/public/**/*.js',
        './frontend/user/**/*.js',
        './frontend/**/*.html',
        './frontend/*.html',
        "!./frontend/**/*templates.js"
    ], ['js', 'lint']); 

    gulp.watch(['./frontend/common/styles/**/*.scss'], ['style']);
});

gulp.task('build', ['clean', 'style', 'js', 'unit']);
 