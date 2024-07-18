import { JSONLDResource, Thumbnail, Service, Rendering, LabelValuePair, PropertyValue, IManifestoOptions, IExternalResource } from "./internal";
import { ServiceProfile, RenderingFormat, IIIFResourceType } from "@iiif/vocabulary/dist-commonjs";
export declare class ManifestResource extends JSONLDResource {
    externalResource: IExternalResource;
    options: IManifestoOptions;
    constructor(jsonld: any, options?: IManifestoOptions);
    getIIIFResourceType(): IIIFResourceType;
    /**
    * returns the PropertyValue which in turn allows a language-specific string
    * encoded in the json as the "label" property
    * @example
    * var label = manifest.getLabel().getValue(); // returns the string for default locale
    *
    * @example
    * var label = manifest.getLabel().getValue(locale); // locale a string , examples
    *                                                   // would be "fr", "en-US",
    **/
    getLabel(): PropertyValue;
    getSummary(): PropertyValue;
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
