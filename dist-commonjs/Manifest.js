"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manifest = void 0;
var dist_commonjs_1 = require("@iiif/vocabulary/dist-commonjs");
var internal_1 = require("./internal");
/**
* @remarks Scenes are conveniently retrieved from a Manifest by iterating through
* Sequence in the Manifest, inner loop the Scenes in each sequence
* @see {@link Sequence }
*
* @example
* var manifest: Manifest;
* function doSomethingWithScene(scene:Scene)...
* ...
* foreach(var seq:Sequence of manifest.getSequences()
*   foreach(var scene : Scene of seq.getScenes()
*     doSomethingWithScene(scene);
**/
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
        // initialization the cached _annotationIdMap to null
        // it will be populated if and only if client calls make a request
        // to the getter annotationIdMap
        _this._annotationIdMap = null;
        return _this;
    }
    /** @deprecated Use getAccompanyingCanvas instead */
    Manifest.prototype.getPosterCanvas = function () {
        var posterCanvas = this.getProperty("posterCanvas");
        if (posterCanvas) {
            posterCanvas = new internal_1.Canvas(posterCanvas, this.options);
        }
        return posterCanvas;
    };
    Manifest.prototype.getAccompanyingCanvas = function () {
        var accompanyingCanvas = this.getProperty("accompanyingCanvas");
        if (accompanyingCanvas) {
            accompanyingCanvas = new internal_1.Canvas(accompanyingCanvas, this.options);
        }
        return accompanyingCanvas;
    };
    Manifest.prototype.getBehavior = function () {
        var behavior = this.getProperty("behavior");
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
        this.defaultTree.data.type = internal_1.Utils.normaliseType(internal_1.TreeNodeType.MANIFEST);
        if (!this.isLoaded) {
            return this.defaultTree;
        }
        var topRanges = this.getTopRanges();
        // if there are any ranges in the manifest, default to the first 'top' range or generated placeholder
        if (topRanges.length) {
            topRanges[0].getTree(this.defaultTree);
        }
        internal_1.Utils.generateTreeNodeIds(this.defaultTree);
        return this.defaultTree;
    };
    Manifest.prototype._getTopRanges = function () {
        var topRanges = [];
        if (this.__jsonld.structures && this.__jsonld.structures.length) {
            for (var i = 0; i < this.__jsonld.structures.length; i++) {
                var json = this.__jsonld.structures[i];
                if (json.viewingHint === dist_commonjs_1.ViewingHint.TOP) {
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
                if (r["@id"] === id || r.id === id) {
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
        if (typeof r === "string") {
            id = r;
            r = this._getRangeById(id);
        }
        if (!r) {
            console.warn("Range:", id, "does not exist");
            return;
        }
        range = new internal_1.Range(r, this.options);
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
                if ((item["@type"] && item["@type"].toLowerCase() === "sc:range") ||
                    (item["type"] && item["type"].toLowerCase() === "range")) {
                    this._parseRanges(item, path + "/" + i, range);
                }
                else if ((item["@type"] && item["@type"].toLowerCase() === "sc:canvas") ||
                    (item["type"] && item["type"].toLowerCase() === "canvas")) {
                    // store the ids on the __jsonld object to be used by Range.getCanvasIds()
                    if (!range.canvases) {
                        range.canvases = [];
                    }
                    var id_1 = item.id || item["@id"];
                    range.canvases.push(id_1);
                }
            }
        }
        else if (r.ranges) {
            for (var i = 0; i < r.ranges.length; i++) {
                this._parseRanges(r.ranges[i], path + "/" + i, range);
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
    /**
    * @returns Array of Sequence instances
    **/
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
                var sequence = new internal_1.Sequence(s, this.options);
                this.items.push(sequence);
            }
        }
        else if (this.__jsonld.items) {
            var sequence = new internal_1.Sequence(this.__jsonld.items, this.options);
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
        var service = (this.getService(dist_commonjs_1.ServiceProfile.UI_EXTENSIONS));
        if (service) {
            return service.getProperty("manifestType");
        }
        return internal_1.ManifestType.EMPTY;
    };
    Manifest.prototype.isMultiSequence = function () {
        return this.getTotalSequences() > 1;
    };
    Manifest.prototype.isPagingEnabled = function () {
        var viewingHint = this.getViewingHint();
        if (viewingHint) {
            return viewingHint === dist_commonjs_1.ViewingHint.PAGED;
        }
        var behavior = this.getBehavior();
        if (behavior) {
            return behavior === dist_commonjs_1.Behavior.PAGED;
        }
        return false;
    };
    Manifest.prototype.getViewingDirection = function () {
        return this.getProperty("viewingDirection");
    };
    Manifest.prototype.getViewingHint = function () {
        return this.getProperty("viewingHint");
    };
    Object.defineProperty(Manifest.prototype, "annotationIdMap", {
        /**
        * Developer Note: The concept of the "id map" appear in the
        * JSON-LD specification https://www.w3.org/TR/json-ld11/#dfn-id-map
        * This functionality may be available as well in the 'nodeMap' code of the
        * digitalbazaar/jsonld library
        *
        * this very simplified version just returns a mao of id -> Annotation nodes
        * in manifest
        *
        * THe annotationIdMap is a Javascript object whose property names are
        * IRI (id values) and property values are instances of the Annotation class
        **/
        get: function () {
            if (this._annotationIdMap == null) {
                this._annotationIdMap = {};
                for (var _i = 0, _a = this.getSequences(); _i < _a.length; _i++) {
                    var seq = _a[_i];
                    for (var _b = 0, _c = seq.getScenes(); _b < _c.length; _b++) {
                        var scene = _c[_b];
                        for (var _d = 0, _e = scene.getContent(); _d < _e.length; _d++) {
                            var anno = _e[_d];
                            this._annotationIdMap[anno.id] = anno;
                        }
                    }
                }
            }
            return this._annotationIdMap;
        },
        enumerable: false,
        configurable: true
    });
    return Manifest;
}(internal_1.IIIFResource));
exports.Manifest = Manifest;
//# sourceMappingURL=Manifest.js.map