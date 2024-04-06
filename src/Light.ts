
import { 
    IManifestoOptions, 
    Utils,
    AnnotationBody,
    Color } from "./internal";

export class Light extends AnnotationBody {
  constructor(jsonld?: any, options?: IManifestoOptions) {
    super(jsonld, options);
  }

  isModel:boolean = false;
  
  isLight:boolean = true;

  get isAmbientLight():boolean {
    return (Utils.normaliseType(this.getProperty("type")) === "ambientlight");
  }
  
  get isDirectionalLight():boolean {
    return (Utils.normaliseType(this.getProperty("type")) === "directionallight");
  }
  
  getColor():Color {
    var hexColor = this.getProperty("color");
    if (hexColor) return Color.fromCSS(hexColor);
    
    else return new Color([255, 255, 255]); // white light
  }
  
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
}