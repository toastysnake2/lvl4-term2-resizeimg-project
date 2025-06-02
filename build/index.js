"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const paths_1 = require("./utilties/paths");
const resizeimg_1 = __importDefault(require("./routes/api/resizeimg"));
const middlewareroute_1 = __importDefault(require("./routes/api/middlewareroute"));
const uploadimgroute_1 = __importDefault(require("./routes/api/uploadimgroute"));
const app = (0, express_1.default)();
const port = 5000;
if (!fs_1.default.existsSync(paths_1.editedimg)) {
    fs_1.default.mkdirSync(paths_1.editedimg, { recursive: true });
    console.log(`Created resized image directory: ${paths_1.editedimg}`);
}
else {
    console.log(`Resized image directory already exists: ${paths_1.editedimg}`);
}
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/get-uploaded-images', (req, res) => {
    try {
        const images = fs_1.default.readdirSync(paths_1.imglocation);
        res.json(images);
    }
    catch (err) {
        console.error('Error reading images directory:', err);
        res.status(500).json({ error: 'Failed to read images directory' });
    }
});
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../front-end/home.html'));
});
app.use(express_1.default.static(path_1.default.join(__dirname, '../front-end')));
app.use('/images', express_1.default.static(paths_1.imglocation));
app.use('/', resizeimg_1.default);
app.use('/', middlewareroute_1.default);
app.use('/', uploadimgroute_1.default);
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log('Serving images from:', paths_1.imglocation);
    console.log('Available images:', fs_1.default.readdirSync(paths_1.imglocation));
});
