import {
  ExternalResourceType,
  MediaType,
} from "@iiif/vocabulary/dist-commonjs";
import {
  AnnotationBodyParser,
  IManifestoOptions,
  ManifestResource,
  Transform,
  TransformParser,
  TransformSet,
  Utils,
  combineTransformsToMatrix,
  combineTransformsToTRS,
} from "./internal";
import { Matrix4 } from "threejs-math";

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

  // Get resource URI ID from either body (for content resource) or source (for specific resource)
  getResourceID(): string | null {
    if (this.isSpecificResource()) {
      const source = this.getSource();
      if (source instanceof AnnotationBody) {
        return source.id;
      } else {
        return source || this.id;
      }
    } else {
      return this.id;
    }
  }

  // Format, Type, Width, and Height are the body properties supported
  // in the code that supports Presentation 3
  getFormat(): MediaType | null {
    const format: string = this.getPropertyFromSelfOrSource("format");

    if (format) {
      return Utils.getMediaType(format);
    }

    return null;
  }

  getType(): ExternalResourceType | null {
    const type: string = this.getPropertyFromSelfOrSource("type");

    if (type) {
      return <ExternalResourceType>Utils.normaliseType(type);
    }

    return null;
  }

  getWidth(): number {
    return this.getProperty("width");
  }

  getHeight(): number {
    return this.getProperty("height");
  }

  getTransform(): Transform[] | null {
    const transform = this.getProperty("transform");

    if (transform) {
      return this.getProperty("transform").map((transform) => {
        return TransformParser.BuildFromJson(transform);
      });
    }

    return null;
  }

  getTransformMatrix(): Matrix4 | null {
    const transform = this.getTransform();

    if (transform && transform.length) {
      return combineTransformsToMatrix(transform);
    }

    return null;
  }

  getTransformSet(): TransformSet | null {
    const transform = this.getTransform();

    if (transform && transform.length) {
      return combineTransformsToTRS(transform);
    }

    return null;
  }

  // Some properties may be on this object or (for SpecificResource) in source object
  getPropertyFromSelfOrSource(prop): any {
    if (
      this.isSpecificResource() &&
      this.getSource() instanceof AnnotationBody
    ) {
      return (this.getSource() as AnnotationBody).getProperty(prop);
    } else {
      return this.getProperty(prop);
    }
  }

  // Get the first source available on the annotation body, if any
  getSource(): AnnotationBody | string | null {
    const source: object = [].concat(this.getPropertyAsObject("source"))[0];

    if (source) {
      if (source["isIRI"] === true) {
        return source["id"];
      } else {
        return AnnotationBodyParser.BuildFromJson(source, this.options);
      }
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
