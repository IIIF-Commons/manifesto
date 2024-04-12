"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
var internal_1 = require("./internal");
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
        return this.data.type === internal_1.Utils.normaliseType(internal_1.TreeNodeType.COLLECTION);
    };
    TreeNode.prototype.isManifest = function () {
        return this.data.type === internal_1.Utils.normaliseType(internal_1.TreeNodeType.MANIFEST);
    };
    TreeNode.prototype.isRange = function () {
        return this.data.type === internal_1.Utils.normaliseType(internal_1.TreeNodeType.RANGE);
    };
    return TreeNode;
}());
exports.TreeNode = TreeNode;
//# sourceMappingURL=TreeNode.js.map