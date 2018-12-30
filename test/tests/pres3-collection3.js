var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var collection, manifests;

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
