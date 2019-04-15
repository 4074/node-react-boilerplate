"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const Koa = require("koa");
const koaStatic = require("koa-static");
const koa_prop_types_1 = require("koa-prop-types");
const config_1 = require("./config");
const middlewares_1 = require("./middlewares");
const routers_1 = require("./routers");
const app = new Koa();
const appStaticPath = path.resolve(__dirname + '/../../app/build/');
app.use(koaStatic(appStaticPath));
app.use(async (ctx, next) => {
    if (ctx.path.indexOf('/api') !== 0 && ctx.path.indexOf('.') < 0 && ctx.path && ctx.path !== '/') {
        const html = fs.readFileSync(path.resolve(__dirname + '/../../app/build/index.html')).toString();
        ctx.body = html;
    }
    else {
        await next();
    }
});
app.use(koa_prop_types_1.default());
app.use(middlewares_1.ParamsMiddleware());
app.use(middlewares_1.LogMiddleware());
app.use(routers_1.default.routes());
app.listen(config_1.default.port, () => {
    console.log('Server running on port', config_1.default.port);
});
