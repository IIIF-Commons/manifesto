import { IManifestoOptions, AnnotationBody, Color, PointSelector } from "./internal";
export declare class Light extends AnnotationBody {
    constructor(jsonld?: any, options?: IManifestoOptions);
    get isAmbientLight(): boolean;
    get isDirectionalLight(): boolean;
    get isSpotLight(): boolean;
    getColor(): Color;
    get Color(): Color;
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
    get Intensity(): number;
    /**
    * As defined in the temp-draft-4.md (
    * https://github.com/IIIF/3d/blob/main/temp-draft-4.md#lights ; 12 May 2024)
    * this quantity is the half-angle of the cone of the spotlight.
    *
    * The inconsistency between this definition of the angle and the definition of
    * fieldOfView for PerspectiveCamera (where the property value defines the full angle) has
    * already been noted: https://github.com/IIIF/api/issues/2284
    *
    * provisional decision is to return undefined in case that this property
    * is accessed in a light that is not a spotlight
    *
    *
    * @returns number
    
    **/
    getAngle(): number | undefined;
    get Angle(): number | undefined;
    /**
    * @return : if not null, is either a PointSelector, or an object
    * with an id matching the id of an Annotation instance.
    **/
    getLookAt(): object | PointSelector | null;
    get LookAt(): object | null;
}
