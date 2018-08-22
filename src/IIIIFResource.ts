namespace Manifesto {
    export interface IIIIFResource extends IManifestResource {
        defaultTree: ITreeNode; // the tree generated from the first viewingHint="top" range
        getAttribution(): LanguageMap;
        getDefaultLabel(): string | null;
        getDefaultTree(): ITreeNode;
        getDescription(): LanguageMap;
        getIIIFResourceType(): IIIFResourceType;
        getLabel(): LanguageMap;
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