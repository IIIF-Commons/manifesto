namespace Manifesto {
    export class AnnotationList extends JSONLDResource implements IAnnotationList {
        options: IManifestoOptions;
        label: string;
        isLoaded: boolean;

        constructor(label, jsonld?: any, options?: IManifestoOptions) {
            super(jsonld);
            this.label = label;
            this.options = <IManifestoOptions>options;
            if (this.getResources().length) {
              this.isLoaded = true;
            }
        }

        getIIIFResourceType(): IIIFResourceType {
            return new IIIFResourceType(Utils.normaliseType(this.getProperty('type')));
        }

        getLabel(): string {
            return this.label
        }

        getResources(): Annotation[] {
            const resources = this.getProperty('resources') || this.getProperty('items') || [];

            return resources.map(resource => new Annotation(resource, this.options));
        }

        load(): Promise<AnnotationList> {
            return new Promise<AnnotationList>((resolve, reject) => {
                if (this.isLoaded) {
                    resolve(this);
                } else {
                    let id: string = this.__jsonld.id;

                    if (!id) {
                        id = this.__jsonld['@id']
                    }

                    Utils.loadResource(id).then(data => {
                        this.__jsonld = JSON.parse(data);
                        this.context = this.getProperty('context');
                        this.id = this.getProperty('id');
                        this.isLoaded = true;
                        resolve(this);
                    }).catch(reject);
                }
            });
        }
    }
}
