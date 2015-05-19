!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.manifesto=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var Manifesto;
(function (Manifesto) {
    var Canvas = (function () {
        function Canvas() {
        }
        Canvas.prototype.getRange = function () {
            return M.getCanvasRange(this);
        };
        return Canvas;
    })();
    Manifesto.Canvas = Canvas;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Manifest = (function () {
        function Manifest() {
            this.sequences = [];
            this.structures = [];
        }
        return Manifest;
    })();
    Manifesto.Manifest = Manifest;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Range = (function () {
        function Range() {
        }
        return Range;
    })();
    Manifesto.Range = Range;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Sequence = (function () {
        function Sequence() {
            this.canvases = [];
        }
        return Sequence;
    })();
    Manifesto.Sequence = Sequence;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Service = (function () {
        function Service() {
        }
        return Service;
    })();
    Manifesto.Service = Service;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var Thumb = (function () {
        function Thumb(index, uri, label, width, height, visible) {
            this.index = index;
            this.uri = uri;
            this.label = label;
            this.width = width;
            this.height = height;
            this.visible = visible;
        }
        return Thumb;
    })();
    Manifesto.Thumb = Thumb;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var TreeNode = (function () {
        function TreeNode(label, data) {
            this.label = label;
            this.data = data;
            this.nodes = [];
            if (!data)
                this.data = {};
        }
        TreeNode.prototype.addNode = function (node) {
            this.nodes.push(node);
            node.parentNode = this;
        };
        return TreeNode;
    })();
    Manifesto.TreeNode = TreeNode;
})(Manifesto || (Manifesto = {}));
/// <reference path="../typings/utils.d.ts"/>
if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
}
;
var Manifesto;
(function (Manifesto) {
    var ViewingDirection = (function () {
        function ViewingDirection(value) {
            this.value = value;
        }
        ViewingDirection.prototype.toString = function () {
            return this.value;
        };
        ViewingDirection.leftToRight = new ViewingDirection("left-to-right");
        ViewingDirection.rightToLeft = new ViewingDirection("right-to-left");
        ViewingDirection.topToBottom = new ViewingDirection("top-to-bottom");
        ViewingDirection.bottomToTop = new ViewingDirection("bottom-to-top");
        return ViewingDirection;
    })();
    Manifesto.ViewingDirection = ViewingDirection;
})(Manifesto || (Manifesto = {}));
var Manifesto;
(function (Manifesto) {
    var ViewingHint = (function () {
        function ViewingHint(value) {
            this.value = value;
        }
        ViewingHint.prototype.toString = function () {
            return this.value;
        };
        ViewingHint.individuals = new ViewingHint("individuals");
        ViewingHint.paged = new ViewingHint("paged");
        ViewingHint.continuous = new ViewingHint("continuous");
        ViewingHint.nonPaged = new ViewingHint("non-paged");
        ViewingHint.top = new ViewingHint("top");
        return ViewingHint;
    })();
    Manifesto.ViewingHint = ViewingHint;
})(Manifesto || (Manifesto = {}));

},{}]},{},[1])
(1)
});