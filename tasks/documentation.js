var c = require('../gulpfile.config');
var config = new c();
var gulp = require('gulp');
var typedoc = require("gulp-typedoc");

gulp.task("documentation", function() {
    return gulp
        .src(['src/*.ts', 'typings/*.d.ts'])
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
        }));
});