import * as Koa from 'koa'
import log, { ILog } from '../utils/log'

export default function middleware() {
    return async function(ctx: Koa.Context, next: Function) {
        ctx.log = log.bind('controller', ctx.url)
        const logResult = log('controller', ctx.url, {params: (ctx.request as any).params})

        await next()

        const afterTime = new Date().getTime()
        logResult.then((result: ILog) => {
            if (result) {
                result.data.duration = afterTime - result.date.getTime()
                result.save()
            }
        })
    }
}