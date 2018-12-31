// deep hierarchy

var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest;

describe('#loadsHorribleMurders', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.horriblemurders).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('has nested ranges', function () {
        var topRange = manifest.getTopRanges()[0];
        var path = topRange.getRanges()[0].getRanges()[0].path;
        expect(path).to.equal('0/0/0');
    });

    it('has nested tree nodes', function () {
        var tree = manifest.getDefaultTree();
        var label = tree.nodes[0].nodes[0].label;
        expect(label).to.equal('Title');
    });
});