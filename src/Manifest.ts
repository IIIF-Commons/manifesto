
module Manifesto {
    export class Manifest implements IManifest {
        public defaultLabel: string = "-";
        public id: string;
        public jsonld: any;
        public locale: string = "en-GB"; // todo: pass in constructor?
        public manifest: IManifest;
        public rootRange: IRange;
        public sequences: Sequence[] = [];
        public treeRoot: TreeNode;

        constructor(jsonld: any) {
            this.jsonld = jsonld;
        }

        getAttribution(): string {
            return this.getLocalisedValue(this.jsonld.attribution);
        }

        getLabel(): string {
            return this.getLocalisedValue(this.jsonld.label);
        }

        getLocalisedValue(prop: any, locale?: string): string {

            if (!_.isArray(prop)){
                return prop;
            }

            if (!locale) locale = this.locale;

            // test for exact match
            for (var i = 0; i < prop.length; i++){
                var value = prop[i];
                var language = value['@language'];

                if (locale === language){
                    return <string>value['@value'];
                }
            }

            // test for inexact match
            var match = locale.substr(0, locale.indexOf('-'));

            for (var i = 0; i < prop.length; i++){
                var value = prop[i];
                var language = value['@language'];

                if (language === match){
                    return <string>value['@value'];
                }
            }

            return null;
        }

        getLogo(): string {
            return this.jsonld.logo;
        }

        getLicense(): string {
            return this.getLocalisedValue(this.jsonld.license);
        }

        // todo: use jmespath to flatten tree?
        getRanges(): IRange[] {

            var ranges: IRange[] = [];

            if (!this.jsonld.structures && !this.jsonld.structures.length) return ranges;

            _.each(this.jsonld.structures, (range: any) => {
                ranges.push(range.parsed);
            });

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

        getRendering(resource:any, format: Manifesto.RenderingFormat): Manifesto.Rendering {
            if (!resource.rendering) return null;

            var renderings = resource.rendering;

            if (!_.isArray(renderings)){
                renderings = [renderings];
            }

            for (var i = 0; i < renderings.length; i++){
                var rendering = renderings[i];
                if (rendering.format && rendering.format === format.toString()) {
                    return rendering;
                }
            }

            return null;
        }

        getSeeAlso(): any {
            return this.getLocalisedValue(this.jsonld.seeAlso);
        }

        getService(resource: any, profile: Manifesto.ServiceProfile): IService {
            if (!resource.service) return null;

            if (_.isArray(resource.service)){
                for (var i = 0; i < resource.service.length; i++){
                    var service = resource.service[i];
                    if (service.profile && service.profile === profile) {
                        return service;
                    }
                }
            } else {
                if (resource.service.profile && resource.service.profile === profile){
                    return resource.service;
                }
            }

            return null;
        }

        getSequenceByIndex(sequenceIndex: number): ISequence {
            return this.sequences[sequenceIndex];
        }

        getTitle(): string {
            return this.getLocalisedValue(this.jsonld.label);
        }

        getTotalSequences(): number{
            return this.sequences.length;
        }

        getTree(): TreeNode{

            this.treeRoot = new TreeNode('root');
            this.treeRoot.label = "root";
            this.treeRoot.data = this.rootRange;
            this.treeRoot.data.type = "manifest";
            this.rootRange.treeNode = this.treeRoot;

            if (this.rootRange.ranges){
                for (var i = 0; i < this.rootRange.ranges.length; i++){
                    var range = this.rootRange.ranges[i];

                    var node = new TreeNode();
                    this.treeRoot.addNode(node);

                    this._parseTreeNode(node, range);
                }
            }

            return this.treeRoot;
        }

        private _parseTreeNode(node: TreeNode, range: any): void {
            node.label = this.getLocalisedValue(range.label);
            node.data = range;
            node.data.type = "range";
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

        isMultiSequence(): boolean{
            return this.getTotalSequences() > 1;
        }
    }
}