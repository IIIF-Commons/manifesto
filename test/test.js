var should = require('chai').should(),
    manifesto = require('../dist/manifesto'),
    sayHello = manifesto.sayHello;

describe('#sayHello', function() {
    it('says hello', function () {
        sayHello('ed').should.equal('hello ed');
    });
});