import {
    JSONLDResource
} from "./internal";

export enum TransformType {
	TRANSLATE_TRANSFORM = "translation",
	ROTATE_TRANSFORM = "rotation",
	SCALE_TRANSFORM= "scale"
}

export  abstract class Transform extends JSONLDResource {
    
    constructor(jsonld?: any ) {
        super(jsonld );
    }
    
    
    abstract getTransformType() : TransformType;
    
    isTranslateTransform():boolean{
        return this.getTransformType() === TransformType.TRANSLATE_TRANSFORM;
    }
    
    isRotateTransform():boolean{
        return this.getTransformType() === TransformType.ROTATE_TRANSFORM;
    }
    
    isScaleTransform():boolean{
        return this.getTransformType() === TransformType.SCALE_TRANSFORM;
    }

}

