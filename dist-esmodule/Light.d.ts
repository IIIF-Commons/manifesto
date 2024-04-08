import { IManifestoOptions, AnnotationBody, Color } from "./internal";
export declare class Light extends AnnotationBody {
    constructor(jsonld?: any, options?: IManifestoOptions);
    get isAmbientLight(): boolean;
    get isDirectionalLight(): boolean;
    getColor(): Color;
    /**
    * The implementation of the intensity is based on
    * {@link https://github.com/IIIF/3d/blob/main/temp-draft-4.md | temp-draft-4.md }
    * and the example 3D manifests
    * {@link https://github.com/IIIF/3d/tree/main/manifests/3_lights | lights }
    * on 24 Mar 2024. The intensity property in the manifest is an object
    * with declared type 'Value', a numeric property named 'value' and a
    * property named unit . This implementation will only work with a unit == 'relative'
    * and it will be assumed that a relative unit value of 1.0 corresponds to the
    * brightest light source a rendering engine supports.
    *
    * This code will implement a default intensity of 1.0
    **/
    getIntensity(): number;
}
