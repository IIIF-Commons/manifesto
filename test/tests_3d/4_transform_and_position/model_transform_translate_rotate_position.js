var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');
//var manifests_3d = require('../fixtures/manifests_3d');


var ExternalResourceType = require('@iiif/vocabulary/dist-commonjs/').ExternalResourceType;
var MediaType = require('@iiif/vocabulary/dist-commonjs/').MediaType;


let manifest,  sequence, scene , annotation, body;

let manifest_url = {
        local: "http://localhost:3001/model_origin.json",
        remote : "https://raw.githubusercontent.com/IIIF/3d/main/manifests/4_transform_and_position/model_transform_translate_rotate_position.json"
    }.remote;

describe('model_position', function() {

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

    it('has a scene', function() {
        scene = sequence.getScenes()[0];
        expect(scene).to.exist;
        expect(scene.isScene()).to.be.ok;
    });
    
    
    it('with one annotation', function(){
        var annotations = scene.getContent();
        expect(annotations.length).to.equal(1);
        annotation = annotations[0];
    });
    
    it('with 1 SpecificResource body', function(){
        var bodies = annotation.getBody();
        expect(bodies.length).to.equal(1);
        body = bodies[0];
        expect( body.isSpecificResource ).to.be.ok ;
    
    })
    
    it('targeting a SpecificResource with PointSelector', function(){
        var target = annotation.getTarget();
        expect( target.isSpecificResource ).to.be.ok;
        
        var selector = target.getSelector();
        expect( selector.isPointSelector ).to.be.ok;
        var location = selector.getLocation();
        location.x.should.equal( 0.0);
        location.y.should.equal( 0.0);
        location.z.should.equal( 0.0);
    });
        
    
        
});
