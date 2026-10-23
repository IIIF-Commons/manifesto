var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs');

describe('ill formed url', function() {

    it('loads unsuccessfully', function(done) {
        manifesto.loadManifest("http://asdf.com").then(function(data) {
            // shouldn't get here
        }).catch(err => {
          done();
        });
    });

    it('rejects with the fetch error, status, and url', function(done) {
        manifesto.loadManifest("http://localhost:3001/does-not-exist.json").then(function() {
            done(new Error('expected loadManifest to reject'));
        }).catch(function(err) {
            expect(err).to.be.an.instanceof(Error);
            expect(err.response.status).to.equal(404);
            expect(err.status).to.equal(404);
            expect(err.url).to.equal("http://localhost:3001/does-not-exist.json");
            done();
        }).catch(done);
    });
});