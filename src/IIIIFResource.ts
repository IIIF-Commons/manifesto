module Manifesto {
    export interface IIIIFResource extends IManifestResource {
        isLoaded: boolean;
        getAttribution(): string;
        getDescription(): string;
        getLicense(): string;
        getLogo(): string;
        getSeeAlso(): any;
        getTitle(): string;
        getIIIFResourceType(): IIIFResourceType;
        load(): Promise<IIIIFResource>;
    }
}