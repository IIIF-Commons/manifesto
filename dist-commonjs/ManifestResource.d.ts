import { JSONLDResource } from "./JSONLDResource";
export declare class ManifestResource extends JSONLDResource {
    externalResource: IExternalResource;
    options: IManifestoOptions;
    constructor(jsonld: any, options?: IManifestoOptions);
    getIIIFResourceType(): IIIFResourceType;
    getLabel(): LanguageMap;
    getDefaultLabel(): string | null;
    getMetadata(): LabelValuePair[];
    getRendering(format: RenderingFormat): Rendering | null;
    getRenderings(): Rendering[];
    getService(profile: ServiceProfile): Service | null;
    getServices(): Service[];
    getThumbnail(): Thumbnail | null;
    isAnnotation(): boolean;
    isCanvas(): boolean;
    isCollection(): boolean;
    isManifest(): boolean;
    isRange(): boolean;
    isSequence(): boolean;
}
import { RenderingFormat, ServiceProfile, IIIFResourceType } from "@iiif/vocabulary";
import { IExternalResource } from "./IExternalResource";
import { IManifestoOptions } from "./IManifestoOptions";
import { LanguageMap } from "./LanguageMap";
import { LabelValuePair } from "./LabelValuePair";
import { Thumbnail } from "./Thumbnail";
import { Service } from "./Service";
import { Rendering } from "./Rendering";
