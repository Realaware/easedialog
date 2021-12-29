"use strict";
exports.__esModule = true;
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
/* eslint-disable class-methods-use-this */
var RGB = /** @class */ (function () {
    function RGB(r, g, b, a) {
        if (r === void 0) { r = 0; }
        if (g === void 0) { g = 0; }
        if (b === void 0) { b = 0; }
        if (a === void 0) { a = 1; }
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 1;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    RGB.prototype.numToHex = function (c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    RGB.prototype.toHex = function () {
        return "#" + this.numToHex(this.r) + this.numToHex(this.g) + this.numToHex(this.b);
    };
    RGB.prototype.getRgbString = function () {
        return this.a !== 1
            ? "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.a + ")"
            : "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    };
    /**
     * plus two rgb object.
     *
     * **WARNING**
     *
     * this method will not calculate alpha.
     * @param arg
     */
    RGB.prototype.plus = function (arg, a) {
        var r = clamp(this.r + arg.r, 0, 255);
        var g = clamp(this.g + arg.g, 0, 255);
        var b = clamp(this.b + arg.b, 0, 255);
        return new RGB(r, g, b, a);
    };
    /**
     * minus two rgb object.
     *
     * **WARNING**
     *
     * this method will not calculate alpha.
     * @param arg
     */
    RGB.prototype.minus = function (arg, a) {
        var r = clamp(this.r - arg.r, 0, 255);
        var g = clamp(this.g - arg.g, 0, 255);
        var b = clamp(this.b - arg.b, 0, 255);
        return new RGB(r, g, b, a);
    };
    /**
     * return inverted rgb object.
     */
    RGB.prototype.invert = function () {
        this.r = clamp(255 - this.r, 0, 255);
        this.g = clamp(255 - this.g, 0, 255);
        this.b = clamp(255 - this.b, 0, 255);
        return this;
    };
    return RGB;
}());
exports["default"] = RGB;
