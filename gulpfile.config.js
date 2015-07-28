var metadata = require('./package');
var path = require('path');

var GulpConfig = (function () {
    function GulpConfig() {
        this.lib = 'manifesto.js';
        this.dist = './dist';
        this.client = path.join(this.dist, '/client/');
        this.server = path.join(this.dist, '/server/');
        this.browserifyOut = this.lib;
        this.browserifySrc = path.join(this.server, this.lib);
        this.browserifyStandalone = 'manifesto';
        this.header = '// ' + metadata.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
        this.tsOut = this.lib;
        this.tsSrc = [
            'src/_references.ts',
            'src/*.ts',
            'typings/*.ts',
            'node_modules/extensions/typings/*.d.ts',
            '!test'];
        this.tsTarget = "es3";
        this.test = 'test/*.js';
    }
    return GulpConfig;
})();

module.exports = GulpConfig;