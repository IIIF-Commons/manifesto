// nested collections

var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var collection, manifest, firstCollection, secondCollection;

describe('#loadsTopNestedManifest', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests['nested-top']).then(function(data) {
            collection = manifesto.create(data);
            done();
        });
    });
});

describe('#hasIIIFResourceType', function() {
    it('has a IIIFResourceType property of "sc:collection"', function () {
        var type = collection.getIIIFResourceType();
        type.toString().should.equal('sc:collection');
    });
});

describe('#hasCollectionCount', function() {
    it('has a collection count of 1', function () {
        collection.getTotalCollections().should.equal(1);
    });
});

describe('#hasLabel', function() {
    it('has a label', function() {
        collection.getLabel().should.equal('Villanova Digital Library');
    });
});

describe('#firstCollectionHasLabel', function() {
    it('has a first collection with a label', function(done) {
         collection.getCollectionByIndex(0).then(function(data) {
            firstCollection = data;
            firstCollection.getLabel().should.equal('Dime Novel and Popular Literature');
            done();
        });
    });
});

describe('#firstCollectionHasEmptyManifestCount', function() {
    it('has a first collection which contains 0 manifests', function () {
        firstCollection.getTotalManifests().should.equal(0);
    });
});

describe('#getTree', function() {
    it('has a tree', function () {
        var tree = collection.getDefaultTree();
        expect(tree).to.exist;
    });
});

describe('#secondLevelCollectionHasLabel', function() {
   it('has a second-level collection with a label', function (done) {
       firstCollection.getCollectionByIndex(0).then(function(data) {
           secondCollection = data;
           secondCollection.getLabel().should.equal('Covers and Illustrations');
           done();
       });
   });
});

describe('#secondCollectionHasManifestCount', function() {
    it('has a second-level collection which contains 9 manifests', function () {
        secondCollection.getTotalManifests().should.equal(9);
    });
});

describe('#canAccessManifestFromSecondCollection', function() {
   it('can access a deeply-nested manifest', function (done) {
       secondCollection.getManifestByIndex(0).then(function(data) {
           manifest = data;
           manifest.getLabel().should.equal('Wunder der Vererbung');
           done();
       });
   });
});