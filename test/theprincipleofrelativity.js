var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

describe('#loadsPrincipleOfRelativity', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.theprincipleofrelativity).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#isPaged', function() {
    it('is paged', function () {
        var viewingHint = manifest.getViewingHint();
        viewingHint.toString().should.equal('paged');
    });
});

describe('#isPagingEnabled', function() {
    it('is paging enabled', function () {
        var enabled = manifest.isPagingEnabled();
        enabled.should.equal(true);
    });
});