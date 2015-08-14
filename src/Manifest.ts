var _isArray = require("lodash.isarray");
var _map = require("lodash.map");

module Manifesto {
    export class Manifest extends IIIFResource implements IManifest {
        public rootRange: IRange;
        public sequences: Sequence[] = [];
        public treeRoot: TreeNode;

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

        getRendering(resource: IJSONLDResource, format: RenderingFormat | string): IRendering {
            var renderings: IRendering[] = this.getRenderings(resource);

            // normalise format to string
            if (typeof format !== 'string'){
                format = (<RenderingFormat>format).toString();
            }

            for (var i = 0; i < renderings.length; i++){
                var rendering: IRendering = renderings[i];

                if (rendering.getFormat().toString() === format) {
                    return rendering;
                }
            }

            return null;
        }

        getRenderings(resource: any): IRendering[] {
            var rendering;

            // if passing a parsed object, use the __jsonld.rendering property,
            // otherwise look for a rendering property
            if (resource.__jsonld){
                rendering = resource.__jsonld.rendering;
            } else {
                rendering = resource.rendering;
            }

            var parsed: IRendering[] = [];

            if (!rendering){
                return parsed;
            }

            // normalise to array
            if (!_isArray(rendering)){
                rendering = [rendering];
            }

            for (var i = 0; i < rendering.length; i++){
                var r: any = rendering[i];
                r.__manifest = this;
                parsed.push(new Rendering(r));
            }

            return parsed;
        }

        getSequenceByIndex(sequenceIndex: number): ISequence {
            return this.sequences[sequenceIndex];
        }

        getTotalSequences(): number{
            return this.sequences.length;
        }

        getTree(): TreeNode{

            this.treeRoot = new TreeNode('root');
            this.treeRoot.label = 'root';

            if (!this.rootRange) return this.treeRoot;

            this.treeRoot.data = this.rootRange;
            this.treeRoot.data.type = 'manifest';
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

        getType(): ManifestType {
            return new ManifestType(this.getProperty('exp:manifestType'));
        }

        isMultiSequence(): boolean{
            return this.getTotalSequences() > 1;
        }
    }
}