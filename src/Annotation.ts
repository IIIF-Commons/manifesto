module Manifesto {
    export class Annotation extends ManifestResource implements IAnnotation{

        constructor(jsonld: any, options: IManifestoOptions){
            super(jsonld, options);
        }

        getMotivation(): AnnotationMotivation {
            return new AnnotationMotivation(this.getProperty('motivation').toLowerCase());
        }

        getOn(): string {
            return this.getProperty('on');
        }

        getResource(): Resource {
            return new Resource(this.getProperty('resource'), this.options);
        }
    }
}
