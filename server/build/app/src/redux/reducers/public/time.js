"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_1 = require("../../wrap");
const LOAD = 'time/LOAD';
const LOAD_SUCCESS = 'time/LOAD_SUCCESS';
const LOAD_FAIL = 'time/LOAD_FAIL';
function reducer(state = {}, action = {}) {
    switch (action.type) {
        case LOAD:
            return Object.assign({}, state, { loading: true });
        case LOAD_SUCCESS:
            return Object.assign({}, state, { loading: false, loaded: true, data: action.result });
        case LOAD_FAIL:
            return Object.assign({}, state, { loading: false, loaded: false });
        default:
            return state;
    }
}
exports.default = reducer;
function load(params) {
    return wrap_1.default([LOAD, LOAD_SUCCESS, LOAD_FAIL], (inspect) => {
        return inspect.service.time.loadNow({ format: 'yyyy' });
    }, params);
}
exports.load = load;
