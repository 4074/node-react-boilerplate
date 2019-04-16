"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrap(types, promise, params) {
    return function (dispatch, getState, inspect) {
        dispatch({ type: types[0] });
        promise(inspect).then((result) => dispatch({ type: types[1], params, result }), (error) => dispatch({ type: types[2], params, error }));
    };
}
exports.default = wrap;
