var _endsWith = require("lodash.endswith");
var _last = require("lodash.last");

module Manifesto {
    export class Canvas extends ManifestResource implements ICanvas{

        ranges: IRange[] = [];

        constructor(jsonld: any, options: IManifestoOptions){
            super(jsonld, options);
        }

        // https://github.com/UniversalViewer/universalviewer/issues/119
        getImages(): IAnnotation[] {
            if (!this.__jsonld.images) return [];

            var images: IAnnotation[] = [];

            for (var i = 0; i < this.__jsonld.images.length; i++) {
                var a = this.__jsonld.images[i];

                var annotation = new Annotation(a, this.options);
                images.push(annotation);
            }

            return images;
        }

        // todo: use getImages instead. the client must decide which to use.
        // each service has a getInfoUri method.
        getInfoUri(): string {
            var infoUri;

            if (this.__jsonld.resources){
                infoUri = this.__jsonld.resources[0].resource.service['@id'];
            } else if (this.__jsonld.images && this.__jsonld.images[0].resource.service){
                infoUri = this.__jsonld.images[0].resource.service['@id'];
            }

            if (!_endsWith(infoUri, '/')) {
                infoUri += '/';
            }

            infoUri += 'info.json';

            return infoUri;
        }

        getRange(): IRange {
            // get the deepest Range that this Canvas belongs to.
            return _last(this.ranges);
        }

        // todo: Prefer thumbnail service to image service if supplied and if
        // the thumbnail service can provide a satisfactory size +/- x pixels.
        getThumbUri(width: number, height: number): string {

            var uri, resource, tile, service;

            //if(this.__jsonld.thumbnail){
            //    return this.__jsonld.thumbnail;
            //} else if (this.__jsonld.resources){
            if (this.__jsonld.resources){
                // todo: create thumbnail serviceprofile and use manifest.getService
                resource = this.__jsonld.resources[0].resource;
            } else if (this.__jsonld.images && this.__jsonld.images[0].resource.service){
                // todo: create thumbnail serviceprofile and use manifest.getService
                resource = this.__jsonld.images[0].resource;
            } else {
                return null;
            }

            service = resource.service;
            uri = service['@id'];

            if (!_endsWith(uri, '/')){
                uri += '/';
            }

            // todo: allow region, rotation, quality, and format as parameters?
            if (service.profile === ServiceProfile.IIIF1IMAGELEVEL1.toString() || service.profile === ServiceProfile.IIIF1IMAGELEVEL2.toString()){
                tile = 'full/' + width + ',' + height + '/0/native.jpg';
            } else {
                tile = 'full/' + width + ',' + height + '/0/default.jpg';
            }

            return uri + tile;
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
