module Manifesto {
    export class Canvas extends ManifestResource implements ICanvas{

        ranges: IRange[] = [];

        constructor(jsonld: any){
            super(jsonld);
        }

        // todo: return all image services matching the IIIFIMAGELEVEL1/2 profile
        // https://github.com/UniversalViewer/universalviewer/issues/119
        //getImages(): IService[] {
        //
        //}

        // todo: use getImages instead. the client must decide which to use.
        getInfoUri(): string {
            var infoUri;

            if (this.__jsonld.resources){
                infoUri = this.__jsonld.resources[0].resource.service['@id'];
            } else if (this.__jsonld.images && this.__jsonld.images[0].resource.service){
                infoUri = this.__jsonld.images[0].resource.service['@id'];
            }

            if (!infoUri.endsWith('/')) {
                infoUri += '/';
            }

            infoUri += 'info.json';

            return infoUri;
        }

        getRange(): IRange {
            // get the deepest Range that this Canvas belongs to.
            return this.ranges.last();
        }

        // todo: Prefer thumbnail service to image service if supplied and if
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
