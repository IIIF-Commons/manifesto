
module Manifesto {
    export class Canvas implements ICanvas{
        id: string;
        jsonld: any;
        manifest: IManifest;
        ranges: IRange[] = [];
        type: CanvasType;

        getHeight(): number {
            return this.jsonld.height;
        }

        getLabel(): string {
            var regExp = /\d/;

            if (regExp.test(this.jsonld.label)) {
                return this.manifest.getLocalisedValue(this.jsonld.label);
            }

            return null;
        }

        getRange(): IRange {
            // get the deepest Range that this Canvas belongs to.
            return this.ranges.last();
        }

        getThumbUri(width: number, height: number): string {

            var uri;

            if (this.jsonld.resources){
                uri = this.jsonld.resources[0].resource.service.id;
            } else if (this.jsonld.images && this.jsonld.images[0].resource.service){
                uri = this.jsonld.images[0].resource.service.id;
            } else {
                return null;
            }

            // todo: allow region, rotation, quality, and format as parameters?
            var tile = 'full/' + width + ',' + height + '/0/default.jpg';

            return path.join(uri, tile);
        }

        getWidth(): number {
            return this.jsonld.width;
        }
    }
}
