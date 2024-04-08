import { IManifestoOptions, AnnotationBody } from "./internal";
export declare class Camera extends AnnotationBody {
    constructor(jsonld?: any, options?: IManifestoOptions);
    get isPerspectiveCamera(): boolean;
    getFieldOfView(): number | undefined;
}
