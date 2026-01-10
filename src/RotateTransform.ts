import { Transform } from "./internal";

export class RotateTransform extends Transform {
  constructor(jsonld?: any) {
    super(jsonld);
    this.isRotateTransform = true;
  }

  /**
   * Returns an object with x,y,z attributes whose values are
   * a counter-clockwise rotation in degrees about the fixed coordinate
   * system axes.
   *
   * @returns object
   **/
  getRotation(): object {
    var retVal = {};
    for (const attrib of ["x", "y", "z"]) {
      var raw = this.__jsonld[attrib];
      retVal[attrib] = raw !== undefined ? Number(raw) : 0.0;
    }
    return retVal;
  }
}
