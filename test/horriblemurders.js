// deep hierarchy

var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest;

describe('#loadsHorribleMurders', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.horriblemurders).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#hasNestedRanges', function() {
    it('has nested ranges', function () {
        var path = manifest.rootRange.ranges[0].ranges[0].path;
        expect(path).to.equal('/0/0');
    });
});

describe('#hasNestedTreeNodes', function() {
    it('has nested tree nodes', function () {
        var tree = manifest.getTree();
        var label = tree.nodes[0].nodes[0].label;
        expect(label).to.equal('Title');
    });
});
