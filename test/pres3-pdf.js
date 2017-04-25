var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence, canvas;

describe('#loadsPres3PDF', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.pres3pdf).then(function(data) {
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
        canvas.id.should.equal("http://tomcrane.github.io/scratch/manifests/3/canvas/99");
    });
});

describe('#hasPDF', function() {
    it('canvas has pdf', function () {
        var content = canvas.getContent();
        var annotation = content[0];
        expect(annotation).to.exist;
        var body = annotation.getBody()[0];
        expect(body).to.exist;
        expect(body.id).to.equal("https://dlcs.io/file/wellcome/1/caf18956-8f79-4fe6-8988-af329b036416");
    });
});