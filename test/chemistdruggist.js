var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var collection, manifest;

describe('#loads', function() {
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
    it('has a first collection with a title', function() {
        collection.getCollectionByIndex(0).getTitle().should.equal('Volume 1, 1859');
    })
});

describe('#firstCollectionHasManifestCount', function() {
    it('has a first collection which contains 16 manifests', function () {
        collection.getCollectionByIndex(0).getTotalManifests().should.equal(16);
    })
});

describe('#firstCollectionHasFirstManifestWithMetadata', function() {
    it('has a first manifest with metadata', function () {
        manifest = collection.getCollectionByIndex(0).getManifestByIndex(0);
        var metadata = manifest.getMetadata();
        metadata[0]['label'].should.equal('Volume');
        metadata[0]['value'].should.equal('1');
    })
});

describe('#firstCollectionFirstManifestHasTitle', function() {
    it('has a first manifest with a title', function() {
        manifest.getTitle().should.equal('15. September 1859');
    })
});

describe('#firstCollectionFirstManifestCanBeLoaded', function() {
    it('has a first manifest with no sequences prior to loading', function () {
        manifest.getTotalSequences().should.equal(0);
    })
});

describe('#firstCollectionFirstManifestCanBeLoaded', function() {
    it('has a first manifest with sequences after loading', function () {
        manifest = manifest.load().then(function(manifest) {
            manifest.getTotalSequences().should.equal(1);
            done();
        });
    })
});