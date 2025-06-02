"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editedimg = exports.imglocation = void 0;
const path_1 = __importDefault(require("path"));
exports.imglocation = path_1.default.resolve(__dirname, '../../images');
exports.editedimg = path_1.default.resolve(__dirname, '../../images/resized');
