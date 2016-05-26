var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var rename = require('gulp-rename');
var utils = require('gulp-utils');

gulp.task('browserify', function(cb) {
    return gulp.src(config.jsOut, {cwd: config.browserifySrc})
        .pipe(utils.bundle(config.browserifyConfig))
        .pipe(rename(config.jsOut))
        .pipe(gulp.dest(config.browserifyTarget));
});