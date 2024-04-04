var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');


let manifest, annotations;

let manifest_url = {
        local: "",
        remote : "https://raw.githubusercontent.com/vincentmarchetti/iiif3dtsg/main/manifests/2_cameras/positioned_camera_lookat_anno.json"
    }.remote;

describe('positioned_camera_lookat_anno', function() {

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
    
    if('has 1th annotation a Camera', function(){
        var model_anno = annotations[1];
        
        
        
    })
});
