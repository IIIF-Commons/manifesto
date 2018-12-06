var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

describe('#loadsScroll', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.scroll).then(function(data) {
            manifest = manifesto.create(data);
            sequence = manifest.getSequenceByIndex(0);
            canvas = sequence.getCanvasByIndex(0);
            done();
        });
    });

    it('canvas has image', function () {
        var images = canvas.getImages();
        var annotation = images[0];
        expect(annotation).to.exist;
        var resource = annotation.getResource();
        expect(resource).to.exist;
        var profile = manifesto.ServiceProfile.stanfordIIIF1ImageConformance1();
        imageService = resource.getService(profile);
        expect(imageService).to.exist;
    });
});