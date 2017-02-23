const gulp = require('gulp');
const rename = require('gulp-rename');
const utils = require('gulp-utils');

module.exports = function(config) {

    gulp.task('browserify', function(cb) {
        return gulp.src(config.fileNames.jsOut, {cwd: config.browserify.src})
            .pipe(utils.bundle(config.browserify.config))
            .pipe(rename(config.fileNames.jsOut))
            .pipe(gulp.dest(config.browserify.target));
    });
    
}