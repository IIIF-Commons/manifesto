import { Annotation, IManifestoOptions, ManifestResource, Color } from "./internal";
export declare class Scene extends ManifestResource {
    constructor(jsonld: any, options: IManifestoOptions);
    getContent(): Annotation[];
    get Content(): Annotation[];
    getAnnotationById(searchId: string): Annotation | null;
    getBackgroundColor(): Color | null;
}
