import * as fs from 'fs'
import * as path from 'path'
import * as Koa from 'koa'
import * as koaStatic from 'koa-static'

import config from './config'

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

app.listen(config.port, () => {
    console.log('Server running on port', config.port)
})