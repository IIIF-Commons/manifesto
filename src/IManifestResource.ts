module Manifesto {
    export interface IManifestResource extends IJSONLDResource{
        //new(jsonld: any, options?: IManifestoOptions);
        options: IManifestoOptions;
        getLabel(): string;
        getService(profile: ServiceProfile | string): IService;
    }
}