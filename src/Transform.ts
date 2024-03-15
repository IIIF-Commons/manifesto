import {
    JSONLDResource
} from "./internal";


export  abstract class Transform extends JSONLDResource {
    
    constructor(jsonld?: any ) {
        super(jsonld );
        this.isTransform = true;
    }
    
    isTransform : boolean = true;
    isRotateTransform : boolean | undefined;
    isScaleTransform  : boolean | undefined;
    isTranslateTransform : boolean | undefined;
}

