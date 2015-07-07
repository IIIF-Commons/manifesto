module Manifesto {
    export interface IRange extends IManifestResource {
        canvases: any[];
        label: string;
        parentRange: Range;
        path: string;
        ranges: Range[];
        viewingDirection: ViewingDirection;
        viewingHint: ViewingHint;
        getLabel(): string;
    }
}