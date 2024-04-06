import {
  ExternalResourceType,
  MediaType
} from "@iiif/vocabulary/dist-commonjs";
import { IManifestoOptions, ManifestResource, Utils } from "./internal";

 
/**
With the 3D extensions to the IIIF Presentation API the name of this
class is misleading, but for now is being retained for the sake backward
compatibility with earlier manifesto code and tests.

The 3D extensions allow that the body property of an annotation can be 
a light, camera, or model, or a SpecificResource object wrapping a light, camera,
or model.
**/
export class AnnotationBody extends ManifestResource {
  constructor(jsonld?: any, options?: IManifestoOptions) {
    super(jsonld, options);
  }

  // Format, Type, Width, and Height are the body properties supported
  // in the code that supports Presentation 3
  getFormat(): MediaType | null {
    const format: string = this.getProperty("format");
 
    if (format) {
      return Utils.getMediaType(format);
    }

    return null;
  }

  getType(): ExternalResourceType | null {
    const type: string = this.getProperty("type");

    if (type) {
      return <ExternalResourceType>(
        Utils.normaliseType(this.getProperty("type"))
      );
    }

    return null;
  }

  getWidth(): number {
    return this.getProperty("width");
  }

  getHeight(): number {
    return this.getProperty("height");
  }
  
  
  
  
  // following class members were added to support 3D and mixed 2D/3D content
  // these boolean switches will be appropriately set when the manifest json is parsed
  
  isModel : boolean = true;
  
  isLight : boolean = false;
  
  isCamera : boolean = false;

}
