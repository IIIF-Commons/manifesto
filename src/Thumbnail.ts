import { Resource } from "./Resource";
import { IManifestoOptions } from "./IManifestoOptions";

export class Thumbnail extends Resource {

    constructor(jsonld: any, options: IManifestoOptions) {
        super(jsonld, options);
    }
}