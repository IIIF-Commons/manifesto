var argv = require('yargs').argv,
    bump = require('gulp-bump'),
    exec = require('child_process').exec,
    filter = require('gulp-filter'),
    gulp = require('gulp'),
    tag = require('gulp-tag-version');

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