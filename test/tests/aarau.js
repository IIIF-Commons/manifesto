// root service is string (only references to root services may be strings)

var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var ServiceProfile = require('../../node_modules/@iiif/vocabulary/dist-commonjs/').ServiceProfile;

var manifest;

describe('#loadsAarau', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.aarau).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has no search service', function () {
        var service = manifest.getService(ServiceProfile.SEARCH_0);
        expect(service).to.not.exist;
    });
});