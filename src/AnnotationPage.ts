namespace Manifesto {
    export class AnnotationPage extends ManifestResource implements IAnnotationPage{

        constructor(jsonld: any, options: IManifestoOptions) {
            super(jsonld, options);
        }

        getItems(): IAnnotation[] {
            return this.getProperty('items');
        }
    }
}
