var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, sequence, canvas;

describe('max dimensions', function() {

    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.maxWidthImageApi3).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        })
    });

    it('has a sequence', function() {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });

    it('has a canvas', function() {
        canvas = sequence.getCanvases()[0];
        expect(canvas).to.exist;
    });

    it('returns max dimensions', function() {
    canvas.externalResource = {
        data: {
        maxWidth: 2000
        }
    };
    var maxDimensions = canvas.getMaxDimensions();
    expect(maxDimensions).to.exist;
    expect(maxDimensions.width).to.equal(2000);
    expect(maxDimensions.height).to.equal(2000);
    });

});