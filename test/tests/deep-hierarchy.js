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
        }).catch(done);
    });

    it('loads correct data at index 15', function (done) {
        manifest.getCollectionByIndex(15).then(function(data){
            ceili = data;
            ceili.should.be.a("object");
            var label = ceili.getLabel().getValue();
            label.should.be.a('string');
            label.should.equal('Philadelphia Ceili Group');
            done();
        }).catch(done);
    });

    it('loads correct data at index 0', function (done) {
        ceili.getCollectionByIndex(0).then(function(data){
            data.should.be.a("object");
            var label = data.getLabel().getValue();
            label.should.be.a('string');
            label.should.equal('Events');
            done();
        }).catch(done);
    });
});

describe('#childLoadFailure', function() {
    it('rejects when a child collection fails to load', function (done) {
        var json = JSON.parse(JSON.stringify(require('../fixtures/deephierarchymiddle.json')));
        // Swap the live "Events" URL for a local 404 so the failure is deterministic.
        json.collections[0]['@id'] = 'http://localhost:3001/does-not-exist.json';
        var middle = manifesto.parseManifest(json);

        middle.getCollectionByIndex(0).then(function() {
            done(new Error('expected getCollectionByIndex to reject'));
        }).catch(function(err) {
            expect(err).to.be.an.instanceof(Error);
            expect(err.response.status).to.equal(404);
            expect(err.status).to.equal(404);
            expect(err.url).to.equal('http://localhost:3001/does-not-exist.json');
            done();
        }).catch(done);
    });
});

describe('#missingIndex', function() {
    var middle;
    var middleId = 'https://digital.library.villanova.edu/Collection/vudl:99258/IIIF';

    before(function() {
        middle = manifesto.parseManifest(require('../fixtures/deephierarchymiddle.json'));
    });

    it('getCollectionByIndex rejects when the index does not exist', function (done) {
        middle.getCollectionByIndex(999).then(function() {
            done(new Error('expected getCollectionByIndex to reject'));
        }).catch(function(err) {
            expect(err).to.be.an.instanceof(Error);
            expect(err.message).to.equal('Collection index not found');
            expect(err.url).to.equal(middleId);
            expect(err.index).to.equal(999);
            expect(err.status).to.be.undefined;
            done();
        }).catch(done);
    });

    it('getManifestByIndex rejects when the index does not exist', function (done) {
        middle.getManifestByIndex(999).then(function() {
            done(new Error('expected getManifestByIndex to reject'));
        }).catch(function(err) {
            expect(err).to.be.an.instanceof(Error);
            expect(err.message).to.equal('Manifest index not found');
            expect(err.url).to.equal(middleId);
            expect(err.index).to.equal(999);
            expect(err.status).to.be.undefined;
            done();
        }).catch(done);
    });
});
