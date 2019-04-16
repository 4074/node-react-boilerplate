"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const reducers_1 = require("./reducers");
const service = require("../service");
function create() {
    return redux_1.createStore(reducers_1.default, redux_1.applyMiddleware(redux_thunk_1.default.withExtraArgument({ service })));
}
exports.default = create;
