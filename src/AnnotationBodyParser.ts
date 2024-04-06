import {
    AnnotationBody,
    IManifestoOptions,
    Light,
    Camera
} from "./internal";


let LightTypes:string[] = ["AmbientLight" , "DirectionalLight"];
let CameraTypes:string[] = ["PerspectiveCamera", "OrthographicCamera"];
export  class AnnotationBodyParser {
    static BuildFromJson( jsonld: any , options?: IManifestoOptions): AnnotationBody {
        if (jsonld.type === "Model")
            return new AnnotationBody(jsonld, options);
        else if ( LightTypes.includes( jsonld.type ))
            return new Light(jsonld, options);
        else if ( CameraTypes.includes( jsonld.type ))
            return new Camera(jsonld, options);
        else
            throw new Error("unimplemented type for AnnotationBody: " + jsonld.type );
            
    }
}
