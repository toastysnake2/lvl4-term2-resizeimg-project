"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resizingfunction_1 = require("../../controllers/resizingfunction");
const router = (0, express_1.Router)();
router.get('/resize', async (req, res) => {
    const { name, width, height } = req.query;
    try {
        if (!name || !width || !height) {
            res.status(400).send('no paramters found');
            return;
        }
        const outputimgpath = await (0, resizingfunction_1.resizingimg)(name, parseInt(width), parseInt(height));
        res.sendFile(outputimgpath);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('error running process');
    }
});
exports.default = router;
