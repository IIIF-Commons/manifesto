import { Annotation, IManifestoOptions, ManifestResource } from "./internal";
export declare class AnnotationPage extends ManifestResource {
    constructor(jsonld: any, options: IManifestoOptions);
    getItems(): Annotation[];
}
