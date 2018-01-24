namespace Manifesto {
    export class Canvas extends Resource implements ICanvas{

        public ranges: IRange[];

        constructor(jsonld?: any, options?: IManifestoOptions){
            super(jsonld, options);
        }

        // http://iiif.io/api/image/2.1/#canonical-uri-syntax
        getCanonicalImageUri(w?: number): string {
            let id: string | null = null;
            const region: string = 'full';
            const rotation: number = 0;
            let quality: string = 'default';
            let width: number | undefined = w;
            let size: string;

            // if an info.json has been loaded
            if (this.externalResource && this.externalResource.data && this.externalResource.data['@id']) {
                id = this.externalResource.data['@id'];

                if (!width) {
                    width = (<IExternalImageResourceData>this.externalResource.data).width;
                }

                if (this.externalResource.data['@context']) {
                    if (this.externalResource.data['@context'].indexOf('/1.0/context.json') > -1 ||
                        this.externalResource.data['@context'].indexOf('/1.1/context.json') > -1 ||
                        this.externalResource.data['@context'].indexOf('/1/context.json') > -1 ) {
                        quality = 'native';
                    }
                }

            } else {
                // info.json hasn't been loaded yet
                const images: IAnnotation[] = this.getImages();

                if (images && images.length) {
                    const firstImage: IAnnotation = images[0];
                    const resource: IResource = firstImage.getResource();
                    const services: IService[] = resource.getServices();

                    if (!width) {
                        width = resource.getWidth();
                    }

                    if (services.length) {
                        const service: IService = services[0];
                        id = service.id;
                        quality = Utils.getImageQuality(service.getProfile());
                    } else if (width === resource.getWidth()) {
                        // if the passed width is the same as the resource width
                        // i.e. not looking for a thumbnail
                        // return the full size image.
                        // used for download options when loading static images.
                        return resource.id;
                    }
                }

                // todo: should this be moved to getThumbUri?
                if (!id) {

                    const thumbnail: any = this.getProperty('thumbnail');

                    if (thumbnail) {
                        if (typeof(thumbnail) === 'string') {
                            return thumbnail;
                        } else {
                            return thumbnail['@id'];
                        }
                    }

                }
            }

            size = width + ',';

            // trim off trailing '/'
            if (id && id.endsWith('/')) {
                id = id.substr(0, id.length - 1);
            }

            return [id, region, size, rotation, quality + '.jpg'].join('/');
        }

        getMaxDimensions(): Size | null {

            let maxDimensions: Size | null = null;
            let profile: any;

            if (this.externalResource.data && this.externalResource.data.profile) {
                profile = this.externalResource.data.profile;

                if (Array.isArray(profile)) {
                    profile = profile.en().where(p => p["maxWidth" || "maxwidth"]).first();

                    if (profile) {
                        maxDimensions = new Size(profile.maxWidth, profile.maxHeight ? profile.maxHeight : profile.maxWidth);
                    }
                }
            }

            return maxDimensions;
        }

        // Presentation API 3.0
        getContent(): IAnnotation[] {

            const content: IAnnotation[] = [];

            const items = this.__jsonld.items || this.__jsonld.content;

            if (!items) return content;

            // should be contained in an AnnotationPage
            let annotationPage: AnnotationPage | null = null;

            if (items.length) {
                annotationPage = new AnnotationPage(items[0], this.options);
            }

            if (!annotationPage) {
                return content;
            }

            const annotations: IAnnotation[] = annotationPage.getItems();

            for (let i = 0; i < annotations.length; i++) {
                const a = annotations[i];
                const annotation = new Annotation(a, this.options);
                content.push(annotation);
            }

            return content;
        }

        getDuration(): number | null {
            return this.getProperty('duration');
        }

        getP3Images(): IAnnotation[] {
          return this.getContent().filter((annotation: IAnnotation) => {
            // Grab all bodies
            const bodies: IAnnotationBody[] = annotation.getBody();
            // No bodies, definitely not an image.
            if (!bodies.length) {
              return false;
            }
            // Reduce all the bodies into a boolean
            return bodies.reduce((hasImage: boolean, body: IAnnotationBody) : boolean => {
              // Check for the image type in the body
              return hasImage || body.getIIIFResourceType().toString() === Manifesto.IIIFResourceType.IMAGE.toString();
            }, false);
          });
        }

        getImages(): IAnnotation[] {

            const iterable: any[] = this.getProperty('images', []);

            return iterable.reduce(
              (list, annotation) => {
                if (annotation.type === 'AnnotationPage') {
                  return annotation.items.reduce((list, annotation) => {
                    list.push(new Annotation(annotation, this.options));
                    return list;
                  }, list);
                }
                list.push(new Annotation(annotation, this.options));

                return list;
              }, []
            );
        }

        getIndex(): number {
            return this.getProperty('index');
        }

        getAnnotations(): Promise<AnnotationList[]> {
            const annotationProperty = this.getProperty('annotations');
            if (!annotationProperty) {
              return Promise.resolve([]);
            }

            const annotations = Array.isArray(annotationProperty) ?
              annotationProperty :
              [annotationProperty];

            const annotationPromises: Promise<AnnotationList>[] = annotations
              .map((annotationList, i) => (
                (new AnnotationList(annotationList.label || `Annotation list ${i}`, annotationList, this.options))
              ))
              .map(annotationList => annotationList.load());

            return Promise.all(annotationPromises);
        }

        getOtherContent(): Promise<AnnotationList[]> {
            const otherContent = Array.isArray(this.getProperty('otherContent')) ?
                this.getProperty('otherContent') :
                [this.getProperty('otherContent')];

            const canonicalComparison = (typeA, typeB): boolean => {
                if (typeof typeA !== 'string' || typeof typeB !== 'string') {
                    return false;
                }
                return typeA.toLowerCase() === typeA.toLowerCase();
            };

            const otherPromises: Promise<AnnotationList>[] = otherContent
                .filter(otherContent => otherContent && canonicalComparison(otherContent['@type'], 'sc:AnnotationList'))
                .map((annotationList, i) => (
                    (new AnnotationList(annotationList['label'] || `Annotation list ${i}`, annotationList, this.options))
                ))
                .map(annotationList => annotationList.load());

            return Promise.all(otherPromises);
        }

        // Prefer thumbnail service to image service if supplied and if
        // the thumbnail service can provide a satisfactory size +/- x pixels.
        // this is used to get thumb URIs *before* the info.json has been requested
        // and populate thumbnails in a viewer.
        // the publisher may also provide pre-computed fixed-size thumbs for better performance.
        //getThumbUri(width: number): string {
        //
        //    var uri;
        //    var images: IAnnotation[] = this.getImages();
        //
        //    if (images && images.length) {
        //        var firstImage = images[0];
        //        var resource: IResource = firstImage.getResource();
        //        var services: IService[] = resource.getServices();
        //
        //        for (let i = 0; i < services.length; i++) {
        //            var service: IService = services[i];
        //            var id = service.id;
        //
        //            if (!_endsWith(id, '/')) {
        //                id += '/';
        //            }
        //
        //            uri = id + 'full/' + width + ',/0/' + Utils.getImageQuality(service.getProfile()) + '.jpg';
        //        }
        //    }
        //
        //    return uri;
        //}

        //getType(): CanvasType {
        //    return new CanvasType(this.getProperty('@type').toLowerCase());
        //}

        getWidth(): number {
            return this.getProperty('width');
        }

        getHeight(): number {
            return this.getProperty('height');
        }
    }
}
