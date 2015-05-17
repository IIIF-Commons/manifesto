
module Manifesto {
    export class Manifest {
        label: string | any[]; // todo: define in jsonld.d.ts
        rootRange: Range;
        sequences: Sequence[] = [];
        structures: Range[] = [];
        viewingDirection: ViewingDirection;
        viewingHint: ViewingHint;
    }
}