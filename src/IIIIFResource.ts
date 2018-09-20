namespace Manifesto {
    export interface IIIIFResource extends IManifestResource {
        defaultTree: ITreeNode; // the tree generated from the first viewingHint="top" range
        getAttribution(): LanguageMap;
        getDefaultTree(): ITreeNode;
        getDescription(): LanguageMap;
        getIIIFResourceType(): IIIFResourceType;
        getLicense(): string | null;
        getLogo(): string | null;
        getNavDate(): Date;
        getRelated(): any;
        getRequiredStatement(): Manifesto.LabelValuePair | null;
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