// import * as Koa from 'koa'

export default function middleware() {
    return async function(ctx: any, next: Function) {
        const params = Object.assign({}, ctx.request.query, ctx.request.body)
        ctx.request.params = params

        await next()
    }
}