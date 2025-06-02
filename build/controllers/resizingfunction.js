"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizingimg = void 0;
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const paths_1 = require("../utilties/paths");
if (!fs_1.default.existsSync(paths_1.editedimg)) {
    fs_1.default.mkdirSync(paths_1.editedimg);
    console.log(`directory ${paths_1.editedimg} created`);
}
else {
    console.log(`directory ${paths_1.editedimg} exists`);
}
const resizingimg = async (name, width, height) => {
    const inputedimg = path_1.default.join(paths_1.imglocation, name);
    const { name: basename, ext } = path_1.default.parse(name);
    const outputimg = path_1.default.join(paths_1.editedimg, `${basename}_${width}x${height}${ext}`);
    if (!fs_1.default.existsSync(inputedimg)) {
        throw new Error('Image not found');
    }
    if (!fs_1.default.existsSync(paths_1.editedimg)) {
        fs_1.default.mkdirSync(paths_1.editedimg, { recursive: true });
        console.log(`Created resized image directory: ${paths_1.editedimg}`);
    }
    if (fs_1.default.existsSync(outputimg)) {
        return outputimg;
    }
    try {
        await (0, sharp_1.default)(inputedimg).resize(width, height).toFile(outputimg);
        return outputimg;
    }
    catch (error) {
        console.log(error);
        throw new Error('process failed');
    }
};
exports.resizingimg = resizingimg;
