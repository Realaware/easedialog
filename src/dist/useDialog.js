"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = require("react");
var Dialog_Context_1 = __importDefault(require("./Dialog.Context"));
function useDialog() {
    var setDialog = (0, react_1.useContext)(Dialog_Context_1["default"]).setDialog;
    return {
        setDialog: setDialog
    };
}
exports["default"] = useDialog;
