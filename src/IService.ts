namespace Manifesto {
    export interface IService extends IManifestResource {
        getDescription(): string | null;
        getFailureDescription(): string | null;
        getFailureHeader(): string | null;
        getInfoUri(): string;
        getProfile(): ServiceProfile;
    }
}