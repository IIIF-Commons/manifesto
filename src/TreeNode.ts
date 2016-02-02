
module Manifesto {
    export class TreeNode implements ITreeNode {
        public nodes: TreeNode[];
        public selected: boolean;
        public expanded: boolean;
        public id: string;
        public navDate: Date;
        public parentNode: TreeNode;

        constructor(public label?: string, public data?: any) {
            this.nodes = [];
            if (!data) this.data = {};
        }

        public addNode(node: TreeNode):void {
            this.nodes.push(node);
            node.parentNode = this;
        }
    }
}