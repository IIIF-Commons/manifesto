"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotationBodyParser = void 0;
var internal_1 = require("./internal");
var LightTypes = ["AmbientLight", "DirectionalLight"];
var CameraTypes = ["PerspectiveCamera", "OrthographicCamera"];
var DisplayedTypes = ["Image", "Document", "Audio", "Model", "Video"];
var AnnotationBodyParser = /** @class */ (function () {
    function AnnotationBodyParser() {
    }
    AnnotationBodyParser.BuildFromJson = function (jsonld, options) {
        if (DisplayedTypes.includes(jsonld.type))
            return new internal_1.AnnotationBody(jsonld, options);
        else if (LightTypes.includes(jsonld.type))
            return new internal_1.Light(jsonld, options);
        else if (CameraTypes.includes(jsonld.type))
            return new internal_1.Camera(jsonld, options);
        else
            throw new Error("unimplemented type for AnnotationBody: " + jsonld.type);
    };
    return AnnotationBodyParser;
}());
exports.AnnotationBodyParser = AnnotationBodyParser;
//# sourceMappingURL=AnnotationBodyParser.js.map