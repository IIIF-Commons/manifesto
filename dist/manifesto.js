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
        var _this = this;
        http.get({
            path: manifestUri
        }, function (res) {
            res.setEncoding('utf8');
            var result = "";
            res.on('data', function (chunk) {
                result += chunk;
            });
            res.on('end', function () {
                _this.parseManifest(result, callback);
            });
        }).on('error', function (e) {
            console.log(e.message);
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
