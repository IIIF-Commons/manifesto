import { AnnotationMotivation } from "@iiif/vocabulary/dist-commonjs";
import { AnnotationBody, IManifestoOptions, ManifestResource, Resource, SpecificResource } from "./internal";
import { Vector3 } from "threejs-math";
export declare class Annotation extends ManifestResource {
    constructor(jsonld: any, options: IManifestoOptions);
    getBody(): (AnnotationBody | SpecificResource)[];
    parseBodiesFromItemsList(rawbodies: any): (AnnotationBody | SpecificResource)[];
    parseSingletonBody(rawbody: any): (AnnotationBody | SpecificResource);
    getBody3D(): (AnnotationBody | SpecificResource)[];
    getMotivation(): AnnotationMotivation | null;
    getOn(): string;
    getTarget(): any;
    get Target(): any;
    getResource(): Resource;
    /**
    *    A 3D point coordinate object for the location of an Annotation
    *    to satisfy the requirements of the lookAt property of camera and
    *    spotlight resources, according to the draft v4 API as of April 1 2024
    *
    *    Is the position of the point for a target which is a SpecificResource with
    *    a PointSelector
    *    Otherwise, for example when the annotation target is an entire Scene, the
    *    location for lookAt is the origin (0,0,0)
    **/
    get lookAtLocation(): Vector3;
}
