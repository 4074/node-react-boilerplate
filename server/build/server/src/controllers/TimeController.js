"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PropTypes = require("prop-types");
const utils_1 = require("../utils/utils");
async function now(ctx) {
    const date = new Date();
    const params = ctx.prop(ctx.request.params, {
        format: PropTypes.string.isRequired
    });
    if (params) {
        ctx.body = utils_1.default.jsonit({ date });
    }
    else {
        ctx.throw(400, 'params not enough');
    }
}
exports.now = now;
