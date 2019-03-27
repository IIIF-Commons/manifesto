// root service is string (only references to root services may be strings)

var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./fixtures/manifests');
require('./shared');

var manifest;

describe('#loadsSctaGracilis', function() {
    it('loads successfully', function (done) {
        manifesto.loadManifest(manifests.sctagracilis).then(function(data) {
            manifest = manifesto.create(data);
            done();
        });
    });

    it('has image', function () {
        var image = manifest.getSequences()[0].getCanvases()[0].getCanonicalImageUri();
        expect(image).to.equal("https://loris2.scta.info/lon/L11v.jpg/full/2212,/0/native.jpg")
    });
});
 
