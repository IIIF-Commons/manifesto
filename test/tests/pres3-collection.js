var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var collection;

describe('#loadsPres3Collection', function() {
    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.pres3collection).then(function(data) {
            collection = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a viewingdirection of right-to-left', function () {
        var viewingDirection = collection.getViewingDirection();
        expect(viewingDirection).to.equal("right-to-left");
    });

    it('has a IIIFResourceType property of "collection"', function () {
        var type = collection.getIIIFResourceType();
        type.should.equal('collection');
        expect(collection.isManifest()).to.equal(false);  
        // expect(collection.isCollection()).to.equal(true); todo
    });
});