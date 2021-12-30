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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable react/jsx-no-constructed-context-values */
var react_1 = require("react");
var Dialog_Body_1 = __importDefault(require("./Dialog.Body"));
var Dialog_Context_1 = __importDefault(require("./Dialog.Context"));
var createDialogTheme_1 = __importDefault(require("./lib/createDialogTheme"));
function DialogProdiver(props) {
    var _a = (0, react_1.useState)(), dialog = _a[0], setDialog = _a[1];
    var newSetDialog = function (v) {
        setDialog(typeof v === 'object' ? __assign(__assign({}, dialog), v) : v);
    };
    var context = {
        setDialog: newSetDialog,
        dialog: dialog,
        theme: (0, createDialogTheme_1["default"])(props.theme)
    };
    return ((0, jsx_runtime_1.jsxs)(Dialog_Context_1["default"].Provider, __assign({ value: context }, { children: [props.children, (0, jsx_runtime_1.jsx)(Dialog_Body_1["default"], {}, void 0)] }), void 0));
}
exports["default"] = DialogProdiver;
