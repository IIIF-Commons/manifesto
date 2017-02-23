namespace Manifesto {
    export class Annotation extends ManifestResource implements IAnnotation{

        constructor(jsonld: any, options: IManifestoOptions) {
            super(jsonld, options);
        }

        getMotivation(): AnnotationMotivation | null {
            const motivation: string = this.getProperty('motivation');

            if (motivation){
                return new AnnotationMotivation(motivation.toLowerCase());
            }

            return null;
        }

        getOn(): string {
            return this.getProperty('on');
        }

        getResource(): Resource {
            return new Resource(this.getProperty('resource'), this.options);
        }
    }
}
