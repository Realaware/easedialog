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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importDefault(require("styled-components"));
var IconContainer = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  transition: all 0.1s;\n  border-radius: 50%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n\n  width: ", "px !important;\n  height: ", "px !important;\n\n  &:active {\n    background-color: rgba(230, 230, 230, 0.16);\n    outline: 1px solid rgb(150, 150, 150);\n  }\n"], ["\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  transition: all 0.1s;\n  border-radius: 50%;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n\n  width: ", "px !important;\n  height: ", "px !important;\n\n  &:active {\n    background-color: rgba(230, 230, 230, 0.16);\n    outline: 1px solid rgb(150, 150, 150);\n  }\n"])), function (p) { return p.size + 3; }, function (p) { return p.size + 3; });
function IconButton(_a) {
    var size = _a.size, className = _a.className, Icon = _a.Icon, name = _a.name, props = __rest(_a, ["size", "className", "Icon", "name"]);
    return ((0, jsx_runtime_1.jsx)(IconContainer, __assign({ name: name, className: className, size: size }, props, { children: (0, jsx_runtime_1.jsx)(Icon, { size: size }, void 0) }), void 0));
}
exports["default"] = IconButton;
var templateObject_1;
