"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const resizingfunction_1 = require("../controllers/resizingfunction");
const paths_1 = require("../utilties/paths");
const testw = 120;
const testh = 100;
const testimg = 'bonjour.jpg';
const imgpath = path_1.default.join(paths_1.imglocation, testimg);
describe('resizing image function', () => {
    afterEach(() => {
        const resizedName = `${path_1.default.parse(testimg).name}_${testw}x${testh}.jpg`;
        const resizedPath = path_1.default.join(paths_1.editedimg, resizedName);
        if (fs_1.default.existsSync(resizedPath)) {
            fs_1.default.unlinkSync(resizedPath);
        }
    });
    it('should resize all images', async () => {
        console.log('Testing image at path:', imgpath);
        const outputPath = await (0, resizingfunction_1.resizingimg)(testimg, testw, testh);
        expect(fs_1.default.existsSync(outputPath)).toBeTrue();
        const metadata = await (0, sharp_1.default)(outputPath).metadata();
        expect(metadata.width).toBe(testw);
        expect(metadata.height).toBe(testh);
    });
});
