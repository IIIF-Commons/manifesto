import { JSONLDResource } from "./internal";
import { Vector3 } from "threejs-math";
export declare class PointSelector extends JSONLDResource {
    isPointSelector: boolean;
    constructor(jsonld: any);
    getLocation(): Vector3;
}
