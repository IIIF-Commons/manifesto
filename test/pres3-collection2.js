var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var collection, manifests, manifest, thumbnail;

describe('presentation 3 collection', function() {

    it('loads successfully', function(done) {
        manifesto.loadManifest(manifests.pres3collection2).then(function(data) {
            collection = manifesto.create(data);
            done();
        });
    });

    it('has manifests', function () {
        manifests = collection.getManifests();
        expect(manifests).to.exist;
    });

    it('has manifest thumbnail', function () {
        thumbnail = manifests[0].getThumbnail();
        expect(thumbnail).to.exist;
    });

    it('has correct thumbnail id', function () {
        expect(thumbnail.id).to.equal('https://example.org/img/thumb1.jpg');
    });

    it('has correct thumbnail type', function () {
        var type = thumbnail.getType();
        expect(type.toString()).to.equal('image');
    });

    it('has correct thumbnail dimensions', function () {
        var width = thumbnail.getWidth();
        expect(width).to.equal(90);

        var height = thumbnail.getHeight();
        expect(height).to.equal(100);
    });

    it('has manifest', function (done) {
        manifest = collection.getManifestByIndex(0).then(function(m) {
            expect(m).to.exist;
            done();
        });
    });
});
