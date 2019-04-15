import request from './request'
const urls = {
    now: 'time/now'
}

export function loadNow(params: any): Promise<any> {
    return request(urls.now, 'GET', params)
}