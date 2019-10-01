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
var Canvas_1 = require("./Canvas");
var Utils_1 = require("./Utils");
var LanguageMap_1 = require("./LanguageMap");
var Thumb_1 = require("./Thumb");
var ViewingDirectionEnum = require('@iiif/vocabulary/dist-commonjs/').ViewingDirection;
var ViewingHintEnum = require('@iiif/vocabulary/dist-commonjs/').ViewingHint;
var Sequence = /** @class */ (function (_super) {
    __extends(Sequence, _super);
    function Sequence(jsonld, options) {
        var _this = _super.call(this, jsonld, options) || this;
        _this.items = [];
        _this._thumbnails = null;
        return _this;
    }
    Sequence.prototype.getCanvases = function () {
        if (this.items.length) {
            return this.items;
        }
        var items = this.__jsonld.canvases || this.__jsonld.elements;
        if (items) {
            for (var i = 0; i < items.length; i++) {
                var c = items[i];
                var canvas = new Canvas_1.Canvas(c, this.options);
                canvas.index = i;
                this.items.push(canvas);
            }
        }
        else if (this.__jsonld) {
            for (var i = 0; i < this.__jsonld.length; i++) {
                var c = this.__jsonld[i];
                var canvas = new Canvas_1.Canvas(c, this.options);
                canvas.index = i;
                this.items.push(canvas);
            }
        }
        return this.items;
    };
    Sequence.prototype.getCanvasById = function (id) {
        for (var i = 0; i < this.getTotalCanvases(); i++) {
            var canvas = this.getCanvasByIndex(i);
            // normalise canvas id
            var canvasId = Utils_1.Utils.normaliseUrl(canvas.id);
            if (Utils_1.Utils.normaliseUrl(id) === canvasId) {
                return canvas;
            }
        }
        return null;
    };
    Sequence.prototype.getCanvasByIndex = function (canvasIndex) {
        return this.getCanvases()[canvasIndex];
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
    Sequence.prototype.getCanvasIndexByLabel = function (label, foliated) {
        label = label.trim();
        if (!isNaN(label)) { // if the label is numeric
            label = parseInt(label, 10).toString(); // trim any preceding zeros.
            if (foliated)
                label += 'r'; // default to recto
        }
        var doublePageRegExp = /(\d*)\D+(\d*)/;
        var match, regExp, regStr, labelPart1, labelPart2;
        for (var i = 0; i < this.getTotalCanvases(); i++) {
            var canvas = this.getCanvasByIndex(i);
            // check if there's a literal match
            if (LanguageMap_1.LanguageMap.getValue(canvas.getLabel(), this.options.locale) === label) {
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
            if (regExp.test(canvas.getLabel().toString())) {
                return i;
            }
        }
        return -1;
    };
    Sequence.prototype.getLastCanvasLabel = function (alphanumeric) {
        for (var i = this.getTotalCanvases() - 1; i >= 0; i--) {
            var canvas = this.getCanvasByIndex(i);
            var label = LanguageMap_1.LanguageMap.getValue(canvas.getLabel(), this.options.locale);
            if (alphanumeric) {
                var regExp = /^[a-zA-Z0-9]*$/;
                if (regExp.test(label)) {
                    return label;
                }
            }
            else if (label) {
                return label;
            }
        }
        return this.options.defaultLabel;
    };
    Sequence.prototype.getLastPageIndex = function () {
        return this.getTotalCanvases() - 1;
    };
    Sequence.prototype.getNextPageIndex = function (canvasIndex, pagingEnabled) {
        var index;
        if (pagingEnabled) {
            var indices = this.getPagedIndices(canvasIndex);
            var viewingDirection = this.getViewingDirection();
            if (viewingDirection && viewingDirection === ViewingDirectionEnum.RIGHT_TO_LEFT) {
                index = indices[0] + 1;
            }
            else {
                index = indices[indices.length - 1] + 1;
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
            var viewingDirection = this.getViewingDirection();
            if (viewingDirection && viewingDirection === ViewingDirectionEnum.RIGHT_TO_LEFT) {
                indices = indices.reverse();
            }
        }
        return indices;
    };
    Sequence.prototype.getPrevPageIndex = function (canvasIndex, pagingEnabled) {
        var index;
        if (pagingEnabled) {
            var indices = this.getPagedIndices(canvasIndex);
            var viewingDirection = this.getViewingDirection();
            if (viewingDirection && viewingDirection === ViewingDirectionEnum.RIGHT_TO_LEFT) {
                index = indices[indices.length - 1] - 1;
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
        var startCanvas = this.getStartCanvas();
        if (startCanvas) {
            // if there's a startCanvas attribute, loop through the canvases and return the matching index.
            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);
                if (canvas.id === startCanvas)
                    return i;
            }
        }
        // default to first canvas.
        return 0;
    };
    // todo: deprecate
    Sequence.prototype.getThumbs = function (width, height) {
        console.warn('getThumbs will be deprecated, use getThumbnails instead');
        var thumbs = [];
        var totalCanvases = this.getTotalCanvases();
        for (var i = 0; i < totalCanvases; i++) {
            var canvas = this.getCanvasByIndex(i);
            var thumb = new Thumb_1.Thumb(width, canvas);
            thumbs.push(thumb);
        }
        return thumbs;
    };
    Sequence.prototype.getThumbnails = function () {
        if (this._thumbnails != null)
            return this._thumbnails;
        this._thumbnails = [];
        var canvases = this.getCanvases();
        for (var i = 0; i < canvases.length; i++) {
            var thumbnail = canvases[i].getThumbnail();
            if (thumbnail) {
                this._thumbnails.push(thumbnail);
            }
        }
        return this._thumbnails;
    };
    Sequence.prototype.getStartCanvas = function () {
        return this.getProperty('startCanvas');
    };
    Sequence.prototype.getTotalCanvases = function () {
        return this.getCanvases().length;
    };
    Sequence.prototype.getViewingDirection = function () {
        if (this.getProperty('viewingDirection')) {
            return this.getProperty('viewingDirection');
        }
        else if (this.options.resource.getViewingDirection) {
            return this.options.resource.getViewingDirection();
        }
        return null;
    };
    Sequence.prototype.getViewingHint = function () {
        return this.getProperty('viewingHint');
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
    Sequence.prototype.isPagingEnabled = function () {
        var viewingHint = this.getViewingHint();
        if (viewingHint) {
            return viewingHint === ViewingHintEnum.PAGED;
        }
        return false;
    };
    // checks if the number of canvases is even - therefore has a front and back cover
    Sequence.prototype.isTotalCanvasesEven = function () {
        return this.getTotalCanvases() % 2 === 0;
    };
    return Sequence;
}(ManifestResource_1.ManifestResource));
exports.Sequence = Sequence;
//# sourceMappingURL=Sequence.js.map