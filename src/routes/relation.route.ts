import express from 'express'
import { relationController } from '../controllers/relation.controller'

const router = express.Router()

router.get('/get/:id', relationController.getRelationById)
router.patch('/patch/', relationController.updateRelationById)
router.delete('/delete/:user_id/:crypto_id', relationController.deleteRelationById)

export default router
module.exports = router