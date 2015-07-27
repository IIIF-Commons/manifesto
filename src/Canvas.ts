module Manifesto {
    export class Canvas extends JSONLDResource implements ICanvas{

        ranges: IRange[] = [];

        constructor(jsonld: any){
            super(jsonld);
        }

        //getImages(): IAnnotation[] {
        //
        //}

        // todo: use getImages instead.
        getImageUri(): string {
            var imageUri;

            if (this.__jsonld.resources){
                // todo: create image serviceprofile and use manifest.getService
                imageUri = this.__jsonld.resources[0].resource.service['@id'];
            } else if (this.__jsonld.images && this.__jsonld.images[0].resource.service){
                imageUri = this.__jsonld.images[0].resource.service['@id'];
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

            //if(this.__jsonld.thumbnail){
            //    return this.__jsonld.thumbnail;
            //} else if (this.__jsonld.resources){
            if (this.__jsonld.resources){
                // todo: create thumbnail serviceprofile and use manifest.getService
                uri = this.__jsonld.resources[0].resource.service['@id'];
            } else if (this.__jsonld.images && this.__jsonld.images[0].resource.service){
                // todo: create thumbnail serviceprofile and use manifest.getService
                uri = this.__jsonld.images[0].resource.service['@id'];
            } else {
                return null;
            }

            if (!uri.endsWith('/')){
                uri += '/';
            }

            // todo: allow region, rotation, quality, and format as parameters?
            var tile = 'full/' + width + ',' + height + '/0/default.jpg';

            return uri + tile;
        }

        getType(): CanvasType {
            return new CanvasType(this.__jsonld['@type'].toLowerCase());
        }

        getWidth(): number {
            return this.__jsonld.width;
        }

        getHeight(): number {
            return this.__jsonld.height;
        }
    }
}
