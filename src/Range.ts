
module Manifesto {
    export class Range extends ManifestResource implements IRange{
        canvases: ICanvas[];
        parentRange: Range;
        path: string;
        ranges: Range[] = [];
        treeNode: ITreeNode;

        constructor(jsonld: any, options: IManifestoOptions){
            super(jsonld, options);
        }

        getCanvases(): ICanvas[] {
            if (this.canvases != null) return this.canvases;

            this.canvases = [];

            if (this.__jsonld.canvases) {
                for (var i = 0; i < this.__jsonld.canvases.length; i++) {
                    var c = this.__jsonld.canvases[i];
                    var canvas: ICanvas = new Canvas(c, this.options);
                    canvas.index = i;
                    this.canvases.push(canvas);
                }
            }

            return this.canvases;
        }

        getViewingDirection(): ViewingDirection {
            if (this.getProperty('viewingDirection')){
                return new ViewingDirection(this.getProperty('viewingDirection'));
            }

            return null;
        }

        getViewingHint(): ViewingHint {
            if (this.getProperty('viewingHint')){
                return new ViewingHint(this.getProperty('viewingHint'));
            }

            return null;
        }
    }
}
