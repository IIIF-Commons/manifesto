import {
    Transform,
    TransformType
} from "./internal";

export class ScaleTransform extends Transform {
    constructor(jsonld?: any ) {
        super(jsonld );
    }

    getTransformType() : TransformType{
        return TransformType.SCALE_TRANSFORM;
    }
    
    getScale() : object {
        var retVal = {};
        for (const attrib of ["x","y","z"]){
            var raw = this.__jsonld[attrib];
            
            // note that default scaling is 1.0
            retVal[attrib] = (raw !== undefined)?Number(raw):1.0;
        }
        return retVal;
    }
  
};
