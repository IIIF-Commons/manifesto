// no autocomplete service
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest;

describe('#loadsWitnessToPeter', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.witnesstopeter).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasNoAutocompleteService', function() {
    it('has no autocomplete service', function () {
        var service = manifest.getService(manifesto.ServiceProfile.autoComplete());
        expect(service).to.not.exist;
    });
});