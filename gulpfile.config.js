
var metadata = require('./package');

var GulpConfig = (function () {
    function GulpConfig() {
        this.header = '// ' + metadata.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
        this.dist = './dist';
    }
    return GulpConfig;
})();

module.exports = GulpConfig;