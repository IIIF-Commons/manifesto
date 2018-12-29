namespace Manifesto {
    export class TreeNode {
        public data: any;
        public nodes: TreeNode[];
        public selected: boolean;
        public expanded: boolean;
        public id: string;
        public label: string;
        public navDate: Date;
        public parentNode: TreeNode;

        constructor(label?: string, data?: any) {
            this.label = <string>label;
            this.data = data || {};
            this.nodes = [];
        }

        public addNode(node: TreeNode): void {
            this.nodes.push(node);
            node.parentNode = this;
        }

        public isCollection(): boolean {
            return this.data.type === Utils.normaliseType(TreeNodeType.COLLECTION);
        }

        public isManifest(): boolean {
            return this.data.type === Utils.normaliseType(TreeNodeType.MANIFEST);
        }

        public isRange(): boolean {
            return this.data.type === Utils.normaliseType(TreeNodeType.RANGE);
        }
    }
}