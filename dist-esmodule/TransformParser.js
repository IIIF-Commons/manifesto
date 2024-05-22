import { TranslateTransform, RotateTransform, ScaleTransform } from "./internal";
var TransformParser = /** @class */ (function () {
    function TransformParser() {
    }
    TransformParser.BuildFromJson = function (jsonld) {
        if (jsonld.type === "TranslateTransform")
            return new TranslateTransform(jsonld);
        else if (jsonld.type === "RotateTransform")
            return new RotateTransform(jsonld);
        else if (jsonld.type === "ScaleTransform")
            return new ScaleTransform(jsonld);
        else
            throw new Error("Unknown transform type " + jsonld.type);
    };
    return TransformParser;
}());
export { TransformParser };
//# sourceMappingURL=TransformParser.js.map