'use strict'

var expect = require('chai').expect;
var Y = require('./index');

describe('Y Combinator', function () {
    it('Should compute factorial correctly when n is 3', function () {
        var result = Y((self, n) => n == 0 ? 1 : n * self(n - 1))(3);
        expect(result).to.equal(6);
    })

    it('Should compute factorial correctly when n is 4', function () {
        var result = Y((self, n) => n == 0 ? 1 : n * self(n - 1))(4);
        expect(result).to.equal(24);
    })

    it('Should compute factorial correctly when n is 5', function () {
        var result = Y((self, n) => n == 0 ? 1 : n * self(n - 1))(5);
        expect(result).to.equal(120);
    })
});
