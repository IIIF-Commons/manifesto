var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var collection, manifests, manifest, thumbnail;

describe('presentation 3 collection', function() {

    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.pres3collection3).then(function(data) {
            collection = manifesto.create(data);
            done();
        });
    });

    it('has manifests', function() {
        manifests = collection.getManifests();
        expect(manifests).to.exist;
        expect(manifests.length).to.equal(3);
    });

});
