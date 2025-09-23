import {
  JSONLDResource,
  Thumbnail,
  Service,
  Utils,
  Rendering,
  LabelValuePair,
  PropertyValue,
  IManifestoOptions,
  IExternalResource,
} from "./internal";
import {
  ServiceProfile,
  RenderingFormat,
  IIIFResourceType,
} from "@iiif/vocabulary/dist-commonjs";

export class ManifestResource extends JSONLDResource {
  externalResource: IExternalResource;
  options: IManifestoOptions;

  constructor(jsonld: any, options?: IManifestoOptions) {
    super(jsonld);
    this.options = <IManifestoOptions>options;
  }

  getIIIFResourceType(): IIIFResourceType {
    return <IIIFResourceType>Utils.normaliseType(this.getProperty("type"));
  }

  /**
   * returns the PropertyValue which in turn allows a language-specific string
   * encoded in the json as the "label" property
   * @example
   * var label = manifest.getLabel().getValue(); // returns the string for default locale
   *
   * @example
   * var label = manifest.getLabel().getValue(locale); // locale a string , examples
   *                                                   // would be "fr", "en-US",
   **/
  getLabel(): PropertyValue {
    const label: any = this.getProperty("label");

    if (label) {
      return PropertyValue.parse(label, this.options.locale);
    }

    return new PropertyValue([], this.options.locale);
  }

  getSummary(): PropertyValue {
    const summary: any = this.getProperty("summary");

    if (summary) {
      return PropertyValue.parse(summary, this.options.locale);
    }

    return new PropertyValue([], this.options.locale);
  }

  getDefaultLabel(): string | null {
    return this.getLabel().getValue(this.options.locale);
  }

  getMetadata(): LabelValuePair[] {
    const _metadata: any[] = this.getProperty("metadata");

    const metadata: LabelValuePair[] = [];

    if (!_metadata) return metadata;

    for (let i = 0; i < _metadata.length; i++) {
      const item: any = _metadata[i];
      const metadataItem: LabelValuePair = new LabelValuePair(
        this.options.locale
      );
      metadataItem.parse(item);
      metadata.push(metadataItem);
    }

    return metadata;
  }

  getRendering(format: RenderingFormat): Rendering | null {
    const renderings: Rendering[] = this.getRenderings();

    for (let i = 0; i < renderings.length; i++) {
      const rendering: Rendering = renderings[i];

      if (rendering.getFormat() === format) {
        return rendering;
      }
    }

    return null;
  }

  getRenderings(): Rendering[] {
    let rendering;

    // if passing a manifesto-parsed object, use the __jsonld.rendering property,
    // otherwise look for a rendering property
    if (this.__jsonld) {
      rendering = this.__jsonld.rendering;
    } else {
      rendering = (<any>this).rendering;
    }

    const renderings: Rendering[] = [];
    if (!rendering) return renderings;

    // coerce to array
    if (!Array.isArray(rendering)) {
      rendering = [rendering];
    }

    for (let i = 0; i < rendering.length; i++) {
      const r: any = rendering[i];
      renderings.push(new Rendering(r, this.options));
    }

    return renderings;
  }

  getRequiredStatement(): LabelValuePair | null {
    let requiredStatement: LabelValuePair | null = null;

    const _requiredStatement: any = this.getProperty("requiredStatement");

    if (_requiredStatement) {
      requiredStatement = new LabelValuePair(this.options.locale);
      requiredStatement.parse(_requiredStatement);
    }

    return requiredStatement;
  }

  getService(profile: ServiceProfile): Service | null {
    return Utils.getService(this, profile);
  }

  getServices(): Service[] {
    return Utils.getServices(this);
  }

  getThumbnail(): Thumbnail | null {
    let thumbnail: any = this.getProperty("thumbnail");

    if (Array.isArray(thumbnail)) {
      thumbnail = thumbnail[0];
    }

    if (thumbnail) {
      return new Thumbnail(thumbnail, this.options);
    }

    return null;
  }

  isAnnotation(): boolean {
    return this.getIIIFResourceType() === IIIFResourceType.ANNOTATION;
  }

  isCanvas(): boolean {
    return this.getIIIFResourceType() === IIIFResourceType.CANVAS;
  }

  isCollection(): boolean {
    return this.getIIIFResourceType() === IIIFResourceType.COLLECTION;
  }

  isManifest(): boolean {
    return this.getIIIFResourceType() === IIIFResourceType.MANIFEST;
  }

  isRange(): boolean {
    return this.getIIIFResourceType() === IIIFResourceType.RANGE;
  }

  // this different implementation is necessary until such time as the
  // SCENE is added to the @iiif/vocabulary package.
  isScene(): boolean {
    return (
      this.getIIIFResourceType() ===
      <IIIFResourceType>Utils.normaliseType("Scene")
    );
  }

  isSequence(): boolean {
    return this.getIIIFResourceType() === IIIFResourceType.SEQUENCE;
  }
}
