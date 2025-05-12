import {
  AnnotationBody,
  IManifestoOptions,
  Light,
  Camera,
  TextualBody
} from "./internal";

// Todo: Add these to @iiif/vocabulary
const LightTypes: string[] = ["AmbientLight", "DirectionalLight", "PointLight", "SpotLight"];
const CameraTypes: string[] = ["PerspectiveCamera", "OrthographicCamera"];
const DisplayedTypes: string[] = ["Image", "Document", "Audio", "Model", "Video"];

export class AnnotationBodyParser {
  static BuildFromJson(jsonld: any , options?: IManifestoOptions): AnnotationBody {
    const type = (jsonld.type === "SpecificResource" && jsonld.source) 
      ? ([].concat(jsonld.source))[0]["type"] 
      : jsonld.type;

    if (DisplayedTypes.includes(type)) return new AnnotationBody(jsonld, options);
    else if (LightTypes.includes(type)) return new Light(jsonld, options);
    else if (CameraTypes.includes(type)) return new Camera(jsonld, options);
    else if (type === "TextualBody") return new TextualBody(jsonld, options);
    else throw new Error("unimplemented type for AnnotationBody: " + type );      
  }
}
