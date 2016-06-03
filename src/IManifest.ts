module Manifesto {
    export interface IManifest extends Manifesto.IIIIFResource {
        getRangeById(id: string): Manifesto.IRange;
        getRangeByPath(path: string): IRange;
        getRanges(): IRange[];
        getSequences(): ISequence[];
        getSequenceByIndex(index: number): ISequence;
        getTotalSequences(): number;
        getManifestType(): ManifestType;
        getViewingDirection(): Manifesto.ViewingDirection;
        getViewingHint(): ViewingHint;
        getTrackingLabel(): string;
        isMultiSequence(): boolean;
        rootRange: IRange;
    }
}