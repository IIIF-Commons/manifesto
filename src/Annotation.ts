namespace Manifesto {
    export class Annotation extends ManifestResource implements IAnnotation{

        constructor(jsonld: any, options: IManifestoOptions) {
            super(jsonld, options);
        }

        getBody(): IAnnotationBody[] {

            const bodies: AnnotationBody[] = [];
            const body: any = this.getProperty('body');

            // todo: make this a generic "property that can be an object or array enumerator" util
            if (body) {
                if (Array.isArray(body)) {
                    for (let i = 0; i < body.length; i++) {
                        const b: any = body[i];
                        if (b.items) {
                            for (let i = 0; i < b.items.length; i++) { // todo: don't ignore that it's a choice. maybe add isChoice() to IAnnotationBody?
                                const c: any = b.items[i];
                                bodies.push(new AnnotationBody(c, this.options));
                            }
                        } else {
                            bodies.push(new AnnotationBody(b, this.options));
                        }
                    }
                } else if (body.items) {
                    for (let i = 0; i < body.items.length; i++) {
                        const b: any = body.items[i];
                        bodies.push(new AnnotationBody(b, this.options));
                    }
                } else {
                    bodies.push(new AnnotationBody(body, this.options));
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
            return new Resource(
              this.getProperty('resource') || this.getProperty('body'), this.options);
        }

        getImageService(): IService | null {
            return this.getBody().reduce((finalImageService: IService | null, body: AnnotationBody) => {
                return finalImageService || body.getServices().reduce((imageService: IService | null, service : IService) => {
                    return imageService || (
                        Manifesto.Utils.isImageProfile(service.getProfile()) ? service : null
                    );
                }, finalImageService);
            }, null);
        }
    }
}
