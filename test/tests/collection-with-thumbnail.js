var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, thumbnail;

describe('collection thumbnail', function() {

    it('loads manifest successfully', function (done) {
        manifesto.loadManifest(manifests.collectionwiththumbnail).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
    
    it('can find thumbnail', function () {
        this.timeout("10000");
        thumbnail = manifest.getThumbnail();
        expect(thumbnail).to.exist;
    });

    it('has correct id', function () {
        expect(thumbnail.id).to.equal('http://example.org/images/book1-page1/full/80,100/0/default.jpg');
    });

    it('has correct type', function () {
        var type = thumbnail.getType();
        expect(type.toString()).to.equal('image');
    });

    it('has correct dimensions', function () {
        var width = thumbnail.getWidth();
        expect(width).to.equal(90);

        var height = thumbnail.getHeight();
        expect(height).to.equal(100);
    });
});