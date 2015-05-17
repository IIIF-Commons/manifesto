
module Manifesto {
    export class Range {
        canvases: any[]; // todo: can be a string or a canvas
        path: string;
        parentRange: Range;
        ranges: Range[];
        viewingHint: ViewingHint;
        viewingDirection: ViewingDirection;
    }
}
