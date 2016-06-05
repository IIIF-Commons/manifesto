var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var utils = require('gulp-utils');
var path = require('path');

gulp.task('prependHeaders', function(cb){
    Promise.all([
        utils.prependHeader(config.header, path.join(config.dist, config.dtsOut), config.dist),
        utils.prependHeader(config.header, path.join(config.dist, config.dtsBundleOut), config.dist),
        utils.prependHeader(config.header, path.join(config.client, config.jsOut), config.client),
        utils.prependHeader(config.header, path.join(config.client, config.jsMinOut), config.client),
        utils.prependHeader(config.header, path.join(config.server, config.jsOut), config.server),
        utils.prependHeader(config.header, path.join(config.server, config.jsMinOut), config.server)
    ]).then(function(){
        cb();
    });
});