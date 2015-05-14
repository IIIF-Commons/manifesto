var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    ts = require('gulp-typescript'),
    browserify = require('gulp-browserify'),
    rename = require('gulp-rename'),
    merge = require('merge2'),
    del = require('del'),
    Config = require('./gulpfile.config');

var config = new Config();

gulp.task('test', function () {
    return gulp.src('test/test.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('clean:dist', function (cb) {
    del([
        config.dist + '/*'
    ], cb);
});

gulp.task('build', function() {

    var tsResult = gulp.src(['src/*.ts', 'typings/*.ts', '!test'])
        .pipe(ts({
            declarationFiles: true,
            noExternalResolve: true,
            module: 'commonjs',
            out: 'manifesto.js'
        }));

    return merge([
        tsResult.dts.pipe(gulp.dest(config.dist)),
        tsResult.js.pipe(gulp.dest(config.dist))
    ]);
});

gulp.task('browserify', function (callback) {
    return gulp.src(['*.js'], { cwd: config.dist })
        .pipe(browserify({
            //transform: ['deamdify']
            standalone: 'manifesto'
        }))
        .pipe(rename('manifesto.browser.js'))
        .pipe(gulp.dest(config.dist));
});

gulp.task('default', ['clean:dist', 'build']);