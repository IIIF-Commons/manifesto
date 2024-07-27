import { 
    IManifestoOptions, 
    Utils,
    AnnotationBody,
    PointSelector } from "./internal";

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
  
  get isOrthographicCamera():boolean{
    return (Utils.normaliseType(this.getProperty("type")) === "orthographiccamera");
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
  
  /**
  @returns full linear size of orthographic viewport in vertical direction.
  linear unit is Scene global unit of measure
  
  Name of this property was originally Height, has been changed
  at this revision to ViewHeight:
  See issues at https://github.com/IIIF/api/issues/2289
  **/
  getViewHeight(): number | undefined 
  {
    if (this.isOrthographicCamera){
        // the term viewHeight for the resource Type was suggested
        // in https://github.com/IIIF/api/issues/2289#issuecomment-2161608587
        var value = this.getProperty("viewHeight");
        if (value) return value;
        else return undefined;
    }
    else return undefined;
  }
  
  get ViewHeight(): number | undefined {return this.getViewHeight();}
  
  
  /**
  * @return : if not null, is either a PointSelector, or an object
  * with an id matching the id of an Annotation instance.
  **/
  getLookAt() : object | PointSelector | null {
    let rawObj = this.getPropertyAsObject("lookAt" )
    let rawType = (rawObj["type"] || rawObj["@type"])
    if (rawType == "Annotation"){
        return rawObj;
    }
    if (rawType == "PointSelector"){
        return new PointSelector(rawObj);
    }
    throw new Error('unidentified value of lookAt ${rawType}');
  }  
  get LookAt() : object | null {return this.getLookAt();}

  // TODO implement near and far properties
};
