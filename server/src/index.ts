import * as fs from 'fs'
import * as path from 'path'
import * as Koa from 'koa'
import * as koaStatic from 'koa-static'
import KPT from 'koa-prop-types'

import config from './config'
import { ParamsMiddleware, LogMiddleware } from './middlewares'
import router from './routers'

const app = new Koa()

const appStaticPath = path.resolve(__dirname + '/../../app/build/')
app.use(koaStatic(appStaticPath))
app.use(async (ctx, next) => {
    if (ctx.path.indexOf('/api') !== 0 && ctx.path.indexOf('.') < 0 && ctx.path && ctx.path !== '/') {
        const html = fs.readFileSync(path.resolve(__dirname + '/../../app/build/index.html')).toString()
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