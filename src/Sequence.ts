var _last = require("lodash.last");

module Manifesto {
    export class Sequence extends ManifestResource implements ISequence {
        private canvases: ICanvas[] = null;

        constructor(jsonld: any, options: IManifestoOptions){
            super(jsonld, options);
        }

        getCanvases(): ICanvas[]{
            if (this.canvases != null)
                return this.canvases;
            this.canvases = [];

            // if IxIF elements are present, use them. Otherwise fall back to IIIF canvases.
            var children = this.__jsonld.elements || this.__jsonld.canvases;

            if (children) {
                for (var i = 0; i < children.length; i++) {
                    var c = children[i];
                    var canvas:ICanvas = new Canvas(c, this.options);
                    this.canvases.push(canvas);
                }
            }

            return this.canvases;
        }

        getCanvasById(id: string): ICanvas{

            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);

                if (canvas.id === id){
                    return canvas;
                }
            }

            return null;
        }

        getCanvasByIndex(canvasIndex: number): any {
            return this.getCanvases()[canvasIndex];
        }

        getCanvasIndexById(id: string): number {

            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas = this.getCanvasByIndex(i);

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

            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas: ICanvas = this.getCanvasByIndex(i);

                // check if there's a literal match
                if (canvas.getLabel() === label) {
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

                if (regExp.test(canvas.getLabel())) {
                    return i;
                }
            }

            return -1;
        }

        getLastCanvasLabel(alphanumeric?: boolean): string {
            for (var i = this.getTotalCanvases() - 1; i >= 0; i--) {
                var canvas: ICanvas = this.getCanvasByIndex(i);
                var label = canvas.getLabel();

                if (alphanumeric){
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

            var index;

            if (pagingEnabled){
                var indices = this.getPagedIndices(canvasIndex);

                if (this.getViewingDirection().toString() === ViewingDirection.RIGHTTOLEFT.toString()){
                    index = indices[0] + 1;
                } else {
                    index = _last(indices) + 1;
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

            var indices = [];

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

            var index;

            if (pagingEnabled){
                var indices = this.getPagedIndices(canvasIndex);

                if (this.getViewingDirection().toString() === ViewingDirection.RIGHTTOLEFT.toString()){
                    index = _last(indices) - 1;
                } else {
                    index = indices[0] - 1;
                }

            } else {
                index = canvasIndex - 1;
            }

            return index;
        }

        getStartCanvasIndex(): number {
            var startCanvas = this.getStartCanvas();

            if (startCanvas) {
                // if there's a startCanvas attribute, loop through the canvases and return the matching index.
                for (var i = 0; i < this.getTotalCanvases(); i++) {
                    var canvas = this.getCanvasByIndex(i);

                    if (canvas.id === startCanvas) return i;
                }
            }

            // default to first canvas.
            return 0;
        }

        getThumbs(width: number, height?: number): Manifesto.IThumb[] {
            var thumbs: Manifesto.IThumb[] = [];

            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas: ICanvas = this.getCanvasByIndex(i);

                //if (!_isNumber(height)) {
                    var heightRatio = canvas.getHeight() / canvas.getWidth();

                    if (heightRatio) {
                        height = Math.floor(width * heightRatio);
                    }
                //}

                var uri = canvas.getThumbUri(width, height);
                var label = canvas.getLabel();

                thumbs.push(new Manifesto.Thumb(i, uri, label, width, height, true));
            }

            return thumbs;
        }

        getStartCanvas(): string {
            return this.getProperty('startCanvas');
        }

        getTotalCanvases(): number{
            return this.getCanvases().length;
        }

        getViewingDirection(): ViewingDirection {
            if (this.getProperty('viewingDirection')){
                return new ViewingDirection(this.getProperty('viewingDirection'));
            } else if ((<IManifest>this.options.resource).getViewingDirection){
                return (<IManifest>this.options.resource).getViewingDirection();
            }

            return ViewingDirection.LEFTTORIGHT;
        }

        getViewingHint(): ViewingHint {
            if (this.getProperty('viewingHint')){
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

        isMultiCanvas(): boolean{
            return this.getTotalCanvases() > 1;
        }

        isPagingEnabled(): boolean{
            return this.getViewingHint().toString() === Manifesto.ViewingHint.PAGED.toString();
        }

        // checks if the number of canvases is even - therefore has a front and back cover
        isTotalCanvasesEven(): boolean {
            return this.getTotalCanvases() % 2 === 0;
        }
    }
}