module Manifesto {
    export interface IIIIFResource extends IManifestResource {
        getAttribution(): string;
        getDescription(): string;
        getIIIFResourceType(): IIIFResourceType;
        getLicense(): string;
        getLogo(): string;
        getSeeAlso(): any;
        getTitle(): string;
        getTree(): TreeNode;
        isLoaded: boolean;
        load(): Promise<IIIIFResource>;
        treeRoot: TreeNode;
    }
}