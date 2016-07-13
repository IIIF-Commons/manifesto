var _endsWith = require("lodash.endswith");
var _last = require("lodash.last");

module Manifesto {
    export class Canvas extends Element implements ICanvas{

        public ranges: IRange[];

        constructor(jsonld: any, options: IManifestoOptions){
            super(jsonld, options);
        }

        // http://iiif.io/api/image/2.1/#canonical-uri-syntax
        getCanonicalImageUri(w?: number): string {

            var id: string;
            var region: string = 'full';
            var rotation: number = 0;
            var quality: string = 'default';
            var width: number = w;
            var size: string;

            // if an info.json has been loaded
            if (this.externalResource && this.externalResource.data){
                id = this.externalResource.data['@id'];

                if (!width){
                    width = this.externalResource.data.width;
                }

                if (this.externalResource.data['@context'].indexOf('/1.0/context.json') > -1 ||
                    this.externalResource.data['@context'].indexOf('/1.1/context.json') > -1 ||
                    this.externalResource.data['@context'].indexOf('/1/context.json') > -1 ) {
                    quality = 'native';
                }
            } else {
                // info.json hasn't been loaded yet
                var images: IAnnotation[] = this.getImages();

                if (images && images.length) {
                    var firstImage = images[0];
                    var resource: IResource = firstImage.getResource();
                    var services: IService[] = resource.getServices();

                    if (!width){
                        width = resource.getWidth();
                    }
                    
                    if (services.length){
                        var service: IService = services[0];
                        id = service.id;
                        quality = Utils.getImageQuality(service.getProfile());
                    }
                }
                
                // todo: this is not compatible and should be moved to getThumbUri
                if (!id){
                    return "undefined" == typeof this.__jsonld.thumbnail
                        ? null : this.__jsonld.thumbnail;
                }
            }

            size = width + ',';

            var uri: string = [id, region, size, rotation, quality + '.jpg'].join('/');

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
        //        for (var i = 0; i < services.length; i++) {
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
