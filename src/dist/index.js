"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.RGB = exports.createDialogTheme = exports.useDialog = exports.DialogProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_dom_1 = __importDefault(require("react-dom"));
var app_1 = __importDefault(require("./test/app"));
var Dialog_Provider_1 = __importDefault(require("./Dialog.Provider"));
exports.DialogProvider = Dialog_Provider_1["default"];
var useDialog_1 = __importDefault(require("./useDialog"));
exports.useDialog = useDialog_1["default"];
var createDialogTheme_1 = __importDefault(require("./lib/createDialogTheme"));
exports.createDialogTheme = createDialogTheme_1["default"];
var rgb_1 = __importDefault(require("./lib/rgb"));
exports.RGB = rgb_1["default"];
if (!process.env.NODE_ENV ||
    (process.env.NODE_ENV === 'development' &&
        document.getElementById('easedialog-dev'))) {
    react_dom_1["default"].render((0, jsx_runtime_1.jsx)(Dialog_Provider_1["default"], { children: (0, jsx_runtime_1.jsx)(app_1["default"], {}, void 0) }, void 0), document.getElementById('root'));
}
