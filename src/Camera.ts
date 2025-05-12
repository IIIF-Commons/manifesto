import { 
  IManifestoOptions, 
  Utils,
  AnnotationBody,
  PointSelector, 
  SpecificResource } from "./internal";

export class Camera extends AnnotationBody {
  constructor(jsonld?: any, options?: IManifestoOptions) {
    super(jsonld, options);
  }
 
  /**
  @returns full angular size of perspective viewport in vertical direction.
  Angular unit is degrees
  **/
  getFieldOfView(): number | undefined 
  {
    if (this.isPerspectiveCamera()){
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
    if (this.isOrthographicCamera()){
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
  * @return : if not null, is either a PointSelector, an object
  * with an id matching the id of an Annotation instance, or a
  * SpecificResource with a PointSelector .
  **/
  getLookAt() : object | PointSelector | SpecificResource | null {
    let rawObj = this.getPropertyAsObject("lookAt" ) ??  null;
    if ( rawObj == null ) return null;
    
    let rawType = (rawObj["type"] || rawObj["@type"]) ??  null;
    if (rawType == null ) return null;
        
    if (rawType == "Annotation")
      return rawObj;
    else if (rawType == "PointSelector")
      return new PointSelector(rawObj);
    else if (rawType == "SpecificResource") {
      return new SpecificResource(rawObj, this.options);
    }
    else{
      console.error(`unidentified value of lookAt ${rawType}`);
      return null;
    }
  }  
  get LookAt() : object | null {return this.getLookAt();}

  // TODO implement near and far properties

  isPerspectiveCamera(): boolean {
    return (Utils.normaliseType(this.getType() || "") === "perspectivecamera");
  }
  
  isOrthographicCamera(): boolean{
    return (Utils.normaliseType(this.getType() || "") === "orthographiccamera");
  }
};
