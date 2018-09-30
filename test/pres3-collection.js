var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var collection;

describe('#loadsPres3Collection', function() {
    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.pres3collection).then(function(data) {
            collection = manifesto.create(data);
            done();
        });
    });

    it('has a viewingdirection of right-to-left', function () {
        var viewingDirection = collection.getViewingDirection();
        expect(viewingDirection.toString()).to.equal("right-to-left");
    });

    it('has a IIIFResourceType property of "collection"', function () {
        var type = collection.getIIIFResourceType();
        type.toString().should.equal('collection');
        expect(collection.isManifest()).to.equal(false);  
        // expect(collection.isCollection()).to.equal(true); todo
    });
});