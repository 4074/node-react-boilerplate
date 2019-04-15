import request from './request'
const urls = {
    now: 'time/now'
}

export function loadNow(params: any): Promise<Response> {
    return request(urls.now, 'GET', params)
}