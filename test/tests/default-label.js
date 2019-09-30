var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, sequence, canvas, content, annotation, body, label;

describe('#getDefaultLabel', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.defaultlabel).then(function(data) {
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

    it('has a canvas label', function() {
        label = canvas.getLabel();
        var labelValue = manifesto.LanguageMap.getValue(label);
        expect(labelValue).to.equal('Abyssinian');
    });

    it('has a canvas default label', function() {
        label = canvas.getDefaultLabel();
        expect(label).to.equal('Abyssinian');
    });

    it('has an annotation body', function() {
        content = canvas.getContent();
        annotation = content[0];
        expect(annotation).to.exist;
        body = annotation.getBody()[0];
        expect(body).to.exist;
    });

    it('has an annotation label', function() {
        label = body.getLabel();
        var labelValue = manifesto.LanguageMap.getValue(label);
        expect(labelValue).to.equal('Abyssinian');
    });

    it('has a annotation default label', function() {
        label = body.getDefaultLabel();
        expect(label).to.equal('Abyssinian');
    });
    
});