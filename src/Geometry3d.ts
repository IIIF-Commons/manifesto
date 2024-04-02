import { Vector3, MathUtils  } from "threejs-math";
// https://ros2jsguy.github.io/threejs-math/index.html


/**
* performs the calculation required for the lookAt
* property of a camera resource. Determines the
* required angles of two rotations, the first about
* the x axis and the second about the y axis, which will
* rotate the default camerat direction (0,0,-1) into the
* direction of the input arguments
* required angles, in degrees, are returned in a array of
* length 2. element 0 is the (first) rotation about the x
* axis, element 1 is (second) rotation about the y axis
* 
* @param direction A vector interpreted as a direction, in the
* edge case of a zero-length vector a rotation of [0.0,0.0] will
* be returned
* @returns two angle values, in degrees
**/
export function RelativeRotation(direction : Vector3 ): number[] {
    if (direction.length() == 0.0)
        return [0.0,0.0];
        
    // projDirection is the direction projected onto the xz plane
    var projDirection = direction.clone().setComponent(1,0.0);
    
    var yAngleRad = Math.atan2(-projDirection.x, -projDirection.z);
    var xAngleRad = Math.atan2(direction.y, projDirection.length() );
    
    return [MathUtils.radToDeg(xAngleRad) , MathUtils.radToDeg(yAngleRad) ];
    
};