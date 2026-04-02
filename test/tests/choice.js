var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var manifest, sequence, canvas, choices;

describe('choice', function() {
    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.choice).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a sequence', function() {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });

    it('has a canvas', function() {
        canvas = sequence.getCanvases()[0];
        expect(canvas).to.exist;
    });

    it('has choices', function() {
        choices = canvas.getChoices();
        expect(choices).to.exist;
        expect(choices.length).to.equal(2);
    });

    it('choice items have labels', function() {
        expect(choices[0].getLabel().getValue()).to.equal('Natural Light');
        expect(choices[1].getLabel().getValue()).to.equal('X-Ray');
    });

    it('choice items have services', function() {
        var services = choices[0].getServices();
        expect(services).to.exist;
        expect(services.length).to.be.greaterThan(0);
    });

    it('choice items have dimensions', function() {
        expect(choices[0].getWidth()).to.equal(2000);
        expect(choices[0].getHeight()).to.equal(1271);
    });
});