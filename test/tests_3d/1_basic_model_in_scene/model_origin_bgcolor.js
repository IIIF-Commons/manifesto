var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');
//var manifests_3d = require('../fixtures/manifests_3d');


var ExternalResourceType = require('@iiif/vocabulary/dist-commonjs/').ExternalResourceType;
var MediaType = require('@iiif/vocabulary/dist-commonjs/').MediaType;


let manifest,  sequence, scene ;

let manifest_url = {
        local: "http://localhost:3001/model_origin_bgcolor.json",
        remote : "https://raw.githubusercontent.com/IIIF/3d/main/manifests/1_basic_model_in_scene/model_origin_bgcolor.json"
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
        expect(scene.isScene());
    });
    
    it('with a defined background color', function(){
        var backgroundColor = scene.getBackgroundColor();
        expect(backgroundColor).to.exist;
        backgroundColor.red.should.equal(255);
        backgroundColor.green.should.equal(0);
        backgroundColor.blue.should.equal(254);
    });
});
