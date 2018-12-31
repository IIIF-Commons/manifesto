// stub collections
var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, firstCollection, firstManifest;

describe('#loadsPottersElectric', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.potterselectric).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });
});

// commented these as they rely on showcase.iiif.io to be able to serve collections :-)

//describe('#firstCollection', function() {
//    it('has a first collection', function(done) {
//        manifest.getCollectionByIndex(0).then(function(data) {
//            firstCollection = data;
//            expect(firstCollection).to.exist;
//            done();
//        });
//    })
//});
//
//describe('#firstCollectioHasFirstManifest', function() {
//    it('has a first manifest', function (done) {
//        firstCollection.getManifestByIndex(0).then(function(data) {
//            firstManifest = data;
//            expect(firstManifest).to.exist;
//            done();
//        });
//    })
//});