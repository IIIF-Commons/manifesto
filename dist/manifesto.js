var http = require("http");
var url = require("url");
module.exports = {
    manifest: null,
    // todo: remove
    sayHello: function (msg) {
        return "hello " + msg;
    },
    load: function (manifestUri, callback) {
        var _this = this;
        var u = url.parse(manifestUri);
        var fetch = http.request({
            host: u.hostname,
            port: u.port || 80,
            path: u.pathname,
            method: "GET",
            withCredentials: false
        }, function (res) {
            var result = "";
            res.on('data', function (chunk) {
                result += chunk;
            });
            res.on('end', function () {
                _this.parse(result, callback);
            });
        });
        fetch.end();
    },
    getRootRange: function () {
        // loop through structures looking for viewingHint="top"
        if (this.manifest.structures) {
            for (var i = 0; i < this.manifest.structures.length; i++) {
                var s = this.manifest.structures[i];
                if (s.viewingHint == "top") {
                    this.rootStructure = s;
                    break;
                }
            }
        }
        if (!this.rootStructure) {
            this.rootStructure = {
                path: "",
                ranges: this.manifest.structures
            };
        }
        return this.rootStructure;
    },
    parse: function (manifest, callback) {
        this.manifest = JSON.parse(manifest);
        callback(manifest);
    }
};
var Thumb = (function () {
    function Thumb(index, uri, label, width, height, visible) {
        this.index = index;
        this.uri = uri;
        this.label = label;
        this.width = width;
        this.height = height;
        this.visible = visible;
    }
    return Thumb;
})();
var TreeNode = (function () {
    function TreeNode(label, data) {
        this.label = label;
        this.data = data;
        this.nodes = [];
        if (!data)
            this.data = {};
    }
    TreeNode.prototype.addNode = function (node) {
        this.nodes.push(node);
        node.parentNode = this;
    };
    return TreeNode;
})();
var ViewingDirection;
(function (ViewingDirection) {
    ViewingDirection[ViewingDirection["leftToRight"] = 0] = "leftToRight";
    ViewingDirection[ViewingDirection["rightToLeft"] = 1] = "rightToLeft";
    ViewingDirection[ViewingDirection["topToBottom"] = 2] = "topToBottom";
    ViewingDirection[ViewingDirection["bottomToTop"] = 3] = "bottomToTop";
})(ViewingDirection || (ViewingDirection = {}));
var ViewingHint;
(function (ViewingHint) {
    ViewingHint[ViewingHint["individuals"] = 0] = "individuals";
    ViewingHint[ViewingHint["paged"] = 1] = "paged";
    ViewingHint[ViewingHint["continuous"] = 2] = "continuous";
    ViewingHint[ViewingHint["nonPaged"] = 3] = "nonPaged";
    ViewingHint[ViewingHint["top"] = 4] = "top";
})(ViewingHint || (ViewingHint = {}));
