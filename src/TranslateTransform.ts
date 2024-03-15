
import {
    Transform
} from "./internal";

export class TranslateTransform extends Transform {
    constructor(jsonld?: any ) {
        super(jsonld );
        this.isTranslateTransform = true;
    }
    
    getTranslation() : object {
        var retVal = {};
        for (const attrib of ["x","y","z"]){
            var raw = this.__jsonld[attrib];
            retVal[attrib] = (raw !== undefined)?Number(raw):0.0;
        }
        return retVal;
    }
  
};
