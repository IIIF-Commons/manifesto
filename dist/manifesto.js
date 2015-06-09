var Manifesto;
(function (Manifesto) {
    var Canvas = (function () {
        function Canvas() {
            this.ranges = [];
        }
        Canvas.prototype.getHeight = function () {
            return this.jsonld.height;
        };
        Canvas.prototype.getLabel = function () {
            var regExp = /\d/;
            if (regExp.test(this.jsonld.label)) {
                return this.manifest.getLocalisedValue(this.jsonld.label);
            }
            return null;
        };
        Canvas.prototype.getRange = function () {
            // get the deepest Range that this Canvas belongs to.
            return this.ranges.last();
        };
        Canvas.prototype.getThumbUri = function (width, height) {
            var uri;
            if (this.jsonld.resources) {
                uri = this.jsonld.resources[0].resource.service.id;
            }
            else if (this.jsonld.images && this.jsonld.images[0].resource.service) {
                uri = this.jsonld.images[0].resource.service.id;
            }
            else {
                return null;
            }
            // todo: allow region, rotation, quality, and format as parameters?
            var tile = 'full/' + width + ',' + height + '/0/default.jpg';
            return path.join(uri, tile);
        };
        Canvas.prototype.getWidth = function () {
            return this.jsonld.width;
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
        function Manifest(jsonld) {
            this.defaultLabel = "-";
            this.locale = "en-GB"; // todo: pass in constructor?
            this.sequences = [];
            this.jsonld = jsonld;
        }
        Manifest.prototype.getAttribution = function () {
            return this.getLocalisedValue(this.jsonld.attribution);
        };
        Manifest.prototype.getLabel = function () {
            return this.getLocalisedValue(this.jsonld.label);
        };
        Manifest.prototype.getLocalisedValue = function (prop, locale) {
            if (!_.isArray(prop)) {
                return prop;
            }
            if (!locale)
                locale = this.locale;
            for (var i = 0; i < prop.length; i++) {
                var value = prop[i];
                var language = value['@language'];
                if (locale === language) {
                    return value['@value'];
                }
            }
            // test for inexact match
            var match = locale.substr(0, locale.indexOf('-'));
            for (var i = 0; i < prop.length; i++) {
                var value = prop[i];
                var language = value['@language'];
                if (language === match) {
                    return value['@value'];
                }
            }
            return null;
        };
        Manifest.prototype.getLogo = function () {
            return this.jsonld.logo;
        };
        Manifest.prototype.getLicense = function () {
            return this.getLocalisedValue(this.jsonld.license);
        };
        Manifest.prototype.getRanges = function () {
            // todo: use exjs to flatten tree
            return null;
        };
        Manifest.prototype.getRangeById = function (id) {
            var ranges = this.getRanges();
            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (range.id === id) {
                    return range;
                }
            }
            return null;
        };
        Manifest.prototype.getRangeByPath = function (path) {
            var ranges = this.getRanges();
            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (range.path === path) {
                    return range;
                }
            }
            return null;
        };
        Manifest.prototype.getRendering = function (resource, format) {
            if (!resource.rendering)
                return null;
            var renderings = resource.rendering;
            if (!_.isArray(renderings)) {
                renderings = [renderings];
            }
            for (var i = 0; i < renderings.length; i++) {
                var rendering = renderings[i];
                if (rendering.format && rendering.format === format.toString()) {
                    return rendering;
                }
            }
            return null;
        };
        Manifest.prototype.getSeeAlso = function () {
            return this.getLocalisedValue(this.jsonld.seeAlso);
        };
        Manifest.prototype.getService = function (resource, profile) {
            if (!resource.service)
                return null;
            if (_.isArray(resource.service)) {
                for (var i = 0; i < resource.service.length; i++) {
                    var service = resource.service[i];
                    if (service.profile && service.profile === profile) {
                        return service;
                    }
                }
            }
            else {
                if (resource.service.profile && resource.service.profile === profile) {
                    return resource.service;
                }
            }
            return null;
        };
        Manifest.prototype.getSequenceByIndex = function (sequenceIndex) {
            return this.sequences[sequenceIndex];
        };
        Manifest.prototype.getTitle = function () {
            return this.getLocalisedValue(this.jsonld.label);
        };
        Manifest.prototype.getTotalSequences = function () {
            return this.sequences.length;
        };
        Manifest.prototype.isMultiSequence = function () {
            return this.getTotalSequences() > 1;
        };
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
        Range.prototype.getLabel = function () {
            var regExp = /\d/;
            if (regExp.test(this.jsonld.label)) {
                return this.manifest.getLocalisedValue(this.jsonld.label);
            }
            return null;
        };
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
        Sequence.prototype.getCanvasById = function (id) {
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                if (canvas.id === id) {
                    return canvas;
                }
            }
            return null;
        };
        Sequence.prototype.getCanvasByIndex = function (canvasIndex) {
            return this.canvases[canvasIndex];
        };
        Sequence.prototype.getCanvasIndexById = function (id) {
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                if (canvas.id === id) {
                    return i;
                }
            }
            return null;
        };
        Sequence.prototype.getCanvasIndexByLabel = function (label) {
            label = label.trim();
            // trim any preceding zeros.
            if (_.isNumber(label)) {
                label = parseInt(label, 10).toString();
            }
            var doublePageRegExp = /(\d*)\D+(\d*)/;
            var match, regExp, regStr, labelPart1, labelPart2;
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                // check if there's a literal match
                if (canvas.getLabel() === label) {
                    return i;
                }
                // check if there's a match for double-page spreads e.g. 100-101, 100_101, 100 101
                match = doublePageRegExp.exec(label);
                if (!match)
                    continue;
                labelPart1 = match[1];
                labelPart2 = match[2];
                if (!labelPart2)
                    continue;
                regStr = "^" + labelPart1 + "\\D+" + labelPart2 + "$";
                regExp = new RegExp(regStr);
                if (regExp.test(canvas.getLabel())) {
                    return i;
                }
            }
            return -1;
        };
        Sequence.prototype.getLastCanvasLabel = function () {
            for (var i = this.getTotalCanvases() - 1; i >= 0; i--) {
                var canvas = this.getCanvasByIndex(i);
                return canvas.getLabel();
            }
            // none exists, so return '-'.
            return this.manifest.defaultLabel;
        };
        Sequence.prototype.getLastPageIndex = function () {
            return this.getTotalCanvases() - 1;
        };
        Sequence.prototype.getNextPageIndex = function (canvasIndex, pagingEnabled) {
            var index;
            if (pagingEnabled) {
                var indices = this.getPagedIndices(canvasIndex);
                if (this.getViewingDirection() === Manifesto.ViewingDirection.rightToLeft) {
                    index = indices[0] + 1;
                }
                else {
                    index = indices.last() + 1;
                }
            }
            else {
                index = canvasIndex + 1;
            }
            if (index > this.getLastPageIndex()) {
                return -1;
            }
            return index;
        };
        Sequence.prototype.getPagedIndices = function (canvasIndex, pagingEnabled) {
            var indices = [];
            if (!pagingEnabled) {
                indices.push(canvasIndex);
            }
            else {
                if (this.isFirstCanvas(canvasIndex) || this.isLastCanvas(canvasIndex)) {
                    indices = [canvasIndex];
                }
                else if (canvasIndex % 2) {
                    indices = [canvasIndex, canvasIndex + 1];
                }
                else {
                    indices = [canvasIndex - 1, canvasIndex];
                }
                if (this.getViewingDirection() === Manifesto.ViewingDirection.rightToLeft) {
                    indices = indices.reverse();
                }
            }
            return indices;
        };
        Sequence.prototype.getPrevPageIndex = function (canvasIndex, pagingEnabled) {
            var index;
            if (pagingEnabled) {
                var indices = this.getPagedIndices(canvasIndex);
                if (this.getViewingDirection() === Manifesto.ViewingDirection.rightToLeft) {
                    index = indices.last() - 1;
                }
                else {
                    index = indices[0] - 1;
                }
            }
            else {
                index = canvasIndex - 1;
            }
            return index;
        };
        Sequence.prototype.getStartCanvasIndex = function () {
            if (this.startCanvas) {
                for (var i = 0; i < this.getTotalCanvases(); i++) {
                    var canvas = this.getCanvasByIndex(i);
                    if (canvas.id === this.startCanvas)
                        return i;
                }
            }
            // default to first canvas.
            return 0;
        };
        Sequence.prototype.getThumbs = function (width, height) {
            var thumbs = [];
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                if (!_.isNumber(height)) {
                    var heightRatio = canvas.getHeight() / canvas.getWidth();
                    if (heightRatio) {
                        height = Math.floor(width * heightRatio);
                    }
                }
                var uri = canvas.getThumbUri(width, height);
                thumbs.push(new Manifesto.Thumb(i, uri, this.manifest.getLocalisedValue(canvas.getLabel()), width, height, true));
            }
            return thumbs;
        };
        Sequence.prototype.getTotalCanvases = function () {
            return this.canvases.length;
        };
        Sequence.prototype.getViewingDirection = function () {
            return this.viewingDirection || Manifesto.ViewingDirection.leftToRight;
        };
        Sequence.prototype.isCanvasIndexOutOfRange = function (canvasIndex) {
            return canvasIndex > this.getTotalCanvases() - 1;
        };
        Sequence.prototype.isFirstCanvas = function (canvasIndex) {
            return canvasIndex === 0;
        };
        Sequence.prototype.isLastCanvas = function (canvasIndex) {
            return canvasIndex === this.getTotalCanvases() - 1;
        };
        Sequence.prototype.isMultiCanvas = function () {
            return this.getTotalCanvases() > 1;
        };
        // checks if the number of canvases is even - therefore has a front and back cover
        Sequence.prototype.isTotalCanvasesEven = function () {
            return this.getTotalCanvases() % 2 === 0;
        };
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
            this.manifest = new Manifesto.Manifest(JSON.parse(manifest));
            this.parseSequences();
            if (this.manifest.jsonld.structures && this.manifest.jsonld.structures.length) {
                this.parseRanges(JsonUtils.getRootRange(this.manifest.jsonld), '');
            }
            return this.manifest;
        };
        Deserialiser.parseSequences = function () {
            for (var i = 0; i < this.manifest.jsonld.sequences.length; i++) {
                var s = this.manifest.jsonld.sequences[i];
                var sequence = new Manifesto.Sequence();
                sequence.id = s['@id'];
                sequence.jsonld = s;
                sequence.manifest = this.manifest;
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
                canvas.jsonld = c;
                canvas.manifest = this.manifest;
                canvases.push(canvas);
            }
            return canvases;
        };
        Deserialiser.parseRanges = function (r, path, parentRange) {
            var range = new Manifesto.Range();
            // if no parent range is passed, assign the new range to manifest.rootRange
            if (!parentRange) {
                this.manifest.rootRange = range;
            }
            else {
                range.parentRange = parentRange;
                parentRange.ranges.push(range);
            }
            range.id = r['@id'];
            range.jsonld = r;
            range.manifest = this.manifest;
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
