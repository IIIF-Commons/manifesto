var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('#loadsTranslations', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.translations).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has metadata', function () {
        var metadata = manifest.getMetadata();
        expect(metadata[4].getValues()).to.be.instanceof(Array);

        for (let i = 0; i < metadata.length; i++) {
            var label = metadata[i].getLabel();
            expect(label).to.be.a('string');
            var value = metadata[i].getValue();
            expect(value).to.be.a('string');
        }
    });
});
