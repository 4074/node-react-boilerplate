"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const time_1 = require("./public/time");
exports.default = redux_1.combineReducers({
    time: time_1.default
});
