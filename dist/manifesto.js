var Manifesto;
(function (Manifesto) {
    var Canvas = (function () {
        function Canvas() {
        }
        return Canvas;
    })();
    Manifesto.Canvas = Canvas;
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
    manifest: null,
    canvasIndex: 0,
    sequenceIndex: 0,
    locale: "en-GB",
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
        this.manifest = JSON.parse(manifest);
        if (this.manifest.structures && this.manifest.structures.length) {
            this.parseRanges(this.getRootRange(), '');
        }
        return this.manifest;
    },
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
                //range.ranges.push(r);
                this.parseRanges(r, path + '/' + k);
            }
        }
    },
    getAttribution: function () {
        return this.getLocalisedValue(this.manifest.attribution);
    },
    getCanvasById: function (id) {
        for (var i = 0; i < this.getTotalCanvases(); i++) {
            var canvas = this.getCanvasByIndex(i);
            if (canvas['@id'] === id) {
                return canvas;
            }
        }
        return null;
    },
    getCanvasByIndex: function (index) {
        return this.getCurrentSequence().canvases[index];
    },
    getCanvasIndexById: function (id) {
        for (var i = 0; i < this.getTotalCanvases(); i++) {
            var canvas = this.getCanvasByIndex(i);
            if (canvas['@id'] === id) {
                return i;
            }
        }
        return null;
    },
    getCanvasIndexByLabel: function (label) {
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
            if (canvas.label === label) {
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
            if (regExp.test(canvas.label)) {
                return i;
            }
        }
        return -1;
    },
    getCanvasRange: function (canvas) {
        // get the deepest Range that this Canvas belongs to.
        if (canvas.ranges) {
            return canvas.ranges.last();
        }
        return null;
    },
    getCurrentCanvas: function () {
        return this.getCanvasByIndex(this.canvasIndex);
    },
    getCurrentSequence: function () {
        return this.manifest.sequences[this.sequenceIndex];
    },
    getLastCanvasLabel: function () {
        for (var i = this.getTotalCanvases() - 1; i >= 0; i--) {
            var canvas = this.getCanvasByIndex(i);
            var regExp = /\d/;
            if (regExp.test(canvas.label)) {
                return this.getLocalisedValue(canvas.label);
            }
        }
        // none exists, so return '-'.
        return '-';
    },
    getLastPageIndex: function () {
        return this.getTotalCanvases() - 1;
    },
    getLocalisedValue: function (prop, locale) {
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
    },
    getLogo: function () {
        return this.manifest.logo;
    },
    getLicense: function () {
        return this.manifest.license;
    },
    getNextPageIndex: function (canvasIndex, pagingEnabled) {
        if (typeof (canvasIndex) === 'undefined')
            canvasIndex = this.canvasIndex;
        var index;
        if (pagingEnabled) {
            var indices = this.getPagedIndices(canvasIndex);
            if (this.getViewingDirection() === m.ViewingDirection.rightToLeft) {
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
    },
    getPagedIndices: function (canvasIndex, pagingEnabled) {
        if (typeof (canvasIndex) === 'undefined')
            canvasIndex = this.canvasIndex;
        var indices = [];
        if (!pagingEnabled) {
            indices.push(this.canvasIndex);
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
            if (this.getViewingDirection() === m.ViewingDirection.rightToLeft) {
                indices = indices.reverse();
            }
        }
        return indices;
    },
    getPrevPageIndex: function (canvasIndex, pagingEnabled) {
        if (typeof (canvasIndex) === 'undefined')
            canvasIndex = this.canvasIndex;
        var index;
        if (pagingEnabled) {
            var indices = this.getPagedIndices(canvasIndex);
            if (this.getViewingDirection() === m.ViewingDirection.rightToLeft) {
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
    },
    getRangeByCanvasIndex: function (canvasIndex) {
        if (canvasIndex === -1)
            return null;
        var canvas = this.getCanvasByIndex(canvasIndex);
        return this.getCanvasRange(canvas);
    },
    getRangeById: function (id) {
        for (var i = 0; i < this.manifest.structures.length; i++) {
            var range = this.manifest.structures[i];
            if (range['@id'] === id) {
                return range;
            }
        }
        return null;
    },
    getRangeByPath: function (path) {
        for (var i = 0; i < this.getTotalCanvases(); i++) {
            var canvas = this.getCanvasByIndex(i);
            if (!canvas.ranges)
                continue;
            for (var j = 0; j < canvas.ranges.length; j++) {
                var range = canvas.ranges[j];
                if (range.path === path) {
                    return range;
                }
            }
        }
        return null;
    },
    getRootRange: function () {
        // loop through ranges looking for viewingHint="top"
        if (this.manifest.structures) {
            for (var i = 0; i < this.manifest.structures.length; i++) {
                var r = this.manifest.structures[i];
                if (r.viewingHint === m.ViewingHint.top) {
                    this.manifest.rootRange = r;
                    break;
                }
            }
        }
        if (!this.manifest.rootRange) {
            this.manifest.rootRange = new m.Range();
            this.manifest.rootRange.path = "";
            this.manifest.rootRange.ranges = this.manifest.structures;
        }
        return this.manifest.rootRange;
    },
    getSeeAlso: function () {
        return this.manifest.seeAlso;
    },
    getService: function (resource, profile) {
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
    },
    getStartCanvasIndex: function () {
        var sequence = this.getCurrentSequence();
        if (sequence.startCanvas) {
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                if (canvas["@id"] === sequence.startCanvas)
                    return i;
            }
        }
        // default to first canvas.
        return 0;
    },
    getTitle: function () {
        return this.manifest.label;
    },
    getTotalCanvases: function () {
        return this.getCurrentSequence().canvases.length;
    },
    getTotalSequences: function () {
        return this.manifest.sequences.length;
    },
    getThumbs: function (width, height) {
        var thumbs = [];
        for (var i = 0; i < this.getTotalCanvases(); i++) {
            var canvas = this.getCanvasByIndex(i);
            if (!_.isNumber(height)) {
                var heightRatio = canvas.height / canvas.width;
                if (heightRatio) {
                    height = Math.floor(width * heightRatio);
                }
            }
            var uri = this.getThumbUri(canvas, width, height);
            thumbs.push(new m.Thumb(i, uri, this.getLocalisedValue(canvas.label), width, height, true));
        }
        return thumbs;
    },
    getThumbUri: function (canvas, width, height) {
        var uri;
        if (canvas.resources) {
            uri = canvas.resources[0].resource.service['@id'];
        }
        else if (canvas.images && canvas.images[0].resource.service) {
            uri = canvas.images[0].resource.service['@id'];
        }
        else {
            return null;
        }
        // todo: allow region, rotation, quality, and format as parameters?
        var tile = 'full/' + width + ',' + height + '/0/default.jpg';
        return path.join(uri, tile);
    },
    getViewingDirection: function () {
        return this.getCurrentSequence().viewingDirection || m.ViewingDirection.leftToRight;
    },
    isCanvasIndexOutOfRange: function (canvasIndex) {
        return canvasIndex > this.getTotalCanvases() - 1;
    },
    isFirstCanvas: function (canvasIndex) {
        if (typeof (canvasIndex) === 'undefined')
            canvasIndex = this.canvasIndex;
        return canvasIndex === 0;
    },
    isLastCanvas: function (canvasIndex) {
        if (typeof (canvasIndex) === 'undefined')
            canvasIndex = this.canvasIndex;
        return canvasIndex === this.getTotalCanvases() - 1;
    },
    isMultiCanvas: function () {
        return this.getTotalCanvases() > 1;
    },
    isMultiSequence: function () {
        return this.getTotalSequences() > 1;
    },
    // checks if the number of canvases is even - therefore has a front and back cover
    isTotalCanvasesEven: function () {
        return this.getTotalCanvases() % 2 === 0;
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
/// <reference path="../typings/utils.d.ts"/>
if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
}
;
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
