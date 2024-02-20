var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests_3d = require('../fixtures/manifests_3d');


var ExternalResourceType = require('@iiif/vocabulary/dist-commonjs/').ExternalResourceType;
var MediaType = require('@iiif/vocabulary/dist-commonjs/').MediaType;


let manifest,  sequence, scene , annotation, body;


describe('model_origin', function() {

    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests_3d.model_origin.local).then(function(data) {
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
        expect(scene.isScene());
    });
    
    
    it('with one annotation', function(){
        var annotations = scene.getContent();
        expect(annotations.length).to.equal(1);
        annotation = annotations[0];
    });
        
    it('that target the scene', function(){        
        var target = annotation.getTarget();
        target.should.be.a('string');
        target.should.equal( scene.id );
    });
    
    it('and body is an AnnotationBody', function(){        
        var bodies = annotation.getBody();
        expect(Array.isArray(bodies));
        bodies.should.have.lengthOf(1);
        body = bodies[0];
        body.getType().should.equal(ExternalResourceType.MODEL);
    });
    
    it('body id looks like a model url', function(){        
        body.id.should.include('astronaut.glb');
    });
    
    it('body Format (if defined) is glb or glTF', function(){
        var mediaType = body.getFormat();
        if (mediaType)
            ['MediaType.GLB, MediaType.GLTF'].should.include(mediaType);
    });
        




});
