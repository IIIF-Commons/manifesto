import { JSONLDResource } from "./internal";

import { Vector3 } from "threejs-math";

export class PointSelector extends JSONLDResource {
  isPointSelector: boolean = true;

  constructor(jsonld: any) {
    super(jsonld);
  }

  /**
  @returns the 3D coordinates of the point as a Vector3 instance.
  **/
  getLocation(): Vector3 {
    return new Vector3(this.__jsonld.x, this.__jsonld.y, this.__jsonld.z);
  }
}
