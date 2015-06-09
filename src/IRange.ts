module Manifesto {
    export interface IRange {
        canvases: any[];
        id: string;
        jsonld: any;
        label: string;
        manifest: Manifesto.Manifest;
        parentRange: Range;
        path: string;
        ranges: Range[];
        viewingDirection: ViewingDirection;
        viewingHint: ViewingHint;
        getLabel(): string;
    }
}