var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var IIIFResourceType = require('@iiif/vocabulary/dist-commonjs/').IIIFResourceType;
var ViewingDirection = require('@iiif/vocabulary/dist-commonjs/').ViewingDirection;

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
        expect(viewingDirection).to.equal(ViewingDirection.RIGHT_TO_LEFT);
    });

    it('has a IIIFResourceType property of "collection"', function () {
        var type = collection.getIIIFResourceType();
        type.should.equal(IIIFResourceType.COLLECTION);
        expect(collection.isManifest()).to.equal(false);  
        // expect(collection.isCollection()).to.equal(true); todo
    });

    it('has a behavior', function () {
      var behavior = collection.getBehavior();
      expect(behavior).to.equal('individuals');
    });
});
