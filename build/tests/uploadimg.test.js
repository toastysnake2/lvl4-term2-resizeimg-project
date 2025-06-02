"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const uploadimgroute_1 = __importDefault(require("../routes/api/uploadimgroute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', uploadimgroute_1.default);
const fakefile = Buffer.from('valid jpg image');
(0, supertest_1.default)(app)
    .post('/upload')
    .attach('file', fakefile, { filename: 'fake.jpg', contentType: 'image/jpeg' })
    .end((error, res) => {
    if (error)
        throw error;
    console.log(`test results ${res.status} ${res.body.message}`);
    if (res.status === 200) {
        console.log('upload test passed');
    }
    else {
        console.log('upload test failed');
    }
});
