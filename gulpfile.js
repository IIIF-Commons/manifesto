var gulp = require('gulp');
var mocha = require('gulp-mocha');
var eventStream = require('event-stream');
var ts = require('gulp-typescript');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

var metadata = require('./package');
var header = '// ' + metadata.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
var dist = './dist';

gulp.task('test', function () {
    return gulp.src('test/index.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('build', function() {
    var tsResult = gulp.src(['src/*.ts', 'typings/*.ts', '!test'])
        .pipe(ts({
            declarationFiles: true,
            noExternalResolve: true,
            module: 'commonjs',
            sortOutput: true
        }));

    return eventStream.merge(
        tsResult.dts.pipe(gulp.dest(dist)),
        tsResult.js.pipe(gulp.dest(dist))
    );
});

gulp.task('browserify', function (callback) {
    return gulp.src(['*.js'], { cwd: dist })
        .pipe(browserify({
            //transform: ['deamdify']
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest(dist));
});