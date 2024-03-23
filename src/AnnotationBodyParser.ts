import {
    AnnotationBody,
    Light
} from "./internal";


let LightTypes:string[] = ["AmbientLight" , "DirectionalLight"];
export  class AnnotationBodyParser {
    static BuildFromJson( jsonld: any ): AnnotationBody {
        if (jsonld.type === "Model")
            return new AnnotationBody(jsonld);
        else if ( LightTypes.includes( jsonld.type ))
            return new Light(jsonld);
        else
            throw new Error("unimplemented type for AnnotationBody: " + jsonld.type );
            
    }
}
