var expect = require('chai').expect;
var manifesto = require('../dist/server/manifesto');
var should = require('chai').should();
var manifests = require('./data/manifests');

var manifest, sequence;

describe('#loadsWelsh', function() {
    it('loads successfully', function (done) {
        manifesto.load(manifests.cardiganshire, function(data) {
            manifest = manifesto.create(data, {locale: "cy-GB"});
            done();
        });
    });
});

describe('#hasTranslatedMetadata', function() {
    it('has translated metadata', function () {
        var metadata = manifest.getMetadata(true);
        var title = metadata[0];
        title.label.should.equal('Teitl');
        title.value.should.equal('Cardiganshire Constabulary register of criminals');
    });
});


