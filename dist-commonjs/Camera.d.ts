import { IManifestoOptions, AnnotationBody, PointSelector } from "./internal";
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
    /**
    * @return : if not null, is either a PointSelector, or an object
    * with an id matching the id of an Annotation instance.
    **/
    getLookAt(): object | PointSelector | null;
    get LookAt(): object | null;
}
