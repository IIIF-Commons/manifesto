var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');

var threejs_math = require('threejs-math');

describe('Geometry3d: cameraRelativeRotation', function() {

    it('relativeRotation (2.0,-1.0,4.0)', function (){
        var direction = new threejs_math.Vector3(2.0, -1.0, 4.0);
        var unit_direction = direction.divideScalar(direction.length())
        var euler = manifesto.cameraRelativeRotation(direction);
        expect(euler.isEuler).to.equal(true);
        
        var x_axis = new threejs_math.Vector3(1.0,0.0,0.0);
        var y_axis = new threejs_math.Vector3(0.0,1.0,0.0);
        var nz_axis = new threejs_math.Vector3(0.0,0.0,-1.0);
        
        // and the camera axis
        var camera_direction = nz_axis.applyEuler(euler);
        expect(camera_direction.isVector3).to.equal(true);
        
        var camera_right     = x_axis.applyEuler(euler);
        var camera_up        = y_axis.applyEuler(euler);
        
        // directions nearly equal
        expect( new threejs_math.Vector3().subVectors(camera_direction , unit_direction ).length() ).to.be.lessThan(1.0e-4, "camera direction not correct");
        expect( Math.abs( camera_right.y)).to.be.lessThan(1.0e-4, "camera horizontal axis is horizontal");
        expect( camera_up.x).to.be.greaterThan(0.0, "camera vertical axis is up");        
    });
    
    it('looking straight down from above', function (){
        var direction = new threejs_math.Vector3(0.0, -1.0, 0.0);
        var unit_direction = direction.clone().divideScalar(direction.length())
        var euler = manifesto.cameraRelativeRotation(direction);
        expect(euler.isEuler).to.equal(true);
        
        var x_axis = new threejs_math.Vector3(1.0,0.0,0.0);
        var y_axis = new threejs_math.Vector3(0.0,1.0,0.0);
        var nz_axis = new threejs_math.Vector3(0.0,0.0,-1.0);
        var z_axis  = new threejs_math.Vector3(0.0,0.0,+1.0)
        
        // and the camera axis
        var camera_direction = nz_axis.clone().applyEuler(euler);
        expect(camera_direction.isVector3).to.equal(true);
        
        
        var camera_up        = y_axis.clone().applyEuler(euler);
        
        // directions nearly equal
        expect( new threejs_math.Vector3().subVectors(camera_direction , unit_direction ).length() ).to.be.lessThan(1.0e-4, "camera direction not correct");
        expect( new threejs_math.Vector3().subVectors(camera_up        , z_axis ).length()).to.be.lessThan(1.0e-4, "camera vertical axis is forward");        
    });
    
    it('looking straight up from below', function (){
        var direction = new threejs_math.Vector3(0.0, 1.0, 0.0);
        var unit_direction = direction.clone().divideScalar(direction.length())
        var euler = manifesto.cameraRelativeRotation(direction);
        expect(euler.isEuler).to.equal(true);
        
        var x_axis = new threejs_math.Vector3(1.0,0.0,0.0);
        var y_axis = new threejs_math.Vector3(0.0,1.0,0.0);
        var nz_axis = new threejs_math.Vector3(0.0,0.0,-1.0);
        var z_axis  = new threejs_math.Vector3(0.0,0.0,+1.0);
        
        // and the camera axis
        var camera_direction = nz_axis.clone().applyEuler(euler);
        expect(camera_direction.isVector3).to.equal(true);
        
        
        var camera_up        = y_axis.clone().applyEuler(euler);
        // directions nearly equal
        expect( new threejs_math.Vector3().subVectors(camera_direction , unit_direction ).length() ).to.be.lessThan(1.0e-4, "camera direction not correct");
        expect( new threejs_math.Vector3().subVectors(camera_up        , nz_axis ).length()).to.be.lessThan(1.0e-4,         "camera vertical axis is backward");        
    });


    
    
});

describe('Geometry3d: lightRelativeRotation', function() {

    it('relativeRotation (2.0,-1.0,4.0)', function (){
        var direction = new threejs_math.Vector3(2.0, -1.0, 4.0);
        var unit_direction = direction.divideScalar(direction.length())
        var euler = manifesto.lightRelativeRotation(direction);
        expect(euler.isEuler).to.equal(true);
        
        var ny_axis = new threejs_math.Vector3(0.0,-1.0,0.0);
        
        var light_direction = ny_axis.clone().applyEuler(euler);
        // directions nearly equal
        expect( new threejs_math.Vector3().subVectors(light_direction , unit_direction ).length() ).to.be.lessThan(1.0e-4, "light direction not correct"); 
    });
});

