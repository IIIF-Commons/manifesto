namespace Manifesto {
    export interface IService extends IManifestResource {
        getConfirmLabel(): string | null;
        getDescription(): string | null;
        getFailureDescription(): string | null;
        getFailureHeader(): string | null;
        getHeader(): string | null;
        getInfoUri(): string;
        getProfile(): ServiceProfile;
        getServiceLabel(): string | null;
    }
}