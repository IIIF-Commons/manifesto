var metadata = require('./package');
var path = require('path');

var GulpConfig = (function () {
    function GulpConfig() {
        this.name = 'manifesto';
        this.dist = './dist';
        this.client = path.join(this.dist, '/client/');
        this.server = path.join(this.dist, '/server/');
        this.jsOut = this.name + '.js';
        this.header = '// ' + metadata.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
        this.dtsOut = this.name + '.d.ts';
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