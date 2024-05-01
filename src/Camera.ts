import { 
    IManifestoOptions, 
    Utils,
    AnnotationBody } from "./internal";

export class Camera extends AnnotationBody {
  constructor(jsonld?: any, options?: IManifestoOptions) {
    super(jsonld, options);
    this.isModel  = false;
    this.isLight  = false;
    this.isCamera  = true;
  }



  get isPerspectiveCamera():boolean {
    return (Utils.normaliseType(this.getProperty("type")) === "perspectivecamera");
  }
  
  /**
  @returns full angular size of perspective viewport in vertical direction.
  Angular unit is degrees
  **/
  getFieldOfView(): number | undefined 
  {
    if (this.isPerspectiveCamera){
        var value = this.getProperty("fieldOfView");
        if (value) return value;
        else return 45.0;
    }
    else return undefined;
  }
  /**
  Full angular size of perspective viewport in vertical direction.
  Angular unit is degrees
  **/
  get FieldOfView(): number | undefined { return this.getFieldOfView();}  
  
  getLookAt() : object | null {
    return this.getPropertyAsObject("lookAt" )
  }  
  get LookAt() : object | null {return this.getLookAt();}

  // TODO implement near and far properties
};
