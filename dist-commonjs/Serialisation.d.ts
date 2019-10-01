import { IManifestoOptions } from "./IManifestoOptions";
import { IIIFResource } from "./IIIFResource";
import { Collection } from "./Collection";
import { Manifest } from "./Manifest";
export declare class Deserialiser {
    static parse(manifest: any, options?: IManifestoOptions): IIIFResource | null;
    static parseJson(json: any, options?: IManifestoOptions): IIIFResource | null;
    static parseCollection(json: any, options?: IManifestoOptions): Collection;
    static parseCollections(collection: Collection, options?: IManifestoOptions): void;
    static parseManifest(json: any, options?: IManifestoOptions): Manifest;
    static parseManifests(collection: Collection, options?: IManifestoOptions): void;
    static parseItem(json: any, options?: IManifestoOptions): IIIFResource | null;
    static parseItems(collection: Collection, options?: IManifestoOptions): void;
}
