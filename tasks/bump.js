var argv = require('yargs').argv;
var bump = require('gulp-bump');
var exec = require('child_process').exec;
var gulp = require('gulp');

gulp.task('bump', function(){
    var bumpType = argv.type || 'patch'; // major.minor.patch

    return gulp.src(['./bower.json', './package.json'])
        .pipe(bump({type: bumpType}))
        .pipe(gulp.dest('./'));
    //.pipe(filter('package.json'))
    //.pipe(tag());
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