var http = require("http");
var url = require("url");
module.exports = {
    manifest: null,
    canvasIndex: 0,
    sequenceIndex: 0,
    // todo: remove
    sayHello: function (msg) {
        return "hello " + msg;
    },
    load: function (manifestUri, callback) {
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
                callback(result);
            });
        });
        fetch.end();
    },
    parse: function (manifest, callback) {
        this.manifest = JSON.parse(manifest);
        if (this.manifest.structures && this.manifest.structures.length) {
            this.parseRanges(this.getRootRange(), '');
        }
        callback(this.manifest);
    },
    // gives each canvas a collection of ranges it belongs to.
    // also builds a 'path' string property for each range
    parseRanges: function (range, path) {
        range.path = path;
        if (range.canvases) {
            for (var j = 0; j < range.canvases.length; j++) {
                var canvas = range.canvases[j];
                if (typeof (canvas) === "string") {
                    canvas = this.getCanvasById(canvas);
                }
                if (!canvas) {
                    // canvas not found - json invalid.
                    range.canvases[j] = null;
                    continue;
                }
                if (!canvas.ranges)
                    canvas.ranges = [];
                canvas.ranges.push(range);
                // create two-way relationship
                range.canvases[j] = canvas;
            }
        }
        if (range.ranges) {
            range.ranges = [];
            for (var k = 0; k < range.ranges.length; k++) {
                var r = range.ranges[k];
                // if it's a url ref
                if (typeof (r) === "string") {
                    r = this.getRangeById(r);
                }
                // if this range already has a parent, continue.
                if (r.parentRange)
                    continue;
                r.parentRange = range;
                range.ranges.push(r);
                this.parseRanges(r, path + '/' + k);
            }
        }
    },
    getCurrentCanvas: function () {
        return this.getCurrentSequence().canvases[this.canvasIndex];
    },
    getCurrentSequence: function () {
        return this.manifest.sequences[this.sequenceIndex];
    },
    getRootRange: function () {
        // loop through ranges looking for viewingHint="top"
        if (this.manifest.structures) {
            for (var i = 0; i < this.manifest.structures.length; i++) {
                var r = this.manifest.structures[i];
                if (r.viewingHint === ViewingHint.top) {
                    this.manifest.rootRange = r;
                    break;
                }
            }
        }
        if (!this.manifest.rootRange) {
            this.manifest.rootRange = new Manifesto.Range();
            this.manifest.rootRange.path = "";
            this.manifest.rootRange.ranges = this.manifest.structures;
        }
        return this.manifest.rootRange;
    },
    getCanvasById: function (id) {
        var sequence = this.getCurrentSequence();
        for (var i = 0; i < sequence.canvases.length; i++) {
            var c = sequence.canvases[i];
            if (c['@id'] === id) {
                return c;
            }
        }
        return null;
    },
    getRangeById: function (id) {
        for (var i = 0; i < this.manifest.structures.length; i++) {
            var r = this.manifest.structures[i];
            if (r['@id'] === id) {
                return r;
            }
        }
        return null;
    }
};
var Manifesto;
(function (Manifesto) {
    var Range = (function () {
        function Range() {
        }
        return Range;
    })();
    Manifesto.Range = Range;
})(Manifesto || (Manifesto = {}));
var ViewingDirection = (function () {
    function ViewingDirection(value) {
        this.value = value;
    }
    ViewingDirection.prototype.toString = function () {
        return this.value;
    };
    ViewingDirection.leftToRight = new ViewingDirection("left-to-right");
    ViewingDirection.rightToLeft = new ViewingDirection("right-to-left");
    ViewingDirection.topToBottom = new ViewingDirection("top-to-bottom");
    ViewingDirection.bottomToTop = new ViewingDirection("bottom-to-top");
    return ViewingDirection;
})();
var ViewingHint = (function () {
    function ViewingHint(value) {
        this.value = value;
    }
    ViewingHint.prototype.toString = function () {
        return this.value;
    };
    ViewingHint.individuals = new ViewingHint("individuals");
    ViewingHint.paged = new ViewingHint("paged");
    ViewingHint.continuous = new ViewingHint("continuous");
    ViewingHint.nonPaged = new ViewingHint("non-paged");
    ViewingHint.top = new ViewingHint("top");
    return ViewingHint;
})();
