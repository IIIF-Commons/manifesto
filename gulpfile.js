var argv = require('yargs').argv,
    bump = require('gulp-bump'),
    browserify = require('gulp-browserify'),
    Config = require('./gulpfile.config'),
    del = require('del'),
    exec = require('child_process').exec,
    merge = require('merge2'),
    mocha = require('gulp-mocha'),
    rename = require('gulp-rename'),
    requireDir = require('require-dir'),
    runSequence = require('run-sequence'),
    tasks = requireDir('./tasks'),
    ts = require('gulp-typescript'),
    gulp = require('gulp');

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
            out: config.tsOut,
            target: config.tsTarget
        }));

    return merge([
        tsResult.dts.pipe(gulp.dest(config.dist)),
        tsResult.js.pipe(gulp.dest(config.dist))
    ]);
});

gulp.task('browserify', function (cb) {
    return gulp.src(config.browserifySrc)
        .pipe(browserify({
            standalone: config.browserifyStandalone
        }))
        .pipe(rename(config.browserifyOut))
        .pipe(gulp.dest(config.dist));
});

gulp.task('default', function(cb) {
    runSequence('clean:dist', 'build', 'bump', 'browserify', 'test', cb);
});