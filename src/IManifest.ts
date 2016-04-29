module Manifesto {
    export interface IManifest extends IIIIFResource {
        getRangeById(id: string): IRange;
        getRangeByPath(path: string): IRange;
        getRanges(): IRange[];
        getSequences(): ISequence[];
        getSequenceByIndex(index: number): ISequence;
        getTotalSequences(): number;
        getTree(): TreeNode;
        getManifestType(): ManifestType;
        getViewingDirection(): Manifesto.ViewingDirection;
        isMultiSequence(): boolean;
        rootRange: IRange;
    }
}