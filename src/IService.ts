module Manifesto {
    export interface IService extends IManifestResource {
        getProfile(): ServiceProfile;
        //getDescription(): string;
        getInfoUri(): string;
    }
}