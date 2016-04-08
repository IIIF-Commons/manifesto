module Manifesto {
    export interface IManifest extends IIIIFResource {
        getRangeById(id: string): IRange;
        getRangeByPath(path: string): IRange;
        getRanges(): IRange[];
        getSequences(): ISequence[];
        getSequenceByIndex(index: number): ISequence;
        getTotalSequences(): number;
        getTree(): ITreeNode;
        getManifestType(): ManifestType;
        getViewingDirection(): Manifesto.ViewingDirection;
        getViewingHint(): ViewingHint;
        getTrackingLabel(): string;
        isMultiSequence(): boolean;
        rootRange: IRange;
    }
}