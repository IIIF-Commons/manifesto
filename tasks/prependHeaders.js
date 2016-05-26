var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var utils = require('gulp-utils');

gulp.task('prependHeaders', function(cb){
    Promise.all([
        utils.prependHeader(config.header, config.dist + '/' + config.dtsOut, config.dist),
        utils.prependHeader(config.header, config.client + '/' + config.jsOut, config.client),
        utils.prependHeader(config.header, config.client + '/' + config.name + '.min.js', config.client),
        utils.prependHeader(config.header, config.server + '/' + config.jsOut, config.server),
        utils.prependHeader(config.header, config.server + '/' + config.name + '.min.js', config.server)
    ]).then(function(){
        cb();
    });
});