import * as fs from 'fs'
import * as path from 'path'
import * as Koa from 'koa'
import * as koaStatic from 'koa-static'
import KPT from 'koa-prop-types'

import config from './config'
import { ParamsMiddleware, LogMiddleware } from './middlewares'
import router from './routers'
import render from './render'

const app = new Koa()

const appStaticPath = path.resolve(__dirname + '/../../app/build/')
app.use(async (ctx, next) => {
    if (ctx.path !== '/') {
        await koaStatic(appStaticPath)(ctx, next)
    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    if (ctx.path.indexOf('/api') !== 0 && ctx.path.indexOf('.') < 0) {
        let html = fs.readFileSync(path.resolve(__dirname + '/../../app/build/index.html')).toString()
        const inner = render(ctx.path)
        html = html.replace('{{html}}', inner)
        ctx.body = html
    } else {
        await next()
    }
})

app.use(KPT())
app.use(ParamsMiddleware())
app.use(LogMiddleware())
app.use(router.routes())

app.listen(config.port, () => {
    console.log('Server running on port', config.port)
})