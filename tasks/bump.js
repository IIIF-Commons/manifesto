const argv = require('yargs').argv;
const bump = require('gulp-bump');
const exec = require('child_process').exec;
const gulp = require('gulp');

gulp.task('bump', function(){
    const bumpType = argv.type || 'patch'; // major.minor.patch

    return gulp.src(['./bower.json', './package.json'])
        .pipe(bump({type: bumpType}))
        .pipe(gulp.dest('./'));
});

// requires global gulp-cli
gulp.task('bump:minor', function(cb){
    exec('gulp bump --type minor', function (err, stdout, stderr) {
        cb();
    });
});

// requires global gulp-cli
gulp.task('bump:major', function(cb){
    exec('gulp bump --type major', function (err, stdout, stderr) {
        cb();
    });
});