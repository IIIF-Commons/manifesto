import {
  ExternalResourceType,
  MediaType
} from "@iiif/vocabulary/dist-commonjs";
import { AnnotationBodyParser, IManifestoOptions, ManifestResource, Transform, TransformParser, Utils } from "./internal";

 
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
    const type: string = this.getPropertyFromSelfOrSource("type");

    if (type) {
      return <ExternalResourceType>(
        Utils.normaliseType(type)
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

  getTransform(): Transform[] {
    return this.getProperty("transform").map((transform) => {
      return TransformParser.BuildFromJson(transform);
    });
  }

  // Some properties may be on this object or (for SpecificResource) in source object
  getPropertyFromSelfOrSource(prop): any {
    return this.isSpecificResource() ? this.getSource()?.getProperty(prop) : this.getProperty(prop);
  }

  // Get the first source available on the annotation body, if any
  getSource(): AnnotationBody | null {
    const source: object = ([].concat(this.getPropertyAsObject("source")))[0];

    if (source) {
      return AnnotationBodyParser.BuildFromJson(source, this.options);
    }

    return null;
  }

  isModel(): boolean {
    return this.getType() === ExternalResourceType.MODEL;
  }
  
  isSpecificResource(): boolean {
    return this.getProperty("type") === "SpecificResource";
  }

}
