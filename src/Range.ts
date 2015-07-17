
module Manifesto {
    export class Range implements IRange{
        canvases: any[] = [];
        id: string;
        jsonld: any;
        label: string;
        manifest: Manifesto.Manifest;
        parentRange: Range;
        path: string;
        ranges: Range[] = [];
        treeNode: TreeNode;
        viewingHint: ViewingHint;
        viewingDirection: ViewingDirection;

        getLabel(): string {
            var regExp = /\d/;

            if (regExp.test(this.jsonld.label)) {
                return this.manifest.getLocalisedValue(this.jsonld.label);
            }

            return null;
        }
    }
}
