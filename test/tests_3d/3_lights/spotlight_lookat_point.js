var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');
//var manifests_3d = require('../fixtures/manifests_3d');


var ExternalResourceType = require('@iiif/vocabulary/dist-commonjs/').ExternalResourceType;
var MediaType = require('@iiif/vocabulary/dist-commonjs/').MediaType;


let manifest,  sequence, scene , model, body, annotations;

let manifest_url = {
        local: "http://localhost:3001/model_origin.json",
        remote : "https://raw.githubusercontent.com/vincentmarchetti/iiif3dtsg/spotlight-manifest/manifests/3_lights/spotlight_lookat_positioned.json"
    }.remote;

describe('spotlight', function() {

    it('loads successfully', function(done) {
        manifesto.loadManifest(manifest_url).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
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
        
    
    it('with a spot light', function(){
        // not following find idiom doesn't work if spotlight is inside
        // a SpecificResource
        let lightAnno = scene.Content.find( (anno) => anno.Body[0] instanceof manifesto.Light );
        
        expect(lightAnno).to.exist;
        let body = lightAnno.Body[0];
        let light = (body.isSpecificResource())? body.Source : body;
        expect (light.isSpotLight()).to.equal(true);
        
        expect( light.Intensity).to.equal( 0.6 );
        expect( light.Color ).to.exist;
        expect( light.Angle ).to.equal(3.5);
        
        let lookAt = light.LookAt;
        expect(lookAt).to.exist;
        expect(lookAt.isPointSelector).to.equal(true);
    });
    
    

        
});
