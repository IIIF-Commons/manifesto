var path = require("path");

module Manifesto {
    export class Canvas extends JSONLDResource implements ICanvas{

        ranges: IRange[] = [];

        constructor(jsonld: any){
            super(jsonld);
        }

        // todo: add support for default images and multiple images.
        getImageUri(): string {
            var imageUri;

            if (this.jsonld.resources){
                imageUri = this.jsonld.resources[0].resource.service['@id'];
            } else if (this.jsonld.images && this.jsonld.images[0].resource.service){
                imageUri = this.jsonld.images[0].resource.service['@id'];
            }

            if (!imageUri.endsWith('/')) {
                imageUri += '/';
            }

            imageUri += 'info.json';

            return imageUri;
        }

        getRange(): IRange {
            // get the deepest Range that this Canvas belongs to.
            return this.ranges.last();
        }

        // todo: if a specific thumbnail service is provided use that
        // Prefer thumbnail service to image service if supplied and if
        // the thumbnail service can provide a satisfactory size +/- x pixels.
        getThumbUri(width: number, height: number): string {

            var uri;

            //if(this.jsonld.thumbnail){
            //    return this.jsonld.thumbnail;
            //} else if (this.jsonld.resources){
            if (this.jsonld.resources){
                // todo: create thumbnail serviceprofile and use manifest.getService
                uri = this.jsonld.resources[0].resource.service['@id'];
            } else if (this.jsonld.images && this.jsonld.images[0].resource.service){
                // todo: create thumbnail serviceprofile and use manifest.getService
                uri = this.jsonld.images[0].resource.service['@id'];
            } else {
                return null;
            }

            // todo: allow region, rotation, quality, and format as parameters?
            var tile = 'full/' + width + ',' + height + '/0/default.jpg';

            return path.join(uri, tile);
        }

        getType(): CanvasType {
            return new CanvasType(this.jsonld['@type'].toLowerCase());
        }

        getWidth(): number {
            return this.jsonld.width;
        }

        getHeight(): number {
            return this.jsonld.height;
        }
    }
}
