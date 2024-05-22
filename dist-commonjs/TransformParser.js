"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformParser = void 0;
var internal_1 = require("./internal");
var TransformParser = /** @class */ (function () {
    function TransformParser() {
    }
    TransformParser.BuildFromJson = function (jsonld) {
        if (jsonld.type === "TranslateTransform")
            return new internal_1.TranslateTransform(jsonld);
        else if (jsonld.type === "RotateTransform")
            return new internal_1.RotateTransform(jsonld);
        else if (jsonld.type === "ScaleTransform")
            return new internal_1.ScaleTransform(jsonld);
        else
            throw new Error("Unknown transform type " + jsonld.type);
    };
    return TransformParser;
}());
exports.TransformParser = TransformParser;
//# sourceMappingURL=TransformParser.js.map