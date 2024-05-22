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
import { JSONLDResource, } from "./internal";
import { Vector3 } from "threejs-math";
var PointSelector = /** @class */ (function (_super) {
    __extends(PointSelector, _super);
    function PointSelector(jsonld) {
        var _this = _super.call(this, jsonld) || this;
        _this.isPointSelector = true;
        return _this;
    }
    /**
    @returns the 3D coordinates of the point as a Vector3 instance.
    **/
    PointSelector.prototype.getLocation = function () {
        return new Vector3(this.__jsonld.x, this.__jsonld.y, this.__jsonld.z);
    };
    Object.defineProperty(PointSelector.prototype, "Location", {
        /**
        @returns the 3D coordinates of the point as a Vector3 instance.
        **/
        get: function () { return this.getLocation(); },
        enumerable: false,
        configurable: true
    });
    return PointSelector;
}(JSONLDResource));
export { PointSelector };
//# sourceMappingURL=PointSelector.js.map