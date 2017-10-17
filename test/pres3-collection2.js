var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var collection;

describe('#loadsPres3Collection', function() {
    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.pres3collection2).then(function(data) {
            collection = manifesto.create(data);
            done();
        });
    });
});

describe('#hasManifests', function() {
    it('has manifests', function () {
        var manifest = collection.getManifestByIndex(0).then(function(m) {
            expect(m).to.exist();
        });
    });
});