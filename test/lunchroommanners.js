var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, topRange;

describe('#loadsItemsRanges', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.lunchroommanners).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has ranges', function () {
        topRange = manifest.getTopRanges()[0];
        topRange.items.length.should.equal(2);
        var washingHands = topRange.items[0].items[0];
        expect(washingHands.id).to.equal("http://dlib.indiana.edu/iiif_av/lunchroom_manners/range/2");
        var usingSoap = washingHands.items[0];
        var canvasid = usingSoap.canvases[0];
        expect(canvasid).to.equal("http://dlib.indiana.edu/iiif_av/lunchroom_manners/canvas/1#t=157,160");
        // get sequence and use .getCanvasById trimming http/s and hash fragment
    });
});