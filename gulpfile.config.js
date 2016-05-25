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
        this.test = 'test/*.js';
    }
    return GulpConfig;
})();

module.exports = GulpConfig;