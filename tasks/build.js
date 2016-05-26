var c = require('../gulpfile.config');
var config = new c();
var concat = require('gulp-concat');
var gulp = require('gulp');
var merge = require('merge2');
var ts = require('gulp-typescript');

gulp.task('build', function() {
    var result = gulp.src(config.tsSrc)
        .pipe(ts(config.tsConfig));

    return merge([
        result.dts
            .pipe(concat(config.dtsOut))
            .pipe(gulp.dest(config.dist)),
        result.js
            .pipe(concat(config.jsOut))
            .pipe(gulp.dest(config.server))
    ]);
});