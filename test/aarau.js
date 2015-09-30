// root service is string (only references to root services may be strings)

var _isDate = require("lodash.isdate");
var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest;

describe('#loadsCorrespondance', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.aarau).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasNoSearchWithinService', function() {
    it('has no search within service', function () {
        var service = manifest.getService(manifesto.ServiceProfile.searchWithin());
        expect(service).to.not.exist;
    });
});