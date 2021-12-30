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
var react_1 = require("react");
var Dialog_Context_1 = __importDefault(require("./Dialog.Context"));
var Dialog_Components_1 = require("./Dialog.Components");
var Icon_Button_1 = __importDefault(require("./lib/Icon.Button"));
var evil_1 = require("styled-icons/evil");
var useDialog_1 = __importDefault(require("./useDialog"));
function Dialog() {
    var _a = (0, react_1.useContext)(Dialog_Context_1["default"]), dialog = _a.dialog, theme = _a.theme;
    var setDialog = (0, useDialog_1["default"])().setDialog;
    var _b = (0, react_1.useState)(false), visible = _b[0], setVisible = _b[1];
    var ContainerRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        // implement dialog exit when escape pressed.
        var keyCallback = function (e) {
            if (e.key === 'Escape' && (dialog === null || dialog === void 0 ? void 0 : dialog.escExit)) {
                setDialog({ visible: false });
            }
        };
        window.addEventListener('keydown', keyCallback);
        return function () { return window.removeEventListener('keydown', keyCallback); };
    });
    (0, react_1.useEffect)(function () {
        var container = ContainerRef.current;
        if (dialog) {
            if (dialog.visible === false && container) {
                // exit animation.
                container.style.transform = 'translate(-50%, -50%) scale(0.2)';
                setTimeout(function () {
                    setVisible(false);
                }, 150);
            }
            else if (dialog.visible === true) {
                setVisible(true);
            }
        }
    }, [dialog === null || dialog === void 0 ? void 0 : dialog.visible]);
    return dialog && visible ? (dialog.rawMode ? ((0, jsx_runtime_1.jsx)(Dialog_Components_1.RawModeWrapper, { children: dialog.body }, void 0)) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [dialog.backdrop && (0, jsx_runtime_1.jsx)(Dialog_Components_1.DialogBackdrop, {}, void 0), (0, jsx_runtime_1.jsxs)(Dialog_Components_1.DialogContainer, __assign({ ref: ContainerRef }, { children: [!dialog.noHeader && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Dialog_Components_1.DialogHeader, __assign({ colorset: theme }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: dialog.title }, void 0), (0, jsx_runtime_1.jsx)(Dialog_Components_1.Right, { children: (0, jsx_runtime_1.jsx)(Icon_Button_1["default"], { onClick: function () { return setDialog({ visible: false }); }, size: 25, Icon: evil_1.Close }, void 0) }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(Dialog_Components_1.Divider, { colorset: theme }, void 0)] }, void 0)), (0, jsx_runtime_1.jsx)(Dialog_Components_1.DialogBody, __assign({ className: dialog.noHoverEffect ? 'noHoverEffect' : undefined, colorset: theme }, { children: dialog.body }), void 0)] }), void 0)] }, void 0))) : null;
}
exports["default"] = Dialog;
