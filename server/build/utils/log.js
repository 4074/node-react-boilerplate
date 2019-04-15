"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function log(location, action, data) {
    const now = new Date();
    const result = {
        location,
        action,
        data,
        date: now,
        save: () => {
            console.log(result.data.duration);
        }
    };
    console.log(result);
    return result;
}
exports.default = log;
