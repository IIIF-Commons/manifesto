var fs = require('fs');
var gulp = require('gulp');
var typedoc = require("gulp-typedoc");

module.exports = function(config) {

    gulp.task('docs', function(cb) {
        return gulp.src(['src/*.ts', 'typings/**.ts'])
            .pipe(typedoc({
                // TypeScript options (see typescript docs)
                module: 'commonjs',
                target: 'es6',
                includeDeclarations: false,

                // Output options (see typedoc docs)
                out: './docs',
                json: './docs/docs.json',

                // TypeDoc options (see typedoc docs)
                name: config.name,
                theme: 'default',
                ignoreCompilerErrors: true,
                version: true
            })).on('end', function() {
                fs.writeFile('docs/.nojekyll', '');
            });
    });
}