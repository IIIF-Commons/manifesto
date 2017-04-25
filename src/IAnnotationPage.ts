namespace Manifesto {
    export interface IAnnotationPage extends IManifestResource {
        getItems(): IAnnotation[];
    }
}