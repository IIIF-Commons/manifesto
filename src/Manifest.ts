
module Manifesto {
    export class Manifest implements JsonLD.resource {
        id: string;
        label: string | any[]; // todo: define in jsonld.d.ts
        rootRange: Range;
        sequences: Sequence[] = [];
        structures: Range[] = [];
        viewingDirection: ViewingDirection;
        viewingHint: ViewingHint;
    }
}