describe('Geometry3d: eulerFromRotateTransform', function() {

    // based on the https://raw.githubusercontent.com/IIIF/3d/whale_anno/manifests/xx_whale_comments/c_comment_annotation_camera.json
    // manifesto at commit f35a1ad  (27 July 2024)
    it('c_comment_annotation_camera', function (){
    
        var transform = new manifesto.RotateTransform(
                {
                    "type": "RotateTransform",
                    "x": -15.0,
                    "y": 215.0,
                    "z": 0.0
                  }       
        );
        
        var euler = manifesto.eulerFromRotateTransform( transform );
        
        expect(euler).to.exist;
        
        var neg_z_axis =  new threejs_math.Vector3(0.0,0.0,-1.0);
        
        var rotated_z_axis = neg_z_axis.clone().applyEuler(euler);
        
        // evaluate the desired direction based on defined camera
        // position (lookFrom) and target position (lookAt)
        var lookFrom = new threejs_math.Vector3( -0.25, 0.0, -0.5); 
        var lookAt = new threejs_math.Vector3(0.040, 0.063, -0.066);
        
        var desired_direction = lookAt.clone().sub(lookFrom).normalize();
        var direction_error = desired_direction.clone().sub(rotated_z_axis);
        
        // apply very lax test, since the camera orientation may have been eyeballed
        // only in a threeJS editor, particularly there may be a depth imprecision.
        expect( direction_error.length()).to.be.lessThan(1.5e-1, "rotated z direction not correct");
        
    });
});

