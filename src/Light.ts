
import { 
    IManifestoOptions, 
    Utils,
    AnnotationBody,
    Color,
    PointSelector } from "./internal";

export class Light extends AnnotationBody {
  constructor(jsonld?: any, options?: IManifestoOptions) {
    super(jsonld, options);
  }
  
  getColor():Color {
    var hexColor = this.getProperty("color");
    if (hexColor) return Color.fromCSS(hexColor);
    
    else return new Color([255, 255, 255]); // white light
  }
  
  get Color() : Color { return this.getColor(); }
  
  /**
  * The implementation of the intensity is based on 
  * {@link https://github.com/IIIF/3d/blob/main/temp-draft-4.md | temp-draft-4.md }
  * and the example 3D manifests 
  * {@link https://github.com/IIIF/3d/tree/main/manifests/3_lights | lights }
  * on 24 Mar 2024. The intensity property in the manifest is an object
  * with declared type 'Value', a numeric property named 'value' and a
  * property named unit . This implementation will only work with a unit == 'relative'
  * and it will be assumed that a relative unit value of 1.0 corresponds to the
  * brightest light source a rendering engine supports.
  *
  * This code will implement a default intensity of 1.0
  **/
  getIntensity():number {
    var intObject = this.getProperty("intensity");
    if (intObject){
        try{
            if (!(intObject.type === "Value" && intObject.unit==="relative"))
                throw new Error();
            return intObject.value as number;
        } catch(err){
            throw new Error("unable to interpret raw intensity object " + JSON.stringify(intObject));
        }
    }
    else
        return 1.0;
  }
  
  get Intensity() : number { return this.getIntensity(); }
  
  /**
  * As defined in the temp-draft-4.md ( 
  * https://github.com/IIIF/3d/blob/main/temp-draft-4.md#lights ; 12 May 2024)
  * this quantity is the half-angle of the cone of the spotlight. 
  *
  * The inconsistency between this definition of the angle and the definition of
  * fieldOfView for PerspectiveCamera (where the property value defines the full angle) has
  * already been noted: https://github.com/IIIF/api/issues/2284
  *
  * provisional decision is to return undefined in case that this property 
  * is accessed in a light that is not a spotlight
  *
  *
  * @returns number
  
  **/
  getAngle(): number|undefined {
    if (this.isSpotLight()){
        return Number(this.getProperty("angle") );
    }
    else{
        return undefined;
    }  
  }
  
  get Angle(): number|undefined { return this.getAngle();}
  
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
    throw new Error(`unidentified value of lookAt ${rawType}`);
  }  
  get LookAt() : object | null {return this.getLookAt();}

  isAmbientLight(): boolean {
    return (Utils.normaliseType(this.getType() || "") === "ambientlight");
  }
  
  isDirectionalLight(): boolean {
    return (Utils.normaliseType(this.getType() || "") === "directionallight");
  }

  isPointLight(): boolean {
    return (Utils.normaliseType(this.getType() || "") === "pointlight");
  }
  
  isSpotLight(): boolean {
    return (Utils.normaliseType(this.getType() || "") === "spotlight");
  }
}
