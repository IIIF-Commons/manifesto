var metadata = require('./package');
var path = require('path');

var GulpConfig = (function () {
    function GulpConfig() {
        this.name = 'manifesto';
        this.dist = './dist';
        this.client = path.join(this.dist, '/client/');
        this.server = path.join(this.dist, '/server/');
        this.jsOut = this.name + '.js';
        this.jsBundleOut = this.name + '.bundle.js';
        this.jsMinOut = this.name + '.min.js';
        this.header = '// ' + metadata.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
        this.dtsOut = this.name + '.d.ts';
        this.dtsBundleOut = this.name + '.bundle.d.ts';
        // libs that MUST be included in a consuming app for this component to work
        this.deps = [
            'node_modules/exjs/dist/ex.es3.min.js',
            'node_modules/extensions/dist/extensions.min.js'
        ];
        // libs that MAY be included in a consuming app but are used here for testing purposes
        this.testDeps = [
        ];
        this.testDepsDir = './test/js';
        // ts definitions to copy to the typings dir
        this.typings = [
            'node_modules/exjs/dist/ex.d.ts',
            'node_modules/extensions/dist/extensions.d.ts',
            'node_modules/http-status-codes/dist/http-status-codes.d.ts'
        ];
        this.typingsDir = './typings';
        this.tsSrc = [
            'src/_references.ts',
            'src/*.ts',
            'typings/*.ts',
            '!test'];
        this.tsConfig = {
            declarationFiles: true,
            noExternalResolve: true,
            noLib: false,
            module: 'commonjs',
            target: 'es3'
        };
        this.browserifyConfig = {
            standalone: this.name,
            debug: false
        };
        this.browserifySrc = this.server;
        this.browserifyTarget = this.client;
        this.test = 'test/*.js';
    }
    return GulpConfig;
})();

module.exports = GulpConfig;