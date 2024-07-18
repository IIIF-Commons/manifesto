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
import { JSONLDResource, Thumbnail, Utils, Rendering, LabelValuePair, PropertyValue } from "./internal";
import { IIIFResourceType } from "@iiif/vocabulary/dist-commonjs";
var ManifestResource = /** @class */ (function (_super) {
    __extends(ManifestResource, _super);
    function ManifestResource(jsonld, options) {
        var _this = _super.call(this, jsonld) || this;
        _this.options = options;
        return _this;
    }
    ManifestResource.prototype.getIIIFResourceType = function () {
        return Utils.normaliseType(this.getProperty("type"));
    };
    /**
    * returns the PropertyValue which in turn allows a language-specific string
    * encoded in the json as the "label" property
    * @example
    * var label = manifest.getLabel().getValue(); // returns the string for default locale
    *
    * @example
    * var label = manifest.getLabel().getValue(locale); // locale a string , examples
    *                                                   // would be "fr", "en-US",
    **/
    ManifestResource.prototype.getLabel = function () {
        var label = this.getProperty("label");
        if (label) {
            return PropertyValue.parse(label, this.options.locale);
        }
        return new PropertyValue([], this.options.locale);
    };
    ManifestResource.prototype.getSummary = function () {
        var summary = this.getProperty("summary");
        if (summary) {
            return PropertyValue.parse(summary, this.options.locale);
        }
        return new PropertyValue([], this.options.locale);
    };
    ManifestResource.prototype.getDefaultLabel = function () {
        return this.getLabel().getValue(this.options.locale);
    };
    ManifestResource.prototype.getMetadata = function () {
        var _metadata = this.getProperty("metadata");
        var metadata = [];
        if (!_metadata)
            return metadata;
        for (var i = 0; i < _metadata.length; i++) {
            var item = _metadata[i];
            var metadataItem = new LabelValuePair(this.options.locale);
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
            renderings.push(new Rendering(r, this.options));
        }
        return renderings;
    };
    ManifestResource.prototype.getRequiredStatement = function () {
        var requiredStatement = null;
        var _requiredStatement = this.getProperty("requiredStatement");
        if (_requiredStatement) {
            requiredStatement = new LabelValuePair(this.options.locale);
            requiredStatement.parse(_requiredStatement);
        }
        return requiredStatement;
    };
    ManifestResource.prototype.getService = function (profile) {
        return Utils.getService(this, profile);
    };
    ManifestResource.prototype.getServices = function () {
        return Utils.getServices(this);
    };
    ManifestResource.prototype.getThumbnail = function () {
        var thumbnail = this.getProperty("thumbnail");
        if (Array.isArray(thumbnail)) {
            thumbnail = thumbnail[0];
        }
        if (thumbnail) {
            return new Thumbnail(thumbnail, this.options);
        }
        return null;
    };
    ManifestResource.prototype.isAnnotation = function () {
        return this.getIIIFResourceType() === IIIFResourceType.ANNOTATION;
    };
    ManifestResource.prototype.isCanvas = function () {
        return this.getIIIFResourceType() === IIIFResourceType.CANVAS;
    };
    ManifestResource.prototype.isCollection = function () {
        return this.getIIIFResourceType() === IIIFResourceType.COLLECTION;
    };
    ManifestResource.prototype.isManifest = function () {
        return this.getIIIFResourceType() === IIIFResourceType.MANIFEST;
    };
    ManifestResource.prototype.isRange = function () {
        return this.getIIIFResourceType() === IIIFResourceType.RANGE;
    };
    // this different implementation is necessary until such time as the 
    // SCENE is added to the @iiif/vocabulary package.
    ManifestResource.prototype.isScene = function () {
        return this.getIIIFResourceType() === Utils.normaliseType('Scene');
    };
    ManifestResource.prototype.isSequence = function () {
        return this.getIIIFResourceType() === IIIFResourceType.SEQUENCE;
    };
    return ManifestResource;
}(JSONLDResource));
export { ManifestResource };
//# sourceMappingURL=ManifestResource.js.map