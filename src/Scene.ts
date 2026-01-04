import {
  Annotation,
  AnnotationPage,
  IManifestoOptions,
  ManifestResource,
  Color,
} from "./internal";
// @ts-ignore
import flattenDeep from "lodash/flattenDeep";

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

  getAnnotationById(searchId: string): Annotation | null {
    for (var anno of this.getContent()) if (anno.id === searchId) return anno;
    return null;
  }

  getBackgroundColor(): Color | null {
    // regular expression intended to match strings like
    // "#FF00FF" -- interpreted as three hexadecimal values
    // in range 0-255 . Not that the \w escape matches digits,
    // upper and lower case latin characters, and underscore
    // currently only supports the form for CSS
    // https://www.w3.org/wiki/CSS/Properties/color/RGB
    // with 6 hexadecimal digits

    var bgc: string | undefined = this.getProperty("backgroundColor");
    if (bgc) return Color.fromCSS(bgc as string);
    else return null;
  }

  // Annotations not rendered as part of the Canvas
  // Have non-painting motivations and are listed in Canvas annotations property, not items property
  getNonContentAnnotations(): Annotation[] {
    const annotationPages = (this.__jsonld.annotations || [])
      .filter(
        (annotationPage) =>
          annotationPage && annotationPage.type === "AnnotationPage"
      )
      .map(
        (annotationPage) => new AnnotationPage(annotationPage, this.options)
      ) as AnnotationPage[];
    if (!annotationPages.length) return [];

    const annotationsNested = annotationPages.map((page) =>
      page.getItems()
    ) as Annotation[][];
    const annotationsFlat = flattenDeep(annotationsNested) as Annotation[];

    return annotationsFlat.map(
      (annotation) => new Annotation(annotation, this.options)
    );
  }
}
