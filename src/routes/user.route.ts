import express from 'express'
import { userController } from '../controllers/user.controller'

const router = express.Router()

router.post('/add', userController.addUser)
router.get('/get/:id', userController.getUserById)
router.get('/:username/:password', userController.getUserByLogin)


export default router
module.exports = router