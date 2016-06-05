var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var utils = require('gulp-utils');

gulp.task('minify', function(cb){
    Promise.all([
        utils.minify(config.client + '/' + config.jsOut, config.client),
        utils.minify(config.client + '/' + config.jsMinOut, config.client),
        utils.minify(config.server + '/' + config.jsOut, config.server),
        utils.minify(config.server + '/' + config.jsMinOut, config.server),
    ]).then(function(){
        cb();
    });
});