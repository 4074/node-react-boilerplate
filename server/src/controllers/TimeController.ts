import * as Koa from 'koa'
import * as PropTypes from 'prop-types'
import utils from '../utils/utils'

export async function now(ctx: Koa.Context) {
    const date = new Date()
    const params = ctx.prop((ctx.request as any).params, {
        format: PropTypes.string.isRequired
    })

    if (params) {
        ctx.body = utils.jsonit({date})
    } else {
        ctx.throw(400, 'params not enough')
    }
}