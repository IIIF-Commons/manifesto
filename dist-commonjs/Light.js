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
exports.Light = void 0;
var internal_1 = require("./internal");
var Light = /** @class */ (function (_super) {
    __extends(Light, _super);
    function Light(jsonld, options) {
        var _this = _super.call(this, jsonld, options) || this;
        _this.isLight = true;
        _this.isModel = false;
        return _this;
    }
    Object.defineProperty(Light.prototype, "isAmbientLight", {
        get: function () {
            return (internal_1.Utils.normaliseType(this.getProperty("type")) === "ambientlight");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Light.prototype, "isDirectionalLight", {
        get: function () {
            return (internal_1.Utils.normaliseType(this.getProperty("type")) === "directionallight");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Light.prototype, "isSpotLight", {
        get: function () {
            return (internal_1.Utils.normaliseType(this.getProperty("type")) === "spotlight");
        },
        enumerable: false,
        configurable: true
    });
    Light.prototype.getColor = function () {
        var hexColor = this.getProperty("color");
        if (hexColor)
            return internal_1.Color.fromCSS(hexColor);
        else
            return new internal_1.Color([255, 255, 255]); // white light
    };
    Object.defineProperty(Light.prototype, "Color", {
        get: function () { return this.getColor(); },
        enumerable: false,
        configurable: true
    });
    /**
    * The implementation of the intensity is based on
    * {@link https://github.com/IIIF/3d/blob/main/temp-draft-4.md | temp-draft-4.md }
    * and the example 3D manifests
    * {@link https://github.com/IIIF/3d/tree/main/manifests/3_lights | lights }
    * on 24 Mar 2024. The intensity property in the manifest is an object
    * with declared type 'Value', a numeric property named 'value' and a
    * property named unit . This implementation will only work with a unit == 'relative'
    * and it will be assumed that a relative unit value of 1.0 corresponds to the
    * brightest light source a rendering engine supports.
    *
    * This code will implement a default intensity of 1.0
    **/
    Light.prototype.getIntensity = function () {
        var intObject = this.getProperty("intensity");
        if (intObject) {
            try {
                if (!(intObject.type === "Value" && intObject.unit === "relative"))
                    throw new Error();
                return intObject.value;
            }
            catch (err) {
                throw new Error("unable to interpret raw intensity object " + JSON.stringify(intObject));
            }
        }
        else
            return 1.0;
    };
    Object.defineProperty(Light.prototype, "Intensity", {
        get: function () { return this.getIntensity(); },
        enumerable: false,
        configurable: true
    });
    /**
    * As defined in the temp-draft-4.md (
    * https://github.com/IIIF/3d/blob/main/temp-draft-4.md#lights ; 12 May 2024)
    * this quantity is the half-angle of the cone of the spotlight.
    *
    * The inconsistency between this definition of the angle and the definition of
    * fieldOfView for PerspectiveCamera (where the property value defines the full angle) has
    * already been noted: https://github.com/IIIF/api/issues/2284
    *
    * provisional decision is to return undefined in case that this property
    * is accessed in a light that is not a spotlight
    *
    *
    * @returns number
    
    **/
    Light.prototype.getAngle = function () {
        if (this.isSpotLight) {
            return Number(this.getProperty("angle"));
        }
        else {
            return undefined;
        }
    };
    Object.defineProperty(Light.prototype, "Angle", {
        get: function () { return this.getAngle(); },
        enumerable: false,
        configurable: true
    });
    /**
    * @return : if not null, is either a PointSelector, or an object
    * with an id matching the id of an Annotation instance.
    **/
    Light.prototype.getLookAt = function () {
        var rawObj = this.getPropertyAsObject("lookAt");
        var rawType = (rawObj["type"] || rawObj["@type"]);
        if (rawType == "Annotation") {
            return rawObj;
        }
        if (rawType == "PointSelector") {
            return new internal_1.PointSelector(rawObj);
        }
        throw new Error('unidentified value of lookAt ${rawType}');
    };
    Object.defineProperty(Light.prototype, "LookAt", {
        get: function () { return this.getLookAt(); },
        enumerable: false,
        configurable: true
    });
    return Light;
}(internal_1.AnnotationBody));
exports.Light = Light;
//# sourceMappingURL=Light.js.map