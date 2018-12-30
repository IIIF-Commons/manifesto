// no autocomplete service
var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('#loadsWitnessToPeter', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.witnesstopeter).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has no autocomplete service', function () {
        var service = manifest.getService(manifesto.ServiceProfile.SEARCH_0_AUTO_COMPLETE);
        expect(service).to.not.exist;
    });
});