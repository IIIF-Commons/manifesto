// translation

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

    it('has translated metadata', function () {
        var metadata = manifest.getMetadata();
        var title = metadata[0];
        title.getLabel().should.equal('Teitl');
        title.getValue().should.equal('Cardiganshire Constabulary register of criminals');
    });

    it('has a tree', function () {
        var tree = manifest.getDefaultTree();
        expect(tree).to.exist;
    });
});