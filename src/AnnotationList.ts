import { IIIFResourceType } from "@iiif/vocabulary/dist-commonjs";
import {
  Annotation,
  IManifestoOptions,
  JSONLDResource,
  Utils,
} from "./internal";

export class AnnotationList extends JSONLDResource {
  options: IManifestoOptions;
  label: string;
  isLoaded: boolean;

  constructor(label, jsonld?: any, options?: IManifestoOptions) {
    super(jsonld);
    this.label = label;
    this.options = <IManifestoOptions>options;
  }

  getIIIFResourceType(): IIIFResourceType {
    return <IIIFResourceType>Utils.normaliseType(this.getProperty("type"));
  }

  getLabel(): string {
    return this.label;
  }

  getResources(): Annotation[] {
    const resources = this.getProperty("resources");
    return resources.map((resource) => new Annotation(resource, this.options));
  }

  load(): Promise<AnnotationList> {
    return new Promise<AnnotationList>((resolve, reject) => {
      if (this.isLoaded) {
        resolve(this);
      } else {
        let id: string = this.__jsonld.id;

        if (!id) {
          id = this.__jsonld["@id"];
        }

        Utils.loadManifest(id)
          .then((data) => {
            this.__jsonld = data;
            this.context = this.getProperty("context");
            this.id = this.getProperty("id");
            this.isLoaded = true;
            resolve(this);
          })
          .catch(reject);
      }
    });
  }
}
