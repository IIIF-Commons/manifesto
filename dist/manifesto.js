var Manifesto;
(function (Manifesto) {
    var Canvas = (function () {
        function Canvas() {
            this.ranges = [];
        }
        Canvas.prototype.getRange = function () {
            //return M.getCanvasRange(this);
        };
        return Canvas;
    })();
    Manifesto.Canvas = Canvas;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var CanvasType = (function () {
        function CanvasType(value) {
            this.value = value;
        }
        CanvasType.prototype.toString = function () {
            return this.value;
        };
        CanvasType.audio = new CanvasType("ixif:audio");
        CanvasType.canvas = new CanvasType("sc:canvas");
        CanvasType.pdf = new CanvasType("ixif:pdf");
        CanvasType.video = new CanvasType("ixif:video");
        return CanvasType;
    })();
    Manifesto.CanvasType = CanvasType;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Manifest = (function () {
        function Manifest() {
            this.sequences = [];
            this.structures = [];
        }
        return Manifest;
    })();
    Manifesto.Manifest = Manifest;
})(Manifesto || (Manifesto = {}));
var http = require("http");
var url = require("url");
var path = require("path");
var _ = require("lodash");
var m = Manifesto;
module.exports = {
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
    parse: function (manifest) {
        return m.Deserialiser.parse(manifest);
    }
};
var Manifesto;
(function (Manifesto) {
    var Range = (function () {
        function Range() {
            this.canvases = [];
            this.ranges = [];
        }
        return Range;
    })();
    Manifesto.Range = Range;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Rendering = (function () {
        function Rendering() {
        }
        return Rendering;
    })();
    Manifesto.Rendering = Rendering;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var RenderingFormat = (function () {
        function RenderingFormat(value) {
            this.value = value;
        }
        RenderingFormat.prototype.toString = function () {
            return this.value;
        };
        RenderingFormat.pdf = new RenderingFormat("application/pdf");
        return RenderingFormat;
    })();
    Manifesto.RenderingFormat = RenderingFormat;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Sequence = (function () {
        function Sequence() {
            this.canvases = [];
        }
        return Sequence;
    })();
    Manifesto.Sequence = Sequence;
})(Manifesto || (Manifesto = {}));
var jmespath = require('jmespath');
var Manifesto;
(function (Manifesto) {
    var Deserialiser = (function () {
        function Deserialiser() {
        }
        Deserialiser.parse = function (manifest) {
            this.manifest = new Manifesto.Manifest();
            this.originalManifest = JSON.parse(manifest);
            this.parseSequences();
            if (this.originalManifest.structures && this.originalManifest.structures.length) {
                this.parseRanges(JsonUtils.getRootRange(this.originalManifest), '');
            }
            return this.manifest;
        };
        Deserialiser.parseSequences = function () {
            for (var i = 0; i < this.originalManifest.sequences.length; i++) {
                var s = this.originalManifest.sequences[i];
                var sequence = new Manifesto.Sequence();
                sequence.id = s['@id'];
                sequence.viewingDirection = new Manifesto.ViewingDirection(s.viewingDirection);
                sequence.viewingHint = new Manifesto.ViewingHint(s.viewingHint);
                sequence.canvases = this.parseCanvases(s);
                this.manifest.sequences.push(sequence);
            }
        };
        Deserialiser.parseCanvases = function (sequence) {
            var canvases = [];
            for (var i = 0; i < sequence.canvases.length; i++) {
                var c = sequence.canvases[i];
                var canvas = new Manifesto.Canvas();
                canvas.id = c['@id'];
                canvas.height = c.height;
                canvas.label = c.label;
                canvas.width = c.width;
                canvases.push(canvas);
            }
            return canvases;
        };
        Deserialiser.parseRanges = function (r, path, parentRange) {
            var range = new Manifesto.Range();
            range.id = r['@id'];
            range.label = r.label;
            range.parentRange = parentRange;
            range.path = path;
            if (r.canvases) {
                for (var i = 0; i < r.canvases.length; i++) {
                    var canvas = this.getCanvasById(r.canvases[i]);
                    canvas.ranges.push(range);
                    range.canvases.push(canvas);
                }
            }
            if (r.ranges) {
                for (var j = 0; j < r.ranges.length; j++) {
                    this.parseRanges(r.ranges[j], path + '/' + j, range);
                }
            }
        };
        Deserialiser.getCanvasById = function (id) {
            for (var i = 0; i < this.manifest.sequences.length; i++) {
                var sequence = this.manifest.sequences[i];
                for (var j = 0; j < sequence.canvases.length; j++) {
                    var canvas = sequence.canvases[j];
                    if (canvas.id === id) {
                        return canvas;
                    }
                }
            }
            return null;
        };
        return Deserialiser;
    })();
    Manifesto.Deserialiser = Deserialiser;
    var Serialiser = (function () {
        function Serialiser() {
        }
        Serialiser.serialise = function (manifest) {
            // todo
            return "";
        };
        return Serialiser;
    })();
    Manifesto.Serialiser = Serialiser;
    var JsonUtils = (function () {
        function JsonUtils() {
        }
        JsonUtils.getCanvasById = function (manifest, id) {
            var result = jmespath.search(manifest, "sequences[].canvases[?\"@id\"=='" + id + "'][]");
            if (result.length)
                return result[0];
            return null;
        };
        JsonUtils.getRangeById = function (manifest, id) {
            var result = jmespath.search(manifest, "structures[?\"@id\"=='" + id + "'][]");
            if (result.length)
                return result[0];
            return null;
        };
        JsonUtils.getRootRange = function (manifest) {
            var result = jmespath.search(manifest, "structures[?viewingHint=='top'][]");
            if (result.length)
                return result[0];
            var rootRange = {};
            rootRange.ranges = manifest.structures;
            return rootRange;
        };
        return JsonUtils;
    })();
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Service = (function () {
        function Service() {
        }
        return Service;
    })();
    Manifesto.Service = Service;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ServiceProfile = (function () {
        function ServiceProfile(value) {
            this.value = value;
        }
        ServiceProfile.prototype.toString = function () {
            return this.value;
        };
        ServiceProfile.autoComplete = new ServiceProfile("http://iiif.io/api/autocomplete/1/");
        ServiceProfile.otherManifestations = new ServiceProfile("http://iiif.io/api/otherManifestations.json");
        ServiceProfile.searchWithin = new ServiceProfile("http://iiif.io/api/search/1/");
        return ServiceProfile;
    })();
    Manifesto.ServiceProfile = ServiceProfile;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
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
    Manifesto.Thumb = Thumb;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
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
    Manifesto.TreeNode = TreeNode;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
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
    Manifesto.ViewingDirection = ViewingDirection;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
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
    Manifesto.ViewingHint = ViewingHint;
})(Manifesto || (Manifesto = {}));
