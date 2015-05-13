module.exports = {
    manifestCallback: Object,
    manifest: Manifest,
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
    }
};
