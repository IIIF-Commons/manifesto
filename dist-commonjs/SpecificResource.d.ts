import { IManifestoOptions, ManifestResource, AnnotationBody, Transform, PointSelector } from "./internal";
/**
    Developer note: This implementation does not strictly adhere
    to the description of SpecificResource in the Web Annotation Model
    document https://www.w3.org/TR/annotation-model/
    section 4 : https://www.w3.org/TR/annotation-model/#specific-resources
    
    The getTransform() method returning an Array of 3D Transfom resources, is
    an extension of SpecificResource beyond the web annotation model.
*/
export declare class SpecificResource extends ManifestResource {
    isAnnotationBody: boolean;
    isSpecificResource: boolean;
    constructor(jsonld: any, options?: IManifestoOptions);
    getSource(): object | AnnotationBody;
    get Source(): object | AnnotationBody;
    getSelector(): PointSelector | null;
    get Selector(): PointSelector | null;
    getTransform(): Transform[];
    get Transform(): Transform[];
}
