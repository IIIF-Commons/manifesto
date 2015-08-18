module Manifesto {
    export interface IIIIFResource extends IJSONLDResource {
        options: IManifestoOptions;
        isLoaded: boolean;
        getAttribution(): string;
        getLicense(): string;
        getLocalisedValue(resource: IJSONLDResource | string, locale?: string): string;
        getLogo(): string;
        getMetadata(includeRootProperties?: boolean): any
        getSeeAlso(): any;
        getService(resource: IJSONLDResource, profile: ServiceProfile | string): IService;
        getServices(resource: any): IService[];
        getTitle(): string;
        getIIIFResourceType(): IIIFResourceType;
        load(): Promise<IIIIFResource>;
    }
}