import { Annotation, IManifestoOptions, ManifestResource } from "./internal";

export class AnnotationPage extends ManifestResource {
  constructor(jsonld: any, options: IManifestoOptions) {
    super(jsonld, options);
  }

  getItems(): Annotation[] {
    const items: Annotation[] = []
    const rawItems = this.getProperty("items");

    if (!rawItems || !Array.isArray(rawItems)) {
      return items;
    }
    
    for (let i = 0; i < rawItems.length; i++) {
      const annotation = new Annotation(i, this.options);
      items.push(annotation);
    }

    return items
  }
}
