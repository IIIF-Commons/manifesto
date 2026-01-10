import {
  IManifestoOptions,
  Utils,
  AnnotationBody,
  PointSelector,
  SpecificResource,
} from "./internal";

export class Camera extends AnnotationBody {
  constructor(jsonld?: any, options?: IManifestoOptions) {
    super(jsonld, options);
  }

  /**
  @returns full angular size of perspective viewport in vertical direction.
  Angular unit is degrees
  **/
  getFieldOfView(): number | undefined {
    if (this.isPerspectiveCamera()) {
      var value = this.getPropertyFromSelfOrSource("fieldOfView");
      if (value) {
        if (value > 0 && value < 180) return value;
        else {
          console.warn(
            "Camera fieldOfView out of range and will be considered undefined."
          );
          return undefined;
        }
      } else return undefined;
    } else return undefined;
  }

  /**
  @returns full linear size of orthographic viewport in vertical direction.
  linear unit is Scene global unit of measure
  
  Name of this property was originally Height, has been changed
  at this revision to ViewHeight:
  See issues at https://github.com/IIIF/api/issues/2289
  **/
  getViewHeight(): number | undefined {
    if (this.isOrthographicCamera()) {
      // the term viewHeight for the resource Type was suggested
      // in https://github.com/IIIF/api/issues/2289#issuecomment-2161608587
      var value = this.getProperty("viewHeight");
      if (value) return value;
      else return undefined;
    } else return undefined;
  }

  /**
   * @return : if not null, is either a PointSelector, an object
   * with an id matching the id of an Annotation instance, or a
   * SpecificResource with a PointSelector .
   **/
  getLookAt(): object | PointSelector | SpecificResource | null {
    const rawObj = this.getPropertyAsObject("lookAt") ?? null;
    if (rawObj == null) return null;

    const rawType = (rawObj["type"] || rawObj["@type"]) ?? null;
    if (rawType == null) return null;

    if (rawType == "Annotation") return rawObj;
    else if (rawType == "PointSelector") return new PointSelector(rawObj);
    else if (rawType == "SpecificResource") {
      return new SpecificResource(rawObj, this.options);
    } else {
      console.error(`unidentified value of lookAt ${rawType}`);
      return null;
    }
  }

  /**
  @returns the near plane value, i.e. the minimum distance from the camera at 
  which something in the space must exist in order to be viewed by the camera. 
  **/
  getNear(): number | undefined {
    var value = this.getPropertyFromSelfOrSource("near");
    if (value) return value;
    else return undefined;
  }

  /**
  @returns the far plane value, i.e. the maximum distance from the camera at 
  which something in the space must exist in order to be viewed by the camera. 
  **/
  getFar(): number | undefined {
    var value = this.getPropertyFromSelfOrSource("far");
    if (value) return value;
    else return undefined;
  }

  isPerspectiveCamera(): boolean {
    return Utils.normaliseType(this.getType() || "") === "perspectivecamera";
  }

  isOrthographicCamera(): boolean {
    return Utils.normaliseType(this.getType() || "") === "orthographiccamera";
  }
}
