namespace Manifesto {
    export interface IManifest extends Manifesto.IIIIFResource {
        getAllRanges(): IRange[];
        getManifestType(): ManifestType;
        getRangeById(id: string): Manifesto.IRange;
        getRangeByPath(path: string): IRange;
        getSequenceByIndex(index: number): ISequence;
        getSequences(): ISequence[];
        getTopRanges(): IRange[];
        getTotalSequences(): number;
        getTrackingLabel(): string;
        getViewingDirection(): Manifesto.ViewingDirection;
        getViewingHint(): ViewingHint;
        isMultiSequence(): boolean;
        isPagingEnabled(): boolean;
    }
}