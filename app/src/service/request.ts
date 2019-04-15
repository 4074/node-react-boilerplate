import 'whatwg-fetch'

export default function request(url: String, method: String = 'POST', params: any = {}) {
    let u = '/api/' + url
    const option: any = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (option.method === 'POST') {
        option.body = JSON.stringify(params)
    } else {
        if (params) {
            const querys = []
            for (const key of Object.keys(params)) {
                querys.push(key + '=' + params[key])
            }
            if (querys.length) {
                u += '?' + querys.join('&')
            }
        }
    }

    return fetch(u, option)
}