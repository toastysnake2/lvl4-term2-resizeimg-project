"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const imageresizingmiddleware_1 = __importDefault(require("../../middleware/imageresizingmiddleware"));
const router = (0, express_1.Router)();
router.get('/', imageresizingmiddleware_1.default, (req, res) => {
    const outputPath = res.locals.outputPath;
    res.sendFile(outputPath);
});
exports.default = router;
