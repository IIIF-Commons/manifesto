import { AnnotationMotivation } from "@iiif/vocabulary/dist-commonjs";
import {
  AnnotationBody,
  AnnotationBodyParser,
  IManifestoOptions,
  ManifestResource,
  Resource,
  SpecificResource
} from "./internal";

import { Vector3 } from "threejs-math";

export class Annotation extends ManifestResource {
  constructor(jsonld: any, options: IManifestoOptions) {
    super(jsonld, options);
  }


  getBody(): ( AnnotationBody | SpecificResource) [] {
    const bodies: ( AnnotationBody | SpecificResource)[] = [];
    const body: any = this.getProperty("body");
    
    // the following is intended to handle the following cases for
    /// the raw json of the body property of __jsonld
    // -- body is an array, each element of which is parsed
    // == body is an object with property items, each item is parsed
    // -- body is parsed
    if (body) {
      for (var bd  of [].concat(body)){
            var items = (bd as any).items;        
            if (items)
                bodies.concat( this.parseBodiesFromItemsList(items) );
            else
                bodies.push( this.parseSingletonBody(bd));
      }
    }

    return bodies;
  }

  parseBodiesFromItemsList( rawbodies:any ) : ( AnnotationBody | SpecificResource )[] {
    var retVal : ( AnnotationBody | SpecificResource )[] = [];
    for (var bd of [].concat(rawbodies)){
        retVal.push( this.parseSingletonBody(bd));
    }
    return retVal;
  }
  
  parseSingletonBody( rawbody: any ) : ( AnnotationBody | SpecificResource ){
    
    if (rawbody.type === "SpecificResource"){
        
        return new SpecificResource( rawbody, this.options);
    }
    else{
        
        return AnnotationBodyParser.BuildFromJson(rawbody, this.options );
    }
  }
  
  getBody3D(): (AnnotationBody | SpecificResource)[] {
    console.warn("Annotation.getBody3D is deprecated");
    return this.getBody();
  }
  
  
  getMotivation(): AnnotationMotivation | null {
    const motivation: string = this.getProperty("motivation");

    if (motivation) {
      //const key: string | undefined = Object.keys(AnnotationMotivationEnum).find(k => AnnotationMotivationEnum[k] === motivation);
      return motivation as AnnotationMotivation;
    }

    return null;
  }

  // open annotation
  getOn(): string {
    return this.getProperty("on");
  }

  getTarget(): any  {
    const rawTarget = this.getPropertyAsObject("target");
    if (rawTarget.isIRI) return rawTarget;
    
    if ( rawTarget.type && rawTarget.type == "SpecificResource" )
    {
    	return new SpecificResource(rawTarget);
    }
    else
    {
        throw new Error("unknown target specified");
    }
  }
  
  get Target(): any {return this. getTarget();}

  getResource(): Resource {
    return new Resource(this.getProperty("resource"), this.options);
  }
  
  /**
  *    A 3D point coordinate object for the location of an Annotation
  *    to satisfy the requirements of the lookAt property of camera and
  *    spotlight resources, according to the draft v4 API as of April 1 2024
  *   
  *    Is the position of the point for a target which is a SpecificResource with
  *    a PointSelector
  *    Otherwise, for example when the annotation target is an entire Scene, the
  *    location for lookAt is the origin (0,0,0)
  **/
  get lookAtLocation():Vector3 {
    var target = this.getTarget() as any;
    
    if (target.isPointSelector )
        return target.getLocation();
    else
        return new Vector3(0.0,0.0,0.0);
  }
}
