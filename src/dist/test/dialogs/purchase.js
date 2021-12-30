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
var styled_components_1 = __importDefault(require("styled-components"));
var __1 = require("../..");
var GridView = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 500px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n"], ["\n  width: 500px;\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n"])));
var Column = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n"])));
var ProductItemContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 15px;\n  background-color: rgb(15, 15, 17);\n  display: flex;\n  border-radius: 5px;\n"], ["\n  padding: 15px;\n  background-color: rgb(15, 15, 17);\n  display: flex;\n  border-radius: 5px;\n"])));
var Right = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex: 1 0;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  flex: 1 0;\n  justify-content: flex-end;\n"])));
var ProductCardContainer = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 20px;\n  background-color: rgba(15, 15, 15, 0.5);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  width: 150px;\n  transition: all 0.1s;\n  min-height: 150px;\n\n  &:hover {\n    background-color: rgba(25, 25, 25, 0.5);\n  }\n"], ["\n  padding: 20px;\n  background-color: rgba(15, 15, 15, 0.5);\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  width: 150px;\n  transition: all 0.1s;\n  min-height: 150px;\n\n  &:hover {\n    background-color: rgba(25, 25, 25, 0.5);\n  }\n"])));
function ProductItem(_a) {
    var name = _a.name, price = _a.price;
    return ((0, jsx_runtime_1.jsxs)(ProductItemContainer, { children: [(0, jsx_runtime_1.jsx)("h4", __assign({ style: { margin: 0, fontSize: '13px' } }, { children: name }), void 0), (0, jsx_runtime_1.jsx)(Right, { children: (0, jsx_runtime_1.jsxs)("h4", __assign({ style: { fontWeight: 600, margin: 0, fontSize: '13px' } }, { children: ["Price: ", price] }), void 0) }, void 0)] }, void 0));
}
function ProductCard(_a) {
    var desc = _a.desc, title = _a.title;
    return ((0, jsx_runtime_1.jsxs)(ProductCardContainer, { children: [(0, jsx_runtime_1.jsx)("h3", __assign({ style: {
                    fontSize: '15px',
                    color: new __1.RGB(170, 170, 170).getRgbString(),
                    fontWeight: 600,
                    margin: 0
                } }, { children: title }), void 0), (0, jsx_runtime_1.jsx)("span", { children: desc }, void 0)] }, void 0));
}
function Purchase() {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Welcome, Guest !" }, void 0), (0, jsx_runtime_1.jsxs)(GridView, { children: [(0, jsx_runtime_1.jsx)(ProductCard, { title: "Pineapple", desc: "sweet and delicious fruit." }, void 0), (0, jsx_runtime_1.jsx)(ProductCard, { title: "Watermelon", desc: "yeah !" }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)("h1", { children: "Best Products" }, void 0), (0, jsx_runtime_1.jsxs)(Column, { children: [(0, jsx_runtime_1.jsx)(ProductItem, { name: "Television", price: 1000 }, void 0), (0, jsx_runtime_1.jsx)(ProductItem, { name: "Keyboard", price: 100 }, void 0)] }, void 0)] }, void 0));
}
exports["default"] = Purchase;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
