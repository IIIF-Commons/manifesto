var expect = require('chai').expect;
var should = require('chai').should();

var threejs_math = require('threejs-math');

describe('threejs_basics', function() {

    it('construct Vector3', function(done) {
        var location = new threejs_math.Vector3(0.5,0.6,0.624499799);
        var dist = location.length();
        expect( dist ).to.be.closeTo(1.0,1.0e-6);
        done();
    });
    
    it('test 30 degree rotation', function(done) {
        var negativeY = new threejs_math.Vector3(0.0, -1.0, 0.0);
        var axisX     = new threejs_math.Vector3(1.0,  0.0, 0.0);
        var angleRadians =  threejs_math.MathUtils.degToRad(30.0);
        
        var quat = new threejs_math.Quaternion().setFromAxisAngle( axisX, angleRadians);
        var actual = negativeY.clone().applyQuaternion( quat );
        
        //console.log("actual rotated " + actual.toArray());
        var expected = new threejs_math.Vector3(0.0, -0.866025, -0.5);
        var error = actual.sub(expected);
        
        
        expect( error.length() ).to.be.at.most(1.0e-6);
        done();
    });

    
    
});