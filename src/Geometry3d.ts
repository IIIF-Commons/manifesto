import { Vector3, MathUtils , Euler, Quaternion , IOrder} from "threejs-math";
import { RotateTransform } from "./internal";
// https://ros2jsguy.github.io/threejs-math/index.html


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
export function cameraRelativeRotation(direction : Vector3 ): Euler {
    if (direction.length() == 0.0)
        throw new Error("degenerate geometry: cameraRelativeRotation");
        
    // projDirection is the direction projected onto the xz plane
    var projDirection = direction.clone().setComponent(1,0.0);
    var projLength = projDirection.length();
    // handle the edge case, desired viewing direction is either straight up
    // or straight down
    if (projLength == 0.0)
    {   
        if (direction.y > 0.0){
            // looking straight up fro below
            return new Euler(MathUtils.degToRad(+90.0), MathUtils.degToRad(180.0),0,"YXZ");
        }
        else{
            return new Euler(MathUtils.degToRad(-90.0), MathUtils.degToRad(180.0),0,"YXZ");
        }
    }
        
    var yAngleRad = Math.atan2(-projDirection.x, -projDirection.z);
    var xAngleRad = Math.atan2(direction.y, projLength );
    return new Euler(xAngleRad, yAngleRad, 0.0, "YXZ");
};

/**
* Evaluates the rotation required to transform a directional light
* or spot ling, which in iiif 3D spec
* have an initial direction in the -Y direction, to a direction 
* along the input argument
*
* TODO : expand on this documentation taking into account the
*        implied specification that RotateTransform instances
*        are to be interpreted as an Euler angle definition of
*        the rotation
*
* @param direction A vector interpreted as a direction. Client code
*        responsible for not passing a 0-length vector, else a
* 
* @returns threejs-math.EulerAngle instance
**/

export function lightRelativeRotation(direction : Vector3 ): Euler {
    if (direction.length() == 0.0)
        throw new Error("degenerate geometry: cameraRelativeRotation");

    var unit_direction = direction.clone().divideScalar( direction.length() )
    
    // negative y axis is initial direction of DirectionalLight, SpotLight
    // in draft 3D API
    var ny_axis = new Vector3(0.0,-1.0,0.0);
    
    var quat = new Quaternion().setFromUnitVectors(ny_axis, unit_direction);
    var tmp  = new Euler().setFromQuaternion(quat, "ZXY");
    // standard be setting the final intrinsic Y rotation, which is
    // along desired direction, to 0
    return new Euler( tmp.x, 0.0, tmp.z, "ZXY" );
}

/**
* Implements the convention that the 3 component values for the RotateTranform
* cass (properties  x,y,z) are to be interpreted as Euler angles in the intrinsic XYZ
* order
* @param transform : A object with a Rotation member object, properties x,y,z

* 
* @returns threejs-math.EulerAngle instance. From this  threejs-math functionsa
* allow conversion to other rotation representations.
**/
export function eulerFromRotateTransform( transform : RotateTransform ) : Euler {
    var eulerOrder : IOrder = "XYZ";
    var rdata : any = transform.Rotation;
    
    return new Euler(   MathUtils.degToRad( rdata.x) ,
                        MathUtils.degToRad( rdata.y),
                        MathUtils.degToRad( rdata.z),
                        eulerOrder);
}
