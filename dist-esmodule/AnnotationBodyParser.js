import { AnnotationBody, Light, Camera } from "./internal";
var LightTypes = ["AmbientLight", "DirectionalLight", "SpotLight"];
var CameraTypes = ["PerspectiveCamera", "OrthographicCamera"];
var DisplayedTypes = ["Image", "Document", "Audio", "Model", "Video"];
var AnnotationBodyParser = /** @class */ (function () {
    function AnnotationBodyParser() {
    }
    AnnotationBodyParser.BuildFromJson = function (jsonld, options) {
        if (DisplayedTypes.includes(jsonld.type))
            return new AnnotationBody(jsonld, options);
        else if (LightTypes.includes(jsonld.type))
            return new Light(jsonld, options);
        else if (CameraTypes.includes(jsonld.type))
            return new Camera(jsonld, options);
        else
            throw new Error("unimplemented type for AnnotationBody: " + jsonld.type);
    };
    return AnnotationBodyParser;
}());
export { AnnotationBodyParser };
//# sourceMappingURL=AnnotationBodyParser.js.map