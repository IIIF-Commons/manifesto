var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests_3d = require('../fixtures/manifests_3d');

var manifest,  sequence, scene ;

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
    });
    
    it('is a scene', function(){
        expect(scene.isScene());
    });


});
