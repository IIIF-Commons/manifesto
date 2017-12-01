namespace Manifesto {
    export class Sequence extends ManifestResource implements ISequence {
        private _canvases: ICanvas[] | null = null;
        private _thumbnails: IThumbnail[] | null = null;

        constructor(jsonld?: any, options?: IManifestoOptions){
            super(jsonld, options);
        }

        getCanvases(): ICanvas[] {
            if (this._canvases != null) return this._canvases;

            this._canvases = [];

            // if IxIF elements are present, use them. Otherwise fall back to IIIF canvases.
            const children = this.__jsonld.elements || this.__jsonld.canvases;

            if (children) {
                for (let i = 0; i < children.length; i++) {
                    var c = children[i];
                    var canvas: ICanvas = new Canvas(c, this.options);
                    canvas.index = i;
                    this._canvases.push(canvas);
                }
            }

            return this._canvases;
        }

        getCanvasById(id: string): ICanvas | null {

            for (let i = 0; i < this.getTotalCanvases(); i++) {
                const canvas = this.getCanvasByIndex(i);

                // normalise canvas id
                const canvasId: string = Utils.normaliseUrl(canvas.id);

                if (Utils.normaliseUrl(id) === canvasId){
                    return canvas;
                }
            }

            return null;
        }

        getCanvasByIndex(canvasIndex: number): any {
            return this.getCanvases()[canvasIndex];
        }

        getCanvasIndexById(id: string): number | null {

            for (let i = 0; i < this.getTotalCanvases(); i++) {
                const canvas = this.getCanvasByIndex(i);

                if (canvas.id === id){
                    return i;
                }
            }

            return null;
        }

        getCanvasIndexByLabel(label: string, foliated?: boolean): number {
            label = label.trim();

            if (!isNaN(<any>label)) { // if the label is numeric
                label = parseInt(label, 10).toString(); // trim any preceding zeros.
                if (foliated) label += 'r'; // default to recto
            }

            var doublePageRegExp = /(\d*)\D+(\d*)/;
            var match, regExp, regStr, labelPart1, labelPart2;

            for (let i = 0; i < this.getTotalCanvases(); i++) {
                const canvas: ICanvas = this.getCanvasByIndex(i);

                // check if there's a literal match
                if (TranslationCollection.getValue(canvas.getLabel(), this.options.locale) === label) {
                    return i;
                }

                // check if there's a match for double-page spreads e.g. 100-101, 100_101, 100 101
                match = doublePageRegExp.exec(label);

                if (!match) continue;

                labelPart1 = match[1];
                labelPart2 = match[2];

                if (!labelPart2) continue;

                regStr = "^" + labelPart1 + "\\D+" + labelPart2 + "$";

                regExp = new RegExp(regStr);

                if (regExp.test(canvas.getLabel().toString())) {
                    return i;
                }
            }

            return -1;
        }

        getLastCanvasLabel(alphanumeric?: boolean): string {
            for (let i = this.getTotalCanvases() - 1; i >= 0; i--) {
                const canvas: ICanvas = this.getCanvasByIndex(i);
                const label: string = <string>TranslationCollection.getValue(canvas.getLabel(), this.options.locale);

                if (alphanumeric) {
                    var regExp = /^[a-zA-Z0-9]*$/;

                    if (regExp.test(label)) {
                        return label;
                    }

                } else if (label){
                    return label;
                }
            }

            return this.options.defaultLabel;
        }

        getLastPageIndex(): number {
            return this.getTotalCanvases() - 1;
        }

        getNextPageIndex(canvasIndex: number, pagingEnabled?: boolean): number {

            let index: number;

            if (pagingEnabled) {
                const indices: number[] = this.getPagedIndices(canvasIndex);

                if (this.getViewingDirection().toString() === ViewingDirection.RIGHTTOLEFT.toString()){
                    index = indices[0] + 1;
                } else {
                    index = indices[indices.length - 1] + 1;
                }
            } else {
                index = canvasIndex + 1;
            }

            if (index > this.getLastPageIndex()) {
                return -1;
            }

            return index;
        }

        getPagedIndices(canvasIndex: number, pagingEnabled?: boolean): number[]{

            let indices: number[] = [];

            if (!pagingEnabled) {
                indices.push(canvasIndex);
            } else {
                if (this.isFirstCanvas(canvasIndex) || this.isLastCanvas(canvasIndex)){
                    indices = [canvasIndex];
                } else if (canvasIndex % 2){
                    indices = [canvasIndex, canvasIndex + 1];
                } else {
                    indices = [canvasIndex - 1, canvasIndex];
                }

                if (this.getViewingDirection().toString() === ViewingDirection.RIGHTTOLEFT.toString()){
                    indices = indices.reverse();
                }
            }

            return indices;
        }

        getPrevPageIndex(canvasIndex: number, pagingEnabled?: boolean): number {

            let index: number;

            if (pagingEnabled) {
                const indices = this.getPagedIndices(canvasIndex);

                if (this.getViewingDirection().toString() === ViewingDirection.RIGHTTOLEFT.toString()){
                    index = indices[indices.length - 1] - 1;
                } else {
                    index = indices[0] - 1;
                }

            } else {
                index = canvasIndex - 1;
            }

            return index;
        }

        getStartCanvasIndex(): number {
            const startCanvas: string = this.getStartCanvas();

            if (startCanvas) {
                // if there's a startCanvas attribute, loop through the canvases and return the matching index.
                for (let i = 0; i < this.getTotalCanvases(); i++) {
                    const canvas = this.getCanvasByIndex(i);

                    if (canvas.id === startCanvas) return i;
                }
            }

            // default to first canvas.
            return 0;
        }

        // todo: deprecate
        getThumbs(width: number, height?: number): Manifesto.IThumb[] {
            console.warn('getThumbs will be deprecated, use getThumbnails instead');
            const thumbs: Manifesto.IThumb[] = [];
            const totalCanvases: number = this.getTotalCanvases();

            for (let i = 0; i < totalCanvases; i++) {
                const canvas: ICanvas = this.getCanvasByIndex(i);
                const thumb: Manifesto.IThumb = new Manifesto.Thumb(width, canvas);
                thumbs.push(thumb);
            }

            return thumbs;
        }

        getThumbnails(): Manifesto.IThumbnail[] {
            if (this._thumbnails != null) return this._thumbnails;            
            this._thumbnails = [];

            const canvases: Manifesto.ICanvas[] = this.getCanvases();

            for (let i = 0; i < canvases.length; i++) {
                const thumbnail: Manifesto.IThumbnail | null = canvases[i].getThumbnail();
                if (thumbnail) {
                    this._thumbnails.push(thumbnail);
                }                
            }

            return this._thumbnails;
        }

        getStartCanvas(): string {
            return this.getProperty('startCanvas');
        }

        getTotalCanvases(): number {
            return this.getCanvases().length;
        }

        getViewingDirection(): ViewingDirection {
            if (this.getProperty('viewingDirection')) {
                return new ViewingDirection(this.getProperty('viewingDirection'));
            } else if ((<IManifest>this.options.resource).getViewingDirection) {
                return (<IManifest>this.options.resource).getViewingDirection();
            }

            return ViewingDirection.LEFTTORIGHT;
        }

        getViewingHint(): ViewingHint {
            if (this.getProperty('viewingHint')) {
                return new ViewingHint(this.getProperty('viewingHint'));
            }

            return ViewingHint.EMPTY;
        }

        isCanvasIndexOutOfRange(canvasIndex: number): boolean {
            return canvasIndex > this.getTotalCanvases() - 1;
        }

        isFirstCanvas(canvasIndex: number): boolean {
            return canvasIndex === 0;
        }

        isLastCanvas(canvasIndex: number): boolean {
            return canvasIndex === this.getTotalCanvases() - 1;
        }

        isMultiCanvas(): boolean {
            return this.getTotalCanvases() > 1;
        }

        isPagingEnabled(): boolean {
            return this.getViewingHint().toString() === Manifesto.ViewingHint.PAGED.toString();
        }

        // checks if the number of canvases is even - therefore has a front and back cover
        isTotalCanvasesEven(): boolean {
            return this.getTotalCanvases() % 2 === 0;
        }
    }
}