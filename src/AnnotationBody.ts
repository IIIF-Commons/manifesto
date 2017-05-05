namespace Manifesto {
    export class AnnotationBody extends ManifestResource {

        constructor(jsonld?: any, options?: IManifestoOptions){
            super(jsonld, options);
        }

        getFormat(): MediaType | null {
            const format: string = this.getProperty('format');

            if (format) {
                return new MediaType(Utils.getMediaType(format));
            }

            return null;
        }

        getType(): ResourceType | null {
            const type: string = this.getProperty('type');

            if (type) {
                return new ResourceType(type.toLowerCase());
            }

            return null;
        }
    }
}
