var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');

gulp.task('copy:typings', function() {
    return gulp.src(config.typings).pipe(gulp.dest(config.typingsDir));
});