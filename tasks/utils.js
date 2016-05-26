var browserify = require('browserify');
var gulp = require('gulp');
var insert = require('gulp-insert');
var path = require('path');
var rename = require('gulp-rename');
var through = require('through2');
var uglify = require('gulp-uglify');

var utils = {
    bundle: function(config) {
        return through.obj(function(file, encoding, cb) {
            var bundle = browserify(config)
                .require(file, {entry: file.path})
                .bundle();

            file.contents = bundle;
            this.push(file);
            cb();
        });
    },
    minify: function(file, dest) {
        return new Promise(function(resolve, reject) {
            gulp.src(file)
                .pipe(rename(function(path) {
                    path.extname = ".min" + path.extname;
                }))
                .pipe(uglify({
                    mangle: false
                }))
                .pipe(gulp.dest(dest))
                .on('end', function() {
                    resolve();
                });
        });
    },
    prependHeader: function(header, file, dest){
        return new Promise(function(resolve, reject) {
            return gulp.src(file)
                    .pipe(insert.prepend(header))
                    .pipe(gulp.dest(dest))
                    .on('end', function() {
                        resolve();
                    });
        });
    }
};

module.exports = utils;