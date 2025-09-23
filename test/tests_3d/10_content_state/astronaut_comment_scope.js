var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');
//var manifests_3d = require('../fixtures/manifests_3d');


var ExternalResourceType = require('@iiif/vocabulary/dist-commonjs/').ExternalResourceType;
var MediaType = require('@iiif/vocabulary/dist-commonjs/').MediaType;


let manifest,  sequence, scene , annotation, body, comments;

let manifest_url = {
        local: "",
        remote : "https://raw.githubusercontent.com/IIIF/3d/astronaut_comment_scope/manifests/10_content_state/astronaut_comment_scope.json"
    }.remote;

describe('astronaut_comment_scope', function() {

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
        comments = scene.getNonContentAnnotations();
        expect(comments.length).to.equal(2);
    });
    
    it('that target the Scene with PointSelector', function(){
        const comment = comments[0];

        const target = comment.getTarget();
        expect( target.isSpecificResource );
        expect( target.getSource()).to.exist;
        
        const selector = target.getSelector();
        expect( selector.isPointSelector );
        
        const location = selector.getLocation();
        expect(location.x).to.exist;
        expect(location.y).to.exist;
        expect(location.z).to.exist;
    });

    it('and that have scope content state', function(){
      const comment = comments[0];

      const target = comment.getTarget();
      expect( target.isSpecificResource );

      const scopeAnnotation = target.getScope();
      expect(scopeAnnotation.isAnnotation()).to.be.true;
      expect(scopeAnnotation.getMotivation()[0]).to.equal('contentState');
    });

    it('with camera annotation', function(){
      const comment = comments[0];

      const scopeContentItems = comment.getScopeContent();
      expect(scopeContentItems.length).to.equal(1);

      const annotation = scopeContentItems[0];
      expect(annotation.isAnnotation()).to.be.true;
      expect(annotation.getMotivation()[0]).to.equal('painting');

      const body = annotation.getBody()[0];
      expect(body.isSpecificResource()).to.equal(false);
      expect(body instanceof manifesto.Camera).to.equal(true);
      expect(body.isPerspectiveCamera()).to.equal(true);

      const target = annotation.getTarget();
      expect(target.isSpecificResource);
      expect(target.getSource()).to.exist;
      const selector = target.getSelector();
      expect(selector.isPointSelector);
      const location = selector.getLocation();
      location.x.should.equal(0);
      location.y.should.equal(2.010847091674805);
      location.z.should.equal(9.11616179783789);

      const lookAtLocation = body.getLookAt()?.getLocation();
      expect(lookAtLocation.x).to.eq(0);
      expect(lookAtLocation.y).to.eq(2.0108470916748047);
      expect(lookAtLocation.z).to.eq(-0.012333005666732798);
    });
});
