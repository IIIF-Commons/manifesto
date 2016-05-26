var gulp = require('gulp');
var path = require('path');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var utils = {
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
    }
};

module.exports = utils;