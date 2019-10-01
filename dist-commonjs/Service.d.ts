import { ServiceProfile } from "@iiif/vocabulary";
import { ManifestResource } from "./ManifestResource";
import { IManifestoOptions } from "./IManifestoOptions";
export declare class Service extends ManifestResource {
    constructor(jsonld?: any, options?: IManifestoOptions);
    getProfile(): ServiceProfile;
    getConfirmLabel(): string | null;
    getDescription(): string | null;
    getFailureDescription(): string | null;
    getFailureHeader(): string | null;
    getHeader(): string | null;
    getServiceLabel(): string | null;
    getInfoUri(): string;
}
