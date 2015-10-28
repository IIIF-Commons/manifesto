module Manifesto {
    export interface IAnnotation extends IJSONLDResource {
        getMotivation(): AnnotationMotivation;
        getOn(): string;
        getResource(): Resource;
    }
}