import express from 'express'
import { loginUser, registerUser ,getMe} from '../controllers/userController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

//register user
router.post('/', registerUser)

//login user
router.post('/login', loginUser)

router.get('/me', protect ,getMe)

export default router