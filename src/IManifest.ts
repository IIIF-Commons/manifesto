module Manifesto {
    export interface IManifest extends IResource {
        defaultLabel: string;
        getAttribution(): string;
        getLocalisedValue(prop: any, locale?: string): string;
        getLabel(): string;
        getLogo(): string;
        getLicense(): string;
        getRangeById(id: string): IRange;
        getRangeByPath(path: string): IRange;
        getRendering(resource: any, format: Manifesto.RenderingFormat): IRendering;
        getSeeAlso(): any;
        getService(resource: any, profile: Manifesto.ServiceProfile): IService;
        getTitle(): string;
        getTotalSequences(): number;
        isMultiSequence(): boolean;
    }
}