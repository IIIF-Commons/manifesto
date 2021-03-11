var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../dist-commonjs/');

describe('presentation 3 3d', function() {

    it('loads unsuccessfully', function(done) {
        manifesto.loadManifest("http://asdf.com").then(function(data) {
            // shouldn't get here
        }).catch(err => {
          done();
        });
    });
});