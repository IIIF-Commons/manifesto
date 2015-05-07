var gulp = require('gulp');
var mocha = require('gulp-mocha');
var ts = require('gulp-typescript');

gulp.task('test', function () {
    return gulp.src('test/index.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});

