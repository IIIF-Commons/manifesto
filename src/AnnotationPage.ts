import { Annotation, IManifestoOptions, ManifestResource } from "./internal";

export class AnnotationPage extends ManifestResource {
  constructor(jsonld: any, options: IManifestoOptions) {
    super(jsonld, options);
  }

  getItems(): Annotation[] {
    return this.getProperty("items");
  }
}
