"use strict";
// import 'whatwg-fetch'
Object.defineProperty(exports, "__esModule", { value: true });
function request(url, method = 'POST', params = {}) {
    let u = '/api/' + url;
    const option = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if (option.method === 'POST') {
        option.body = JSON.stringify(params);
    }
    else {
        if (params) {
            const querys = [];
            for (const key of Object.keys(params)) {
                querys.push(key + '=' + params[key]);
            }
            if (querys.length) {
                u += '?' + querys.join('&');
            }
        }
    }
    return new Promise((resolve, reject) => {
        fetch(u, option).then(response => response.json()).then((result) => {
            if (result.status) {
                resolve(result.data);
            }
            else {
                reject(new Error(result.message));
            }
        }, reject);
    });
}
exports.default = request;
