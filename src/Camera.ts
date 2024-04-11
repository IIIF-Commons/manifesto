import { 
    IManifestoOptions, 
    Utils,
    AnnotationBody } from "./internal";

export class Camera extends AnnotationBody {
  constructor(jsonld?: any, options?: IManifestoOptions) {
    super(jsonld, options);
  }



  get isPerspectiveCamera():boolean {
    return (Utils.normaliseType(this.getProperty("type")) === "perpectivecamera");
  }
  
  getFieldOfView(): number | undefined 
  {
    if (this.isPerspectiveCamera){
        var value = this.getProperty("fieldOfView");
        if (value) return value;
        else return 45.0;
    }
    else return undefined;
  }
  
  // TODO implement near and far properties
};
