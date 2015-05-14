var Canvas = (function () {
    function Canvas() {
    }
    return Canvas;
})();
module.exports = {
    manifestCallback: null,
    manifest: null,
    load: function (manifestUri, callback, useJSONP) {
        var _this = this;
        if (!useJSONP) {
            $.getJSON(manifestUri, function (manifest) {
                _this.parseManifest(manifest, callback);
            });
        }
        else {
            var settings = {
                url: manifestUri,
                type: 'GET',
                dataType: 'jsonp',
                jsonp: 'callback',
                jsonpCallback: 'manifestCallback'
            };
            $.ajax(settings);
            this.manifestCallback = function (manifest) {
                _this.parseManifest(manifest, callback);
            };
        }
    },
    // todo
    parseManifest: function (manifest, callback) {
        callback(manifest);
    },
    sayHello: function (name) {
        return "hello " + name;
    }
};
var Manifest = (function () {
    function Manifest() {
    }
    return Manifest;
})();
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
