
module Manifesto {
    export class Range implements JsonLD.resource {
        id: string;
        canvases: any[]; // todo: can be a string or a canvas
        label: string;
        path: string;
        parentRange: Range;
        ranges: Range[];
        viewingHint: ViewingHint;
        viewingDirection: ViewingDirection;
    }
}
