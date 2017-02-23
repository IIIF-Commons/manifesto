namespace Manifesto {
    export interface IService extends IManifestResource {
        getProfile(): ServiceProfile;
        getDescription(): string | null;
        getInfoUri(): string;
    }
}