var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');
//var manifests_3d = require('../fixtures/manifests_3d');


var ExternalResourceType = require('@iiif/vocabulary/dist-commonjs/').ExternalResourceType;
var MediaType = require('@iiif/vocabulary/dist-commonjs/').MediaType;


let manifest,  sequence, scene , annotation, body;

let manifest_url = {
        local: "http://localhost:3001/model_origin.json",
        remote : "https://raw.githubusercontent.com/IIIF/3d/eds/manifests/1_basic_model_in_scene/model_origin.json"
    }.remote;

describe('model_origin', function() {

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
        
    it('that target the scene', function(){        
        var target = annotation.getTarget();
        target.should.be.a('string');
        target.should.equal( scene.id );
    });
    
    it('and body is an AnnotationBody', function(){        
        body = annotation.getBody3D();
        expect( body.isModel ).to.equal(true);
        expect(Array.isArray(body)).to.equal(false);
        expect(body.isSpecificResource).to.not.be.ok;
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
