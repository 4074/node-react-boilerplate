"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const time_1 = require("./time");
const router = new Router();
const api = new Router();
api.use('/time', time_1.default.routes());
router.use('/api', api.routes());
exports.default = router;
