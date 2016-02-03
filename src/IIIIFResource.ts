module Manifesto {
    export interface IIIIFResource extends IManifestResource {
        getAttribution(): string;
        getDescription(): string;
        getIIIFResourceType(): IIIFResourceType;
        getLicense(): string;
        getLogo(): string;
        getNavDate(): Date;
        getSeeAlso(): any;
        getTitle(): string;
        getTree(): ITreeNode;
        index: number;
        isLoaded: boolean;
        load(): Promise<IIIIFResource>;
        parentCollection: ICollection;
        treeRoot: ITreeNode;
    }
}