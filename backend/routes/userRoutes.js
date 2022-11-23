import express from 'express'
import { loginUser, registerUser } from '../controllers/userController.js'

const router = express.Router()

//register user
router.post('/', registerUser)

//login user
router.post('/login', loginUser)

export default router