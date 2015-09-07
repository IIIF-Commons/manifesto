var _isArray = require("lodash.isarray");
var _map = require("lodash.map");

module Manifesto {
    export class Manifest extends IIIFResource implements IManifest {
        public rootRange: IRange;
        public sequences: ISequence[] = [];

        constructor(jsonld: any, options?: IManifestoOptions) {
            super(jsonld, options);
            jsonld.__manifest = this;
        }

        // todo: use jmespath to flatten tree?
        // https://github.com/jmespath/jmespath.js/issues/6
        // using r.__parsed in the meantime
        getRanges(): IRange[] {

            var ranges: IRange[] = [];

            var structures = this.getProperty('structures');

            if (!structures) return ranges;

            for (var i = 0; i < structures.length; i++){
                var r = structures[i];
                ranges.push(r.__parsed);
            }

            return ranges;
        }

        getRangeById(id: string): IRange {

            var ranges = this.getRanges();

            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (range.id === id){
                    return range;
                }
            }

            return null;
        }

        getRangeByPath(path: string): IRange{

            var ranges = this.getRanges();

            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (range.path === path) {
                    return range;
                }
            }

            return null;
        }

        getSequenceByIndex(sequenceIndex: number): ISequence {
            return this.sequences[sequenceIndex];
        }

        getTotalSequences(): number{
            return this.sequences.length;
        }

        getTree(): TreeNode{

            super.getTree();

            this.treeRoot.data.type = 'manifest';

            if (!this.isLoaded){
                this.treeRoot.data = this;
                return this.treeRoot;
            }

            if (!this.rootRange) return this.treeRoot;

            this.treeRoot.data = this.rootRange;
            this.rootRange.treeNode = this.treeRoot;

            if (this.rootRange.ranges){
                for (var i = 0; i < this.rootRange.ranges.length; i++){
                    var range: IRange = this.rootRange.ranges[i];

                    var node: TreeNode = new TreeNode();
                    this.treeRoot.addNode(node);

                    this._parseTreeNode(node, range);
                }
            }

            return this.treeRoot;
        }

        private _parseTreeNode(node: TreeNode, range: IRange): void {
            node.label = range.getLabel();
            node.data = range;
            node.data.type = 'range';
            range.treeNode = node;

            if (range.ranges) {

                for (var i = 0; i < range.ranges.length; i++) {
                    var childRange = range.ranges[i];

                    var childNode = new TreeNode();
                    node.addNode(childNode);

                    this._parseTreeNode(childNode, childRange);
                }
            }
        }

        getManifestType(): ManifestType {
            return new ManifestType(this.getProperty('exp:manifestType'));
        }

        isMultiSequence(): boolean{
            return this.getTotalSequences() > 1;
        }
    }
}