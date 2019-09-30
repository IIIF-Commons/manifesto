var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, canvas;

describe('poster canvas', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.looseends).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has a poster canvas', function() {
        canvas = manifest.getPosterCanvas();
        expect(canvas).to.exist;
    });

    it('has image', function() {
        const img = canvas.getContent()[0].getBody()[0].id;
        expect(img).to.equal("https://iiif-commons.github.io/iiif-av-component/examples/data/bl/sounds-tests/posters/pop.jpg");
    });

});