var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var collection, manifests;

describe('presentation 3 collection', function() {

    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.pres3collection4).then(function(data) {
            collection = manifesto.parseManifest(data);
            done();
        });
    });

    it('has manifests', function() {
        collections = collection.getCollections();
        expect(collections).to.exist;
        expect(collections.length).to.equal(3);
    });

});
