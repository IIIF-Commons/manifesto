
module Manifesto {
    export class Canvas {
        id: string;
        type: CanvasType;
        height: number;
        label: string;
        ranges: Range[] = [];
        width: number;
        getRange() {
            //return M.getCanvasRange(this);
        }
    }
}
