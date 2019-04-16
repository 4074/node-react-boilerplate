"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const controllers_1 = require("../controllers");
const router = new Router();
router.get('/now', controllers_1.TimeController.now);
exports.default = router;
