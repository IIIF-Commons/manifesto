var expect = require('chai').expect;
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('LabelValuePair', function() {
    beforeEach(function(done) {
        manifesto.loadManifest(manifests['4']).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    })
    describe('#getLabels', function() {
        it('returns an array of language values', function() {
            var metadata = manifest.getMetadata().map(m => m.getLabels());
            expect(metadata[0]).to.eql(['date']);
        });
    });
    describe('#getValues', function() {
        it('returns an array of language values', function() {
            var metadata = manifest.getMetadata().map(m => m.getValues());
            expect(metadata[0]).to.eql(['some date', 'some other date']);
        });
    });
});
