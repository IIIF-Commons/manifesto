var _endsWith = require("lodash.endswith");
var _last = require("lodash.last");

module Manifesto {
    export class Canvas extends ManifestResource implements ICanvas{

        index: number;
        ranges: IRange[] = [];

        constructor(jsonld: any, options: IManifestoOptions){
            super(jsonld, options);
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

        // todo: Prefer thumbnail service to image service if supplied and if
        // the thumbnail service can provide a satisfactory size +/- x pixels.
        getThumbUri(width: number, height: number): string {

            var uri;
            var images: IAnnotation[] = this.getImages();

            if (images && images.length) {
                var firstImage = images[0];
                var resource: IResource = firstImage.getResource();
                var services: IService[] = resource.getServices();

                for (var i = 0; i < services.length; i++) {
                    var service:IService = services[i];
                    var profile:string = service.getProfile().toString();
                    var id = service.id;

                    if (!_endsWith(id, '/')) {
                        id += '/';
                    }

                    if (profile === ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE1.toString() ||
                        profile === ServiceProfile.STANFORDIIIFIMAGECOMPLIANCE2.toString() ||
                        profile === ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE1.toString() ||
                        profile === ServiceProfile.STANFORDIIIF1IMAGECOMPLIANCE2.toString() ||
                        profile === ServiceProfile.STANFORDIIIFIMAGECONFORMANCE1.toString() ||
                        profile === ServiceProfile.STANFORDIIIFIMAGECONFORMANCE2.toString() ||
                        profile === ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE1.toString() ||
                        profile === ServiceProfile.STANFORDIIIF1IMAGECONFORMANCE2.toString() ||
                        profile === ServiceProfile.IIIF1IMAGELEVEL1.toString() ||
                        profile === ServiceProfile.IIIF1IMAGELEVEL2.toString()){
                        uri = id + 'full/' + width + ',' + height + '/0/native.jpg';
                    } else if (
                        profile === ServiceProfile.IIIF2IMAGELEVEL1.toString() ||
                        profile === ServiceProfile.IIIF2IMAGELEVEL2.toString()) {
                        uri = id + 'full/' + width + ',' + height + '/0/default.jpg';
                    }
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
