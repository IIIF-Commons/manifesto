import { JSONLDResource, Thumbnail, Service, Rendering, LabelValuePair, PropertyValue, IManifestoOptions, IExternalResource } from "./internal";
import { ServiceProfile, RenderingFormat, IIIFResourceType } from "@iiif/vocabulary/dist-commonjs";
export declare class ManifestResource extends JSONLDResource {
    externalResource: IExternalResource;
    options: IManifestoOptions;
    constructor(jsonld: any, options?: IManifestoOptions);
    getIIIFResourceType(): IIIFResourceType;
    getLabel(): PropertyValue;
    getDefaultLabel(): string | null;
    getMetadata(): LabelValuePair[];
    getRendering(format: RenderingFormat): Rendering | null;
    getRenderings(): Rendering[];
    getRequiredStatement(): LabelValuePair | null;
    getService(profile: ServiceProfile): Service | null;
    getServices(): Service[];
    getThumbnail(): Thumbnail | null;
    isAnnotation(): boolean;
    isCanvas(): boolean;
    isCollection(): boolean;
    isManifest(): boolean;
    isRange(): boolean;
    isScene(): boolean;
    isSequence(): boolean;
}
