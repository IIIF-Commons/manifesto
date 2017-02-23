namespace Manifesto {
    export interface IIIIFResource extends IManifestResource {
        defaultTree: ITreeNode; // the tree generated from the first viewingHint="top" range
        getAttribution(): TranslationCollection;
        getDefaultTree(): ITreeNode;
        getDescription(): TranslationCollection;
        getIIIFResourceType(): IIIFResourceType;
        getLabel(): TranslationCollection;
        getLicense(): string;
        getLogo(): string | null;
        getNavDate(): Date;
        getRelated(): any;
        getSeeAlso(): any;
        index: number;
        isCollection(): boolean;
        isLoaded: boolean;
        isManifest(): boolean;
        load(): Promise<IIIIFResource>;
        parentCollection: ICollection;
        parentLabel: string;
    }
}