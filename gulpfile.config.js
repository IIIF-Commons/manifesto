
var metadata = require('./package');

var GulpConfig = (function () {
    function GulpConfig() {
        this.dist = './dist';
        this.browserifyOut = 'manifesto.client.js';
        this.browserifySrc = [this.dist + '/*.js'];
        this.browserifyStandalone = 'manifesto';
        this.header = '// ' + metadata.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
        this.tsOut = 'manifesto.js';
        this.tsSrc = [
            'src/*.ts',
            'typings/*.ts',
            'node_modules/extensions/typings/*.d.ts',
            '!test'];
        this.test = 'test/test.js';
    }
    return GulpConfig;
})();

module.exports = GulpConfig;