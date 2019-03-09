// nested collections

var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var IIIFResourceType = require('../../node_modules/@iiif/vocabulary/dist-commonjs/').IIIFResourceType;

var collection, manifest, firstCollection, secondCollection;

describe('#loadsTopNestedManifest', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests['nested-top']).then(function(data) {
            collection = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a IIIFResourceType property of "collection"', function () {
        var type = collection.getIIIFResourceType();
        type.should.equal(IIIFResourceType.COLLECTION);
    });

    it('has a collection count of 1', function () {
        collection.getTotalCollections().should.equal(1);
    });

    it('has a label', function() {
        manifesto.LanguageMap.getValue(collection.getLabel()).should.equal('Villanova Digital Library');
    });

    it('has a first collection with a label', function(done) {
        collection.getCollectionByIndex(0).then(function(data) {
            firstCollection = data;
            manifesto.LanguageMap.getValue(firstCollection.getLabel()).should.equal('Dime Novel and Popular Literature');
            done();
        });
    });

    it('has a first collection which contains 0 manifests', function () {
        firstCollection.getTotalManifests().should.equal(0);
    });

    it('has a tree', function () {
        var tree = collection.getDefaultTree();
        expect(tree).to.exist;
    });

    it('has a second-level collection with a label', function (done) {
        firstCollection.getCollectionByIndex(0).then(function(data) {
            secondCollection = data;
            manifesto.LanguageMap.getValue(secondCollection.getLabel()).should.equal('Covers and Illustrations');
            done();
        });
    });

    it('has a second-level collection which contains 9 manifests', function () {
        secondCollection.getTotalManifests().should.equal(9);
    });

    it('can access a deeply-nested manifest', function (done) {
        secondCollection.getManifestByIndex(0).then(function(data) {
            manifest = data;
            manifesto.LanguageMap.getValue(manifest.getLabel()).should.equal('Wunder der Vererbung');
            done();
        });
    });
});