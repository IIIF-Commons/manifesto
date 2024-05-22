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
import { Utils, AnnotationBody, PointSelector } from "./internal";
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera(jsonld, options) {
        var _this = _super.call(this, jsonld, options) || this;
        _this.isModel = false;
        _this.isLight = false;
        _this.isCamera = true;
        return _this;
    }
    Object.defineProperty(Camera.prototype, "isPerspectiveCamera", {
        get: function () {
            return (Utils.normaliseType(this.getProperty("type")) === "perspectivecamera");
        },
        enumerable: false,
        configurable: true
    });
    /**
    @returns full angular size of perspective viewport in vertical direction.
    Angular unit is degrees
    **/
    Camera.prototype.getFieldOfView = function () {
        if (this.isPerspectiveCamera) {
            var value = this.getProperty("fieldOfView");
            if (value)
                return value;
            else
                return 45.0;
        }
        else
            return undefined;
    };
    Object.defineProperty(Camera.prototype, "FieldOfView", {
        /**
        Full angular size of perspective viewport in vertical direction.
        Angular unit is degrees
        **/
        get: function () { return this.getFieldOfView(); },
        enumerable: false,
        configurable: true
    });
    /**
    * @return : if not null, is either a PointSelector, or an object
    * with an id matching the id of an Annotation instance.
    **/
    Camera.prototype.getLookAt = function () {
        var rawObj = this.getPropertyAsObject("lookAt");
        var rawType = (rawObj["type"] || rawObj["@type"]);
        if (rawType == "Annotation") {
            return rawObj;
        }
        if (rawType == "PointSelector") {
            return new PointSelector(rawObj);
        }
        throw new Error('unidentified value of lookAt ${rawType}');
    };
    Object.defineProperty(Camera.prototype, "LookAt", {
        get: function () { return this.getLookAt(); },
        enumerable: false,
        configurable: true
    });
    return Camera;
}(AnnotationBody));
export { Camera };
;
//# sourceMappingURL=Camera.js.map