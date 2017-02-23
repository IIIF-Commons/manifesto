const concat = require('gulp-concat');
const gulp = require('gulp');
const merge = require('merge2');
const ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

module.exports = function(config) {

    gulp.task('build', function() {
        const result = tsProject.src()
            .pipe(tsProject());

        return merge([
            result.dts
                .pipe(concat(config.fileNames.dtsOut))
                .pipe(gulp.dest(config.directories.dist)),
            result.js
                .pipe(concat(config.fileNames.jsOut))
                .pipe(gulp.dest(config.directories.server))
        ]);
    });
    
}