
import { 
    IManifestoOptions, 
    Utils,
    AnnotationBody,
    Color } from "./internal";

export class Light extends AnnotationBody {
  constructor(jsonld?: any, options?: IManifestoOptions) {
    super(jsonld, options);
  }

  get isModel():boolean  { return false; }
  
  get isLight():boolean  { return true; }

  get isAmbientLight():boolean {
    return (Utils.normaliseType(this.getProperty("type")) === "ambientlight");
  }
  
  get isDirectionalLight():boolean {
    return (Utils.normaliseType(this.getProperty("type")) === "directionallight");
  }
  
  getColor():Color {
    var hexColor = this.getProperty("color");
    if (hexColor) return Color.fromCSS(hexColor);
    
    else return new Color([BigInt(255),BigInt(255),BigInt(255)]); // white light
  }
}