const gulp = require('gulp');
const utils = require('gulp-utils');
const path = require('path');

module.exports = function(config) {

    gulp.task('minify', function(cb){
        Promise.all([
            utils.minify(path.join(config.directories.client, config.fileNames.jsOut), config.directories.client),
            utils.minify(path.join(config.directories.server, config.fileNames.jsOut), config.directories.server)
        ]).then(function(){
            cb();
        });
    });

}