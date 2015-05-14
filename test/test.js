var should = require('chai').should(),
    manifesto = require('../dist/manifesto'),
    sayHello = manifesto.sayHello;

describe('#sayHello', function() {
    it('says hello', function () {
        sayHello('IIIF').should.equal('hello IIIF');
    });
});