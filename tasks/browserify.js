var browserify = require('browserify');
var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var rename = require('gulp-rename');
var through = require('through2');

function bundle() {
    return through.obj(function(file, encoding, cb) {
        var bundle = browserify(config.browserifyConfig)
            .require(file, {entry: file.path})
            .bundle();

        file.contents = bundle;
        this.push(file);
        cb();
    });
}

gulp.task('browserify', function(cb) {
    return gulp.src(config.jsOut, {cwd: config.browserifySrc})
        .pipe(bundle())
        .pipe(rename(config.jsOut))
        .pipe(gulp.dest(config.browserifyTarget));
});