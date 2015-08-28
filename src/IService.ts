module Manifesto {
    export interface IService extends IJSONLDResource {
        getProfile(): ServiceProfile;
        //getDescription(): string;
        getInfoUri(): string;
    }
}