namespace Manifesto {
    export class AnnotationBody extends ManifestResource {

        constructor(jsonld?: any, options?: IManifestoOptions){
            super(jsonld, options);
        }

        getFormat(): ResourceFormat | null {
            const format: string = this.getProperty('format');

            if (format) {
                return new ResourceFormat(Utils.getResourceFormat(format));
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
