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
            jsonld.__manifest = this;
            this.options = _assign({defaultLabel: '-', locale: 'en-GB'}, options);
        }

        getAttribution(): string {
            return this.getLocalisedValue(this.__jsonld.attribution);
        }

        getLocalisedValue(resource: any, locale?: string): string {

            // if the resource is not an array of translations, return the string.
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
            return this.__jsonld.logo;
        }

        getLicense(): string {
            return this.getLocalisedValue(this.__jsonld.license);
        }

        // todo: remove includeRootProperties
        // todo: any resource may have metadata, add resource param
        getMetadata(includeRootProperties?: boolean): any{
            var metadata: Object[] = this.__jsonld.metadata;

            // get localised value for each metadata item.
            for (var i = 0; i < metadata.length; i++) {
                var item: any = metadata[i];

                item.label = this.getLocalisedValue(item.label);
                item.value  = this.getLocalisedValue(item.value);
            }

            if (metadata && includeRootProperties){
                if (this.__jsonld.description){
                    metadata.push({
                        "label": "description",
                        "value": this.getLocalisedValue(this.__jsonld.description)
                    });
                }
                if (this.__jsonld.attribution){
                    metadata.push({
                        "label": "attribution",
                        "value": this.getLocalisedValue(this.__jsonld.attribution)
                    });
                }
                if (this.__jsonld.license){
                    metadata.push({
                        "label": "license",
                        "value": this.getLocalisedValue(this.__jsonld.license)
                    });
                }
                if (this.__jsonld.logo){
                    metadata.push({
                        "label": "logo",
                        "value": '<img src="' + this.__jsonld.logo + '"/>'});
                }
            }

            return metadata;
        }

        // todo: use jmespath to flatten tree?
        // https://github.com/jmespath/jmespath.js/issues/6
        getRanges(): IRange[] {

            var ranges: IRange[] = [];

            if (!this.__jsonld.structures && !this.__jsonld.structures.length) return ranges;

            for (var i = 0; i < this.__jsonld.structures.length; i++){
                var r = this.__jsonld.structures[i];
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

        getRendering(resource: IJSONLDResource, format: Manifesto.RenderingFormat | string): IRendering {
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
                // no renderings provided, default to resource.
                //return [new Rendering(resource)];
                return parsed;
            }

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

        getSeeAlso(): any {
            return this.getLocalisedValue(this.__jsonld.seeAlso);
        }

        getService(resource: IJSONLDResource, profile: Manifesto.ServiceProfile | string): IService {

            var services: IService[] = this.getServices(resource);

            // normalise profile to string
            if (typeof profile !== 'string'){
                profile = (<ServiceProfile>profile).toString();
            }

            for (var i = 0; i < services.length; i++){
                var service: IService = services[i];

                if (service.getProfile().toString() === profile) {
                    return service;
                }
            }

            return null;
        }

        getServices(resource: any): IService[] {
            var service;

            // if passing a parsed object, use the __jsonld.service property,
            // otherwise look for a service property
            if (resource.__jsonld){
                service = resource.__jsonld.service;
            } else {
                service = (<any>resource).service;
            }

            var parsed: IService[] = [];

            if (!service) return parsed;

            if (!_isArray(service)){
                service = [service];
            }

            for (var i = 0; i < service.length; i++){
                var s: any = service[i];
                s.__manifest = this;
                parsed.push(new Service(s));
            }

            return parsed;
        }

        getSequenceByIndex(sequenceIndex: number): ISequence {
            return this.sequences[sequenceIndex];
        }

        getTitle(): string {
            return this.getLocalisedValue(this.__jsonld.label);
        }

        getTotalSequences(): number{
            return this.sequences.length;
        }

        getTree(): TreeNode{

            this.treeRoot = new TreeNode('root');
            this.treeRoot.label = "root";

            if (!this.rootRange) return this.treeRoot;

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