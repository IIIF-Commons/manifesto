
module Manifesto {
    export class Range {
        id: string;
        canvases: any[] = [];
        label: string;
        path: string;
        parentRange: Range;
        ranges: Range[] = [];
        viewingHint: ViewingHint;
        viewingDirection: ViewingDirection;
    }
}
