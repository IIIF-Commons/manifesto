import {
    JSONLDResource
} from "./internal";

export declare enum TransformType {
	TRANSLATE_TRANSFORM = "translation",
	ROTATE_TRANSFORM = "rotation",
	SCALE_TRANSFORM= "scale"
}

export abstract class Transform extends JSONLDResource {
    
    abstract getTransformType() : TransformType;
}

