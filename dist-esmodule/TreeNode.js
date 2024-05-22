import { TreeNodeType, Utils } from "./internal";
var TreeNode = /** @class */ (function () {
    function TreeNode(label, data) {
        this.label = label;
        this.data = data || {};
        this.nodes = [];
    }
    TreeNode.prototype.addNode = function (node) {
        this.nodes.push(node);
        node.parentNode = this;
    };
    TreeNode.prototype.isCollection = function () {
        return this.data.type === Utils.normaliseType(TreeNodeType.COLLECTION);
    };
    TreeNode.prototype.isManifest = function () {
        return this.data.type === Utils.normaliseType(TreeNodeType.MANIFEST);
    };
    TreeNode.prototype.isRange = function () {
        return this.data.type === Utils.normaliseType(TreeNodeType.RANGE);
    };
    return TreeNode;
}());
export { TreeNode };
//# sourceMappingURL=TreeNode.js.map