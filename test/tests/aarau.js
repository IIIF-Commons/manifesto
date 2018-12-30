// root service is string (only references to root services may be strings)

var expect = require('chai').expect;
var manifesto = require('../../dist-commonjs/');
var should = require('chai').should();
var manifests = require('../fixtures/manifests');

var manifest;

describe('#loadsAarau', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.aarau).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has no search service', function () {
        var service = manifest.getService(manifesto.ServiceProfile.SEARCH);
        expect(service).to.not.exist;
    });
});