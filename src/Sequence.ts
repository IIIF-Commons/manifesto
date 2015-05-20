
module Manifesto {
    export class Sequence implements JsonLD.resource {
        id: string;
        viewingDirection: ViewingDirection;
        viewingHint: ViewingHint;
        canvases: Canvas[] = [];
    }
}