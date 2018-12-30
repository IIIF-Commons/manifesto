var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, sequence, canvas;

describe('#loadsNGAHighlights', function() {
    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.ngaHighlights).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has a sequence', function () {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });

    it('has a canvas', function () {
        canvas = sequence.getCanvases()[0];
        expect(canvas).to.exist;
    });

    it('has an image service', function () {
        const images = canvas.getImages();
        const firstImage = images[0];
        const resource = firstImage.getResource();
        const services = resource.getServices();
        const isImageProfile = manifesto.Utils.isImageProfile(services[0].getProfile());
        expect(isImageProfile).to.equal(true);
    });
});