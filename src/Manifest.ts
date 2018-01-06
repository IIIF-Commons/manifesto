namespace Manifesto {
    export class Manifest extends IIIFResource implements IManifest {
        public index: number = 0;
        private _allRanges: IRange[] | null = null; 
        private _sequences: ISequence[] | null = null;
        private _topRanges: IRange[] = [];

        constructor(jsonld?: any, options?: IManifestoOptions) {
            super(jsonld, options);

            if (this.__jsonld.structures && this.__jsonld.structures.length) {
                const topRanges: any[] = this._getTopRanges();

                for (let i = 0; i < topRanges.length; i++) {
                    const range: any = topRanges[i]; 
                    this._parseRanges(range, String(i));
                }
            }
        }

        public getDefaultTree(): ITreeNode {
            
            super.getDefaultTree();

            this.defaultTree.data.type = Utils.normaliseType(TreeNodeType.MANIFEST.toString());

            if (!this.isLoaded) {
                return this.defaultTree;
            }

            const topRanges: IRange[] = this.getTopRanges();

            // if there are any ranges in the manifest, default to the first 'top' range or generated placeholder
            if (topRanges.length) {
                topRanges[0].getTree(this.defaultTree);
            }
            
            Manifesto.Utils.generateTreeNodeIds(this.defaultTree);

            return this.defaultTree;
        }

        private _getTopRanges(): any[] {

            const topRanges: any[] = [];

            if (this.__jsonld.structures && this.__jsonld.structures.length) {

                for (let i = 0; i < this.__jsonld.structures.length; i++) {
                    const json: any = this.__jsonld.structures[i];
                    if (json.viewingHint === ViewingHint.TOP.toString()){
                        topRanges.push(json);
                    }
                }

                // if no viewingHint="top" range was found, create a default one
                if (!topRanges.length) {
                    const range: any = {};
                    range.ranges = this.__jsonld.structures;
                    topRanges.push(range);
                }
            }

            return topRanges;
        }

        public getTopRanges(): IRange[] {
            return this._topRanges;
        }

        private _getRangeById(id: string): IRange | null {
            if (this.__jsonld.structures && this.__jsonld.structures.length) {
                for (let i = 0; i < this.__jsonld.structures.length; i++) {
                    const r = this.__jsonld.structures[i];
                    if (r['@id'] === id || r.id === id) {
                        return r;
                    }
                }
            }

            return null;
        }

        //private _parseRangeCanvas(json: any, range: IRange): void {
            // todo: currently this isn't needed
            //var canvas: IJSONLDResource = new JSONLDResource(json);
            //range.members.push(<IManifestResource>canvas);
        //}

        private _parseRanges(r: any, path: string, parentRange?: IRange): void{
            let range: IRange;
            let id: string | null = null;

            if (typeof(r) === 'string'){
                id = r;
                r = this._getRangeById(id);
            }

            if (!r) {
                console.warn("Range:", id, "does not exist");
                return;
            }

            range = new Range(r, this.options);
            range.parentRange = parentRange;
            range.path = path;

            if (!parentRange) {
                this._topRanges.push(range);
            } else {
                parentRange.members.push(range);
            }

            if (r.members) {
                for (let i = 0; i < r.members.length; i++) {
                    const child: any = r.members[i];

                    // todo: use constants
                    if (child['@type'] && child['@type'].toLowerCase() === 'sc:range' || child['type'] && child['type'].toLowerCase() === 'range'){
                        this._parseRanges(child, path + '/' + i, range);
                    } else if (child['@type'] && child['@type'].toLowerCase() === 'sc:canvas' || child['type'] && child['type'].toLowerCase() === 'canvas') {
                        // store the ids on the __jsonld object to be used by Range.getCanvasIds()
                        if (!range.canvases) {
                            range.canvases = [];
                        }

                        const id: string = child['@id'] || child.id;

                        range.canvases.push(id);
                    } 
                }
            } else if (r.ranges) {
                for (let i = 0; i < r.ranges.length; i++) {
                    this._parseRanges(r.ranges[i], path + '/' + i, range);
                }
            }       
        }

        getAllRanges(): IRange[] {

            if (this._allRanges != null)
                return this._allRanges;

            this._allRanges = [];

            const topRanges: IRange[] = this.getTopRanges();

            for (let i = 0; i < topRanges.length; i++) {
                const topRange: IRange = topRanges[i];
                if (topRange.id){
                    this._allRanges.push(topRange); // it might be a placeholder root range
                }
                const subRanges: IRange[] = topRange.getRanges();        
                this._allRanges = this._allRanges.concat(subRanges.en().traverseUnique(range => range.getRanges()).toArray());
            }

            return this._allRanges;
        }

        getRangeById(id: string): IRange | null {

            const ranges: IRange[] = this.getAllRanges();

            for (let i = 0; i < ranges.length; i++) {
                const range: IRange = ranges[i];
                if (range.id === id){
                    return range;
                }
            }

            return null;
        }

        getRangeByPath(path: string): IRange | null {

            const ranges: IRange[] = this.getAllRanges();

            for (let i = 0; i < ranges.length; i++) {
                const range: IRange = ranges[i];
                if (range.path === path) {
                    return range;
                }
            }

            return null;
        }

        getSequences(): ISequence[]{
            if (this._sequences !== null)
                return this._sequences;

            this._sequences = [];

            // if IxIF mediaSequences is present, use that. Otherwise fall back to IIIF sequences.
            const children: any = this.__jsonld.mediaSequences || this.__jsonld.sequences || this.__jsonld.items;

            if (children) {
                for (let i = 0; i < children.length; i++) {
                    const s: any = children[i];
                    const sequence: any = new Sequence(s, this.options);
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
            const service: IService = <IService>this.getService(Manifesto.ServiceProfile.UIEXTENSIONS);
            if (service){
                return new ManifestType(service.getProperty('manifestType'));
            }
            return new ManifestType('');
        }

        getTrackingLabel(): string {
            const service: IService = <IService>this.getService(Manifesto.ServiceProfile.TRACKINGEXTENSIONS);
            if (service){
                return service.getProperty('trackingLabel');
            }
            return '';
        }

        isMultiSequence(): boolean {
            return this.getTotalSequences() > 1;
        }

        isPagingEnabled(): boolean {
            return this.getViewingHint().toString() === Manifesto.ViewingHint.PAGED.toString();
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