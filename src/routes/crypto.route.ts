import express from 'express'
import { cryptoController } from '../controllers/crypto.controller'

const router = express.Router()

router.get('/all', cryptoController.getAllCryptos)
router.get('/get/:id', cryptoController.getCryptoById)
router.patch('/patch/', cryptoController.updateCryptoById)

export default router
module.exports = router