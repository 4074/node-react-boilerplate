"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = require("./request");
const urls = {
    now: 'time/now'
};
function loadNow(params) {
    return request_1.default(urls.now, 'GET', params);
}
exports.loadNow = loadNow;
