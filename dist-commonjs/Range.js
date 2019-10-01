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
var ManifestResource_1 = require("./ManifestResource");
var TreeNode_1 = require("./TreeNode");
var Duration_1 = require("./Duration");
var Utils_1 = require("./Utils");
var LanguageMap_1 = require("./LanguageMap");
var TreeNodeType_1 = require("./TreeNodeType");
var BehaviorEnum = require('@iiif/vocabulary/dist-commonjs/').Behavior;
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
        var start;
        var end;
        if (this.canvases && this.canvases.length) {
            for (var i = 0; i < this.canvases.length; i++) {
                var canvas = this.canvases[i];
                var temporal = Utils_1.Utils.getTemporalComponent(canvas);
                if (temporal && temporal.length > 1) {
                    if (i === 0) {
                        start = Number(temporal[0]);
                    }
                    if (i === this.canvases.length - 1) {
                        end = Number(temporal[1]);
                    }
                }
            }
        }
        else {
            // get child ranges and calculate the start and end based on them
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
            return new Duration_1.Duration(start, end);
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
        return this._ranges = this.items.filter(function (m) { return m.isRange(); });
    };
    Range.prototype.getBehavior = function () {
        var behavior = this.getProperty('behavior');
        if (Array.isArray(behavior)) {
            behavior = behavior[0];
        }
        if (behavior) {
            return behavior;
        }
        return null;
    };
    Range.prototype.getViewingDirection = function () {
        return this.getProperty('viewingDirection');
    };
    Range.prototype.getViewingHint = function () {
        return this.getProperty('viewingHint');
    };
    Range.prototype.getTree = function (treeRoot) {
        treeRoot.data = this;
        this.treeNode = treeRoot;
        var ranges = this.getRanges();
        if (ranges && ranges.length) {
            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                var node = new TreeNode_1.TreeNode();
                treeRoot.addNode(node);
                this._parseTreeNode(node, range);
            }
        }
        Utils_1.Utils.generateTreeNodeIds(treeRoot);
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
        node.label = LanguageMap_1.LanguageMap.getValue(range.getLabel(), this.options.locale);
        node.data = range;
        node.data.type = Utils_1.Utils.normaliseType(TreeNodeType_1.TreeNodeType.RANGE);
        range.treeNode = node;
        var ranges = range.getRanges();
        if (ranges && ranges.length) {
            for (var i = 0; i < ranges.length; i++) {
                var childRange = ranges[i];
                var behavior = childRange.getBehavior();
                if (behavior === BehaviorEnum.NO_NAV) {
                    continue;
                }
                else {
                    var childNode = new TreeNode_1.TreeNode();
                    node.addNode(childNode);
                    this._parseTreeNode(childNode, childRange);
                }
            }
        }
    };
    return Range;
}(ManifestResource_1.ManifestResource));
exports.Range = Range;
//# sourceMappingURL=Range.js.map