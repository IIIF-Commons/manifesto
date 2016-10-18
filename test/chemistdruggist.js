// nested collections

var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var collection, manifest, firstCollection, secondCollection, secondManifest, thirdManifest;

describe('#loadsChemistDruggist', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.chemistdruggist).then(function(data) {
            collection = manifesto.create(data);
            done();
        });
    });
});

describe('#hasIIIFResourceType', function() {
    it('has a IIIFResourceType property of "sc:collection"', function () {
        var type = collection.getIIIFResourceType();
        type.toString().should.equal('sc:collection');
        expect(collection.isManifest()).to.equal(false);  
        expect(collection.isCollection()).to.equal(true);        
    });
});

describe('#hasCollectionCount', function() {
    it('has a collection count of 255', function () {
        collection.getTotalCollections().should.equal(255);
    });
});

describe('#hasLabel', function() {
    it('has a label', function() {
        Manifesto.TranslationCollection.getValue(collection.getLabel()).should.equal('The chemist and druggist.');
    })
});

describe('#firstCollectionHasLabel', function() {
    it('has a first collection with a label', function(done) {
         collection.getCollectionByIndex(0).then(function(data) {
            firstCollection = data;
            Manifesto.TranslationCollection.getValue(firstCollection.getLabel()).should.equal('Volume 1, 1859');
            done();
        });
    })
});

describe('#firstCollectionHasNavDate', function() {
    it('has a first collection with a navDate', function() {
        var navDate = firstCollection.getNavDate();
        var year = navDate.getFullYear();
        year.should.equal(1859);
    })
});

describe('#firstCollectionHasManifestCount', function() {
    it('has a first collection which contains 16 manifests', function () {
        firstCollection.getTotalManifests().should.equal(16);
    })
});

describe('#firstCollectionHasFirstManifestWithMetadata', function() {
    it('has a first manifest with metadata', function (done) {
        firstCollection.getManifestByIndex(0).then(function(data) {
            manifest = data;
            var label = Manifesto.TranslationCollection.getValue(manifest.getLabel());
            label.should.equal('The chemist and druggist.');
            var metadata = manifest.getMetadata();
            Manifesto.TranslationCollection.getValue(metadata[0].label).should.equal('Title');
            Manifesto.TranslationCollection.getValue(metadata[0].value).should.equal('The chemist and druggist.');
            done();
        });
    })
});

describe('#firstCollectionFirstManifestHasLabel', function() {
    it('has a first manifest with a label', function() {
        Manifesto.TranslationCollection.getValue(manifest.getLabel()).should.equal('The chemist and druggist.');
    })
});

describe('#getTree', function() {
    it('has a tree containing manifests', function () {
        var tree = collection.getDefaultTree();
        expect(tree).to.exist;
    })
});

describe('#secondCollectionHasCorrectIndex', function() {
    it('has a second collection with a correct index', function(done) {
        collection.getCollectionByIndex(1).then(function(data) { // at this point collection 1 manifest parentCollections have the correct index
            secondCollection = data; // at this point they are 0
            expect(secondCollection.index).to.equal(1);
            done();
        });
    })
});

describe('#secondCollectionSecondManifestHasCorrectIndex', function() {
    it('has a second manifest with a correct index', function(done) {
        secondCollection.getManifestByIndex(1).then(function(data) {
            secondManifest = data;
            expect(secondManifest.index).to.equal(1);
            expect(secondManifest.parentCollection.index).to.equal(1);
            done();
        });
    })
});

describe('#secondCollectionThirdManifestHasCorrectIndex', function() {
    it('has a third manifest with a correct index', function(done) {
        secondCollection.getManifestByIndex(2).then(function(data) {
            thirdManifest = data;
            expect(thirdManifest.index).to.equal(2);
            done();
        });
    })
});