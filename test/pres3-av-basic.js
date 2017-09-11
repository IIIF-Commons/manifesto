var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence, canvas;

describe('#loadsPres3AV', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.pres3avbasic).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasSequence', function() {
    it('has a sequence', function () {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });
});

describe('#hasCanvas', function() {
    it('has a canvas', function () {
        canvas = sequence.getCanvases()[0];
        canvas.id.should.equal("http://tomcrane.github.io/scratch/manifests/3/canvas/1");
    });
});

describe('#hasAV', function() {
    it('canvas has AV', function () {
        var content = canvas.getContent();
        var annotation = content[0];
        expect(annotation).to.exist;
        var body = annotation.getBody()[0];
        expect(body).to.exist;
        expect(body.id).to.equal("http://example.org/foo.mp4");
    });
});

describe('#hasSecondCanvas', function() {
    it('has a second canvas', function () {
        canvas = sequence.getCanvases()[1];
        canvas.id.should.equal("http://tomcrane.github.io/scratch/manifests/3/canvas/2");
    });
});

describe('#secondHasAV', function() {
    it('second canvas has AV', function () {
        var content = canvas.getContent();
        var annotation = content[0];
        expect(annotation).to.exist;
        var body = annotation.getBody()[0];
        expect(body).to.exist;
        expect(body.id).to.equal("http://example.org/iiif/foo2.mp3");
    });
});