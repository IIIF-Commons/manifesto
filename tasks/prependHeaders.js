const gulp = require('gulp');
const utils = require('gulp-utils');
const path = require('path');

module.exports = function(config) {

    gulp.task('prependHeaders', function(cb){
        Promise.all([
            utils.prependHeader(config.header, path.join(config.directories.dist, config.fileNames.dtsOut), config.directories.dist),
            utils.prependHeader(config.header, path.join(config.directories.client, config.fileNames.jsOut), config.directories.client),
            utils.prependHeader(config.header, path.join(config.directories.client, config.fileNames.jsMinOut), config.directories.client),
            utils.prependHeader(config.header, path.join(config.directories.server, config.fileNames.jsOut), config.directories.server),
            utils.prependHeader(config.header, path.join(config.directories.server, config.fileNames.jsMinOut), config.directories.server)
        ]).then(function(){
            cb();
        });
    });

}