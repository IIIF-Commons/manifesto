var concat = require('gulp-concat');
var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var merge = require('merge2');
var path = require('path');

gulp.task('bundle', function(cb) {
    var client = path.join(config.client, config.jsOut);
    var server = path.join(config.server, config.jsOut);
    
    return merge([
        gulp.src(config.deps.concat([client]))
            .pipe(concat(config.jsBundleOut))
            .pipe(gulp.dest(config.client)),
        gulp.src(config.deps.concat([server]))
            .pipe(concat(config.jsOut))
            .pipe(gulp.dest(config.server))
    ]);
});

gulp.task('bundle:typings', function(cb) {
    return gulp.src(config.typings.concat([
            path.join(config.typingsDir, config.dtsOut), // include optional typings/name.d.ts for customisations
            path.join(config.dist, config.dtsOut)
        ]))
        .pipe(concat(config.dtsBundleOut))
        .pipe(gulp.dest(config.dist));
});