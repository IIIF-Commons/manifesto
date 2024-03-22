
import {
  Annotation,
  AnnotationPage,
  IManifestoOptions,
  ManifestResource,
  Color
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
    };

    return content;
  };

 
  getBackgroundColor() : Color | undefined {
    // regular expression intended to match strings like
    // "#FF00FF" -- interpreted as three hexadecimal values
    // in range 0-255 . Not that the \w escape matches digits,
    // upper and lower case latin characters, and underscore
    // currently only supports the form for CSS
    // https://www.w3.org/wiki/CSS/Properties/color/RGB
    // with 6 hexadecimal digits
    
    var bgc: string | undefined  = this.getProperty("backgroundColor");
    if (bgc)
        return Color.fromCSS( bgc as string );
    else
        return undefined;
  };

}