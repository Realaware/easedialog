"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var Dialog_Type_1 = require("../Dialog.Type");
/**
 * This function will create you a theme for your dialog.
 *
 * **WARNING**
 *
 * you should use RGB method.
 *
 * @param theme
 * @param options
 * @returns theme
 */
function createDialogTheme(theme, options) {
    return __assign(__assign({}, (options && options.lighttheme ? Dialog_Type_1.DialogLightTheme : Dialog_Type_1.DialogDefaultTheme)), theme);
}
exports["default"] = createDialogTheme;
