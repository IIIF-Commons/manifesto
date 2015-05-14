var Canvas = (function () {
    function Canvas() {
    }
    return Canvas;
})();
var Manifest = (function () {
    function Manifest() {
    }
    return Manifest;
})();
var http = require("http");
module.exports = {
    manifestCallback: null,
    manifest: null,
    // todo: remove - just to test mocha
    sayHello: function (name) {
        return "Hello, " + name;
    },
    load: function (manifestUri, callback, useJSONP) {
        http.get({
            path: manifestUri
        }, function (res) {
            var result = "";
            res.on('data', function (chunk) {
                result += chunk;
            });
            res.on('end', function () {
                this.parseManifest(result, callback);
            });
        });
    },
    // todo
    parseManifest: function (manifest, callback) {
        callback(manifest);
    }
};
var Sequence = (function () {
    function Sequence() {
    }
    return Sequence;
})();
var Service = (function () {
    function Service() {
    }
    return Service;
})();
var Structure = (function () {
    function Structure() {
    }
    return Structure;
})();
