var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence, canvas;

describe('presentation 3 items instead of sequence', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.looseends).then(function(data) {
            manifest = manifesto.create(data);
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
        var label = Manifesto.TranslationCollection.getValue(canvas.getLabel());
        expect(label).to.equal('Tape 1 Side 1');
    });
});