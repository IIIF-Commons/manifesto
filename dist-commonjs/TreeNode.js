"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("./Utils");
var TreeNodeType_1 = require("./TreeNodeType");
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
        return this.data.type === Utils_1.Utils.normaliseType(TreeNodeType_1.TreeNodeType.COLLECTION);
    };
    TreeNode.prototype.isManifest = function () {
        return this.data.type === Utils_1.Utils.normaliseType(TreeNodeType_1.TreeNodeType.MANIFEST);
    };
    TreeNode.prototype.isRange = function () {
        return this.data.type === Utils_1.Utils.normaliseType(TreeNodeType_1.TreeNodeType.RANGE);
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
//# sourceMappingURL=TreeNode.js.map