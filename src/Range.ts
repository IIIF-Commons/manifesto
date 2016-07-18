
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

        getTree(treeRoot: ITreeNode): ITreeNode{

            treeRoot.data = this;
            this.treeNode = treeRoot;

            if (this.ranges){
                for (var i = 0; i < this.ranges.length; i++){
                    var range: IRange = this.ranges[i];

                    var node: ITreeNode = new TreeNode();
                    treeRoot.addNode(node);

                    this._parseTreeNode(node, range);
                }
            }

            Manifesto.Utils.generateTreeNodeIds(treeRoot);

            return treeRoot;
        }

        private _parseTreeNode(node: ITreeNode, range: IRange): void {
            node.label = range.getLabel();
            node.data = range;
            node.data.type = TreeNodeType.RANGE.toString();
            range.treeNode = node;

            if (range.ranges) {

                for (var i = 0; i < range.ranges.length; i++) {
                    var childRange = range.ranges[i];

                    var childNode: ITreeNode = new TreeNode();
                    node.addNode(childNode);

                    this._parseTreeNode(childNode, childRange);
                }
            }
        }
    }
}
