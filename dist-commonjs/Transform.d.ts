import { JSONLDResource } from "./internal";
export declare abstract class Transform extends JSONLDResource {
    constructor(jsonld?: any);
    isTransform: boolean;
    isRotateTransform: boolean | undefined;
    isScaleTransform: boolean | undefined;
    isTranslateTransform: boolean | undefined;
}
