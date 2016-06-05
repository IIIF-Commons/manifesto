var concat = require('gulp-concat');
var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var merge = require('merge2');

gulp.task('bundle:deps', function(cb) {
    var client = config.client + '/' + config.jsMinOut;
    var server = config.server + '/' + config.jsMinOut;
    
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
            config.typingsDir + '/' + config.dtsOut, // include optional typings/name.d.ts for customisations
            config.dist + '/' + config.dtsOut
        ]))
        .pipe(concat(config.dtsBundleOut))
        .pipe(gulp.dest(config.dist));
});