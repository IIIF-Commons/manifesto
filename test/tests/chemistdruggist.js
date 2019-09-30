// nested collections

var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');
var IIIFResourceType = require('@iiif/vocabulary/dist-commonjs/').IIIFResourceType;

var collection, manifest, firstCollection, secondCollection, secondManifest, thirdManifest;

describe('#loadsChemistDruggist', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.chemistdruggist).then(function(data) {
            collection = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a IIIFResourceType property of "collection"', function () {
        var type = collection.getIIIFResourceType();
        type.should.equal(IIIFResourceType.COLLECTION);
        expect(collection.isManifest()).to.equal(false);  
        expect(collection.isCollection()).to.equal(true);        
    });

    it('has a collection count of 258', function () {
        collection.getTotalCollections().should.equal(258);
    });

    it('has a label', function() {
        Manifesto.LanguageMap.getValue(collection.getLabel()).should.equal('The chemist and druggist.');
        collection.getDefaultLabel().should.equal('The chemist and druggist.');
    });

    it('has a first collection with a label', function(done) {
        collection.getCollectionByIndex(0).then(function(data) {
           firstCollection = data;
           Manifesto.LanguageMap.getValue(firstCollection.getLabel()).should.equal('Volume 1, 1859');
           done();
       });
   });

    it('has a first collection with a navDate', function() {
        var navDate = firstCollection.getNavDate();
        var year = navDate.getFullYear();
        year.should.equal(1859);
    });

    it('has a first collection which contains 16 manifests', function () {
        firstCollection.getTotalManifests().should.equal(16);
    });

    it('has a first manifest with metadata', function (done) {
        firstCollection.getManifestByIndex(0).then(function(data) {
            manifest = data;
            var label = Manifesto.LanguageMap.getValue(manifest.getLabel());
            label.should.equal('The chemist and druggist.');
            var metadata = manifest.getMetadata();
            Manifesto.LanguageMap.getValue(metadata[0].label).should.equal('Title');
            Manifesto.LanguageMap.getValue(metadata[0].value).should.equal('The chemist and druggist.');
            done();
        });
    });

    it('has a first manifest with a label', function() {
        Manifesto.LanguageMap.getValue(manifest.getLabel()).should.equal('The chemist and druggist.');
    });

    it('has a tree containing manifests', function () {
        var tree = collection.getDefaultTree();
        expect(tree).to.exist;
    });

    it('has a second collection with a correct index', function(done) {
        collection.getCollectionByIndex(1).then(function(data) { // at this point collection 1 manifest parentCollections have the correct index
            secondCollection = data; // at this point they are 0
            expect(secondCollection.index).to.equal(1);
            done();
        });
    });

    it('has a second manifest with a correct index', function(done) {
        secondCollection.getManifestByIndex(1).then(function(data) {
            secondManifest = data;
            expect(secondManifest.index).to.equal(1);
            expect(secondManifest.parentCollection.index).to.equal(1);
            done();
        });
    });

    it('has a third manifest with a correct index', function(done) {
        secondCollection.getManifestByIndex(2).then(function(data) {
            thirdManifest = data;
            expect(thirdManifest.index).to.equal(2);
            done();
        });
    });
});