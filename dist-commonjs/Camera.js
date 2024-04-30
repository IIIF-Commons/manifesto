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
exports.Camera = void 0;
var internal_1 = require("./internal");
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
            return (internal_1.Utils.normaliseType(this.getProperty("type")) === "perspectivecamera");
        },
        enumerable: false,
        configurable: true
    });
    /*
    Returns full angular size (in degrees) in vertical direction
    */
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
        get: function () { return this.getFieldOfView(); },
        enumerable: false,
        configurable: true
    });
    Camera.prototype.getLookAt = function () {
        return this.getPropertyAsObject("lookAt");
    };
    Object.defineProperty(Camera.prototype, "LookAt", {
        get: function () { return this.getLookAt(); },
        enumerable: false,
        configurable: true
    });
    return Camera;
}(internal_1.AnnotationBody));
exports.Camera = Camera;
;
//# sourceMappingURL=Camera.js.map