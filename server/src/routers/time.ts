import * as Router from 'koa-router'
import { TimeController } from '../controllers'

const router = new Router()

router.get('/now', TimeController.now)

export default router