var _isArray = require("lodash.isarray");
var _map = require("lodash.map");

module Manifesto {
    export class Manifest extends IIIFResource implements IManifest {
        public index: number = 0;
        public rootRange: IRange;
        private _ranges: IRange[] = null;
        private _sequences: ISequence[] = null;

        constructor(jsonld: any, options?: IManifestoOptions) {
            super(jsonld, options);

            if (this.__jsonld.structures && this.__jsonld.structures.length) {
                var r: any = this._getRootRange();
                this._parseRanges(r, '');
            }
        }

        private _getRootRange(): IRange {
            var range: any;

            if (this.__jsonld.structures && this.__jsonld.structures.length) {

                for (var i = 0; i < this.__jsonld.structures.length; i++) {
                    var r = this.__jsonld.structures[i];
                    if (r.viewingHint === ViewingHint.TOP.toString()){
                        range = r;
                    }
                }

                if (!range){
                    range = {};
                    range.ranges = this.__jsonld.structures;
                }
            }

            return range;
        }

        private _getRangeById(id: string): IRange {
            if (this.__jsonld.structures && this.__jsonld.structures.length) {
                for (var i = 0; i < this.__jsonld.structures.length; i++) {
                    var r = this.__jsonld.structures[i];
                    if (r['@id'] === id){
                        return r;
                    }
                }
            }

            return null;
        }

        private _parseRanges(r: any, path: string, parentRange?: IRange): void{
            var range: IRange;

            if (_isString(r)){
                r = this._getRangeById(r);
            }

            range = new Range(r, this.options);

            // if no parent range is passed, assign the new range to manifest.rootRange
            if (!parentRange){
                this.rootRange = range;
            } else {
                range.parentRange = parentRange;
                parentRange.ranges.push(range);
            }

            range.path = path;

            if (r.ranges) {
                for (var j = 0; j < r.ranges.length; j++) {
                    this._parseRanges(r.ranges[j], path + '/' + j, range);
                }
            }
        }

        getRanges(): IRange[] {

            if (this._ranges != null)
                return this._ranges;

            this._ranges = [];

            if (this.rootRange){
                this._ranges = this.rootRange.ranges.en().traverseUnique(range => range.ranges).toArray();
            }

            return this._ranges;
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

        getSequences(): ISequence[]{
            if (this._sequences != null)
                return this._sequences;

            this._sequences = [];

            // if IxIF mediaSequences is present, use that. Otherwise fall back to IIIF sequences.
            var children = this.__jsonld.mediaSequences || this.__jsonld.sequences;
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    var s = children[i];
                    var sequence: ISequence = new Sequence(s, this.options);
                    this._sequences.push(sequence);
                }
            }

            return this._sequences;
        }

        getSequenceByIndex(sequenceIndex: number): ISequence {
            return this.getSequences()[sequenceIndex];
        }

        getTotalSequences(): number{
            return this.getSequences().length;
        }

        getTree(): ITreeNode{

            super.getTree();

            this.treeRoot.data.type = TreeNodeType.MANIFEST.toString();

            if (!this.isLoaded){
                return this.treeRoot;
            }

            if (!this.rootRange) return this.treeRoot;

            this.treeRoot.data = this.rootRange;
            this.rootRange.treeNode = this.treeRoot;

            if (this.rootRange.ranges){
                for (var i = 0; i < this.rootRange.ranges.length; i++){
                    var range: IRange = this.rootRange.ranges[i];

                    var node: ITreeNode = new TreeNode();
                    this.treeRoot.addNode(node);

                    this._parseTreeNode(node, range);
                }
            }

            this.generateTreeNodeIds(this.treeRoot);

            return this.treeRoot;
        }

        private _parseTreeNode(node: ITreeNode, range: IRange): void {
            node.label = range.getLabel();
            node.data = range;
            node.data.type = TreeNodeType.RANGE.toString();
            range.treeNode = node;

            if (range.ranges) {

                for (var i = 0; i < range.ranges.length; i++) {
                    var childRange = range.ranges[i];

                    var childNode: ITreeNode = new TreeNode();
                    node.addNode(childNode);

                    this._parseTreeNode(childNode, childRange);
                }
            }
        }

        getManifestType(): ManifestType {
            var service: IService = this.getService(Manifesto.ServiceProfile.UIEXTENSIONS);
            if (service){
                return new ManifestType(service.getProperty('manifestType'));
            }
            return new ManifestType('');
        }

        isMultiSequence(): boolean{
            return this.getTotalSequences() > 1;
        }

        getViewingDirection(): ViewingDirection {
            if (this.getProperty('viewingDirection')){
                return new ViewingDirection(this.getProperty('viewingDirection'));
            }

            return ViewingDirection.LEFTTORIGHT;
        }

        getViewingHint(): ViewingHint {
            if (this.getProperty('viewingHint')){
                return new ViewingHint(this.getProperty('viewingHint'));
            }

            return ViewingHint.EMPTY;
        }
    }
}