import { ManifestResource } from "./ManifestResource";
import { IManifestoOptions } from "./IManifestoOptions";
import { Annotation } from "./Annotation";
export declare class AnnotationPage extends ManifestResource {
    constructor(jsonld: any, options: IManifestoOptions);
    getItems(): Annotation[];
}
