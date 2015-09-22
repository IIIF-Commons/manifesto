
module Manifesto {
    export class Range extends ManifestResource implements IRange{
        canvases: any[] = [];
        parentRange: Range;
        path: string;
        ranges: Range[] = [];
        treeNode: TreeNode;

        constructor(jsonld: any, options: IManifestoOptions){
            super(jsonld, options);
        }

        getCanvases(): string[] {
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
