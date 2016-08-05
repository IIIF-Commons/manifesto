var _isArray = require("lodash.isarray");
var _map = require("lodash.map");

module Manifesto {
    export class Manifest extends IIIFResource implements IManifest {
        public index: number = 0;
        private _allRanges: IRange[] = null; 
        private _sequences: ISequence[] = null;
        private _topRanges: IRange[] = [];

        constructor(jsonld?: any, options?: IManifestoOptions) {
            super(jsonld, options);

            if (this.__jsonld.structures && this.__jsonld.structures.length) {
                var topRanges: any[] = this._getTopRanges();

                for (var i = 0; i < topRanges.length; i++) {
                    var range: any = topRanges[i]; 
                    this._parseRanges(range, String(i));
                }
            }
        }

        public getDefaultTree(): ITreeNode {
            
            super.getDefaultTree();

            this.defaultTree.data.type = TreeNodeType.MANIFEST.toString();

            if (!this.isLoaded){
                return this.defaultTree;
            }

            var topRanges: IRange[] = this.getTopRanges();

            // if there are any ranges in the manifest, default to the first 'top' range or generated placeholder
            if (topRanges.length){
                topRanges[0].getTree(this.defaultTree);
            }
            
            Manifesto.Utils.generateTreeNodeIds(this.defaultTree);

            return this.defaultTree;
        }

        private _getTopRanges(): any[] {

            var topRanges: any[] = [];

            if (this.__jsonld.structures && this.__jsonld.structures.length) {

                for (var i = 0; i < this.__jsonld.structures.length; i++) {
                    var json: any = this.__jsonld.structures[i];
                    if (json.viewingHint === ViewingHint.TOP.toString()){
                        topRanges.push(json);
                    }
                }

                // if no viewingHint="top" range was found, create a default one
                if (!topRanges.length){
                    var range: any = {};
                    range.ranges = this.__jsonld.structures;
                    topRanges.push(range);
                }
            }

            return topRanges;
        }

        public getTopRanges(): IRange[] {
            return this._topRanges;
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

        private _parseRangeCanvas(json: any, range: IRange): void {
            //var canvas: IJSONLDResource = new JSONLDResource(json);
            //range.members.push(<IManifestResource>canvas);
        }

        private _parseRanges(r: any, path: string, parentRange?: IRange): void{
            var range: IRange;

            if (_isString(r)){
                r = this._getRangeById(r);
            }

            range = new Range(r, this.options);
            range.parentRange = parentRange;
            range.path = path;

            if (!parentRange){
                this._topRanges.push(range);
            } else {
                parentRange.members.push(range);
            }

            if (r.ranges) {
                for (var j = 0; j < r.ranges.length; j++) {
                    this._parseRanges(r.ranges[j], path + '/' + j, range);
                }
            }

            if (r.canvases) {
                for (var k = 0; k < r.canvases.length; k++) {
                    this._parseRangeCanvas(r.canvases[k], r);
                }
            }

            if (r.members) {
                for (var l = 0; l < r.members.length; l++) {
                    var child = r.members[l];

                    // only add to members if not already parsed from backwards-compatible ranges/canvases arrays
                    if (r.members.en().where(m => m.id === child.id).first()) {
                        continue;
                    }

                    if (child['@type'].toLowerCase() === 'sc:range'){
                        this._parseRanges(child, path + '/' + l, range);
                    } else if (child['@type'].toLowerCase() === 'sc:canvas'){
                        this._parseRangeCanvas(child, r);
                    }
                }
            }
        }

        getAllRanges(): IRange[] {

            if (this._allRanges != null)
                return this._allRanges;

            this._allRanges = [];

            var topRanges: IRange[] = this.getTopRanges();

            for (var i = 0; i < topRanges.length; i++) {
                var topRange: IRange = topRanges[i];
                if (topRange.id){
                    this._allRanges.push(topRange); // it might be a placeholder root range
                }
                var subRanges: IRange[] = topRange.getRanges();        
                this._allRanges = this._allRanges.concat(subRanges.en().traverseUnique(range => range.getRanges()).toArray());
            }

            return this._allRanges;
        }

        getRangeById(id: string): IRange {

            var ranges = this.getAllRanges();

            for (var i = 0; i < ranges.length; i++) {
                var range = ranges[i];
                if (range.id === id){
                    return range;
                }
            }

            return null;
        }

        getRangeByPath(path: string): IRange{

            var ranges = this.getAllRanges();

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

        getManifestType(): ManifestType {
            var service: IService = this.getService(Manifesto.ServiceProfile.UIEXTENSIONS);
            if (service){
                return new ManifestType(service.getProperty('manifestType'));
            }
            return new ManifestType('');
        }

        getTrackingLabel(): string {
            var service: IService = this.getService(Manifesto.ServiceProfile.TRACKINGEXTENSIONS);
            if (service){
                return service.getProperty('trackingLabel');
            }
            return '';
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