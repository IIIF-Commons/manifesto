"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightRelativeRotation = exports.cameraRelativeRotation = void 0;
var threejs_math_1 = require("threejs-math");
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
function cameraRelativeRotation(direction) {
    if (direction.length() == 0.0)
        throw new Error("degenerate geometry: cameraRelativeRotation");
    // projDirection is the direction projected onto the xz plane
    var projDirection = direction.clone().setComponent(1, 0.0);
    var projLength = projDirection.length();
    // handle the edge case, desired viewing direction is either straight up
    // or straight down
    if (projLength == 0.0) {
        if (direction.y > 0.0) {
            // looking straight up fro below
            return new threejs_math_1.Euler(threejs_math_1.MathUtils.degToRad(+90.0), threejs_math_1.MathUtils.degToRad(180.0), 0, "YXZ");
        }
        else {
            return new threejs_math_1.Euler(threejs_math_1.MathUtils.degToRad(-90.0), threejs_math_1.MathUtils.degToRad(180.0), 0, "YXZ");
        }
    }
    var yAngleRad = Math.atan2(-projDirection.x, -projDirection.z);
    var xAngleRad = Math.atan2(direction.y, projLength);
    return new threejs_math_1.Euler(xAngleRad, yAngleRad, 0.0, "YXZ");
}
exports.cameraRelativeRotation = cameraRelativeRotation;
;
function lightRelativeRotation(direction) {
    if (direction.length() == 0.0)
        throw new Error("degenerate geometry: cameraRelativeRotation");
    var unit_direction = direction.clone().divideScalar(direction.length());
    // negative y axis is initial direction of DirectionalLight, SpotLight
    // in draft 3D API
    var ny_axis = new threejs_math_1.Vector3(0.0, -1.0, 0.0);
    var quat = new threejs_math_1.Quaternion().setFromUnitVectors(ny_axis, unit_direction);
    var tmp = new threejs_math_1.Euler().setFromQuaternion(quat, "ZXY");
    // standard be setting the final intrinsic Y rotation, which is
    // along desired direction, to 0
    return new threejs_math_1.Euler(tmp.x, 0.0, tmp.z, "ZXY");
}
exports.lightRelativeRotation = lightRelativeRotation;
//# sourceMappingURL=Geometry3d.js.map