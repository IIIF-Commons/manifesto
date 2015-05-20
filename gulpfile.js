var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    ts = require('gulp-typescript'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename'),
    merge = require('merge2'),
    del = require('del'),
    runSequence = require('run-sequence'),
    Config = require('./gulpfile.config');

var config = new Config();

gulp.task('test', function () {
    return gulp.src(config.test, {read: false})
        .pipe(mocha());
});

gulp.task('clean:dist', function (cb) {
    del([
        config.dist + '/*'
    ], cb);
});

gulp.task('build', function() {

    var tsResult = gulp.src(config.tsSrc)
        .pipe(ts({
            declarationFiles: true,
            noExternalResolve: true,
            noLib: false,
            module: 'commonjs',
            out: config.tsOut
        }));

    return merge([
        tsResult.dts.pipe(gulp.dest(config.dist)),
        tsResult.js.pipe(gulp.dest(config.dist))
    ]);
});

gulp.task('browserify', function (callback) {
    return gulp.src(config.browserifySrc)
        .pipe(browserify({
            standalone: config.browserifyStandalone
        }))
        .pipe(rename(config.browserifyOut))
        .pipe(gulp.dest(config.dist));
});

gulp.task('default', function(callback) {
    runSequence('clean:dist', 'build', 'browserify', 'test', callback);
});