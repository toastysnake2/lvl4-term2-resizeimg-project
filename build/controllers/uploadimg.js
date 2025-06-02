"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dir = path_1.default.resolve(__dirname, '../../images');
const imgstorage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        try {
            if (!fs_1.default.existsSync(dir)) {
                fs_1.default.mkdirSync(dir, { recursive: true });
            }
            callback(null, dir);
        }
        catch (error) {
            throw new Error('process failed');
        }
    },
    filename: (req, file, callback) => {
        const name = path_1.default.parse(file.originalname).name.replace(/\s+/g, '') + '.jpg';
        callback(null, name);
    },
});
const uploadimg = (0, multer_1.default)({
    storage: imgstorage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg') {
            cb(null, true);
        }
        else {
            cb(new Error('file type not allowed'));
        }
    },
});
exports.default = uploadimg;
