module Manifesto {
    export interface IManifest {
        defaultLabel: string;
        id: string;
        jsonld: any;
        getAttribution(): string;
        getLocalisedValue(prop:any, locale?: string): string;
        getLabel(): string;
        getLogo(): string;
        getLicense(): string;
        getRangeById(id: string): Manifesto.Range;
        getRangeByPath(path: string): Manifesto.Range;
        getRendering(resource:any, format: Manifesto.RenderingFormat): Manifesto.Rendering;
        getSeeAlso(): any;
        getService(resource: any, profile: Manifesto.ServiceProfile): Manifesto.Service;
        getTitle(): string;
        getTotalSequences(): number;
        isMultiSequence(): boolean;
    }
}