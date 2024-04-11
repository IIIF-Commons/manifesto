import {
    Transform
} from "./internal";

export class RotateTransform extends Transform {
    constructor(jsonld?: any ) {
        super( jsonld );
        this.isRotateTransform = true;
        
    }

    
    getRotation() : object {
        var retVal = {};
        for (const attrib of ["x","y","z"]){
            var raw = this.__jsonld[attrib];
            retVal[attrib] = (raw !== undefined)?Number(raw):0.0;
        }
        return retVal;
    }
  
};
