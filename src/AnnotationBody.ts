import {
  ExternalResourceType,
  MediaType,
} from "@iiif/vocabulary/dist-commonjs";
import { IManifestoOptions, ManifestResource, Utils } from "./internal";

export class AnnotationBody extends ManifestResource {
  constructor(jsonld?: any, options?: IManifestoOptions) {
    super(jsonld, options);
  }

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

  getValue(): string | null {
    return this.getProperty("value");
  }

  getLanguage(): string | null {
    return this.getProperty("language");
  }

  getWidth(): number {
    return this.getProperty("width");
  }

  getHeight(): number {
    return this.getProperty("height");
  }
}
