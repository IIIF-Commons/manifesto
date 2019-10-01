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
var Annotation_1 = require("./Annotation");
var Utils_1 = require("./Utils");
var Resource = /** @class */ (function (_super) {
    __extends(Resource, _super);
    function Resource(jsonld, options) {
        return _super.call(this, jsonld, options) || this;
    }
    Resource.prototype.getFormat = function () {
        var format = this.getProperty('format');
        if (format) {
            return format.toLowerCase();
        }
        return null;
    };
    Resource.prototype.getResources = function () {
        var resources = [];
        if (!this.__jsonld.resources)
            return resources;
        for (var i = 0; i < this.__jsonld.resources.length; i++) {
            var a = this.__jsonld.resources[i];
            var annotation = new Annotation_1.Annotation(a, this.options);
            resources.push(annotation);
        }
        return resources;
    };
    Resource.prototype.getType = function () {
        var type = this.getProperty('type');
        if (type) {
            return Utils_1.Utils.normaliseType(type);
        }
        return null;
    };
    Resource.prototype.getWidth = function () {
        return this.getProperty('width');
    };
    Resource.prototype.getHeight = function () {
        return this.getProperty('height');
    };
    Resource.prototype.getMaxWidth = function () {
        return this.getProperty('maxWidth');
    };
    Resource.prototype.getMaxHeight = function () {
        var maxHeight = this.getProperty('maxHeight');
        // if a maxHeight hasn't been specified, default to maxWidth.
        // maxWidth in essence becomes maxEdge
        if (!maxHeight) {
            return this.getMaxWidth();
        }
        return null;
    };
    return Resource;
}(ManifestResource_1.ManifestResource));
exports.Resource = Resource;
//# sourceMappingURL=Resource.js.map