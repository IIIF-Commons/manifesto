
import {
    Transform,
    TransformType
} from "./internal";

export class TranslateTransform extends Transform {
    constructor(jsonld?: any ) {
        super(jsonld );
    }

    getTransformType() : TransformType{
        return TransformType.TRANSLATE_TRANSFORM;
    }
};
