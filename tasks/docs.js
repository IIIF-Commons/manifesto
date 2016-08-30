var c = require('../gulpfile.config');
var config = new c();
var fs = require('fs');
var gulp = require('gulp');
var merge = require('merge2');
var typedoc = require("gulp-typedoc");

gulp.task("docs", function() {


    gulp.src(['src/*.ts', 'typings/*.d.ts'])
                .pipe(typedoc({
                    // TypeScript options (see typescript docs)
                    module: 'commonjs',
                    target: config.tsConfig.target,
                    includeDeclarations: false,

                    // Output options (see typedoc docs)
                    out: "./docs",
                    json: "./docs/docs.json",

                    // TypeDoc options (see typedoc docs)
                    name: config.name,
                    theme: "default",
                    ignoreCompilerErrors: false,
                    version: true
                })).on('end', function() {
                    fs.writeFile("docs/.nojekyll", "");
                });
});