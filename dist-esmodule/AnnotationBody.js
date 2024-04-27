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
import { ManifestResource, Utils } from "./internal";
/**
With the 3D extensions to the IIIF Presentation API the name of this
class is misleading, but for now is being retained for the sake backward
compatibility with earlier manifesto code and tests.

The 3D extensions allow that the body property of an annotation can be
a light, camera, or model, or a SpecificResource object wrapping a light, camera,
or model.
**/
var AnnotationBody = /** @class */ (function (_super) {
    __extends(AnnotationBody, _super);
    function AnnotationBody(jsonld, options) {
        var _this = _super.call(this, jsonld, options) || this;
        /*
        property distinguishing instances of SpecificResource from instances of AnnotionBody.
        The return type of the Annotation.getBody() method is an array of instances of the
        union type ( AnnotationBody | SpecificResource )
        */
        _this.isAnnotationBody = true;
        /*
        property distinguishing instances of SpecificResource from instances of AnnotionBody.
        The return type of the Annotation.getBody() method is an array of instances of the
        union type ( AnnotationBody | SpecificResource )
        */
        _this.isSpecificResource = false;
        // following class members were added to support 3D and mixed 2D/3D content
        // these boolean switches will be appropriately set when the manifest json is parsed
        _this.isModel = true;
        _this.isLight = false;
        _this.isCamera = false;
        return _this;
    }
    // Format, Type, Width, and Height are the body properties supported
    // in the code that supports Presentation 3
    AnnotationBody.prototype.getFormat = function () {
        var format = this.getProperty("format");
        if (format) {
            return Utils.getMediaType(format);
        }
        return null;
    };
    AnnotationBody.prototype.getType = function () {
        var type = this.getProperty("type");
        if (type) {
            return (Utils.normaliseType(this.getProperty("type")));
        }
        return null;
    };
    AnnotationBody.prototype.getWidth = function () {
        return this.getProperty("width");
    };
    AnnotationBody.prototype.getHeight = function () {
        return this.getProperty("height");
    };
    return AnnotationBody;
}(ManifestResource));
export { AnnotationBody };
//# sourceMappingURL=AnnotationBody.js.map