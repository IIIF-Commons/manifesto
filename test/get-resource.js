var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

describe('#loadsScroll', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.getResource).then(function(data) {
            manifest = manifesto.create(data);
            sequence = manifest.getSequenceByIndex(0);
            canvas = sequence.getCanvasByIndex(0);
            done();
        });
    });
});

describe('#getsResourceID', function() {
    it('resource id is returned as a string', function () {
        var images = canvas.getImages();
        var annotation = images[0];
        expect(annotation).to.exist;
        var resource = annotation.getResource();
        expect(resource).to.exist;
        expect(resource.id).to.equal("80b02791-4bd9-4566-9a9f-4b3062ba2e0d")
    });
});

