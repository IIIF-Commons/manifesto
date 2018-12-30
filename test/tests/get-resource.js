var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, sequence;

describe('#loadsScroll', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.getResource).then(function(data) {
            manifest = manifesto.create(data);
            sequence = manifest.getSequenceByIndex(0);
            canvas = sequence.getCanvasByIndex(0);
            done();
        });
    });

    it('resource id is returned as a string', function () {
        var images = canvas.getImages();
        var annotation = images[0];
        expect(annotation).to.exist;
        var resource = annotation.getResource();
        expect(resource).to.exist;
        expect(resource.id).to.equal("50b5e49b-ade7-4278-8265-4f72081f26a5")
    });
});