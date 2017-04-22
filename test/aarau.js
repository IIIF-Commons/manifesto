// root service is string (only references to root services may be strings)

var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest;

describe('#loadsAarau', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.aarau).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasNoSearchService', function() {
    it('has no search service', function () {
        var service = manifest.getService(manifesto.ServiceProfile.search());
        expect(service).to.not.exist;
    });
});