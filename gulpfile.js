var browserify = require('browserify');
var bump = require('gulp-bump');
var concat = require('gulp-concat');
var c = require('./gulpfile.config');
var config = new c();
var del = require('del');
var gulp = require('gulp');
var http = require('http');
var insert = require('gulp-insert');
var istanbul = require('gulp-istanbul');
var merge = require('merge2');
var mocha = require('gulp-mocha');
var rename = require('gulp-rename');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var tag = require('gulp-tag-version');
var tasks = requireDir('./tasks');
var through = require('through2');
var ts = require('gulp-typescript');
var typedoc = require("gulp-typedoc");
var uglify = require('gulp-uglify');

gulp.task('test', function () {
    return gulp.src(config.server + config.name)
        .pipe(istanbul())
        .pipe(istanbul.hookRequire())
        .on('finish', function() {
            gulp.src(config.test, {read: false})
                .pipe(mocha())
                .pipe(istanbul.writeReports());
        });
});

gulp.task('minify', function(cb){
    return Promise.all([
        minify(config.client + config.jsOut, config.client),
        minify(config.server + config.jsOut, config.server)
    ]);
});

function minify(file, dest) {
    return gulp.src(file)
            .pipe(rename(function(path) {
                path.extname = ".min" + path.extname;
            }))
            .pipe(uglify({
                mangle: false
            }))
            .pipe(insert.prepend(config.header))
            .pipe(gulp.dest(dest));
}

gulp.task('clean:dist', function (cb) {
    return del(config.dist + '/*', cb);
});

gulp.task('build', function() {

    var result = gulp.src(config.tsSrc)
        .pipe(ts({
            declarationFiles: true,
            noExternalResolve: true,
            noLib: false,
            module: 'commonjs',
            target: 'es3'
        }));
    
    return merge([
        result.dts
            .pipe(concat(config.dtsOut))
            .pipe(insert.prepend(config.header))
            .pipe(gulp.dest(config.dist)),
        result.js
            .pipe(concat(config.jsOut))
            .pipe(gulp.dest(config.server))
    ]);
});

function bundle(debug) {

  return through.obj(function(file, encoding, cb) {
    var bundle = browserify({
            standalone: config.name,
            debug: debug
        })
      .require(file, { entry: file.path })
      .bundle();

    file.contents = bundle;
    this.push(file);
    cb();
  })
}

gulp.task('browserify', function(cb) {
    return gulp.src(config.jsOut, { cwd: config.server })
        .pipe(bundle(false))
        .pipe(rename(config.jsOut))
        .pipe(gulp.dest(config.client));
});

// gulp.task('tag', function(){
//     return gulp.src('./package.json')
//         .pipe(tag());
// });

gulp.task('concat', function() {
    var client = config.client + '/' + config.jsOut;
    var server = config.server + '/' + config.jsOut;
    var exjs = './bower_components/exjs/dist/ex.es3.min.js';
    var extensions = './bower_components/extensions/dist/extensions.js'; // todo: is the whole lib needed?
    
    gulp.src([exjs, extensions, client])
        .pipe(concat(config.jsOut))
        .pipe(insert.prepend(config.header))
        .pipe(gulp.dest(config.client));
        
    gulp.src([exjs, extensions, server])
        .pipe(concat(config.jsOut))
        .pipe(insert.prepend(config.header))
        .pipe(gulp.dest(config.server));
});

gulp.task("documentation", function() {
    return gulp
        .src(['src/*.ts', 'typings/*.d.ts'])
        .pipe(typedoc({
            // TypeScript options (see typescript docs)
            module: 'commonjs',
            target: config.tsTarget,
            includeDeclarations: false,

            // Output options (see typedoc docs)
            out: "./docs",
            json: "./docs/docs.json",

            // TypeDoc options (see typedoc docs)
            name: config.name,
            theme: "default",
            ignoreCompilerErrors: false,
            version: true
        }));
});

gulp.task('default', function(cb) {
    runSequence('clean:dist', 'build', 'browserify', 'concat', 'minify', cb);
});