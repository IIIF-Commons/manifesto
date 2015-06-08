
module Manifesto {
    export class Sequence {
        id: string;
        viewingDirection: ViewingDirection;
        viewingHint: ViewingHint;
        canvases: Canvas[] = [];
    }
}