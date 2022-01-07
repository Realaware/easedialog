"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var useDialog_1 = __importDefault(require("../useDialog"));
var purchase_1 = __importDefault(require("./dialogs/purchase"));
var styled_components_1 = require("styled-components");
var DialogAnimation = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])));
function App() {
    var setDialog = (0, useDialog_1["default"])().setDialog;
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", __assign({ type: "button", onClick: function () {
                setDialog({
                    title: "Purchase",
                    visible: true,
                    body: (0, jsx_runtime_1.jsx)(purchase_1["default"], {}, void 0),
                    backdrop: true,
                    escExit: true,
                    noHoverEffect: true
                });
            } }, { children: "Click !" }), void 0) }, void 0));
}
exports["default"] = App;
var templateObject_1;
