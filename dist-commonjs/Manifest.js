"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var IIIFResource_1 = require("./IIIFResource");
var Sequence_1 = require("./Sequence");
var Canvas_1 = require("./Canvas");
var Utils_1 = require("./Utils");
var TreeNodeType_1 = require("./TreeNodeType");
var Range_1 = require("./Range");
var _1 = require(".");
var BehaviorEnum = require('@iiif/vocabulary/dist-commonjs/').Behavior;
var ServiceProfileEnum = require('@iiif/vocabulary/dist-commonjs/').ServiceProfile;
var ViewingHintEnum = require('@iiif/vocabulary/dist-commonjs/').ViewingHint;
var Manifest = /** @class */ (function (_super) {
    __extends(Manifest, _super);
    function Manifest(jsonld, options) {
        var _this = _super.call(this, jsonld, options) || this;
        _this.index = 0;
        _this._allRanges = null;
        _this.items = [];
        _this._topRanges = [];
        if (_this.__jsonld.structures && _this.__jsonld.structures.length) {
            var topRanges = _this._getTopRanges();
            for (var i = 0; i < topRanges.length; i++) {
                var range = topRanges[i];
                _this._parseRanges(range, String(i));
            }
        }
        return _this;
    }
    Manifest.prototype.getPosterCanvas = function () {
        var posterCanvas = this.getProperty('posterCanvas');
        if (posterCanvas) {
            posterCanvas = new Canvas_1.Canvas(posterCanvas, this.options);
        }
        return posterCanvas;
    };
    Manifest.prototype.getBehavior = function () {
        var behavior = this.getProperty('behavior');
        if (Array.isArray(behavior)) {
            behavior = behavior[0];
        }
        if (behavior) {
            return behavior;
        }
        return null;
    };
    Manifest.prototype.getDefaultTree = function () {
        _super.prototype.getDefaultTree.call(this);
        this.defaultTree.data.type = Utils_1.Utils.normaliseType(TreeNodeType_1.TreeNodeType.MANIFEST);
        if (!this.isLoaded) {
            return this.defaultTree;
        }
        var topRanges = this.getTopRanges();
        // if there are any ranges in the manifest, default to the first 'top' range or generated placeholder
        if (topRanges.length) {
            topRanges[0].getTree(this.defaultTree);
        }
        Utils_1.Utils.generateTreeNodeIds(this.defaultTree);
        return this.defaultTree;
    };
    Manifest.prototype._getTopRanges = function () {
        var topRanges = [];
        if (this.__jsonld.structures && this.__jsonld.structures.length) {
            for (var i = 0; i < this.__jsonld.structures.length; i++) {
                var json = this.__jsonld.structures[i];
                if (json.viewingHint === ViewingHintEnum.TOP) {
                    topRanges.push(json);
                }
            }
            // if no viewingHint="top" range was found, create a default one
            if (!topRanges.length) {
                var range = {};
                range.ranges = this.__jsonld.structures;
                topRanges.push(range);
            }
        }
        return topRanges;
    };
    Manifest.prototype.getTopRanges = function () {
        return this._topRanges;
    };
    Manifest.prototype._getRangeById = function (id) {
        if (this.__jsonld.structures && this.__jsonld.structures.length) {
            for (var i = 0; i < this.__jsonld.structures.length; i++) {
                var r = this.__jsonld.structures[i];
                if (r['@id'] === id || r.id === id) {
                    return r;
                }
            }
        }
        return null;
    };
    //private _parseRangeCanvas(json: any, range: Range): void {
    // todo: currently this isn't needed
    //var canvas: IJSONLDResource = new JSONLDResource(json);
    //range.items.push(<IManifestResource>canvas);
    //}
    Manifest.prototype._parseRanges = function (r, path, parentRange) {
        var range;
        var id = null;
        if (typeof (r) === 'string') {
            id = r;
            r = this._getRangeById(id);
        }
        if (!r) {
            console.warn("Range:", id, "does not exist");
            return;
        }
        range = new Range_1.Range(r, this.options);
        range.parentRange = parentRange;
        range.path = path;
        if (!parentRange) {
            this._topRanges.push(range);
        }
        else {
            parentRange.items.push(range);
        }
        var items = r.items || r.members;
        if (items) {
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                // todo: use an ItemType constant?
                if (item['@type'] && item['@type'].toLowerCase() === 'sc:range' || item['type'] && item['type'].toLowerCase() === 'range') {
                    this._parseRanges(item, path + '/' + i, range);
                }
                else if (item['@type'] && item['@type'].toLowerCase() === 'sc:canvas' || item['type'] && item['type'].toLowerCase() === 'canvas') {
                    // store the ids on the __jsonld object to be used by Range.getCanvasIds()
                    if (!range.canvases) {
                        range.canvases = [];
                    }
                    var id_1 = item.id || item['@id'];
                    range.canvases.push(id_1);
                }
            }
        }
        else if (r.ranges) {
            for (var i = 0; i < r.ranges.length; i++) {
                this._parseRanges(r.ranges[i], path + '/' + i, range);
            }
        }
    };
    Manifest.prototype.getAllRanges = function () {
        if (this._allRanges != null)
            return this._allRanges;
        this._allRanges = [];
        var topRanges = this.getTopRanges();
        var _loop_1 = function (i) {
            var topRange = topRanges[i];
            if (topRange.id) {
                this_1._allRanges.push(topRange); // it might be a placeholder root range
            }
            var reducer = function (acc, next) {
                acc.add(next);
                var nextRanges = next.getRanges();
                if (nextRanges.length) {
                    return nextRanges.reduce(reducer, acc);
                }
                return acc;
            };
            var subRanges = Array.from(topRange.getRanges().reduce(reducer, new Set()));
            this_1._allRanges = this_1._allRanges.concat(subRanges);
        };
        var this_1 = this;
        for (var i = 0; i < topRanges.length; i++) {
            _loop_1(i);
        }
        return this._allRanges;
    };
    Manifest.prototype.getRangeById = function (id) {
        var ranges = this.getAllRanges();
        for (var i = 0; i < ranges.length; i++) {
            var range = ranges[i];
            if (range.id === id) {
                return range;
            }
        }
        return null;
    };
    Manifest.prototype.getRangeByPath = function (path) {
        var ranges = this.getAllRanges();
        for (var i = 0; i < ranges.length; i++) {
            var range = ranges[i];
            if (range.path === path) {
                return range;
            }
        }
        return null;
    };
    Manifest.prototype.getSequences = function () {
        if (this.items.length) {
            return this.items;
        }
        // IxIF mediaSequences overrode sequences, so need to be checked first.
        // deprecate this when presentation 3 ships
        var items = this.__jsonld.mediaSequences || this.__jsonld.sequences;
        if (items) {
            for (var i = 0; i < items.length; i++) {
                var s = items[i];
                var sequence = new Sequence_1.Sequence(s, this.options);
                this.items.push(sequence);
            }
        }
        else if (this.__jsonld.items) {
            var sequence = new Sequence_1.Sequence(this.__jsonld.items, this.options);
            this.items.push(sequence);
        }
        return this.items;
    };
    Manifest.prototype.getSequenceByIndex = function (sequenceIndex) {
        return this.getSequences()[sequenceIndex];
    };
    Manifest.prototype.getTotalSequences = function () {
        return this.getSequences().length;
    };
    Manifest.prototype.getManifestType = function () {
        var service = this.getService(ServiceProfileEnum.UI_EXTENSIONS);
        if (service) {
            return service.getProperty('manifestType');
        }
        return _1.ManifestType.EMPTY;
    };
    Manifest.prototype.isMultiSequence = function () {
        return this.getTotalSequences() > 1;
    };
    Manifest.prototype.isPagingEnabled = function () {
        var viewingHint = this.getViewingHint();
        if (viewingHint) {
            return viewingHint === ViewingHintEnum.PAGED;
        }
        var behavior = this.getBehavior();
        if (behavior) {
            return behavior === BehaviorEnum.PAGED;
        }
        return false;
    };
    Manifest.prototype.getViewingDirection = function () {
        return this.getProperty('viewingDirection');
    };
    Manifest.prototype.getViewingHint = function () {
        return this.getProperty('viewingHint');
    };
    return Manifest;
}(IIIFResource_1.IIIFResource));
exports.Manifest = Manifest;
//# sourceMappingURL=Manifest.js.map