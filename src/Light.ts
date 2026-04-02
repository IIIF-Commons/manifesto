import {
  IManifestoOptions,
  Utils,
  AnnotationBody,
  Color,
  PointSelector,
} from "./internal";

export class Light extends AnnotationBody {
  constructor(jsonld?: any, options?: IManifestoOptions) {
    super(jsonld, options);
  }

  getColor(): Color {
    var hexColor = this.getPropertyFromSelfOrSource("color");
    if (hexColor) return Color.fromCSS(hexColor);
    else return new Color([255, 255, 255]); // white light
  }

  get Color(): Color {
    return this.getColor();
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
  getIntensity(): number {
    var intObject = this.getPropertyFromSelfOrSource("intensity");
    if (intObject) {
      try {
        if (!(intObject.type === "Value" && intObject.unit === "relative"))
          throw new Error();
        return intObject.value as number;
      } catch (err) {
        throw new Error(
          "unable to interpret raw intensity object " +
            JSON.stringify(intObject)
        );
      }
    } else return 1.0;
  }

  get Intensity(): number {
    return this.getIntensity();
  }

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
  getAngle(): number | undefined {
    if (this.isSpotLight()) {
      return Number(this.getPropertyFromSelfOrSource("angle"));
    } else {
      return undefined;
    }
  }

  get Angle(): number | undefined {
    return this.getAngle();
  }

  /**
  * As defined in the draft spec:
  * https://preview.iiif.io/api/prezi-4/presentation/4.0/model/#profile
  * this string is a schema or named set of functionality that can further 
  * clarify the type and/or format of an external resource or service. 
  *
  * provisional decision is to return undefined in case that this property 
  * is accessed in a light that is not an image-based light
  *
  * @returns string
  
  **/
  getProfile(): string | undefined {
    if (this.isImageBasedLight()) {
      let rawObj = this.getPropertyFromSelfOrSource("environmentMap") ?? null;
      if (rawObj == null) return undefined;

      return String(rawObj["profile"]);
    } else {
      return undefined;
    }
  }

  get Profile(): string | undefined {
    return this.getProfile();
  }

  /**
  * As referenced in the draft spec:
  * https://preview.iiif.io/api/prezi-4/presentation/4.0/model/#environmentMap
  * this string is a the format of the environment map image. Function is named
  * to differentiate from the base getFormat which won't work in this case. 
  *
  * provisional decision is to return undefined in case that this property 
  * is accessed in a light that is not an image-based light
  *
  * @returns string
  
  **/
  getEnvMapFormat(): string | undefined {
    if (this.isImageBasedLight()) {
      let rawObj = this.getPropertyFromSelfOrSource("environmentMap") ?? null;
      if (rawObj == null) return undefined;

      return String(rawObj["format"]);
    } else {
      return undefined;
    }
  }

  get EnvMapFormat(): string | undefined {
    return this.getEnvMapFormat();
  }

  /**
   * @return : if not null, is either a PointSelector, or an object
   * with an id matching the id of an Annotation instance.
   **/
  getLookAt(): object | PointSelector | null {
    let rawObj = this.getPropertyAsObject("lookAt") ?? null;
    if (rawObj == null) return null;

    let rawType = (rawObj["type"] || rawObj["@type"]) ?? null;
    if (rawType == null) return null;

    if (rawType == "Annotation") {
      return rawObj;
    }
    if (rawType == "PointSelector") {
      return new PointSelector(rawObj);
    }
    throw new Error(`unidentified value of lookAt ${rawType}`);
  }
  get LookAt(): object | null {
    return this.getLookAt();
  }

  isAmbientLight(): boolean {
    return Utils.normaliseType(this.getType() || "") === "ambientlight";
  }

  isDirectionalLight(): boolean {
    return Utils.normaliseType(this.getType() || "") === "directionallight";
  }

  isPointLight(): boolean {
    return Utils.normaliseType(this.getType() || "") === "pointlight";
  }

  isSpotLight(): boolean {
    return Utils.normaliseType(this.getType() || "") === "spotlight";
  }

  isImageBasedLight(): boolean {
    return Utils.normaliseType(this.getType() || "") === "imagebasedlight";
  }
}
