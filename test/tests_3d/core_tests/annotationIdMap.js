var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');


let manifest_url = {
        local: "http://localhost:3001/model_origin.json",
        remote : "https://raw.githubusercontent.com/IIIF/3d/main/manifests/3_lights/ambient_green_light.json"
    }.remote;
    
let anno1_id = "https://example.org/iiif/3d/anno1";
let anno2_id = "https://example.org/iiif/3d/anno2";

var manifest;

describe('Manifest.annotationIdMap', function() {

    it('loads successfully', function(done) {
        manifesto.loadManifest(manifest_url).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('query annotationIdMap', function() {
        
        var anno1 = manifest.annotationIdMap[anno1_id];
        expect(anno1).to.exist;
        
        var anno2 = manifest.annotationIdMap[anno2_id];
        expect(anno2).to.exist;
        
        
        var anno3 = manifest.annotationIdMap["http://huckleberry"];
        expect(anno3).to.not.exist;
    });
});
