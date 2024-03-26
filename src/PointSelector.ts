import {

  JSONLDResource,

} from "./internal";

import { Vector3 } from "threejs-math";


export class PointSelector extends JSONLDResource  {

  isPointSelector : boolean = true;

  constructor(jsonld: any ) {
    super(jsonld);
  }
  
  getLocation() : Vector3 {
    return new Vector3(this.__jsonld.x, this.__jsonld.y, this.__jsonld.z );
    /*
  	return { x:Number(this.__jsonld.x),
  	         y:Number(this.__jsonld.y),
  	         z:Number(this.__jsonld.z)
  	       }
  	*/
  }
}
