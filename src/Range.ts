
namespace Manifesto {
    export class Range extends ManifestResource implements IRange{
        private _ranges: IRange[] | null = null;
        public canvases: string[] | null = null;
        public items: IManifestResource[] = [];
        public parentRange: Range;
        public path: string;
        public treeNode: ITreeNode;

        constructor(jsonld?: any, options?: IManifestoOptions){
            super(jsonld, options);
        }

        getCanvasIds(): string[] {

            if (this.__jsonld.canvases) {
                return this.__jsonld.canvases;
            } else if (this.canvases) {
                return this.canvases;
            }

            return [];
        }

        // getCanvases(): ICanvas[] {
        //     if (this._canvases) {
        //         return this._canvases;
        //     }
            
        //     return this._canvases = <ICanvas[]>this.items.en().where(m => m.isCanvas()).toArray();
        // }

        getRanges(): IRange[] {

            if (this._ranges) {
                return this._ranges;
            }
            
            return this._ranges = <IRange[]>this.items.en().where(m => m.isRange()).toArray();
        }

        getViewingDirection(): ViewingDirection | null {
            if (this.getProperty('viewingDirection')) {
                return new ViewingDirection(this.getProperty('viewingDirection'));
            }

            return null;
        }

        getViewingHint(): ViewingHint | null {
            if (this.getProperty('viewingHint')) {
                return new ViewingHint(this.getProperty('viewingHint'));
            }

            return null;
        }

        getTree(treeRoot: ITreeNode): ITreeNode{

            treeRoot.data = this;
            this.treeNode = treeRoot;

            var ranges: IRange[] = this.getRanges();

            if (ranges && ranges.length) {
                for (let i = 0; i < ranges.length; i++) {
                    const range: IRange = ranges[i];
                    const node: ITreeNode = new TreeNode();
                    treeRoot.addNode(node);
                    this._parseTreeNode(node, range);
                }
            }

            Manifesto.Utils.generateTreeNodeIds(treeRoot);

            return treeRoot;
        }

        private _parseTreeNode(node: ITreeNode, range: IRange): void {
            node.label = <string>TranslationCollection.getValue(range.getLabel(), this.options.locale);
            node.data = range;
            node.data.type = Utils.normaliseType(TreeNodeType.RANGE.toString());
            range.treeNode = node;

            const ranges: IRange[] = range.getRanges();

            if (ranges && ranges.length) {

                for (let i = 0; i < ranges.length; i++) {
                    const childRange = ranges[i];
                    const childNode: ITreeNode = new TreeNode();
                    node.addNode(childNode);
                    this._parseTreeNode(childNode, childRange);
                }
            }
        }
    }
}
