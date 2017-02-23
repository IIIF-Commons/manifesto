const concat = require('gulp-concat');
const gulp = require('gulp');
const merge = require('merge2');
const path = require('path');

module.exports = function(config) {

    gulp.task('bundle', function(cb) {

        var client = path.join(config.directories.client, config.fileNames.jsOut);
        var server = path.join(config.directories.server, config.fileNames.jsOut);
        
        return merge([
            gulp.src(config.dependencies.libs.concat([client]))
                .pipe(concat(config.fileNames.jsBundleOut))
                .pipe(gulp.dest(config.directories.client)),
            gulp.src(config.dependencies.libs.concat([server]))
                .pipe(concat(config.fileNames.jsOut))
                .pipe(gulp.dest(config.directories.server))
        ]);
    });
}