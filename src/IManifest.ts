module Manifesto {
    export interface IManifest extends IIIIFResource {
        getRangeById(id: string): IRange;
        getRangeByPath(path: string): IRange;
        getSequenceByIndex(index: number): ISequence;
        getTotalSequences(): number;
        getTree(): TreeNode;
        getManifestType(): ManifestType;
        isMultiSequence(): boolean;
        rootRange: IRange;
        sequences: ISequence[];
    }
}