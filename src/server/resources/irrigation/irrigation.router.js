import { Router } from 'express'
import controllers from './irrigation.controllers'

const router = Router()

router.route('/').get(controllers.getMany)
router.route('/').post(controllers.createOne)
router.route('/:id').delete(controllers.removeOne)

export default router
