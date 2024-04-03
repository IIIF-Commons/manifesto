import {
    AnnotationBody,
    Light,
    Camera
} from "./internal";


let LightTypes:string[] = ["AmbientLight" , "DirectionalLight"];
let CameraTypes:string[] = ["PerspectiveCamera", "OrthographicCamera"];
export  class AnnotationBodyParser {
    static BuildFromJson( jsonld: any ): AnnotationBody {
        if (jsonld.type === "Model")
            return new AnnotationBody(jsonld);
        else if ( LightTypes.includes( jsonld.type ))
            return new Light(jsonld);
        else if ( CameraTypes.includes( jsonld.type ))
            return new Camera(jsonld);
        else
            throw new Error("unimplemented type for AnnotationBody: " + jsonld.type );
            
    }
}
