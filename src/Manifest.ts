var _assign = require("lodash.assign");
var _isArray = require("lodash.isarray");

module Manifesto {
    export class Manifest extends JSONLDResource implements IManifest {
        public options: IManifestoOptions;
        public rootRange: IRange;
        public sequences: Sequence[] = [];
        public treeRoot: TreeNode;

        constructor(jsonld: any, options?: IManifestoOptions) {
            super(jsonld);
            this.options = _assign({defaultLabel: '-', locale: 'en-GB'}, options);
        }

        getAttribution(): string {
            return this.getLocalisedValue(this.jsonld.attribution);
        }

        getLocalisedValue(resource: any, locale?: string): string {

            if (!_isArray(resource)){
                return resource;
            }

            if (!locale) locale = this.options.locale;

            // test for exact match
            for (var i = 0; i < resource.length; i++){
                var value = resource[i];
                var language = value['@language'];

                if (locale === language){
                    return <string>value['@value'];
                }
            }

            // test for inexact match
            var match = locale.substr(0, locale.indexOf('-'));

            for (var i = 0; i < resource.length; i++){
                var value = resource[i];
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

        getMetadata(includeRootProperties?: boolean): any{
            var metadata: Object[] = this.jsonld.metadata;

            if (metadata && includeRootProperties){
                if (this.jsonld.description){
                    metadata.push({
                        "label": "description",
                        "value": this.getLocalisedValue(this.jsonld.description)
                    });
                }
                if (this.jsonld.attribution){
                    metadata.push({
                        "label": "attribution",
                        "value": this.getLocalisedValue(this.jsonld.attribution)
                    });
                }
                if (this.jsonld.license){
                    metadata.push({
                        "label": "license",
                        "value": this.getLocalisedValue(this.jsonld.license)
                    });
                }
                if (this.jsonld.logo){
                    metadata.push({
                        "label": "logo",
                        "value": '<img src="' + this.jsonld.logo + '"/>'});
                }
            }

            return metadata;
        }

        // todo: use jmespath to flatten tree?
        // https://github.com/jmespath/jmespath.js/issues/6
        getRanges(): IRange[] {

            var ranges: IRange[] = [];

            if (!this.jsonld.structures && !this.jsonld.structures.length) return ranges;

            for (var i = 0; i < this.jsonld.structures.length; i++){
                var r = this.jsonld.structures[i];
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

        getRendering(resource: any, format: Manifesto.RenderingFormat | string): Manifesto.Rendering {
            if (!resource.rendering) return null;

            // normalise format to string
            if (typeof format !== 'string'){
                format = (<Manifesto.RenderingFormat>format).toString();
            }

            var renderings = resource.rendering;

            if (!_isArray(renderings)){
                renderings = [renderings];
            }

            for (var i = 0; i < renderings.length; i++){
                var rendering = renderings[i];

                if (rendering.format && rendering.format.toString() === format) {
                    return rendering;
                }
            }

            return null;
        }

        getRenderings(resource: any): IRendering[] {
            if (resource.rendering){
                var renderings = resource.rendering;

                if (!_isArray(renderings)){
                    renderings = [renderings];
                }

                return renderings;
            }

            // no renderings provided, default to resource.
            return [resource];
        }

        getSeeAlso(): any {
            return this.getLocalisedValue(this.jsonld.seeAlso);
        }

        getService(resource: any, profile: Manifesto.ServiceProfile | string): IService {
            if (!resource.service) return null;

            // normalise profile to string
            if (typeof profile !== 'string'){
                profile = (<Manifesto.ServiceProfile>profile).toString();
            }

            if (_isArray(resource.service)){
                for (var i = 0; i < resource.service.length; i++){
                    var service = resource.service[i];
                    if (service.profile && service.profile.toString() === profile) {
                        return new Service(service);
                    }
                }
            } else {
                if (resource.service.profile && resource.service.profile.toString() === profile){
                    return new Service(resource.service);
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