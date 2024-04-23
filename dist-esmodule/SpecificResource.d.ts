import { IManifestoOptions, ManifestResource, AnnotationBody, Transform, PointSelector } from "./internal";
/**
    Developer note: This implementation does not strictly adhere
    to the description of SpecificResource in the Web Annotation Model
    document https://www.w3.org/TR/annotation-model/
    section 4 : https://www.w3.org/TR/annotation-model/#specific-resources
    
    In particular, this class is abstract and the 3D subclasses
    will have distinct function signatures
*/
export declare class SpecificResource extends ManifestResource {
    isSpecificResource: boolean;
    constructor(jsonld: any, options?: IManifestoOptions);
    getSource(): object | AnnotationBody;
    getSelector(): PointSelector | null;
    get Selector(): PointSelector | null;
    getTransform(): Transform[];
    get Transform(): Transform[];
}
