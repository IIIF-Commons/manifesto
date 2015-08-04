module Manifesto {
    export interface IManifestResource extends IJSONLDResource{
         getService(profile: ServiceProfile | string): IService;
    }
}