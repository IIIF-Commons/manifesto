var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, sequence, canvas;

describe('presentation 3 items instead of sequence', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.looseends).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a sequence', function() {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });

    it('has a canvas', function() {
        canvas = sequence.getCanvasByIndex(0);
        expect(canvas).to.exist;
    });

    it('canvas has label', function() {
        var label = canvas.getLabel().getValue();
        expect(label).to.equal('Tape 1 Side 1');
    });
});