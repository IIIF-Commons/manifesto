import { RenderingFormat } from "@iiif/vocabulary/dist-commonjs";
import { IManifestoOptions, ManifestResource } from "./internal";

export class Rendering extends ManifestResource {
  constructor(jsonld?: any, options?: IManifestoOptions) {
    super(jsonld, options);
  }

  getFormat(): RenderingFormat {
    return this.getProperty("format");
  }
}
