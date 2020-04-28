var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var ServiceProfile = require('@iiif/vocabulary/dist-commonjs/').ServiceProfile;

var manifest;

describe('LabelValuePair', function() {
    beforeEach(function(done) {
        manifesto.loadManifest(manifests['4']).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    })
    describe('#getValues', function() {
        it('returns an array of language values', function() {
            var metadata = manifest.getMetadata().map(m => m.getValues());
            expect(metadata[0]).to.eql(['some date', 'some other date']);
        });
    });
});

    
