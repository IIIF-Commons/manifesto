import { Vector3, Euler } from "threejs-math";
/**
* performs the calculation required for the lookAt
* property of a camera resource. Determines the
* required angles of two rotations, the first about
* the x axis and the second about the y axis, which will
* rotate the default camera direction (0,0,-1) into the
* direction of the input arguments
*
* Result of calculation is returned as a instance of EulerAngle from the
* threejs-math library. The "axes order" of the EulerAngle is "YXZ": The
* three-js library uses body-fixed axes to represent EulerAngles, which reverse
* the ordering of the "relative rotation" algorithm described in the
* draft 3d api.

* @param direction A vector interpreted as a direction. Client code
*        responsible for not passing a 0-length vector, else a

*
* @returns threejs-math.EulerAngle instance
**/
export declare function cameraRelativeRotation(direction: Vector3): Euler;
export declare function lightRelativeRotation(direction: Vector3): Euler;
