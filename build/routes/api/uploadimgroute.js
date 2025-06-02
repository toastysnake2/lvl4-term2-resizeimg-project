"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uploadimgmiddleware_1 = __importDefault(require("../../middleware/uploadimgmiddleware"));
const router = (0, express_1.Router)();
router.post('/upload', uploadimgmiddleware_1.default, (req, res) => {
    try {
        if (!req.file) {
            res.status(400).send('no file found');
            return;
        }
        res.status(200).json({ message: 'Uploaded successfully', file: req.file });
    }
    catch (error) {
        res.status(500).send(`error running process ${error}`);
    }
});
exports.default = router;
