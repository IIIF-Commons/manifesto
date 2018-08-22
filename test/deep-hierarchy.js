var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, ceili;

describe('#loadsTop', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.deephierarchytop).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });
});

describe('#getCollectionByIndex', function() {
    it('loads successfully', function (done) {
        manifest.getCollectionByIndex(15).then(function(data){
            ceili = data;
            ceili.should.be.a("object");
            var label = Manifesto.LanguageMap.getValue(ceili.getLabel());
            label.should.be.a('string');
            label.should.equal('Philadelphia Ceili Group');
            done();
        });
    });
});

describe('#getManifestByIndex', function() {
    it('loads successfully', function (done) {
        ceili.getCollectionByIndex(0).then(function(data){
            data.should.be.a("object");
            var label = Manifesto.LanguageMap.getValue(data.getLabel());
            label.should.be.a('string');
            label.should.equal('Events');
            done();
        });
    });
});