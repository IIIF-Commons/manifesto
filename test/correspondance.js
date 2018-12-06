// login

var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence, canvas, imageService;

describe('#loadsCorrespondance', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.correspondance).then(function(data) {
            manifest = manifesto.create(data);
            sequence = manifest.getSequenceByIndex(0);
            canvas = sequence.getCanvasByIndex(0);
            done();
        });
    });

    it('canvas has images', function () {
        var images = canvas.getImages();
        var annotation = images[0];
        expect(annotation).to.exist;
        var resource = annotation.getResource();
        expect(resource).to.exist;
        var profile = manifesto.ServiceProfile.iiif2ImageLevel1();
        imageService = resource.getService(profile);
        expect(imageService).to.exist;
    });

    it('imageService has login service', function () {
        var profile = manifesto.ServiceProfile.login();
        var loginService = imageService.getService(profile);
        expect(loginService).to.exist;
    });
});