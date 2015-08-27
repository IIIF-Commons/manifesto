module Manifesto {
    export interface IIIIFResource extends IJSONLDResource {
        options: IManifestoOptions;
        isLoaded: boolean;
        getAttribution(): string;
        getDescription(): string;
        getLicense(): string;
        //getLocalisedValue(resource: IJSONLDResource | string, locale?: string): string;
        getLogo(): string;
        //getMetadata(includeRootProperties?: boolean): any;
        //getRendering(resource: IJSONLDResource, format: RenderingFormat | string): IRendering;
        //getRenderings(resource: any): IRendering[];
        getSeeAlso(): any;
        //getService(resource: IJSONLDResource, profile: ServiceProfile | string): IService;
        //getServices(resource: any): IService[];
        getTitle(): string;
        getIIIFResourceType(): IIIFResourceType;
        load(): Promise<IIIIFResource>;
    }
}