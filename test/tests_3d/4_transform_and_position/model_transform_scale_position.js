var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');
//var manifests_3d = require('../fixtures/manifests_3d');


var ExternalResourceType = require('@iiif/vocabulary/dist-commonjs/').ExternalResourceType;
var MediaType = require('@iiif/vocabulary/dist-commonjs/').MediaType;


let manifest, sequence, scene , annotation, body;

let manifest_url = {
    local: "http://localhost:3001/model_origin.json",
    remote : "https://raw.githubusercontent.com/IIIF/3d/main/manifests/4_transform_and_position/model_transform_scale_position.json"
}.remote;

describe('model_transform_scale_position', function() {

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


    it('with two annotations', function(){
        var annotations = scene.getContent();
        expect(annotations.length).to.equal(2);
        annotation = annotations[1];
    });

    it('annotations[1] with 1 SpecificResource body', function(){
        body = annotation.getBody()[0]
        expect( body.isSpecificResource() ).to.be.ok ;
        expect( body.isModel() ).to.be.ok;
        var transform = body.getTransform();
        expect(Array.isArray(transform)).to.be.ok;
        expect(transform.length).to.equal(2);

        var tt = transform[0];
        expect(tt.isTranslateTransform ).to.equal(true);
        expect(tt.isRotateTransform ).to.not.be.ok;

        var tdata = tt.getTranslation();
        expect(tdata.x).to.equal(2.0);
        expect(tdata.y).to.equal(2.0);
        expect(tdata.z).to.equal(2.0);

        var st = transform[1];
        expect(st.isTranslateTransform ).to.not.be.ok;
        expect(st.isScaleTransform ).to.equal(true);

        var sdata = st.getScale();
        expect(sdata.x).to.equal(2.0);
        expect(sdata.y).to.equal(2.0);
        expect(sdata.z).to.equal(2.0);
    });

    it('with source pointing to manifest', function(){
        var source = body.getSource();
        expect( source.isModel() ).to.equal(true);
        source.id.should.include('astronaut.glb');
    })

    it('targeting a SpecificResource with PointSelector', function(){
        var target = annotation.getTarget();

        if (target.isSpecificResource)
            target.getSource().should.exist;

        expect( target.isSpecificResource ).to.be.ok;

        var selector = target.getSelector();
        expect( selector.isPointSelector ).to.be.ok;
        var location = selector.getLocation();
        location.x.should.equal( 1.0);
        location.y.should.equal( 0.0);
        location.z.should.equal( 0.0);
    });
});
