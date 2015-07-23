
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

        getLabel(): string {
            var regExp = /\d/;

            if (regExp.test(this.jsonld.label)) {
                return this.manifest.getLocalisedValue(this.jsonld.label);
            }

            return null;
        }

        getViewingDirection(): ViewingDirection {
            if (this.jsonld.viewingDirection){
                return new ViewingDirection(this.jsonld.viewingDirection);
            }

            return null;
        }

        getViewingHint(): ViewingHint {
            if (this.jsonld.viewingHint){
                return new ViewingHint(this.jsonld.viewingHint);
            }

            return null;
        }
    }
}
