var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, sequence;

describe('#loadsScroll', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.scroll).then(function(data) {
            manifest = manifesto.create(data);
            sequence = manifest.getSequenceByIndex(0);
            canvas = sequence.getCanvasByIndex(0);
            done();
        });
    });

    it('canvas has image', function () {
        var images = canvas.getImages();
        var annotation = images[0];
        expect(annotation).to.exist;
        var resource = annotation.getResource();
        expect(resource).to.exist;
        var profile = manifesto.ServiceProfile.IMAGE_1_CONFORMANCE_LEVEL_1;
        imageService = resource.getService(profile);
        expect(imageService).to.exist;
    });
});