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
var useDialog_1 = __importDefault(require("./useDialog"));
function Dialog() {
    var _a = (0, react_1.useContext)(Dialog_Context_1["default"]), dialog = _a.dialog, theme = _a.theme;
    var setDialog = (0, useDialog_1["default"])().setDialog;
    var _b = (0, react_1.useState)(false), visible = _b[0], setVisible = _b[1];
    var ContainerRef = (0, react_1.useRef)(null);
    var dialogHistory = (0, react_1.useRef)();
    var _c = (0, react_1.useState)({}), style = _c[0], setStyle = _c[1];
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
        var animation = getDialogProperty('animation');
        if (!dialog)
            return;
        if (dialog.visible === false && container) {
            setStyle({ animation: 'none' });
            // exit animation.
            setTimeout(function () {
                setStyle({
                    animation: "".concat(animation ? animation.getName() : Dialog_Components_1.DialogIn.getName(), " 0.15s reverse")
                });
            }, 10);
            container.onanimationend = function () {
                setVisible(false);
                setStyle({});
            };
        }
        else if (dialog.visible) {
            // save lastest body and title to prevent size-reduction when exiting.
            dialogHistory.current = dialog;
            setVisible(true);
        }
    }, [dialog]);
    var getDialogProperty = function (key) {
        var history = dialogHistory.current;
        return dialog && dialog[key]
            ? dialog[key]
            : history && history[key]
                ? history[key]
                : null;
    };
    return dialog && visible ? (getDialogProperty('rawMode') ? ((0, jsx_runtime_1.jsx)(Dialog_Components_1.RawModeWrapper, { children: getDialogProperty('body') }, void 0)) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [getDialogProperty('backdrop') && (0, jsx_runtime_1.jsx)(Dialog_Components_1.DialogBackdrop, {}, void 0), (0, jsx_runtime_1.jsxs)(Dialog_Components_1.DialogContainer, __assign({ colorset: theme, ref: ContainerRef, animation: getDialogProperty('animation') || Dialog_Components_1.DialogIn, style: style }, { children: [!getDialogProperty('noHeader') && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Dialog_Components_1.DialogHeader, __assign({ colorset: theme }, { children: [(0, jsx_runtime_1.jsx)("h3", { children: getDialogProperty('title') }, void 0), (0, jsx_runtime_1.jsx)(Dialog_Components_1.Right, { children: (0, jsx_runtime_1.jsx)(Dialog_Components_1.ExitButton, __assign({ onClick: function () { return setDialog({ visible: false }); } }, { children: "\u00D7" }), void 0) }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)(Dialog_Components_1.Divider, { colorset: theme }, void 0)] }, void 0)), (0, jsx_runtime_1.jsx)(Dialog_Components_1.DialogBody, __assign({ className: getDialogProperty('noHoverEffect') ? 'noHoverEffect' : undefined, colorset: theme }, { children: getDialogProperty('body') }), void 0)] }), void 0)] }, void 0))) : null;
}
exports["default"] = Dialog;
