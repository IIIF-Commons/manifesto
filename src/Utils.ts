/// <reference path="../typings/utils.d.ts"/>

if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
};