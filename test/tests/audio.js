// root service is string (only references to root services may be strings)

var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('#loadsAudio', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.audio).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has thumbnails', function() {
        var thumbs = manifest.getSequenceByIndex(0).getThumbs(100, 100);
        thumbs.length.should.equal(2);
        thumbs[0].uri.should.equal('http://digital.library.villanova.edu/themes/vudiglib3/images/vudl/audio.png');
        thumbs[0].height.should.equal(100);
        thumbs[0].label.should.equal('Side A');
        thumbs[1].uri.should.equal('http://digital.library.villanova.edu/themes/vudiglib3/images/vudl/audio.png');
        thumbs[1].height.should.equal(100);
        thumbs[1].label.should.equal('Side B');
    });
});