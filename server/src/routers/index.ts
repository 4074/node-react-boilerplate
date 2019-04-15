import * as Router from 'koa-router'

import time from './time'

const router = new Router()

const api = new Router()
api.use('/time', time.routes())

router.use('/api', api.routes())

export default router