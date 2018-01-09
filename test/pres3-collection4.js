var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var collection, manifests, manifest, thumbnail;

describe('presentation 3 collection', function() {

    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.pres3collection4).then(function(data) {
            collection = manifesto.create(data);
            done();
        });
    });

    it('has manifests', function() {
        collections = collection.getCollections();
        expect(collections).to.exist;
        expect(collections.length).to.equal(3);
    });

});
