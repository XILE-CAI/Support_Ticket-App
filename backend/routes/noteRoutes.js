import express from 'express'
import { getNotes } from '../controllers/noteController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

//api/tickets/:ticketId/notes
router.route('/').get(protect, getNotes)

export default router 