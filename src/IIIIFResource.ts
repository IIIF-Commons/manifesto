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
        getTree(): TreeNode;
        index: number;
        isLoaded: boolean;
        load(): Promise<IIIIFResource>;
        parentCollection: ICollection;
        treeRoot: TreeNode;
    }
}