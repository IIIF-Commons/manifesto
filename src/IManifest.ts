namespace Manifesto {
    export interface IManifest extends Manifesto.IIIIFResource {
        getAllRanges(): IRange[];
        getBehavior(): Behavior | null;
        getManifestType(): ManifestType;
        getRangeById(id: string): Manifesto.IRange | null;
        getRangeByPath(path: string): IRange | null;
        getSequenceByIndex(index: number): ISequence;
        getSequences(): ISequence[];
        getTopRanges(): IRange[];
        getTotalSequences(): number;
        getTrackingLabel(): string;
        getViewingDirection(): Manifesto.ViewingDirection | null;
        getViewingHint(): ViewingHint | null;
        isMultiSequence(): boolean;
        isPagingEnabled(): boolean;
        items: ISequence[];
    }
}