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
var JSONLDResource_1 = require("./JSONLDResource");
var IIIFResourceTypeEnum = require('@iiif/vocabulary/dist-commonjs/').IIIFResourceType;
var ManifestResource = /** @class */ (function (_super) {
    __extends(ManifestResource, _super);
    function ManifestResource(jsonld, options) {
        var _this = _super.call(this, jsonld) || this;
        _this.options = options;
        return _this;
    }
    ManifestResource.prototype.getIIIFResourceType = function () {
        return Utils_1.Utils.normaliseType(this.getProperty('type'));
    };
    ManifestResource.prototype.getLabel = function () {
        var label = this.getProperty('label');
        if (label) {
            return LanguageMap_1.LanguageMap.parse(label, this.options.locale);
        }
        return [];
    };
    ManifestResource.prototype.getDefaultLabel = function () {
        return LanguageMap_1.LanguageMap.getValue(this.getLabel());
    };
    ManifestResource.prototype.getMetadata = function () {
        var _metadata = this.getProperty('metadata');
        var metadata = [];
        if (!_metadata)
            return metadata;
        for (var i = 0; i < _metadata.length; i++) {
            var item = _metadata[i];
            var metadataItem = new LabelValuePair_1.LabelValuePair(this.options.locale);
            metadataItem.parse(item);
            metadata.push(metadataItem);
        }
        return metadata;
    };
    ManifestResource.prototype.getRendering = function (format) {
        var renderings = this.getRenderings();
        for (var i = 0; i < renderings.length; i++) {
            var rendering = renderings[i];
            if (rendering.getFormat() === format) {
                return rendering;
            }
        }
        return null;
    };
    ManifestResource.prototype.getRenderings = function () {
        var rendering;
        // if passing a manifesto-parsed object, use the __jsonld.rendering property,
        // otherwise look for a rendering property
        if (this.__jsonld) {
            rendering = this.__jsonld.rendering;
        }
        else {
            rendering = this.rendering;
        }
        var renderings = [];
        if (!rendering)
            return renderings;
        // coerce to array
        if (!Array.isArray(rendering)) {
            rendering = [rendering];
        }
        for (var i = 0; i < rendering.length; i++) {
            var r = rendering[i];
            renderings.push(new Rendering_1.Rendering(r, this.options));
        }
        return renderings;
    };
    ManifestResource.prototype.getService = function (profile) {
        return Utils_1.Utils.getService(this, profile);
    };
    ManifestResource.prototype.getServices = function () {
        return Utils_1.Utils.getServices(this);
    };
    ManifestResource.prototype.getThumbnail = function () {
        var thumbnail = this.getProperty('thumbnail');
        if (Array.isArray(thumbnail)) {
            thumbnail = thumbnail[0];
        }
        if (thumbnail) {
            return new Thumbnail_1.Thumbnail(thumbnail, this.options);
        }
        return null;
    };
    ManifestResource.prototype.isAnnotation = function () {
        return this.getIIIFResourceType() === IIIFResourceTypeEnum.ANNOTATION;
    };
    ManifestResource.prototype.isCanvas = function () {
        return this.getIIIFResourceType() === IIIFResourceTypeEnum.CANVAS;
    };
    ManifestResource.prototype.isCollection = function () {
        return this.getIIIFResourceType() === IIIFResourceTypeEnum.COLLECTION;
    };
    ManifestResource.prototype.isManifest = function () {
        return this.getIIIFResourceType() === IIIFResourceTypeEnum.MANIFEST;
    };
    ManifestResource.prototype.isRange = function () {
        return this.getIIIFResourceType() === IIIFResourceTypeEnum.RANGE;
    };
    ManifestResource.prototype.isSequence = function () {
        return this.getIIIFResourceType() === IIIFResourceTypeEnum.SEQUENCE;
    };
    return ManifestResource;
}(JSONLDResource_1.JSONLDResource));
exports.ManifestResource = ManifestResource;
var Utils_1 = require("./Utils");
var LanguageMap_1 = require("./LanguageMap");
var LabelValuePair_1 = require("./LabelValuePair");
var Thumbnail_1 = require("./Thumbnail");
var Rendering_1 = require("./Rendering");
//# sourceMappingURL=ManifestResource.js.map