
namespace Manifesto {
    export class TreeNode implements ITreeNode {
        public data: any;
        public nodes: ITreeNode[];
        public selected: boolean;
        public expanded: boolean;
        public id: string;
        public label: string;
        public navDate: Date;
        public parentNode: ITreeNode;

        constructor(label?: string, data?: any) {
            this.label = <string>label;
            this.data = data || {};
            this.nodes = [];
        }

        public addNode(node: ITreeNode): void {
            this.nodes.push(node);
            node.parentNode = this;
        }

        public isCollection(): boolean {
            return this.data.type === Utils.normaliseType(TreeNodeType.COLLECTION.toString());
        }

        public isManifest(): boolean {
            return this.data.type === Utils.normaliseType(TreeNodeType.MANIFEST.toString());
        }

        public isRange(): boolean {
            return this.data.type === Utils.normaliseType(TreeNodeType.RANGE.toString());
        }
    }
}