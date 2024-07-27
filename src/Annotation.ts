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

  /**
  In spite of its name, this method returns an array of objects, each of which
  represents a potential body annotations
  
  @see{ https://iiif.io/api/cookbook/recipe/0033-choice/ }
  **/
  getBody(): ( AnnotationBody | SpecificResource) [] {
    let bodies: ( AnnotationBody | SpecificResource)[] = [];
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
                bodies = bodies.concat( this.parseBodiesFromItemsList(items) );
            else
                bodies.push( this.parseSingletonBody(bd));
      }
    }

    return bodies;
  }
  
  get Body(){return this.getBody();}

  /**
  auxiliary function to getBody; intended to hande an object that has an element items
  which is a array of annotation- body-like objects. This : https://iiif.io/api/cookbook/recipe/0033-choice/
  seems to be the use case for this
  **/
  private parseBodiesFromItemsList( rawbodies:any ) : ( AnnotationBody | SpecificResource )[] {
    let retVal : ( AnnotationBody | SpecificResource )[] = [];
    for (var bd of [].concat(rawbodies)){
        retVal.push( this.parseSingletonBody(bd));
    }
    return retVal;
  }
  
  /**
  auxiliary function to parseBodiesFromItemsList and getBody, this is the last
  step on recursively going through collections of bodies.
  **/
  private parseSingletonBody( rawbody: any ) : ( AnnotationBody | SpecificResource ){

    if (rawbody.type === "SpecificResource"){
        
        return new SpecificResource( rawbody, this.options);
    }
    else{
        
        return AnnotationBodyParser.BuildFromJson(rawbody, this.options );
    }
  }
  
  /**
  Developer Note: 8 April 2024
  getBody3D function was developed in the early stages of the 3D API Feb-March 2024
  as alternative to the existing Annotation getBody function, but the signature for
  getBody3D was chosen to be a single object instance, not an array.
  
  At this stage, the merging of the 2D API anf the draft 3D API has been completed, so
  3D applications can use the getBody() function to retrieve the body of an Annotation intended 
  to target a scene. For compatibily the return value of the function is still an 
  array.
  
  3D clients using getBody are responsible for choosing the appropriate instance from the
  returned array. In most cases this will be the sole 0th element.
  **/
  getBody3D(): (AnnotationBody | SpecificResource) {
    console.warn("Annotation.getBody3D is deprecated: replace with getBody3D() with getBody()[0]");
    return this.getBody()[0];
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
    	return new SpecificResource(rawTarget, this.options);
    }
    else if ( ["Scene", "Canvas"].includes( rawTarget.type ))
    {
        return rawTarget;
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
  get LookAtLocation():Vector3 {
    var target = this.getTarget() as any;
    
    if (target.isSpecificResource && target.getSelector()?.isPointSelector )
        return target.getSelector().getLocation();
    else
        return new Vector3(0.0,0.0,0.0);
  }
}
