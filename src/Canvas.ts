var _endsWith = require("lodash.endswith");
var _last = require("lodash.last");

module Manifesto {
    export class Canvas extends ManifestResource implements ICanvas{

        public index: number;
        public ranges: IRange[];

        constructor(jsonld: any, options: IManifestoOptions){
            super(jsonld, options);
        }

        getCanonicalImageUri(width?: number): string {
            var region: string = 'full';
            var rotation: number = 0;
            var quality: string = 'default.jpg';
            var w: number = width || this.externalResource.data.width;
            var size: string = w + ',';

            if (this.externalResource.data['@context'].indexOf('/1.0/context.json') > -1 ||
                this.externalResource.data['@context'].indexOf('/1.1/context.json') > -1 ||
                this.externalResource.data['@context'].indexOf('/1/context.json') > -1 ) {
                quality = 'native.jpg';
            }

            var uri: string = [this.externalResource.data['@id'], region, size, rotation, quality].join('/');

            return uri;
        }

        getImages(): IAnnotation[] {

            var images: IAnnotation[] = [];

            if (!this.__jsonld.images) return images;

            for (var i = 0; i < this.__jsonld.images.length; i++) {
                var a = this.__jsonld.images[i];

                var annotation = new Annotation(a, this.options);
                images.push(annotation);
            }

            return images;
        }

        getIndex(): number {
            return this.getProperty('index');
        }

        // todo: Prefer thumbnail service to image service if supplied and if
        // todo: the thumbnail service can provide a satisfactory size +/- x pixels.
        // this is used to get thumb URIs for databinding *before* the info.json has been requested
        getThumbUri(width: number): string {

            var uri;
            var images: IAnnotation[] = this.getImages();

            if (images && images.length) {
                var firstImage = images[0];
                var resource: IResource = firstImage.getResource();
                var services: IService[] = resource.getServices();

                for (var i = 0; i < services.length; i++) {
                    var service: IService = services[i];
                    var id = service.id;

                    if (!_endsWith(id, '/')) {
                        id += '/';
                    }

                    uri = id + 'full/' + width + ',/0/' + Utils.getImageQuality(service.getProfile()) + '.jpg';
                }
            }

            return uri;
        }

        getType(): CanvasType {
            return new CanvasType(this.getProperty('@type').toLowerCase());
        }

        getWidth(): number {
            return this.getProperty('width');
        }

        getHeight(): number {
            return this.getProperty('height');
        }
    }
}
