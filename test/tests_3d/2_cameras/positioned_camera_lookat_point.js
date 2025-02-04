var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');

var threejs_math = require('threejs-math');

let manifest, annotations, scene;

let manifest_url = {
        local: "",
        remote : "https://raw.githubusercontent.com/IIIF/3d/main/manifests/2_cameras/positioned_camera_lookat_point.json"
    }.remote;

describe('positioned_camera_lookat_point', function() {

    it('loads successfully', function(done) {
        manifesto.loadManifest(manifest_url).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a sequence', function() {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });

    
    it('has a scene with two annotation', function(){
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
        scene = sequence.getScenes()[0];
        expect(scene).to.exist;
        expect(scene.isScene()).to.be.ok;
        annotations = scene.getContent();
        expect(annotations.length).to.equal(2);
        
        
    });
    
    it('has 1st annotation a Camera', function(){
        var camera_anno = annotations[1];
        let camera = camera_anno.getBody()[0];
                        
        expect(camera.isSpecificResource()).to.equal(false);
        expect(camera instanceof manifesto.Camera).to.equal(true);
        expect(camera.isPerspectiveCamera()).to.equal(true);
        expect(camera.isModel()).to.equal(false,"checking isModel()=false");
        expect(camera.FieldOfView).to.equal(45.0);
        
        let lookedAt = camera.LookAt;
        expect( lookedAt , "find the lookAt annotation.id?").to.exist;
        
        let lookedAtLocation = null;
        if ( lookedAt.isPointSelector ){
            lookedAtLocation = lookedAt.getLocation();            
        }
        else{
            let lookedAtAnnotation = scene.getAnnotationById( lookedAt.id );
            expect( lookedAtAnnotation, "find the lookAt annotation in scene?").to.exist;
            lookedAtLocation = lookedAtAnnotation.LookAtLocation;
        }
        expect( lookedAtLocation ).to.exist;
        
        let lookedFromLocation = camera_anno.LookAtLocation ;
        let direction = lookedAtLocation.clone().sub( lookedFromLocation );
        let exact_unit_direction = direction.clone().divideScalar( direction.length() );
        
        
        expect( [direction.x, direction.y,direction.z]).to.deep.equal([2.0,-2.0,10.0]);
        
        let exact_coords = [exact_unit_direction.x, exact_unit_direction.y,exact_unit_direction.z].join(", ");
        //console.log(`exact direction ( ${exact_coords} )`)
        let euler = manifesto.cameraRelativeRotation( direction );
        
        // next want to evaluate the result:
        // 1. create a quaternion representation from the euler
        // 2. show that athis rotation does 3 things to the unit vectors
        //    attached to the camera
        // 2.1 the camera z axis transforms to be parallel to exact_unit_direction
        // 2.2 the rotated camera x axis is perpendicular to global z axis
        // 2.3 rotated camera y axis z component is positive
        let quat = new threejs_math.Quaternion().setFromEuler( euler );
        
        let camera_direction = new threejs_math.Vector3( 0.0, 0.0, -1.0 ).applyQuaternion( quat );
        
        let camera_direction_coords = [camera_direction.x, camera_direction.y, camera_direction.z ];
        //console.log(`camera direction ( ${camera_direction_coords} )`)
        
        let direction_error = camera_direction.clone().sub(exact_unit_direction);
        let direction_error_coords = [ direction_error.x, direction_error.y, direction_error.z ];
        //console.log(`direction error ( ${direction_error_coords} )`)
        
        expect( direction_error.length() ).to.be.below( 1.0e-8 );
        
        let camera_x_axis = new threejs_math.Vector3( 1.0, 0.0, 0.0 ).applyQuaternion( quat );
        expect( Math.abs( camera_x_axis.y )).to.be.below(1.0e-8);
        
        let camera_y_axis = new threejs_math.Vector3( 0.0, 1.0, 0.0 ).applyQuaternion( quat );
        expect( camera_y_axis.z ).to.be.above(0.0);
        
    });
});
