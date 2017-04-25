namespace Manifesto {
    export class Annotation extends ManifestResource implements IAnnotation{

        constructor(jsonld: any, options: IManifestoOptions) {
            super(jsonld, options);
        }

        getBody(): IAnnotationBody[] {
            
            const bodies: AnnotationBody[] = [];
            const body: any = this.getProperty('body');

            if (body) {
                if (body.items) {
                    for (var i = 0; i < body.items.length; i++) {
                        const b: any = body.items[i];
                        bodies.push(b);
                    }
                } else {
                    bodies.push(new AnnotationBody(body));
                }
            }

            return bodies;
        }

        getMotivation(): AnnotationMotivation | null {
            const motivation: string = this.getProperty('motivation');

            if (motivation) {
                return new AnnotationMotivation(motivation.toLowerCase());
            }

            return null;
        }

        // open annotation
        getOn(): string {
            return this.getProperty('on');
        }

        getTarget(): string | null {
            return this.getProperty('target');
        }

        getResource(): Resource {
            return new Resource(this.getProperty('resource'), this.options);
        }
    }
}
