"use strict";
// import * as Koa from 'koa'
Object.defineProperty(exports, "__esModule", { value: true });
function middleware() {
    return async function (ctx, next) {
        const params = Object.assign({}, ctx.request.query, ctx.request.body);
        ctx.request.params = params;
        await next();
    };
}
exports.default = middleware;
