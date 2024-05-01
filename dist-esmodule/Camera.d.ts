import { IManifestoOptions, AnnotationBody } from "./internal";
export declare class Camera extends AnnotationBody {
    constructor(jsonld?: any, options?: IManifestoOptions);
    get isPerspectiveCamera(): boolean;
    /**
    @returns full angular size of perspective viewport in vertical direction.
    Angular unit is degrees
    **/
    getFieldOfView(): number | undefined;
    /**
    Full angular size of perspective viewport in vertical direction.
    Angular unit is degrees
    **/
    get FieldOfView(): number | undefined;
    getLookAt(): object | null;
    get LookAt(): object | null;
}