describe('Geometry3d: combineTransformsToMatrix', function() {
    it('combines transform scale -> translate', function (){
        const translateT = new manifesto.TranslateTransform({
            type: 'TranslateTransform',
            x: 2,
            y: 2,
            z: 2
        })

        const scaleT = new manifesto.ScaleTransform({
            type: 'ScaleTransform',
            x: 2,
            y: 2,
            z: 2
        })

        const matrix = manifesto.combineTransformsToMatrix([translateT, scaleT]);
        const { translation, rotation, scale } = manifesto.decomposeMatrix(matrix);

        expect(translation).to.exist;
        expect(rotation).to.exist;
        expect(scale).to.exist;

        expect(translation.x).to.equal(4);
        expect(translation.y).to.equal(4);
        expect(translation.z).to.equal(4);

        expect(scale.x).to.equal(2);
        expect(scale.y).to.equal(2);
        expect(scale.z).to.equal(2);

        expect(rotation.x).to.equal(0);
        expect(rotation.y).to.equal(0);
        expect(rotation.z).to.equal(0);
    });

    it('combines transform translate -> scale', function (){
        const translateT = new manifesto.TranslateTransform({
            type: 'TranslateTransform',
            x: 2,
            y: 2,
            z: 2
        })

        const scaleT = new manifesto.ScaleTransform({
            type: 'ScaleTransform',
            x: 2,
            y: 2,
            z: 2
        })

        const matrix = manifesto.combineTransformsToMatrix([scaleT, translateT]);
        const { translation, rotation, scale } = manifesto.decomposeMatrix(matrix);

        expect(translation).to.exist;
        expect(rotation).to.exist;
        expect(scale).to.exist;

        expect(translation.x).to.equal(2);
        expect(translation.y).to.equal(2);
        expect(translation.z).to.equal(2);

        expect(scale.x).to.equal(2);
        expect(scale.y).to.equal(2);
        expect(scale.z).to.equal(2);

        expect(rotation.x).to.equal(0);
        expect(rotation.y).to.equal(0);
        expect(rotation.z).to.equal(0);
    });

    it('combines transform translate -> rotate', function (){
        const translateT = new manifesto.TranslateTransform({
            type: 'TranslateTransform',
            x: 2,
            y: 0,
            z: 0
        })

        const rotateT = new manifesto.RotateTransform({
            type: 'RotateTransform',
            x: 0,
            y: 90,
            z: 0
        })

        const matrix = manifesto.combineTransformsToMatrix([translateT, rotateT]);
        const { translation, rotation, scale } = manifesto.decomposeMatrix(matrix);

        expect(translation).to.exist;
        expect(rotation).to.exist;
        expect(scale).to.exist;

        expect(translation.x).to.be.closeTo(0, 0.000001);
        expect(translation.y).to.be.closeTo(0, 0.000001);
        expect(translation.z).to.be.closeTo(-2, 0.000001);

        expect(scale.x).to.equal(1);
        expect(scale.y).to.equal(1);
        expect(scale.z).to.equal(1);

        expect(rotation.x).to.equal(0);
        expect(rotation.y).to.equal(Math.PI / 2);
        expect(rotation.z).to.equal(0);
    });

    it('combines transform rotate -> translate', function (){
        const translateT = new manifesto.TranslateTransform({
            type: 'TranslateTransform',
            x: 2,
            y: 0,
            z: 0
        })

        const rotateT = new manifesto.RotateTransform({
            type: 'RotateTransform',
            x: 0,
            y: 90,
            z: 0
        })

        const matrix = manifesto.combineTransformsToMatrix([rotateT, translateT]);
        const { translation, rotation, scale } = manifesto.decomposeMatrix(matrix);

        expect(translation).to.exist;
        expect(rotation).to.exist;
        expect(scale).to.exist;

        expect(translation.x).to.be.closeTo(2, 0.000001);
        expect(translation.y).to.be.closeTo(0, 0.000001);
        expect(translation.z).to.be.closeTo(0, 0.000001);

        expect(scale.x).to.equal(1);
        expect(scale.y).to.equal(1);
        expect(scale.z).to.equal(1);

        expect(rotation.x).to.equal(0);
        expect(rotation.y).to.equal(Math.PI / 2);
        expect(rotation.z).to.equal(0);
    });

    it('combines transform rotate -> rotate', function (){
        const rotateTFirst = new manifesto.RotateTransform({
            type: 'RotateTransform',
            x: 30,
            y: 0,
            z: 0
        })

        const rotateTSecond = new manifesto.RotateTransform({
            type: 'RotateTransform',
            x: 15,
            y: 0,
            z: 0
        })

        const matrix = manifesto.combineTransformsToMatrix([rotateTFirst, rotateTSecond]);
        const { translation, rotation, scale } = manifesto.decomposeMatrix(matrix);

        expect(translation).to.exist;
        expect(rotation).to.exist;
        expect(scale).to.exist;

        expect(translation.x).to.be.closeTo(0, 0.000001);
        expect(translation.y).to.be.closeTo(0, 0.000001);
        expect(translation.z).to.be.closeTo(0, 0.000001);

        expect(scale.x).to.equal(1);
        expect(scale.y).to.equal(1);
        expect(scale.z).to.equal(1);

        expect(rotation.x).to.be.closeTo(Math.PI / 4, 0.000001);
        expect(rotation.y).to.be.closeTo(0, 0.000001);
        expect(rotation.z).to.be.closeTo(0, 0.000001);
    });

    it('combines transform rotate -> rotate (2)', function (){
        const rotateTFirst = new manifesto.RotateTransform({
            type: 'RotateTransform',
            x: 0,
            y: 45,
            z: 0
        })

        const rotateTSecond = new manifesto.RotateTransform({
            type: 'RotateTransform',
            x: 60,
            y: 0,
            z: 0
        })

        const matrix = manifesto.combineTransformsToMatrix([rotateTFirst, rotateTSecond]);
        const { translation, rotation, scale } = manifesto.decomposeMatrix(matrix);

        expect(translation).to.exist;
        expect(rotation).to.exist;
        expect(scale).to.exist;

        expect(translation.x).to.be.closeTo(0, 0.000001);
        expect(translation.y).to.be.closeTo(0, 0.000001);
        expect(translation.z).to.be.closeTo(0, 0.000001);

        expect(scale.x).to.equal(1);
        expect(scale.y).to.equal(1);
        expect(scale.z).to.equal(1);

        expect(rotation.x).to.be.closeTo(Math.PI / 3, 0.000001);
        expect(rotation.y).to.be.closeTo(Math.PI / 4, 0.000001);
        expect(rotation.z).to.be.closeTo(0, 0.000001);
    }); 
    it('combines transform translate -> rotate -> scale', function (){
        const translateT = new manifesto.TranslateTransform({
            type: 'TranslateTransform',
            x: 2,
            y: 0,
            z: 0
        })

        const rotateT = new manifesto.RotateTransform({
            type: 'RotateTransform',
            x: 0,
            y: 90,
            z: 0
        })

        const scaleT = new manifesto.ScaleTransform({
            type: 'ScaleTransform',
            x: 2,
            y: 2,
            z: 2
        })

        const matrix = manifesto.combineTransformsToMatrix([translateT, rotateT, scaleT]);
        const { translation, rotation, scale } = manifesto.decomposeMatrix(matrix);

        expect(translation).to.exist;
        expect(rotation).to.exist;
        expect(scale).to.exist;

        expect(translation.x).to.be.closeTo(0, 0.000001);
        expect(translation.y).to.be.closeTo(0, 0.000001);
        expect(translation.z).to.be.closeTo(-4, 0.000001);

        expect(scale.x).to.equal(2);
        expect(scale.y).to.equal(2);
        expect(scale.z).to.equal(2);

        expect(rotation.x).to.equal(0);
        expect(rotation.y).to.equal(Math.PI / 2);
        expect(rotation.z).to.equal(0);
    });
});

