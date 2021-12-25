"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Divider = exports.DialogBackdrop = exports.Right = exports.DialogHeader = exports.DialogContainer = exports.DialogBody = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var styled_components_1 = __importStar(require("styled-components"));
var useDialog_1 = __importDefault(require("./useDialog"));
var Right = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex: 1 0;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  flex: 1 0;\n  justify-content: flex-end;\n"])));
exports.Right = Right;
var DialogIn = (0, styled_components_1.keyframes)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n0% {\n  transform: translate(-50%, -50%) scale(0.3);\n}\n\n100% {\n  transform: translate(-50%, -50%) scale(1);\n}\n"], ["\n0% {\n  transform: translate(-50%, -50%) scale(0.3);\n}\n\n100% {\n  transform: translate(-50%, -50%) scale(1);\n}\n"])));
var DialogContainer = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  color: white;\n  animation: ", " 0.2s;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  transform: translate(-50%, -50%);\n  box-sizing: border-box;\n  min-width: 250px;\n  z-index: 1000;\n\n  border: 1px solid rgb(120, 120, 120);\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: 20px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  color: white;\n  animation: ", " 0.2s;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  transform: translate(-50%, -50%);\n  box-sizing: border-box;\n  min-width: 250px;\n  z-index: 1000;\n\n  border: 1px solid rgb(120, 120, 120);\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-size: 20px;\n  }\n"])), DialogIn);
exports.DialogContainer = DialogContainer;
var DialogHeader = styled_components_1["default"].header(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 10px;\n  background-color: ", ";\n  background-image: linear-gradient(\n    rgba(255, 255, 255, 0.1),\n    rgba(255, 255, 255, 0.1)\n  );\n  border-radius: 5px 5px 0px 0px;\n  border: none;\n  display: flex;\n  align-items: center;\n"], ["\n  padding: 10px;\n  background-color: ", ";\n  background-image: linear-gradient(\n    rgba(255, 255, 255, 0.1),\n    rgba(255, 255, 255, 0.1)\n  );\n  border-radius: 5px 5px 0px 0px;\n  border: none;\n  display: flex;\n  align-items: center;\n"])), function (p) { return p.bg; });
exports.DialogHeader = DialogHeader;
var DialogBody = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 10px;\n  background-color: ", ";\n  background-image: linear-gradient(\n    rgba(255, 255, 255, 0.16),\n    rgba(255, 255, 255, 0.16)\n  );\n  transition: all 0.3s;\n  border-radius: 0px 0px 5px 5px;\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  padding: 10px;\n  background-color: ", ";\n  background-image: linear-gradient(\n    rgba(255, 255, 255, 0.16),\n    rgba(255, 255, 255, 0.16)\n  );\n  transition: all 0.3s;\n  border-radius: 0px 0px 5px 5px;\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (p) { return p.bg; }, function (p) { return p.hv; });
exports.DialogBody = DialogBody;
var DialogBackdropBase = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n"], ["\n  background-color: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n"])));
function DialogBackdrop() {
    var setDialog = (0, useDialog_1["default"])().setDialog;
    return (0, jsx_runtime_1.jsx)(DialogBackdropBase, { onClick: function () { return setDialog({ visible: false }); } }, void 0);
}
exports.DialogBackdrop = DialogBackdrop;
var Divider = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 100%;\n  height: 2px;\n  background-color: rgb(120, 120, 120);\n"], ["\n  width: 100%;\n  height: 2px;\n  background-color: rgb(120, 120, 120);\n"])));
exports.Divider = Divider;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
