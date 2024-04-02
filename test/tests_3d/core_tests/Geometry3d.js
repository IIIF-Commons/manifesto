var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');

var threejs_math = require('threejs-math');

describe('Geometry3d', function() {

    it('relativeRotation 1', function (){
        var test = new threejs_math.Vector3(2.0, -1.0, 0.0);
        var angles = manifesto.relativeRotation( test );
        console.log("angles " + angles);
        
    });
    
    it('relativeRotation 2', function (){
        var test = new threejs_math.Vector3(0.0, 0.0, 1.0);
        var angles = manifesto.relativeRotation( test );
        console.log("angles " + angles);
        
    });
    
    it('relativeRotation 3', function (){
        var test = new threejs_math.Vector3(0.0, -3.0, 10.0);
        var angles = manifesto.relativeRotation( test );
        console.log("angles " + angles);
        
    });
});