describe('Geometry3d: combineTransformsToTRS', function() {
    it('combines transform scale -> translate', function (){
        const translateT = new manifesto.TranslateTransform({
            type: 'TranslateTransform',
            x: 2,
            y: 2,
            z: 2
        })

        const scaleT = new manifesto.ScaleTransform({
            type: 'ScaleTransform',
            x: 2,
            y: 2,
            z: 2
        })

        const { translation, rotation, scale } = manifesto.combineTransformsToTRS([translateT, scaleT]);

        expect(translation).to.exist;
        expect(rotation).to.exist;
        expect(scale).to.exist;

        expect(translation.x).to.equal(4);
        expect(translation.y).to.equal(4);
        expect(translation.z).to.equal(4);

        expect(scale.x).to.equal(2);
        expect(scale.y).to.equal(2);
        expect(scale.z).to.equal(2);

        expect(rotation.x).to.equal(0);
        expect(rotation.y).to.equal(0);
        expect(rotation.z).to.equal(0);
    });

    it('combines transform translate -> scale', function (){
        const translateT = new manifesto.TranslateTransform({
            type: 'TranslateTransform',
            x: 2,
            y: 2,
            z: 2
        })

        const scaleT = new manifesto.ScaleTransform({
            type: 'ScaleTransform',
            x: 2,
            y: 2,
            z: 2
        })

        const { translation, rotation, scale } = manifesto.combineTransformsToTRS([scaleT, translateT]);

        expect(translation).to.exist;
        expect(rotation).to.exist;
        expect(scale).to.exist;

        expect(translation.x).to.equal(2);
        expect(translation.y).to.equal(2);
        expect(translation.z).to.equal(2);

        expect(scale.x).to.equal(2);
        expect(scale.y).to.equal(2);
        expect(scale.z).to.equal(2);

        expect(rotation.x).to.equal(0);
        expect(rotation.y).to.equal(0);
        expect(rotation.z).to.equal(0);
    });

    it('combines transform translate -> rotate', function (){
        const translateT = new manifesto.TranslateTransform({
            type: 'TranslateTransform',
            x: 2,
            y: 0,
            z: 0
        })

        const rotateT = new manifesto.RotateTransform({
            type: 'RotateTransform',
            x: 0,
            y: 90,
            z: 0
        })

        const { translation, rotation, scale } = manifesto.combineTransformsToTRS([translateT, rotateT]);

        expect(translation).to.exist;
        expect(rotation).to.exist;
        expect(scale).to.exist;

        expect(translation.x).to.be.closeTo(0, 0.000001);
        expect(translation.y).to.be.closeTo(0, 0.000001);
        expect(translation.z).to.be.closeTo(-2, 0.000001);

        expect(scale.x).to.equal(1);
        expect(scale.y).to.equal(1);
        expect(scale.z).to.equal(1);

        expect(rotation.x).to.equal(0);
        expect(rotation.y).to.equal(Math.PI / 2);
        expect(rotation.z).to.equal(0);
    });

    it('combines transform rotate -> translate', function (){
        const translateT = new manifesto.TranslateTransform({
            type: 'TranslateTransform',
            x: 2,
            y: 0,
            z: 0
        })

        const rotateT = new manifesto.RotateTransform({
            type: 'RotateTransform',
            x: 0,
            y: 90,
            z: 0
        })

        const { translation, rotation, scale } = manifesto.combineTransformsToTRS([rotateT, translateT]);

        expect(translation).to.exist;
        expect(rotation).to.exist;
        expect(scale).to.exist;

        expect(translation.x).to.be.closeTo(2, 0.000001);
        expect(translation.y).to.be.closeTo(0, 0.000001);
        expect(translation.z).to.be.closeTo(0, 0.000001);

        expect(scale.x).to.equal(1);
        expect(scale.y).to.equal(1);
        expect(scale.z).to.equal(1);

        expect(rotation.x).to.equal(0);
        expect(rotation.y).to.equal(Math.PI / 2);
        expect(rotation.z).to.equal(0);
    });

    it('combines transform rotate -> rotate', function (){
        const rotateTFirst = new manifesto.RotateTransform({
            type: 'RotateTransform',
            x: 30,
            y: 0,
            z: 0
        })

        const rotateTSecond = new manifesto.RotateTransform({
            type: 'RotateTransform',
            x: 15,
            y: 0,
            z: 0
        })

        const { translation, rotation, scale } = manifesto.combineTransformsToTRS([rotateTFirst, rotateTSecond]);

        expect(translation).to.exist;
        expect(rotation).to.exist;
        expect(scale).to.exist;

        expect(translation.x).to.be.closeTo(0, 0.000001);
        expect(translation.y).to.be.closeTo(0, 0.000001);
        expect(translation.z).to.be.closeTo(0, 0.000001);

        expect(scale.x).to.equal(1);
        expect(scale.y).to.equal(1);
        expect(scale.z).to.equal(1);

        expect(rotation.x).to.be.closeTo(Math.PI / 4, 0.000001);
        expect(rotation.y).to.be.closeTo(0, 0.000001);
        expect(rotation.z).to.be.closeTo(0, 0.000001);
    });

    it('combines transform rotate -> rotate (2)', function (){
        const rotateTFirst = new manifesto.RotateTransform({
            type: 'RotateTransform',
            x: 0,
            y: 45,
            z: 0
        })

        const rotateTSecond = new manifesto.RotateTransform({
            type: 'RotateTransform',
            x: 60,
            y: 0,
            z: 0
        })

        const { translation, rotation, scale } = manifesto.combineTransformsToTRS([rotateTFirst, rotateTSecond]);

        expect(translation).to.exist;
        expect(rotation).to.exist;
        expect(scale).to.exist;

        expect(translation.x).to.be.closeTo(0, 0.000001);
        expect(translation.y).to.be.closeTo(0, 0.000001);
        expect(translation.z).to.be.closeTo(0, 0.000001);

        expect(scale.x).to.equal(1);
        expect(scale.y).to.equal(1);
        expect(scale.z).to.equal(1);

        expect(rotation.x).to.be.closeTo(Math.PI / 3, 0.000001);
        expect(rotation.y).to.be.closeTo(Math.PI / 4, 0.000001);
        expect(rotation.z).to.be.closeTo(0, 0.000001);
    });
    it('combines transform translate -> rotate -> scale', function (){
        const translateT = new manifesto.TranslateTransform({
            type: 'TranslateTransform',
            x: 2,
            y: 0,
            z: 0
        })

        const rotateT = new manifesto.RotateTransform({
            type: 'RotateTransform',
            x: 0,
            y: 90,
            z: 0
        })

        const scaleT = new manifesto.ScaleTransform({
            type: 'ScaleTransform',
            x: 2,
            y: 2,
            z: 2
        })

        const { translation, rotation, scale } = manifesto.combineTransformsToTRS([translateT, rotateT, scaleT]);

        expect(translation).to.exist;
        expect(rotation).to.exist;
        expect(scale).to.exist;

        expect(translation.x).to.be.closeTo(0, 0.000001);
        expect(translation.y).to.be.closeTo(0, 0.000001);
        expect(translation.z).to.be.closeTo(-4, 0.000001);

        expect(scale.x).to.equal(2);
        expect(scale.y).to.equal(2);
        expect(scale.z).to.equal(2);

        expect(rotation.x).to.equal(0);
        expect(rotation.y).to.equal(Math.PI / 2);
        expect(rotation.z).to.equal(0);
    });
});
