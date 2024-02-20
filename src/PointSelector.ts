import {

  JSONLDResource,

} from "./internal";


export class PointSelector extends JSONLDResource  {

  isPointSelector : boolean = true;

  constructor(jsonld: any ) {
    super(jsonld);
  }
  
  getLocation() : any {
  	return { x:Number(this.__jsonld.x),
  	         y:Number(this.__jsonld.y),
  	         z:Number(this.__jsonld.z)
  	       }
  }
}
