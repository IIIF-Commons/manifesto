
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
            if (this.__jsonld.viewingDirection){
                return new ViewingDirection(this.__jsonld.viewingDirection);
            }

            return null;
        }

        getViewingHint(): ViewingHint {
            if (this.__jsonld.viewingHint){
                return new ViewingHint(this.__jsonld.viewingHint);
            }

            return null;
        }
    }
}
