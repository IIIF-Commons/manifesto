var concat = require('gulp-concat');
var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var merge = require('merge2');

// todo: create a manifesto.bundle.js build instead of bundling these by default
gulp.task('concat', function(cb) {
    var client = config.client + '/' + config.jsOut;
    var server = config.server + '/' + config.jsOut;
    var exjs = './bower_components/exjs/dist/ex.es3.min.js';
    var extensions = './bower_components/extensions/dist/extensions.js';
    
    return merge([
        gulp.src([exjs, extensions, client])
            .pipe(concat(config.jsOut))
            .pipe(gulp.dest(config.client)),
        gulp.src([exjs, extensions, server])
            .pipe(concat(config.jsOut))
            .pipe(gulp.dest(config.server))
    ]);
});