namespace Manifesto {
    export interface IAnnotation extends IManifestResource {
        getBody(): IAnnotationBody[];
        getMotivation(): AnnotationMotivation | null;
        getOn(): string;
        getResource(): Resource;
        getTarget(): string | null;
    }
}