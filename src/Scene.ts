
import {
  Annotation,
  AnnotationPage,
  IManifestoOptions,
  ManifestResource,
} from "./internal";

export class Scene extends ManifestResource {
  constructor(jsonld: any, options: IManifestoOptions) {
    super(jsonld, options);
  }


  // Presentation API 3.0
  getContent(): Annotation[] {
    const content: Annotation[] = [];

    const items = this.__jsonld.items || this.__jsonld.content;

    if (!items) return content;

    // should be contained in an AnnotationPage
    let annotationPage: AnnotationPage | null = null;

    if (items.length) {
      annotationPage = new AnnotationPage(items[0], this.options);
    }

    if (!annotationPage) {
      return content;
    }

    const annotations: Annotation[] = annotationPage.getItems();

    for (let i = 0; i < annotations.length; i++) {
      const a = annotations[i];
      const annotation = new Annotation(a, this.options);
      content.push(annotation);
    }

    return content;
  }
}