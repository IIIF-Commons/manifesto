import {
    AnnotationBody,
    IManifestoOptions,
    Light,
    Camera
} from "./internal";


let LightTypes:string[] = ["AmbientLight" , "DirectionalLight"];
let CameraTypes:string[] = ["PerspectiveCamera", "OrthographicCamera"];
let DisplayedTypes:string[] = ["Image", "Document","Audio","Model","Video"];
export  class AnnotationBodyParser {
    static BuildFromJson( jsonld: any , options?: IManifestoOptions): AnnotationBody {
        if (DisplayedTypes.includes(jsonld.type))
            return new AnnotationBody(jsonld, options);
        else if ( LightTypes.includes( jsonld.type ))
            return new Light(jsonld, options);
        else if ( CameraTypes.includes( jsonld.type ))
            return new Camera(jsonld, options);
        else
            throw new Error("unimplemented type for AnnotationBody: " + jsonld.type );
            
    }
}
