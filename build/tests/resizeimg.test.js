"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const resizeimg_1 = __importDefault(require("../routes/api/resizeimg"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', resizeimg_1.default);
(0, supertest_1.default)(app)
    .get('/resize')
    .query({ name: 'bonjour.jpg', width: 150, height: 150 })
    .end((error, res) => {
    if (error)
        throw error;
    console.log(`test results ${res.status} ${res.headers['content-type']}`);
    if (res.status === 200) {
        console.log('resize test passed');
    }
    else {
        console.log('resize test failed');
    }
});
