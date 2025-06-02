"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resizingfunction_1 = require("../controllers/resizingfunction");
const resizingmiddleware = async (req, res, next) => {
    const { name, width, height } = req.query;
    if (!name || !width || !height) {
        res.status(400).json({ message: 'error missing paramters' });
        return;
    }
    const imgname = name.toString();
    const imgwidth = parseInt(width.toString(), 10);
    const imgheight = parseInt(height.toString(), 10);
    if (isNaN(imgwidth) || isNaN(imgheight)) {
        res.status(400).json({ message: 'width and height must be numbers' });
        return;
    }
    try {
        const resizedlocation = await (0, resizingfunction_1.resizingimg)(imgname, imgwidth, imgheight);
        res.locals.resizedlocation = resizedlocation;
        next();
    }
    catch (error) {
        console.log(error); //for somereason my vscode kept saying i didnt use the variable error, so i had to add this line
        res.status(500).json({ error: 'failed to run process' });
        return;
    }
};
exports.default = resizingmiddleware;
