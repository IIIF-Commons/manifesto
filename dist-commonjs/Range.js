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
exports.Range = void 0;
var internal_1 = require("./internal");
var dist_commonjs_1 = require("@iiif/vocabulary/dist-commonjs");
var Range = /** @class */ (function (_super) {
    __extends(Range, _super);
    function Range(jsonld, options) {
        var _this = _super.call(this, jsonld, options) || this;
        _this._ranges = null;
        _this.canvases = null;
        _this.items = [];
        return _this;
    }
    Range.prototype.getCanvasIds = function () {
        if (this.__jsonld.canvases) {
            return this.__jsonld.canvases;
        }
        else if (this.canvases) {
            return this.canvases;
        }
        return [];
    };
    Range.prototype.getDuration = function () {
        // For this implementation, we want to catch SOME of the temporal cases - i.e. when there is a t=1,100
        if (this.canvases && this.canvases.length) {
            var startTimes = [];
            var endTimes = [];
            // When we loop through all of the canvases we store the recorded start and end times.
            // Then we choose the maximum and minimum values from this. This will give us a more accurate duration for the
            // Chosen range. However this is still not perfect and does not cover more complex ranges. These cases are out of
            // scope for this change.
            for (var _i = 0, _a = this.canvases; _i < _a.length; _i++) {
                var canvas = _a[_i];
                if (!canvas)
                    continue;
                var _b = (canvas.match(/(.*)#t=([0-9.]+),?([0-9.]+)?/) || [undefined, canvas]), canvasId = _b[1], start_1 = _b[2], end_1 = _b[3];
                if (canvasId) {
                    startTimes.push(parseFloat(start_1));
                    endTimes.push(parseFloat(end_1));
                }
            }
            if (startTimes.length && endTimes.length) {
                return new internal_1.Duration(Math.min.apply(Math, startTimes), Math.max.apply(Math, endTimes));
            }
        }
        else {
            // get child ranges and calculate the start and end based on them
            var childRanges = this.getRanges();
            var startTimes = [];
            var endTimes = [];
            // Once again, we use a max/min to get the ranges.
            for (var _c = 0, childRanges_1 = childRanges; _c < childRanges_1.length; _c++) {
                var childRange = childRanges_1[_c];
                var duration = childRange.getDuration();
                if (duration) {
                    startTimes.push(duration.start);
                    endTimes.push(duration.end);
                }
            }
            // And return the minimum as the start, and the maximum as the end.
            if (startTimes.length && endTimes.length) {
                return new internal_1.Duration(Math.min.apply(Math, startTimes), Math.max.apply(Math, endTimes));
            }
        }
        var start;
        var end;
        // There are 2 paths for this implementation. Either we have a list of canvases, or a list of ranges
        // which may have a list of ranges.
        // This is one of the limitations of this implementation.
        if (this.canvases && this.canvases.length) {
            // When we loop through each of the canvases we are expecting to see a fragment or a link to the whole canvas.
            // For example - if we have http://example.org/canvas#t=1,100 it will extract 1 and 100 as the start and end.
            for (var i = 0; i < this.canvases.length; i++) {
                var canvas = this.canvases[i];
                var temporal = internal_1.Utils.getTemporalComponent(canvas);
                if (temporal && temporal.length > 1) {
                    if (i === 0) {
                        // Note: Cannot guarantee ranges are sequential (fixed above)
                        start = Number(temporal[0]);
                    }
                    if (i === this.canvases.length - 1) {
                        end = Number(temporal[1]); // Note: The end of this duration may be targeting a different canvas.
                    }
                }
            }
        }
        else {
            // In this second case, where there are nested ranges, we recursively get the duration
            // from each of the child ranges (a start and end) and then choose the first and last for the bounds of this range.
            var childRanges = this.getRanges();
            for (var i = 0; i < childRanges.length; i++) {
                var childRange = childRanges[i];
                var duration = childRange.getDuration();
                if (duration) {
                    if (i === 0) {
                        start = duration.start;
                    }
                    if (i === childRanges.length - 1) {
                        end = duration.end;
                    }
                }
            }
        }
        if (start !== undefined && end !== undefined) {
            return new internal_1.Duration(start, end);
        }
        return undefined;
    };
    // getCanvases(): ICanvas[] {
    //     if (this._canvases) {
    //         return this._canvases;
    //     }
    //     return this._canvases = <ICanvas[]>this.items.en().where(m => m.isCanvas()).toArray();
    // }
    Range.prototype.getRanges = function () {
        if (this._ranges) {
            return this._ranges;
        }
        return (this._ranges = this.items.filter(function (m) { return m.isRange(); }));
    };
    Range.prototype.getBehavior = function () {
        var behavior = this.getProperty("behavior");
        if (Array.isArray(behavior)) {
            behavior = behavior[0];
        }
        if (behavior) {
            return behavior;
        }
        return null;
    };
    Range.prototype.getViewingDirection = function () {
        return this.getProperty("viewingDirection");
    };
    Range.prototype.getViewingHint = function () {
        return this.getProperty("viewingHint");
    };
    Range.prototype.getTree = function (treeRoot) {
        treeRoot.data = this;
        this.treeNode = treeRoot;
        var ranges = this.getRanges();
        if (ranges && ranges.length) {
            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                var node = new internal_1.TreeNode();
                treeRoot.addNode(node);
                this._parseTreeNode(node, range);
            }
        }
        internal_1.Utils.generateTreeNodeIds(treeRoot);
        return treeRoot;
    };
    Range.prototype.spansTime = function (time) {
        var duration = this.getDuration();
        if (duration) {
            if (time >= duration.start && time <= duration.end) {
                return true;
            }
        }
        return false;
    };
    Range.prototype._parseTreeNode = function (node, range) {
        node.label = range.getLabel().getValue(this.options.locale);
        node.data = range;
        node.data.type = internal_1.Utils.normaliseType(internal_1.TreeNodeType.RANGE);
        range.treeNode = node;
        var ranges = range.getRanges();
        if (ranges && ranges.length) {
            for (var i = 0; i < ranges.length; i++) {
                var childRange = ranges[i];
                var behavior = childRange.getBehavior();
                if (behavior === dist_commonjs_1.Behavior.NO_NAV) {
                    continue;
                }
                else {
                    var childNode = new internal_1.TreeNode();
                    node.addNode(childNode);
                    this._parseTreeNode(childNode, childRange);
                }
            }
        }
    };
    return Range;
}(internal_1.ManifestResource));
exports.Range = Range;
//# sourceMappingURL=Range.js.map