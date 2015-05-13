var TreeNode = (function () {
    function TreeNode(label, data) {
        this.label = label;
        this.data = data;
        this.nodes = [];
        if (!data)
            this.data = {};
    }
    TreeNode.prototype.addNode = function (node) {
        this.nodes.push(node);
        node.parentNode = this;
    };
    return TreeNode;
})();
module.exports = TreeNode;
