var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');
//var manifests_3d = require('../fixtures/manifests_3d');


var ExternalResourceType = require('@iiif/vocabulary/dist-commonjs/').ExternalResourceType;
var MediaType = require('@iiif/vocabulary/dist-commonjs/').MediaType;


let manifest,  sequence, scene , model, body, annotations;

let manifest_url = {
        local: "http://localhost:3001/model_origin.json",
        remote : "https://raw.githubusercontent.com/vincentmarchetti/iiif3dtsg/main/manifests/3_lights/direction_light_transform_rotate.json"
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

    
    it('has a scene with two annotation', function(){
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
        scene = sequence.getScenes()[0];
        expect(scene).to.exist;
        expect(scene.isScene()).to.be.ok;
        annotations = scene.getContent();
        expect(annotations.length).to.equal(2);
        
        
    });
        
    
    it('with a directional light', function(){
        var directional_light_body = annotations[1].getBody()[0];
        //console.log("directional_light_body.isSpecificResource " + directional_light_body.isSpecificResource);
        
        expect(directional_light_body.isSpecificResource).to.equal(true);
        directional_light_transform = directional_light_body;
        directional_light = directional_light_body.getSource();
        
        expect(directional_light.isModel).to.not.be.ok;
        expect(directional_light.isLight).to.equal(true);
        expect(directional_light.isAmbientLight).to.not.be.ok;
        expect(directional_light.isDirectionalLight).to.equal(true);
        
        var color = directional_light.getColor();
        expect(color.red).to.equal(0);
        expect(color.green).to.equal(255);
        expect(color.blue).to.equal(0);
        
        expect(directional_light.getIntensity()).to.equal(0.5);
        
        
        var transforms = directional_light_transform.getTransform();
        expect( transforms ).to.exist;
             
        
    });
    
    

        
});
