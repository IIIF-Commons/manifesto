var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('required statement', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.requiredstatement).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has correct required statement', function () {
        var requiredStatement = manifest.getRequiredStatement();
        expect(requiredStatement).to.exist;
        expect(requiredStatement.label.getValue() === 'Important information');
        expect(requiredStatement.value.getValue() === '<p>Please read the <a href=\'https://bl.uk\'>full information</a> about this object.</p>');
    });
});

describe('attribution', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.anzacbulletin).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has correct attribution', function () {
        var requiredStatement = manifest.getRequiredStatement();
        expect(requiredStatement).to.exist;
        expect(requiredStatement.label === undefined);
        expect(requiredStatement.value.getValue() === 'Anzac bulletin. Number 24(1917:Jun.) Usage Terms: Free from known copyright restrictions.');
    });
});