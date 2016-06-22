var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var path = require('path');

gulp.task('test', function () {
    return gulp.src(path.join(config.server, config.name))
        .pipe(istanbul())
        .pipe(istanbul.hookRequire())
        .on('finish', function() {
            gulp.src(config.test, {read: false})
                .pipe(mocha())
                .pipe(istanbul.writeReports());
        });
});