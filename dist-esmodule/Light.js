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
import { Utils, AnnotationBody, Color } from "./internal";
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
            return (Utils.normaliseType(this.getProperty("type")) === "ambientlight");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Light.prototype, "isDirectionalLight", {
        get: function () {
            return (Utils.normaliseType(this.getProperty("type")) === "directionallight");
        },
        enumerable: false,
        configurable: true
    });
    Light.prototype.getColor = function () {
        var hexColor = this.getProperty("color");
        if (hexColor)
            return Color.fromCSS(hexColor);
        else
            return new Color([255, 255, 255]); // white light
    };
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
    return Light;
}(AnnotationBody));
export { Light };
//# sourceMappingURL=Light.js.map