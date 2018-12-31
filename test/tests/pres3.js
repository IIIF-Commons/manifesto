var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, sequence, canvas, content, annotation, body;

describe('presentation 3', function() {

    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.pres3).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has metadata', function () {
        var metadata = manifest.getMetadata();
        expect(metadata[0].label[0].value).to.equal('Author');
        expect(metadata[0].label[0].locale).to.equal('en');
    });

    it('has a sequence', function() {
        sequence = manifest.getSequenceByIndex(0);
        expect(sequence).to.exist;
    });

    it('has a canvas', function() {
        canvas = sequence.getCanvases()[0];
        expect(canvas).to.exist;
    });

    it('has an annotation body', function() {
        content = canvas.getContent();
        annotation = content[0];
        expect(annotation).to.exist;
        body = annotation.getBody()[0];
        expect(body).to.exist;
    });

    it('has a label', function() {
        var label = body.getLabel();
        var labelValue = manifesto.LanguageMap.getValue(label);
        expect(labelValue).to.equal('Page 1');
    });
});