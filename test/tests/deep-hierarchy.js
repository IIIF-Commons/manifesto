var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');
var manifests = require('../fixtures/manifests');

var manifest, ceili;

describe('#loadsTop', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.deephierarchytop).then(function(data) {
            manifest = manifesto.parseManifest(data);
            done();
        });
    });

    it('loads successfully', function (done) {
        manifest.getCollectionByIndex(15).then(function(data){
            ceili = data;
            ceili.should.be.a("object");
            var label = ceili.getLabel().getValue();
            label.should.be.a('string');
            label.should.equal('Philadelphia Ceili Group');
            done();
        });
    });

    it('loads successfully', function (done) {
        ceili.getCollectionByIndex(0).then(function(data){
            data.should.be.a("object");
            // console.log(data);
            var label = data.getLabel().getValue();
            label.should.be.a('string');
            label.should.equal('Events');
            done();
        });
    });
});
