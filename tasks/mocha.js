var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var path = require('path');

module.exports = function(config) {

    gulp.src(path.join(config.directories.server, config.metadata.name))
        .pipe(istanbul())
        .pipe(istanbul.hookRequire())
        .on('finish', function() {
            gulp.src(path.join(config.directories.tests, '*.js'), {read: false})
                .pipe(mocha())
                .pipe(istanbul.writeReports());
        });
}