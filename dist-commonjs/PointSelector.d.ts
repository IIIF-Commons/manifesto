import { JSONLDResource } from "./internal";
import { Vector3 } from "threejs-math";
export declare class PointSelector extends JSONLDResource {
    isPointSelector: boolean;
    constructor(jsonld: any);
    /**
    @returns the 3D coordinates of the point as a Vector3 instance.
    **/
    getLocation(): Vector3;
    /**
    @returns the 3D coordinates of the point as a Vector3 instance.
    **/
    get Location(): Vector3;
}
