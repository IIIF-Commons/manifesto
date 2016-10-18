
module Manifesto {
    export class Range extends ManifestResource implements IRange{
        _canvases: ICanvas[] = null;
        _ranges: IRange[] = null;
        parentRange: Range;
        path: string;
        members: IManifestResource[] = [];
        treeNode: ITreeNode;

        constructor(jsonld?: any, options?: IManifestoOptions){
            super(jsonld, options);
        }

        getCanvasIds(): string[] {
            if (this.__jsonld.canvases) {
                return this.__jsonld.canvases;
            }

            return [];
        }

        getCanvases(): ICanvas[] {
            if (this._canvases){
                return this._canvases;
            }
            
            return this._canvases = <ICanvas[]>this.members.en().where(m => m.isCanvas()).toArray();
        }

        getRanges(): IRange[] {
            if (this._ranges){
                return this._ranges;
            }
            
            return this._ranges = <IRange[]>this.members.en().where(m => m.isRange()).toArray();
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

            var ranges: IRange[] = this.getRanges();

            if (ranges && ranges.length){
                for (var i = 0; i < ranges.length; i++){
                    var range: IRange = ranges[i];

                    var node: ITreeNode = new TreeNode();
                    treeRoot.addNode(node);

                    this._parseTreeNode(node, range);
                }
            }

            Manifesto.Utils.generateTreeNodeIds(treeRoot);

            return treeRoot;
        }

        private _parseTreeNode(node: ITreeNode, range: IRange): void {
            node.label = TranslationCollection.getValue(range.getLabel(), this.options.locale);
            node.data = range;
            node.data.type = TreeNodeType.RANGE.toString();
            range.treeNode = node;

            var ranges: IRange[] = range.getRanges();

            if (ranges && ranges.length) {

                for (var i = 0; i < ranges.length; i++) {
                    var childRange = ranges[i];

                    var childNode: ITreeNode = new TreeNode();
                    node.addNode(childNode);

                    this._parseTreeNode(childNode, childRange);
                }
            }
        }
    }
}
