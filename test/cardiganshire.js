var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest, sequence;

describe('#loadsCardiganshire', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.cardiganshire).then(function(data) {
            manifest = manifesto.create(data, {locale: "cy-GB"});
            done();
        });
    });
});

describe('#hasTranslatedMetadata', function() {
    it('has translated metadata', function () {
        var metadata = manifest.getMetadata();
        var title = metadata[0];
        title.label.should.equal('Teitl');
        title.value.should.equal('Cardiganshire Constabulary register of criminals');
    });
});

describe('#hasTree', function() {
    it('has a tree', function () {
        var tree = manifest.getTree();
        expect(tree).to.exist;
    });
});


