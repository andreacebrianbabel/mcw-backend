import express from 'express'
import { relationController } from '../controllers/relation.controller'

const router = express.Router()

router.get('/get/:id', relationController.getRelationById)

export default router
module.exports = router