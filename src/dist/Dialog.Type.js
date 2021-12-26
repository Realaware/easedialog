"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.DialogLightTheme = exports.DialogDefaultTheme = void 0;
var rgb_1 = __importDefault(require("./lib/rgb"));
var DialogDefaultTheme = {
    DIALOG_HEADER_BACKGROUND: new rgb_1["default"](0, 0, 0),
    DIALOG_BODY_BACKGROUND: new rgb_1["default"](10, 10, 10),
    DIALOG_DIVIDER_BACKGROUND: new rgb_1["default"](120, 120, 120),
    DIALOG_HEADER_TEXT_COLOR: new rgb_1["default"](255, 255, 255)
};
exports.DialogDefaultTheme = DialogDefaultTheme;
var DialogLightTheme = {
    DIALOG_HEADER_BACKGROUND: new rgb_1["default"](150, 150, 150),
    DIALOG_BODY_BACKGROUND: new rgb_1["default"](160, 160, 160),
    DIALOG_DIVIDER_BACKGROUND: new rgb_1["default"](120, 120, 120),
    DIALOG_HEADER_TEXT_COLOR: new rgb_1["default"](255, 255, 255)
};
exports.DialogLightTheme = DialogLightTheme;
