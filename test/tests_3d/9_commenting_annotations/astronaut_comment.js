var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');
//var manifests_3d = require('../fixtures/manifests_3d');


var ExternalResourceType = require('@iiif/vocabulary/dist-commonjs/').ExternalResourceType;
var MediaType = require('@iiif/vocabulary/dist-commonjs/').MediaType;


let manifest,  sequence, scene , annotation, body;

let manifest_url = {
        local: "",
        remote : "https://raw.githubusercontent.com/IIIF/3d/main/manifests/9_commenting_annotations/astronaut_comment.json"
    }.remote;

describe('astronaut_comment', function() {

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
    
    
    it('with one annotation', function(){
        var annotations = scene.getContent();
        expect(annotations.length).to.equal(1);
        annotation = annotations[0];
    });
    
    it('that target the scene', function(){        
      var target = annotation.getTarget();
      target.id.should.exist;
      target.id.should.equal( scene.id );
      
      if (target.isSpecificResource)
          target.getSource().should.exist;
    });

    it('has two commenting annotations', function(){
        const annotations = scene.getNonContentAnnotations();
        expect(annotations.length).to.equal(2);
    });
    
    it('targeting the Scene with PointSelector', function(){
        const annotations = scene.getNonContentAnnotations();
        const annotation = annotations[0];

        const target = annotation.getTarget();
        expect( target.isSpecificResource );
        expect( target.getSource()).to.exist;
        
        const selector = target.getSelector();
        expect( selector.isPointSelector );
        
        const location = selector.getLocation();
        expect(location.x).to.exist;
        expect(location.y).to.exist;
        expect(location.z).to.exist;
    });
});
