
module Manifesto {
    export class Range extends JSONLDResource implements IRange{
        canvases: any[] = [];
        parentRange: Range;
        path: string;
        ranges: Range[] = [];
        treeNode: TreeNode;

        constructor(jsonld: any){
            super(jsonld);
        }

        //getLabel(): string {
        //    var regExp = /\d/;
        //
        //    if (regExp.test(this.__jsonld.label)) {
        //        return this.manifest.getLocalisedValue(this.__jsonld.label);
        //    }
        //
        //    return null;
        //}

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
