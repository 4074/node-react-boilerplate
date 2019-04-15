"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../utils/log");
function middleware() {
    return async function (ctx, next) {
        ctx.log = log_1.default.bind('controller', ctx.url);
        const logResult = log_1.default('controller', ctx.url, { params: ctx.request.params });
        await next();
        const afterTime = new Date().getTime();
        logResult.then((result) => {
            if (result) {
                result.data.duration = afterTime - result.date.getTime();
                result.save();
            }
        });
    };
}
exports.default = middleware;
