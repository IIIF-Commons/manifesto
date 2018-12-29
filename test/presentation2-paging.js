var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

describe('#presentation2Paging', function() {

    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.presentation2Paging).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    describe('#isPaged', function() {
        it('is paged', function () {
            var viewingHint = manifest.getViewingHint();
            viewingHint.should.equal('paged');
        });
    });
    
    describe('#isPagingEnabled', function() {
        it('is paging enabled', function () {
            var enabled = manifest.isPagingEnabled();
            enabled.should.equal(true);
        });
    });
    
});