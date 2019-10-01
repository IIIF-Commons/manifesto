import { AnnotationMotivation } from "@iiif/vocabulary";
import { ManifestResource } from "./ManifestResource";
import { IManifestoOptions } from "./IManifestoOptions";
import { AnnotationBody } from "./AnnotationBody";
import { Resource } from "./Resource";
export declare class Annotation extends ManifestResource {
    constructor(jsonld: any, options: IManifestoOptions);
    getBody(): AnnotationBody[];
    getMotivation(): AnnotationMotivation | null;
    getOn(): string;
    getTarget(): string | null;
    getResource(): Resource;
}
