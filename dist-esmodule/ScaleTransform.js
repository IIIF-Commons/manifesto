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
import { Transform } from "./internal";
var ScaleTransform = /** @class */ (function (_super) {
    __extends(ScaleTransform, _super);
    function ScaleTransform(jsonld) {
        var _this = _super.call(this, jsonld) || this;
        _this.isScaleTransform = true;
        return _this;
    }
    ScaleTransform.prototype.getScale = function () {
        var retVal = {};
        for (var _i = 0, _a = ["x", "y", "z"]; _i < _a.length; _i++) {
            var attrib = _a[_i];
            var raw = this.__jsonld[attrib];
            // note that default scaling is 1.0
            retVal[attrib] = (raw !== undefined) ? Number(raw) : 1.0;
        }
        return retVal;
    };
    return ScaleTransform;
}(Transform));
export { ScaleTransform };
;
//# sourceMappingURL=ScaleTransform.js.map