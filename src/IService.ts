module Manifesto {
    export interface IService {
        id: string;
        jsonld: any;
        manifest: Manifesto.Manifest;
    }
}