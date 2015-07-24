var _isNumber = require("lodash.isnumber");

module Manifesto {
    export class Sequence extends JSONLDResource implements ISequence {
        canvases: Canvas[] = [];
        manifest: IManifest;
        startCanvas: string;
        viewingDirection: ViewingDirection;
        viewingHint: ViewingHint;

        constructor(jsonld: any){
            super(jsonld);
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
            return this.canvases[canvasIndex];
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

        getCanvasIndexByLabel(label: string): number {
            label = label.trim();

            // trim any preceding zeros.
            if (_isNumber(label)) {
                label = parseInt(label, 10).toString();
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

        getLastCanvasLabel(): string {
            // get the last label that isn't empty or '-'.
            for (var i = this.getTotalCanvases() - 1; i >= 0; i--) {
                var canvas: ICanvas = this.getCanvasByIndex(i);
                return canvas.getLabel();
            }

            // none exists, so return '-'.
            return this.manifest.options.defaultLabel;
        }

        getLastPageIndex(): number {
            return this.getTotalCanvases() - 1;
        }

        getNextPageIndex(canvasIndex: number, pagingEnabled?: boolean): number {

            var index;

            if (pagingEnabled){
                var indices = this.getPagedIndices(canvasIndex);

                if (this.viewingDirection === Manifesto.ViewingDirection.rightToLeft){
                    index = indices[0] + 1;
                } else {
                    index = indices.last() + 1;
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

                if (this.viewingDirection === Manifesto.ViewingDirection.rightToLeft){
                    indices = indices.reverse();
                }
            }

            return indices;
        }

        getPrevPageIndex(canvasIndex: number, pagingEnabled?: boolean): number {

            var index;

            if (pagingEnabled){
                var indices = this.getPagedIndices(canvasIndex);

                if (this.viewingDirection === Manifesto.ViewingDirection.rightToLeft){
                    index = indices.last() - 1;
                } else {
                    index = indices[0] - 1;
                }

            } else {
                index = canvasIndex - 1;
            }

            return index;
        }

        getStartCanvasIndex(): number {
            if (this.startCanvas) {
                // if there's a startCanvas attribute, loop through the canvases and return the matching index.
                for (var i = 0; i < this.getTotalCanvases(); i++) {
                    var canvas = this.getCanvasByIndex(i);

                    if (canvas.id === this.startCanvas) return i;
                }
            }

            // default to first canvas.
            return 0;
        }

        getThumbs(width: number, height?: number): Manifesto.Thumb[] {
            var thumbs: Manifesto.Thumb[] = [];

            for (var i = 0; i < this.getTotalCanvases(); i++) {
                var canvas: ICanvas = this.getCanvasByIndex(i);

                //if (!_isNumber(height)) {
                    var heightRatio = canvas.getHeight() / canvas.getWidth();

                    if (heightRatio) {
                        height = Math.floor(width * heightRatio);
                    }
                //}

                var uri = canvas.getThumbUri(width, height);

                thumbs.push(new Manifesto.Thumb(i, uri, canvas.getLabel(), width, height, true));
            }

            return thumbs;
        }

        getStartCanvas(): string {
            return this.jsonld.startCanvas;
        }

        getTotalCanvases(): number{
            return this.canvases.length;
        }

        getViewingDirection(): ViewingDirection {
            if (this.jsonld.viewingDirection){
                return new ViewingDirection(this.jsonld.viewingDirection);
            }

            return Manifesto.ViewingDirection.leftToRight;
        }

        getViewingHint(): ViewingHint {
            if (this.jsonld.viewingHint){
                return new ViewingHint(this.jsonld.viewingHint);
            }

            return null;
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
            return this.viewingHint && (this.viewingHint === ViewingHint.paged);
        }

        // checks if the number of canvases is even - therefore has a front and back cover
        isTotalCanvasesEven(): boolean {
            return this.getTotalCanvases() % 2 === 0;
        }
    }
}