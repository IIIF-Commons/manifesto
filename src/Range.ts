
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

        getCanvasIds(): string[] {
            if (this.__jsonld.canvases) {
                return this.__jsonld.canvases;
            }

            return [];
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
