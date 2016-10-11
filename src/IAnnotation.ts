module Manifesto {
    export interface IAnnotation extends IManifestResource {
        getMotivation(): AnnotationMotivation;
        getOn(): string;
        getResource(): Resource;
    }
}