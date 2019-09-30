var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, sequence, canvas, content, annotation, body;

describe('#annotationDimensions', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.annotationdimensions).then(function(data) {
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

    it('has an annotation body', function() {
        content = canvas.getContent();
        annotation = content[0];
        expect(annotation).to.exist;
        body = annotation.getBody()[0];
        expect(body).to.exist;
    });

    it('annotation body has a width and height', function() {
        var width = body.getWidth();
        expect(width === 916);
        var height = body.getHeight();
        expect(height === 1366);
    });
    
});