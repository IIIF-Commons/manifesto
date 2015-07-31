var browserify = require('gulp-browserify'),
    buffer = require('vinyl-buffer'),
    bump = require('gulp-bump'),
    Config = require('./gulpfile.config'),
    del = require('del'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    merge = require('merge2'),
    mocha = require('gulp-mocha'),
    rename = require('gulp-rename'),
    requireDir = require('require-dir'),
    runSequence = require('run-sequence'),
    source = require('vinyl-source-stream'),
    tag = require('gulp-tag-version'),
    tasks = requireDir('./tasks'),
    ts = require('gulp-typescript');

var config = new Config();

gulp.task('test', function () {
    return gulp.src(config.test, {read: false})
        .pipe(mocha());
});

gulp.task('clean', function (cb) {
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
        tsResult.js.pipe(gulp.dest(config.server))
    ]);
});

gulp.task('browserify', function () {
    return gulp.src(config.browserifySrc)
        .pipe(browserify({
            standalone: config.browserifyStandalone
        }))
        .pipe(rename(config.browserifyOut))
        .pipe(gulp.dest(config.client));
});

// todo: gulp-browserify is no longer supported. Use browserify directly.
//gulp.task('browserify', function () {
//
//    var b = browserify({
//        entries: config.browserifySrc,
//        debug: true
//    });
//
//    return b.bundle()
//        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
//        .pipe(source(config.browserifyOut))
//        .pipe(buffer())
//        //.pipe(sourcemaps.init({loadMaps: true}))
//        // Add transformation tasks to the pipeline here.
//        //.pipe(uglify())
//        //.on('error', gutil.log)
//        //.pipe(sourcemaps.write('./'))
//        //.pipe(rename(config.browserifyOut))
//        .pipe(gulp.dest(config.client));
//});

gulp.task('tag', function(){
    return gulp.src('./package.json')
        .pipe(tag());
});

gulp.task('default', function(cb) {
    runSequence('clean', 'build', 'browserify', cb);
});