var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');
//var manifests_3d = require('../fixtures/manifests_3d');


var ExternalResourceType = require('@iiif/vocabulary/dist-commonjs/').ExternalResourceType;
var MediaType = require('@iiif/vocabulary/dist-commonjs/').MediaType;


let manifest,  sequence, scene , model, body, ambient_light;

let manifest_url = {
        local: "http://localhost:3001/model_origin.json",
        remote : "https://raw.githubusercontent.com/IIIF/3d/main/manifests/3_lights/ambient_green_light.json"
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
        var annotations = scene.getContent();
        expect(annotations.length).to.equal(2);
        ambient_light = annotations[1].getBody3D();
        
    });
        
    it('with an ambient light', function(){
        expect(ambient_light.isModel).to.not.be.ok;
        expect(ambient_light.isLight).to.equal(true);
        expect(ambient_light.isAmbientLight).to.equal(true);
        
        var color = ambient_light.getColor();
        expect(color.red).to.equal(0);
        expect(color.green).to.equal(255);
        expect(color.blue).to.equal(0);
        
        expect(ambient_light.getIntensity()).to.equal(0.5);
              
        
    });
    

        
});
