var metadata = require('./package');
var path = require('path');

module.exports = function (opts) {
    this.metadata = opts.metadata;
    this.header = '// ' + this.metadata.name + ' v' + this.metadata.version + ' ' + this.metadata.homepage + '\n';
    this.dependencies = {
        // libs that MUST be included in a consuming app for this component to work
        libs: opts.libs,
        // libs that MAY be included in a consuming app but are used here for examples purposes
        examples: opts.examples
    };
    this.fileNames = {
        jsOut: this.metadata.name + '.js',
        jsMinOut: this.metadata.name + '.min.js',
        jsBundleOut: this.metadata.name + '.bundle.js',
        dtsOut: this.metadata.name + '.d.ts'
    };
    this.directories = {
        dist: './dist',
        client: './dist/client/',
        server: './dist/server/',
        tests: './test'
    };
    this.browserify = {
        src: this.directories.server,
        target: this.directories.client,
        config: {
            standalone: this.metadata.name,
            debug: false
        }
    };
}