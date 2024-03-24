import { AnnotationMotivation } from "@iiif/vocabulary/dist-commonjs";
import {
  AnnotationBody,
  AnnotationBodyParser,
  IManifestoOptions,
  ManifestResource,
  Resource,
  SpecificResource,
  SpecificResourceForTarget,
  SpecificResourceForBody
} from "./internal";

export class Annotation extends ManifestResource {
  constructor(jsonld: any, options: IManifestoOptions) {
    super(jsonld, options);
  }


  getBody(): AnnotationBody[] {
    const bodies: AnnotationBody[] = [];
    const body: any = this.getProperty("body");

    // todo: make this a generic "property that can be an object or array enumerator" util
    if (body) {
      if (Array.isArray(body)) {
        for (let i = 0; i < body.length; i++) {
          const b: any = body[i];
          if (b.items) {
            for (let i = 0; i < b.items.length; i++) {
              // todo: don't ignore that it's a choice. maybe add isChoice() to IAnnotationBody?
              const c: any = b.items[i];
              bodies.push(new AnnotationBody(c, this.options));
            }
          } else {
            bodies.push(new AnnotationBody(b, this.options));
          }
        }
      } else if (body.items) {
        for (let i = 0; i < body.items.length; i++) {
          const b: any = body.items[i];
          bodies.push(new AnnotationBody(b, this.options));
        }
      } else {
        bodies.push(new AnnotationBody(body, this.options));
      }
    }

    return bodies;
  }

  getBody3D(): AnnotationBody | SpecificResource {
    const bodies = [].concat( this.getProperty("body") );
    if (bodies.length != 1) throw new Error("0 or multiple body items not supported");
    const raw_body : any = bodies[0];

    if (raw_body.type && raw_body.type === "SpecificResource")
        return new SpecificResourceForBody(raw_body);
    else
        return AnnotationBodyParser.BuildFromJson(raw_body);
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

  getTarget(): string | SpecificResource  {
    const rawTarget = this.getProperty("target");
    if ( rawTarget.type && rawTarget.type == "SpecificResource" )
    {
    	//console.log("constructing SpecificResource "+ rawTarget);
    	return new SpecificResourceForTarget(rawTarget);
    }
    else if (typeof(rawTarget) === 'string')
    {
    	//console.log("returning string target");
    	return rawTarget;
    }
    else
    {
        throw new Error("unknown target specified");
    }
  }

  getResource(): Resource {
    return new Resource(this.getProperty("resource"), this.options);
  }
}
