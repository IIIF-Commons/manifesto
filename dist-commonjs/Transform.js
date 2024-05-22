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
exports.Transform = void 0;
var internal_1 = require("./internal");
var Transform = /** @class */ (function (_super) {
    __extends(Transform, _super);
    function Transform(jsonld) {
        var _this = _super.call(this, jsonld) || this;
        _this.isTransform = true;
        _this.isTransform = true;
        return _this;
    }
    return Transform;
}(internal_1.JSONLDResource));
exports.Transform = Transform;
//# sourceMappingURL=Transform.js.map