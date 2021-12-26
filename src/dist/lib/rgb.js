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
    RGB.prototype.plus = function (arg) {
        this.r = clamp(this.r + arg.r, 0, 255);
        this.g = clamp(this.g + arg.g, 0, 255);
        this.b = clamp(this.b + arg.b, 0, 255);
        return this;
    };
    /**
     * minus two rgb object.
     *
     * **WARNING**
     *
     * this method will not calculate alpha.
     * @param arg
     */
    RGB.prototype.minus = function (arg) {
        this.r = clamp(this.r - arg.r, 0, 255);
        this.g = clamp(this.g - arg.g, 0, 255);
        this.b = clamp(this.b - arg.b, 0, 255);
        return this;
    };
    return RGB;
}());
exports["default"] = RGB;
