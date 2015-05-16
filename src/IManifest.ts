
module Manifesto {
    export interface IManifest {
        label: string | any[]; // todo: define in jsonld.d.ts
        rootRange: IRange;
        sequences: ISequence[];
        structures: IRange[];
        viewingDirection: ViewingDirection;
        viewingHint: ViewingHint;
    }
}