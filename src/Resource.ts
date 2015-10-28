module Manifesto {
    export class Resource extends ManifestResource implements IResource{

        constructor(jsonld: any, options: IManifestoOptions){
            super(jsonld, options);
        }

        getFormat(): ResourceFormat {
            return new ResourceFormat(this.getProperty('format').toLowerCase());
        }

        getType(): ResourceType {
            return new ResourceType(this.getProperty('@type').toLowerCase());
        }

        getWidth(): number {
            return this.getProperty('width');
        }

        getHeight(): number {
            return this.getProperty('height');
        }
    }
}
