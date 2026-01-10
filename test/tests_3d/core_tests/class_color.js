var expect = require('chai').expect;
var should = require('chai').should();
var manifesto = require('../../../dist-commonjs/');


describe('class-color', function() {

    it('fromCSS demo', function (done){
        var sampleCSS = "#0FE0A3";
        var color = manifesto.Color.fromCSS( sampleCSS );
        expect(color.red).to.equal(15);
        done();
    });
    
    it('constructing Color', function (done){    
        var color = new manifesto.Color([255,192,64]);
        expect(color.blue).to.equal(64);
        done();
    });
    
    it('getting a CSS term', function (done){    
        var color = new manifesto.Color([80,168,254]);
        expect(color.CSS).to.equal("#50A8FE");
        done();
    });
    
})
    
