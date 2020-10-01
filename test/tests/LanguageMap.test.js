var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('LanguageMap', function() {
    beforeEach(function(done) {
        manifesto.loadManifest(manifests['4']).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('behaves like an array of Language instances', function() {
        var metadatum = manifest.getMetadata()[0];
        expect(metadatum.label).to.have.length(1);
        expect(metadatum.value).to.have.length(1);
        expect(metadatum.label[0].value).to.eql('date')
        expect(metadatum.value[0].value).to.eql('some date<br/>some other date');

    });
    describe('#getValues', function() {
        it('returns an array of values', function() {
            var metadata = manifesto.LanguageMap.getValues(manifest.getMetadata()[0].value);
            expect(metadata).to.eql(['some date', 'some other date']);
        });
    });
});
