// nested collections

var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var collection, manifest, firstCollection;

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
    });
});

describe('#hasCollectionCount', function() {
    it('has a collection count of 255', function () {
        collection.getTotalCollections().should.equal(255);
    });
});

describe('#hasTitle', function() {
    it('has a title', function() {
        collection.getTitle().should.equal('The chemist and druggist.');
    })
});

describe('#firstCollectionHasTitle', function() {
    it('has a first collection with a title', function(done) {
         collection.getCollectionByIndex(0).then(function(data) {
            firstCollection = data;
            firstCollection.getTitle().should.equal('Volume 1, 1859');
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
            var label = manifest.getLabel();
            label.should.equal('The chemist and druggist.');
            var metadata = manifest.getMetadata();
            metadata[0]['label'].should.equal('Type');
            metadata[0]['value'].should.equal('PeriodicalIssue');
            done();
        });
    })
});

describe('#firstCollectionFirstManifestHasTitle', function() {
    it('has a first manifest with a title', function() {
        manifest.getTitle().should.equal('The chemist and druggist.');
    })
});

describe('#getTree', function() {
    it('has a tree containing manifests', function () {
        var tree = collection.getTree();
        expect(tree).to.exist;
    })
});