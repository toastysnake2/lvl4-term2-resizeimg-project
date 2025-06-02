"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadimg_1 = __importDefault(require("../controllers/uploadimg"));
const uploadimgmiddleware = uploadimg_1.default.single('file');
exports.default = uploadimgmiddleware;
