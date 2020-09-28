var expect = require('chai').expect;
var manifesto = require('../../dist-commonjs/');
var manifestSources = require('../fixtures/manifests');

var manifests = {};

describe('LabelValuePair', function() {
    before(function(done) {
        // Load manifest fixtures
        Promise.all(
            ['4', 'cardiganshire']
                .map(manifestId => manifesto.loadManifest(manifestSources[manifestId]).then(
                    data => new Promise((resolve) => {
                        manifests[manifestId] = manifesto.parseManifest(data);
                        resolve();
                    }))))
            .then(() => done());
    })
    describe('#getValues', function() {
        it('returns an array of language values', function() {
            var metadata = manifests['4'].getMetadata().map(m => m.getValues());
            expect(metadata[0]).to.eql(['some date', 'some other date']);
        });
        it('returns the sole value when the labels carry a locale and the first locale does not match the default locale', function() {
            var metadata = manifests['cardiganshire'].getMetadata().map(m => m.getValues());
            expect(metadata[0]).to.eql(['Cardiganshire Constabulary register of criminals']);
        });
    });
});

    
