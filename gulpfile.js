var concat = require('gulp-concat');
var c = require('./gulpfile.config');
var config = new c();
var gulp = require('gulp');
var merge = require('merge2');
var rename = require('gulp-rename');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var tasks = requireDir('./tasks');
var utils = require('gulp-utils');

gulp.task('browserify', function(cb) {
    return gulp.src(config.jsOut, {cwd: config.browserifySrc})
        .pipe(utils.bundle(config.browserifyConfig))
        .pipe(rename(config.jsOut))
        .pipe(gulp.dest(config.browserifyTarget));
});

gulp.task('minify', function(cb){
    Promise.all([
        utils.minify(config.client + '/' + config.jsOut, config.client),
        utils.minify(config.client + '/' + config.name + '.min.js', config.client),
        utils.minify(config.server + '/' + config.jsOut, config.server),
        utils.minify(config.server + '/' + config.name + '.min.js', config.server),
    ]).then(function(){
        cb();
    });
});

gulp.task('prependHeaders', function(cb){
    Promise.all([
        utils.prependHeader(config.header, config.dist + '/' + config.dtsOut, config.dist),
        utils.prependHeader(config.header, config.client + '/' + config.jsOut, config.client),
        utils.prependHeader(config.header, config.client + '/' + config.name + '.min.js', config.client),
        utils.prependHeader(config.header, config.server + '/' + config.jsOut, config.server),
        utils.prependHeader(config.header, config.server + '/' + config.name + '.min.js', config.server)
    ]).then(function(){
        cb();
    });
});

gulp.task('concat', function(cb) {
    var client = config.client + '/' + config.jsOut;
    var server = config.server + '/' + config.jsOut;
    var exjs = './bower_components/exjs/dist/ex.es3.min.js';
    var extensions = './bower_components/extensions/dist/extensions.js'; // todo: is the whole lib needed?
    
    return merge([
        gulp.src([exjs, extensions, client])
            .pipe(concat(config.jsOut))
            .pipe(gulp.dest(config.client)),
        gulp.src([exjs, extensions, server])
            .pipe(concat(config.jsOut))
            .pipe(gulp.dest(config.server))
    ]);
});

gulp.task('default', function(cb) {
    runSequence('clean:dist', 'build', 'browserify', 'concat', 'minify', 'prependHeaders', cb);
});