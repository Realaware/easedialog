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
var useDialog_1 = __importDefault(require("../useDialog"));
var purchase_1 = __importDefault(require("./dialogs/purchase"));
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
