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
import { ManifestResource, AnnotationBodyParser, TransformParser, PointSelector } from "./internal";
/**
    Developer note: This implementation does not strictly adhere
    to the description of SpecificResource in the Web Annotation Model
    document https://www.w3.org/TR/annotation-model/
    section 4 : https://www.w3.org/TR/annotation-model/#specific-resources
    
    The getTransform() method returning an Array of 3D Transfom resources, is
    an extension of SpecificResource beyond the web annotation model.
*/
var SpecificResource = /** @class */ (function (_super) {
    __extends(SpecificResource, _super);
    function SpecificResource(jsonld, options) {
        var _this = _super.call(this, jsonld, options) || this;
        /*
        property distinguishing instances of SpecificResource from instances of AnnotionBody.
        The return type of the Annotation.getBody() method is an array of instances of the
        union type ( AnnotationBody | SpecificResource )
        */
        _this.isAnnotationBody = false;
        /*
        property distinguishing instances of SpecificResource from instances of AnnotionBody.
        The return type of the Annotation.getBody() method is an array of instances of the
        union type ( AnnotationBody | SpecificResource )
        */
        _this.isSpecificResource = true;
        _this.isSpecificResource = true;
        return _this;
    }
    ;
    SpecificResource.prototype.getSource = function () {
        var raw = this.getPropertyAsObject("source");
        if (raw.isIRI)
            return raw;
        /*
            this logic gets a little convoluted, because we have to preserve
            the cases where the raw json is an array for the sources of a
            SpecificResource applied to an annotation body, while for a target
            of an Annotation we just want a single object
        */
        // case of a source of a SpecificResource which is an Annotation target
        if (raw) {
            var containerTypes = ["Scene", "Canvas"];
            var singleItem = ([].concat(raw))[0];
            if (containerTypes.includes(singleItem["type"]))
                return singleItem;
        }
        if (raw) {
            var item = ([].concat(raw))[0];
            if (item) {
                return AnnotationBodyParser.BuildFromJson(item, this.options);
            }
        }
        throw new Error("cannot resolve Source " + JSON.stringify(raw));
    };
    Object.defineProperty(SpecificResource.prototype, "Source", {
        get: function () { return this.getSource(); },
        enumerable: false,
        configurable: true
    });
    SpecificResource.prototype.getSelector = function () {
        var raw = this.getProperty("selector");
        if (raw) {
            var item = ([].concat(raw))[0];
            if (item) {
                if (item["type"] === "PointSelector")
                    return new PointSelector(item);
            }
            throw new Error("unable to resolve SpecificResource selector " + JSON.stringify(this.__jsonld));
        }
        return null;
    };
    ;
    Object.defineProperty(SpecificResource.prototype, "Selector", {
        get: function () { return this.getSelector(); },
        enumerable: false,
        configurable: true
    });
    SpecificResource.prototype.getTransform = function () {
        var retVal = [];
        var transformItems = this.getProperty("transform");
        for (var i = 0; i < transformItems.length; ++i) {
            var transformItem = transformItems[i];
            retVal.push(TransformParser.BuildFromJson(transformItem));
        }
        return retVal;
    };
    ;
    Object.defineProperty(SpecificResource.prototype, "Transform", {
        get: function () { return this.getTransform(); },
        enumerable: false,
        configurable: true
    });
    return SpecificResource;
}(ManifestResource));
export { SpecificResource };
//# sourceMappingURL=SpecificResource.js.map