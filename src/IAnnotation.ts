namespace Manifesto {
    export interface IAnnotation extends IManifestResource {
        getMotivation(): AnnotationMotivation | null;
        getOn(): string;
        getResource(): Resource;
    }
}