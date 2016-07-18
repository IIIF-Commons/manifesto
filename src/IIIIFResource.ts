module Manifesto {
    export interface IIIIFResource extends IManifestResource {
        defaultTree: ITreeNode; // the tree generated from the first viewingHint="top" range
        getAttribution(): string;
        getDefaultTree(): ITreeNode;
        getDescription(): string;
        getIIIFResourceType(): IIIFResourceType;
        getLabel(): string;
        getLicense(): string;
        getLogo(): string;
        getNavDate(): Date;
        getRelated(): any;
        getSeeAlso(): any;
        index: number;
        isLoaded: boolean;
        load(): Promise<IIIIFResource>;
        parentCollection: ICollection;
        parentLabel: string;
    }
}