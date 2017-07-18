namespace Manifesto {
    export class Canvas extends Element implements ICanvas{

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
                    width = this.externalResource.data.width;
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
                    const firstImage = images[0];
                    const resource: IResource = firstImage.getResource();
                    const services: IService[] = resource.getServices();

                    if (!width) {
                        width = resource.getWidth();
                    }
                    
                    if (services.length) {
                        const service: IService = services[0];
                        id = service.id;
                        quality = Utils.getImageQuality(service.getProfile());
                    }
                }
                
                // todo: this is not compatible and should be moved to getThumbUri
                if (!id) {
                    return "undefined" == typeof this.__jsonld.thumbnail
                        ? null : this.__jsonld.thumbnail;
                }
            }

            size = width + ',';

            const uri: string = [id, region, size, rotation, quality + '.jpg'].join('/');

            return uri;
        }

        getMaxDimensions(): Size | null {
            
            let maxDimensions: Size | null = null;
            let profile: any;

            if (this.externalResource.data && this.externalResource.data.profile) {
                profile = (<any[]>this.externalResource.data.profile);
                
                if (profile.length) {
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

            if (!this.__jsonld.content) return content;

            // should be contained in an AnnotationPage
            let annotationPage: AnnotationPage | null = null;

            if (this.__jsonld.content.length) {
                annotationPage = new AnnotationPage(this.__jsonld.content[0], this.options);
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

        getImages(): IAnnotation[] {

            const images: IAnnotation[] = [];

            if (!this.__jsonld.images) return images;

            for (let i = 0; i < this.__jsonld.images.length; i++) {
                const a = this.__jsonld.images[i];
                const annotation = new Annotation(a, this.options);
                images.push(annotation);
            }

            return images;
        }

        getIndex(): number {
            return this.getProperty('index');
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
