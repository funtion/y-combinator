'use strict'

module.exports = function (f) {
    function g(self) {
        return (n) => f(self(self), n);
    }

    return (n) => g(g)(n);
}